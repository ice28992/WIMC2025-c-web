"use client";

import { Box, Typography } from "@mui/material";

type DangerMeterProps = {
  level: number; // 1〜10
};

export default function DangerMeter({ level }: DangerMeterProps) {
  const radius = 60;
  const strokeWidth = 16;
  const center = radius + strokeWidth / 2;

  // 角度設定（半円：-120°〜120°）
  const startAngle = -100;
  const endAngle = 100;

  // level(1〜10) を角度に変換
  const angle = startAngle + ((endAngle - startAngle) * (level / 10));

  // 座標変換関数
  const polarToCartesian = (angle: number, r: number) => {
    const rad = (angle - 90) * Math.PI / 180;
    return {
      x: center + r * Math.cos(rad),
      y: center + r * Math.sin(rad),
    };
  };

  // 弧を描画する関数
  const describeArc = (start: number, end: number, r: number) => {
    const startPos = polarToCartesian(start, r);
    const endPos = polarToCartesian(end, r);
    const largeArcFlag = end - start <= 180 ? 0 : 1;
    return `
      M ${startPos.x} ${startPos.y}
      A ${r} ${r} 0 ${largeArcFlag} 1 ${endPos.x} ${endPos.y}
    `;
  };

  // 背景弧（全体）
  const backgroundArc = describeArc(startAngle, endAngle, radius);
  // 値に応じた前景弧
  const valueArc = describeArc(startAngle, angle, radius);

  // 針の先端座標
  const needleEnd = polarToCartesian(angle, radius - 8);

  // レベルに応じた色（緑→赤）
  const colors = [
    "#28a745", "#43a047", "#7cb342", "#cddc39", "#ffeb3b",
    "#ffc107", "#ff9800", "#ff5722", "#e53935", "#b71c1c"
  ];
  const levelColor = colors[Math.min(level - 1, 9)] || "#28a745";

  return (
    <Box sx={{ textAlign: "center", py: 2 }}>
      <Typography variant="subtitle2" gutterBottom>
        検出ワード数（{level}/10）
      </Typography>
      <Box sx={{ display: "flex", justifyContent: "center" }}>
        <svg width={center * 2} height={center + 20}>
          {/* 背景ゲージ */}
          <path
            d={backgroundArc}
            stroke="#e0e0e0"
            strokeWidth={strokeWidth}
            fill="none"
          />
          {/* 値ゲージ（色＆長さがレベルに応じて変わる） */}
          <path
            d={valueArc}
            stroke={levelColor}
            strokeWidth={strokeWidth}
            fill="none"
            strokeLinecap="round"
          />
          {/* 針（角度がレベルに応じて変わる） */}
          <line
            x1={center}
            y1={center}
            x2={needleEnd.x}
            y2={needleEnd.y}
            stroke="#222"
            strokeWidth={4}
            strokeLinecap="round"
          />
          {/* 中心円 */}
          <circle cx={center} cy={center} r={6} fill="#222" />
        </svg>
      </Box>
    </Box>
  );
}