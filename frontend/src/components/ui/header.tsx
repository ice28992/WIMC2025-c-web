"use client";

import { Box, Typography, Button } from "@mui/material";

export default function Header() {
  return (
    <Box
      sx={{
        width: "100%",
        height: "80px",
        background: "linear-gradient(90deg, #FFC107 0%, #FFF176 100%)",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        position: "relative",
      }}
    >
      <Button
        variant="outlined"
        sx={{
          position: "absolute",
          left: 16,
          top: "50%",
          transform: "translateY(-50%)",
          bgcolor: "#28A745",
          color: "white",
          borderColor: "white",
          borderWidth: 2,
          borderRadius: 2,
          fontWeight: "bold",
          boxShadow: "none",
          "&:hover": {
            bgcolor: "#218838",
            borderColor: "white",
          },
        }}
      >
        接続機器
      </Button>
      <Typography variant="h6" color="black">
        ヘッダー
      </Typography>
    </Box>
  );
}