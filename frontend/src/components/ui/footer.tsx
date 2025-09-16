"use client";
import { Box, Typography } from "@mui/material";

export default function Footer() {
  return (
    <Box
      sx={{
        width: "100%",
        height: "60px",
        bgcolor: "#FFC107",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        position: "fixed",
        left: 0,
        bottom: 0,
        zIndex: 10,
      }}
    >
      <Typography variant="body2" color="black">
        フッター
      </Typography>
    </Box>
  );
}