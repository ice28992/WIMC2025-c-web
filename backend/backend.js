import net from "net";

// PORTとHOST設定
const PORT = 12345;
const HOST = "0.0.0.0";

// サーバ生成
const server = net.createServer((socket) => {
  console.log("Client connected:", socket.remoteAddress, socket.remotePort);

  // データ受信
  socket.on("data", (data) => {
    const message = data.toString().trim();

    // 例: "ID: 1, Text: money"
    const match = message.match(/ID:\s*(\d+),\s*Text:\s*(.+)/);
    if (match) {
      const id = parseInt(match[1], 10);
      const text = match[2];
      console.log(`Received Data: id=${id}, text=${text}`);
    }
  });
});

// サーバ開始
server.listen(PORT, HOST, () => { console.log("Server listening"); });