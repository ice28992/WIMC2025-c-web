"use client";

import { Box, Typography, Button, Collapse, List, ListItemButton, ListItemText } from "@mui/material";
import { useState } from "react";

export default function Header() {
  const [open, setOpen] = useState(false);       // リスト表示の開閉
  const [title, setTitle] = useState("ヘッダー"); // ヘッダータイトル

  const handleToggle = () => setOpen(!open);

  const handleSelect = (item: string) => {
    setTitle(item);   // タイトルを更新
    setOpen(false);   // リストを閉じる
  };

  const devices = ["機器1", "機器2", "機器3"];// 接続機器リスト

  return (
    <Box sx={{ width: "100%", position: "relative" }}>
      {/* ヘッダー本体 */}
      <Box
        sx={{
          width: "100%",
          height: 80,
          background: "linear-gradient(90deg, #FFC107 0%, #FFF176 100%)",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          position: "relative",
        }}
      >
        {/* 接続機器ボタン */}
        <Button
          variant="outlined"
          onClick={handleToggle}
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

        {/* タイトル */}
        <Typography variant="h6" color="black">
          {title}
        </Typography>
      </Box>

      {/* ドロップダウンリスト */}
      <Collapse in={open} timeout="auto" unmountOnExit>
        <Box
          sx={{
            bgcolor: "#FFF9C4",
            borderBottom: "1px solid #FFD54F",
            borderLeft: "1px solid #FFD54F",
            borderRight: "1px solid #FFD54F",
          }}
        >
          <List dense>
            {devices.map((device) => (
              <ListItemButton key={device} onClick={() => handleSelect(device)}>
                <ListItemText primary={device} />
              </ListItemButton>
            ))}
          </List>
        </Box>
      </Collapse>
    </Box>
  );
}

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
