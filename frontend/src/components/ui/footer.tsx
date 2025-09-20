"use client";
import { Box, Typography } from "@mui/material";

export default function Footer() {
  return (
    <Box
      component="footer"
      sx={{
        position: "fixed",    // 画面下に固定
        bottom: 0,
        left: 0,
        width: "100%",       // 横幅いっぱいに修正
        height: 60,           // 高さ固定
        bgcolor: "#FFC107",   // 背景色
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        zIndex: 10,
      }}
    >
      <Typography variant="body2" color="black">
        フッター
      </Typography>
    </Box>
  );
}
