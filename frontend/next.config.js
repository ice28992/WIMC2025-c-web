// next.config.js
/** @type {import('next').NextConfig} */
const withPWA = require('next-pwa');

const nextConfig = {
  reactStrictMode: true,
  // PWAの設定
  pwa: {
    dest: 'public', // Service Worker と関連ファイルを出力する場所
    register: true,  // Service Worker を登録するかどうか
    skipWaiting: true,  // 新しい Service Worker がインストールされた時、即座にページを更新するかどうか
  },
};

module.exports = withPWA(nextConfig);
