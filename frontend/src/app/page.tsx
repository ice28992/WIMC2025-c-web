"use client";

import { Stack, Typography, Box } from "@mui/material";
import { useState, useEffect } from "react";
import { Zen_Maru_Gothic } from "next/font/google";

import Header from "@/components/ui/header";
import Footer from "@/components/ui/footer";

import GetWebSocketData from "@/components/webSocket";
import DangerMeter from "@/components/ui/dangerMeter";
import LilyBackground from "@/components/ui/lilyBackground";
import WordList from "@/components/ui/list";

const zen = Zen_Maru_Gothic({
  weight: ["400"],
  subsets: ["latin"],
  display: "swap",
});

export default function HomePage() {
  const [words, setWords] = useState<{ word: string; count: number }[]>([
    { word: "こんにちは", count: 3 },
    { word: "ありがとう", count: 1 },
  ]);
  
  return (
    <Stack
      className={zen.className}
      sx={{
        bgcolor: "#F2F2F2",
        minHeight: "100vh",
        position: "relative", // LilyBackgroundの絶対配置用
        overflow: "hidden",
      }}
    >
      <LilyBackground />
      <Header />
      <GetWebSocketData />

      {/* メーターを囲む枠 */}
      <Box
        sx={{
          width: "100%",
          maxWidth: 340,
          mx: "auto",
          mt: 2,
          mb: 2,
          marginBottom: 5,
          bgcolor: "background.paper",
          border: "2px solid #28A745",
          borderRadius: 3,
          boxShadow: 2,
          position: "relative",
          zIndex: 1,
        }}
      >
        {/* 帯 */}
        <Box
          sx={{
            width: "100%",
            bgcolor: "#28A745",
            color: "#fff",
            py: 1,
            textAlign: "center",
            fontWeight: "bold",
            fontSize: 18,
            borderTopLeftRadius: 8,
            borderTopRightRadius: 8,
            borderBottomLeftRadius: 0,
            borderBottomRightRadius: 0,
            boxShadow: 1,
          }}
        >
          ワード検出状況
        </Box>
        {/* メーター */}
        <DangerMeter level={3} />
      </Box>

      {/* 単語リスト */}
      <WordList words={[...words].sort((a, b) => b.count - a.count)} />

      <Footer />
    </Stack>
  );
}
