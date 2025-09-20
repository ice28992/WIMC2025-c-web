import { useEffect, useState } from 'react';

const GetWebSocketData = () => {
  const [message, setMessage] = useState<string>("");

  useEffect(() => {
    // WebSocket接続処理
    const ws = new WebSocket("ws://192.168.3.39:1891");
    ws.onopen = () => { console.log("WebSocket接続完了");};

    // 受信したデータをパース
    ws.onmessage = (event) => {
      const data = JSON.parse(event.data);
      console.log("受信データ:", data);

      // 受信したテキスト表示
      if (data && data.text) {
        setMessage(data.text);
      }
    };

    // エラーログ
    ws.onerror = (error) => {
      console.error("WebSocketエラー:", error);
    };

    // WebSocket切断処理
    ws.onclose = () => {
      console.log("WebSocketが切断されました");
    };
    return () => { ws.close(); };
  }, []);

  return (
    // messageが空の時は非表示
    message ? (
      <div
        style={{
          maxWidth: 340,
          margin: "16px auto",
          padding: "12px",
          backgroundColor: "#28A745",
          color: "white",
          fontWeight: "bold",
          borderRadius: "8px",
          boxShadow: "0 2px 8px rgba(0,0,0,0.15)",
          position: "relative",
        }}
      >
        <span
          style={{
            content: '""',
            position: "absolute",
            bottom: "-10px", // 下向きの三角
            left: "20px",
            width: 0,
            height: 0,
            borderLeft: "10px solid transparent",
            borderRight: "10px solid transparent",
            borderTop: "10px solid #28A745",
          }}
        />
        {"詐欺ワード『" + message + "』を検知しました！" || "受信待ち..."}
      </div>
    ) : null
  );
};

export default GetWebSocketData;