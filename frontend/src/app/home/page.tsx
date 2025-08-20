import { Stack, Typography } from "@mui/material";
import { Zen_Maru_Gothic } from "next/font/google";
// import { RecentRecordCard } from "./recent_record_card";

const zen = Zen_Maru_Gothic({
  weight: ["400"],
  subsets: ["latin"],
  display: "swap",
});

// ホーム
export default function HomePage() {
  return (
    <Stack className={zen.className}>
      {/* <RecentRecordCard /> */}
      <Typography>はろー</Typography>
    </Stack>
  );
}