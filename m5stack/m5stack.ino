#include <WiFi.h>
#include <M5Core2.h>
#include <unit_asr.hpp>

ASRUnit asr;

//---------------------------------------
// WiFi設定
//---------------------------------------
const char* ssid = "***";
const char* password = "***";

// chirimenのIPとポート
const char* host = "***";
const uint16_t port = 12345;

void sendServer(int id, const String& text) {
  WiFiClient client;

  if (client.connect(host, port)) {
    String message = "ID: " + String(id) + ", Text: " + text;
    client.println(message);  // サーバへ送信
    Serial.println("Sent to server: " + message);
    client.stop();  // 接続を終了
  } else {
    Serial.println("Failed to connect to server");
  }
}

//---------------------------------------
// setup
//---------------------------------------
void setup() {
  // マイコン初期化
  M5.begin();
  Serial.begin(115200);
  Serial1.begin(115200, SERIAL_8N1, 33, 32);
  asr.begin(&Serial1, 115200, 33, 32);

  // WiFi接続
  WiFi.begin(ssid, password);
  Serial.print("Connecting to WiFi");
  while (WiFi.status() != WL_CONNECTED) {
    delay(500);
    Serial.print(".");
  }
  Serial.println("\nWiFi connected");

  // コマンド認識とID付与
  asr.addCommandWord(2, "お金");
  asr.addCommandWord(3, "口座");
  asr.addCommandWord(4, "振り込み");
  asr.addCommandWord(5, "還付金");
  asr.addCommandWord(6, "現金");
  asr.addCommandWord(7, "個人情報");
  asr.addCommandWord(8, "クレジットカード");
}

//---------------------------------------
// loop
//---------------------------------------
void loop() {
  M5.update();
  if (asr.update()) {
    int id = asr.getCurrentCommandNum();
    String text = asr.getCurrentCommandWord();

    Serial.print("ID: ");
    Serial.print(id);
    Serial.print(", Text: ");
    Serial.println(text);

    // chirimenに送信
    sendServer(id, text);
  }
}