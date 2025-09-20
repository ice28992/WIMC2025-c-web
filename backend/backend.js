import net from "net";
import WebSocket, { WebSocketServer } from "ws";

// TCPサーバー設定
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
