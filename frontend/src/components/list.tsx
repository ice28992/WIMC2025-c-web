"use client";

import { BorderAll } from "@mui/icons-material";
import { Box, Typography } from "@mui/material";

type WordListProps = {
  words: { word: string; count: number }[];
};

export default function WordList({ words }: WordListProps) {
  return (
    <Box
      sx={{
        width: "100%",
        maxWidth: 340,
        mx: "auto",
        mb: 2,
        bgcolor: "#fff",
        border: "2px solid #28A745",
        borderRadius: 2,
        p: 0,
        boxShadow: 1,
        zIndex: 10,
        overflow: "hidden",
      }}
    >
      {/* 帯 */}
      <Box
        sx={{
          width: "100%",
          bgcolor: "#28A745",
          color: "#fff",
          py: 1,
          fontWeight: "bold",
          fontSize: 16,
          textAlign: "center", // ここで中央揃え
        }}
      >
        検出ワードログ
      </Box>

      {/* リスト部分 */}
      <Box sx={{ p: 2 }}>
        <Typography 
          sx={{ 
            mr: "25%", 
            pb: 1, 
            fontSize: "15px",
            textAlign: "right" 
          }}>
            検出ワード：検出回数
          </Typography>
        <hr />
        {words.map((item, index) => (
          <Typography
            key={index}
            variant="body2"
            sx={{ 
              mr: "40%", 
              fontSize: "15px",
              textAlign: "right" 
            }}
          >
            {item.word}：{item.count + "回"}
          </Typography>
        ))}
      </Box>
    </Box>
  );
}