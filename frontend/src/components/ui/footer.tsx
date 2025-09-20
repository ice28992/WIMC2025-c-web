"use client";
import { Box, Typography } from "@mui/material";

export default function Footer() {
  return (
    <Box
      component="footer"
      sx={{
        // position: "fixed",    // 画面下に固定
        bottom: 0,
        width: "100%",       // 横幅いっぱいに修正
        height: 60,           // 高さ固定
        background: "linear-gradient(90deg, #FFC107 0%, #FFF176 100%)",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        zIndex: 10,
      }}
    >
    </Box>
  );
}
