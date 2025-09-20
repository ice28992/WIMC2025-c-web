import net from "net";
import WebSocket, { WebSocketServer } from "ws";
import { requestGPIOAccess } from "node-web-gpio";
const sleep = (msec) => new Promise((resolve) => setTimeout(resolve, msec)); 

//---------------------------------------------------------
// LED点滅関係
//---------------------------------------------------------
async function ledBlink() {
  const gpioAccess = await requestGPIOAccess(); // GPIO を操作する
  // ポートを取得する
  const port1 = gpioAccess.ports.get(26); // 1つ目のLED用のポート (26番)
  const port2 = gpioAccess.ports.get(19); // 2つ目のLED用のポート (19番)
  // 両方のポートを出力モードに設定する
  await Promise.all([
    port1.export("out"),
    port2.export("out")
  ]);

  for (let i=0; i<=10; i++) {
    await Promise.all([
      port1.write(1), // LED1を点灯
      port2.write(1)  // LED2を点灯
    ]);
    await sleep(100); // 200 ms (0.2秒) 待機
    await Promise.all([
      port1.write(0), // LED1を消灯
      port2.write(0)  // LED2を消灯
    ]);
    await sleep(100); // 200 ms (0.2秒) 待機
  }
}

//---------------------------------------------------------
// サーバー設定
//---------------------------------------------------------
const TCP_PORT = 12345;
const TCP_HOST = "0.0.0.0";

// WebSocketサーバー設定
const WS_PORT = 1891;

// WebSocketサーバーインスタンスを作成
const wss = new WebSocketServer({ port: WS_PORT });

// TCPサーバーインスタンスを作成
const server = net.createServer((socket) => {
  console.log("Client connected:", socket.remoteAddress, socket.remotePort);

  // データ受信
  socket.on("data", (data) => {
    ledBlink();
    const message = data.toString().trim();

    // 例: "ID: 1, Text: おかね"
    const match = message.match(/ID:\s*(\d+),\s*Text:\s*(.+)/);
    if (match) {
      const id = parseInt(match[1], 10);
      const text = match[2];
      console.log(`Received Data: id=${id}, text=${text}`);

      // WebSocket接続がある場合、すべてのクライアントにメッセージを送信
      wss.clients.forEach((client) => {
        if (client.readyState === WebSocket.OPEN) {
          // メッセージ送信
          client.send(JSON.stringify({ id, text }));
        }
      });
    } else {
      // 未受信の場合
      console.log("Invalid:", message);
    }
  });

  socket.on("close", () => {
    console.log("Client disconnected:", socket.remoteAddress, socket.remotePort);
  });
});

// WebSocketサーバー接続時の処理
wss.on('connection', (ws) => {
  console.log('WebSocket client connected');

  ws.on('message', (message) => { console.log('Message from client:', message); });
  ws.on('close', () => { console.log('WebSocket client disconnected'); });
});

wss.on('listening', () => { console.log(`WebSocket server is listening on ws://localhost:${WS_PORT}`); });

// TCPサーバーを起動
server.listen(TCP_PORT, TCP_HOST, () => {
  console.log(`TCP server listening on tcp://${TCP_HOST}:${TCP_PORT}`);
});
