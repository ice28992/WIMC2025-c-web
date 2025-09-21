import type { Metadata } from "next";
import { Box, Container, CssBaseline, Paper } from "@mui/material";
import { Inter } from "next/font/google";
// import { AuthProvider } from "@/components/contexts/auth";
// import { Header } from "@/component/layout/header";
// import { Footer } from "@/component/layout/footer";
import Head from "next/head";  // next/head をインポート

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "詐欺バスター",
  description: "詐欺対策アプリ",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang='ja'>
      <Head>
        {/* PWAの設定 */}
        <link rel='manifest' href='/manifest.json' />
        <link rel='apple-touch-icon' href='/icon-192x192.png' /> {/* アイコンファイル名を一致させる */}
        <meta name='theme-color' content='#b8e986' />
      </Head>

      <body className={inter.className}>
        <CssBaseline />
        {/* <AuthProvider> */}
          <Box sx={{ bgcolor: "#F4F4F4", minHeight: "100vh" }}>
            <Container maxWidth='xs' sx={{ padding: 0 }}>
              <Paper sx={{ px: 0, bgcolor: "white", minHeight: "100vh" }}>{children}</Paper>
            </Container>
          </Box>
        {/* </AuthProvider> */}
      </body>
    </html>
  );
}
