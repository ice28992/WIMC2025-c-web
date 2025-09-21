"use client";
import { Box, Typography } from "@mui/material";

export default function Footer() {
  return (
    <Box sx={{ width: "100%", position: "relative" }}>
    <Box
      component="footer"
      sx={{
        position: "fixed",    // 画面下に固定
        bottom: 0,
        width: "100%",       // 横幅いっぱいに修正
        height: 50,           // 高さ固定
        background: "linear-gradient(90deg, #FFC107 0%, #FFF176 100%)",
        zIndex: 10,
      }}
    >
    </Box>
    </Box>
  );
}
