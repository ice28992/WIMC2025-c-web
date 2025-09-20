// export const runtime = "nodejs";
const WebSocket = require('ws');

console.log(process.release);
// 接続先のアドレスとポート
const host = '192.168.91.51';
const port = 1891;
// const url = `ws://${host}:${port}`;
const url = "ws://192.168.91.51:1891"

// WebSocketオブジェクトを作成
const ws = new WebSocket(url);

// 接続が成功したときに実行されるイベントハンドラ
ws.onopen = () => {
    console.log('WebSocket接続が成功しました');
    console.log(`接続先: ${url}`);
};

// メッセージを受信したときに実行されるイベントハンドラ
ws.onmessage = (event) => {
    console.log(`サーバーからメッセージを受信: ${event.data}`);
};

// 接続が切断されたときに実行されるイベントハンドラ
ws.onclose = () => {
    console.log('WebSocket接続が切断されました');
};

// エラーが発生したときに実行されるイベントハンドラ
ws.onerror = (error) => {
    console.error('WebSocketエラー:', error);
};