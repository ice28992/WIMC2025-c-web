# WIMC2025-c-web
Web × IoT メイカーズチャレンジPLUS 2025 信州CチームのWeb実装

## frontend：フロントエンド
### 機能
- 特定ワードを検出したら通知する
- 特定ワードの検出時間と内容一覧を見られる

## backend：バックエンド
### 機能
- マイコンからのデータ受信
- データをWebSocketでアプリ(frontend)に渡す

## m5stack：マイコン(M5Stack & UnitASR)
### 機能
- 特定のワードを検知
- 検知したワードにidを付与
- TCPでサーバー(backend)に送信

## システム図
<img width="726" height="288" alt="システム図" src="https://github.com/user-attachments/assets/1245a01c-f8ee-4644-9ef2-fa5f5d4975af" />
