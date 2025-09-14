# WIMC2025-c-web
Web × IoT メイカーズチャレンジPLUS 2025 信州CチームのWeb実装

## frontend：フロントエンド
メインフレームワーク：Next.js

CSSフレームワーク：Material UI

### 機能
- 特定ワードを検出したら通知する
- 特定ワードの検出時間と内容一覧を見られる

## backend：バックエンド
### 機能
- マイコンからのデータ受信
- 受信日時をデータに追加
- 受信データをcsvファイルに保存

## m5stack：マイコン(M5Stack & UnitASR)
### 機能
- 特定のワードを検知
- 検知したワードにidを付与
- TCPでサーバー(backend)に送信
