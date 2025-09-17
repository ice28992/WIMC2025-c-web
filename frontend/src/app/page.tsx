import { Stack, Typography, Box } from "@mui/material";
import { Zen_Maru_Gothic } from "next/font/google";
import Header from "@/components/ui/header";
import DangerMeter from "@/components/ui/dangerMeter";
import LilyBackground from "@/components/ui/lilyBackground";
import Footer from "@/components/ui/footer";


const zen = Zen_Maru_Gothic({
  weight: ["400"],
  subsets: ["latin"],
  display: "swap",
});

// ホーム
export default function HomePage() {
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
      {/* <RecentRecordCard /> */}
      <Header />
      <Typography>はろー</Typography>
      {/* メーターを囲む枠 */}
      <Box
        sx={{
          width: "100%",
          maxWidth: 340,
          mx: "auto",
          mt: 2,
          mb: 2,
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
        <DangerMeter level={7} />
      </Box>
      {/* 確認ボタン */}
      <Box sx={{ width: "100%", maxWidth: 340, mx: "auto", mb: 2, textAlign: "center", zIndex: 1, position: "relative" }}>
        <button
          style={{
            background: "#28A745",
            color: "#fff",
            fontWeight: "bold",
            fontSize: 16,
            border: "none",
            borderRadius: 8,
            padding: "10px 32px",
            cursor: "pointer",
            boxShadow: "0 2px 8px rgba(40,167,69,0.15)",
          }}
        >
          確認
        </button>
      </Box>
      <Footer />
    </Stack>
  );
}