"use client";

import { Box } from "@mui/material";
import { useEffect, useState } from "react";

// Flower 型を定義
type Flower = {
  x: number;
  y: number;
  size: number;
  rotate: number;
  opacity: number;
};

// 百合シルエットコンポーネント
function Lily({ x, y, size = 80, rotate = 0, opacity = 0.5 }: Flower) {
  const cx = size / 2;
  const cy = size / 2;
  const silhouetteColor = "#bdbdbd";

  // 花びらのパスを作成
  const petalPath = (angle: number) => {
    const rad = (angle * Math.PI) / 180;
    const r1 = size * 0.13;
    const r2 = size * 0.45;
    const tipX = cx + r2 * Math.cos(rad);
    const tipY = cy + r2 * Math.sin(rad);
    const baseX1 = cx + r1 * Math.cos(rad - Math.PI / 12);
    const baseY1 = cy + r1 * Math.sin(rad - Math.PI / 12);
    const baseX2 = cx + r1 * Math.cos(rad + Math.PI / 12);
    const baseY2 = cy + r1 * Math.sin(rad + Math.PI / 12);
    return `
      M ${baseX1} ${baseY1}
      Q ${cx} ${cy} ${baseX2} ${baseY2}
      Q ${tipX} ${tipY} ${baseX1} ${baseY1}
      Z
    `;
  };

  return (
    <svg
      width={size}
      height={size}
      style={{
        position: "absolute",
        left: x,
        top: y,
        transform: `rotate(${rotate}deg)`,
        pointerEvents: "none",
        zIndex: 0,
      }}
    >
      <g>
        {Array.from({ length: 6 }).map((_, i) => {
          const angle = (360 / 6) * i - 90;
          return (
            <path
              key={i}
              d={petalPath(angle)}
              fill={silhouetteColor}
              stroke={silhouetteColor}
              strokeWidth={0.5}
              opacity={opacity}
            />
          );
        })}
      </g>
    </svg>
  );
}

// 花同士がかぶらないようにランダム配置する関数
function generateNonOverlappingFlowers(
  count: number,
  sizeMin: number,
  sizeMax: number,
  width: number,
  height: number
): Flower[] {
  const flowers: Flower[] = [];
  const triesLimit = 1000;

  for (let i = 0; i < count; i++) {
    let tries = 0;
    let placed = false;
    let size = 0, x = 0, y = 0; // 初期化

    // 花の位置とサイズが重ならないように調整
    while (!placed && tries < triesLimit) {
      size = sizeMin + Math.random() * (sizeMax - sizeMin);
      x = Math.random() * (width - size);
      y = Math.random() * (height - size);
      const overlap = flowers.some((f) => {
        const dx = f.x + f.size / 2 - (x + size / 2);
        const dy = f.y + f.size / 2 - (y + size / 2);
        const dist = Math.sqrt(dx * dx + dy * dy);
        return dist < (f.size + size) / 2 + 8; // 8px余白
      });
      if (!overlap) placed = true;
      tries++;
    }

    // 配置された花を追加
    if (placed) {
      flowers.push({
        x,
        y,
        size,
        rotate: Math.random() * 360,
        opacity: 0.3 + Math.random() * 0.2,
      });
    }
  }
  return flowers;
}

// メインコンポーネント
export default function LilyBackground() {
  const [flowers, setFlowers] = useState<Flower[]>([]);

  // コンポーネントがマウントされたときに花をランダムに生成
  useEffect(() => {
    if (typeof window !== "undefined") {
      const width = window.innerWidth;
      const height = window.innerHeight;
      const flowerCount = 18;
      const sizeMin = 64;
      const sizeMax = 120;
      const flowerData = generateNonOverlappingFlowers(
        flowerCount,
        sizeMin,
        sizeMax,
        width,
        height
      );
      setFlowers(flowerData);
    }
  }, []);

  return (
    <Box
      sx={{
        position: "absolute",
        inset: 0,
        width: "100vw",
        height: "100vh",
        overflow: "hidden",
        zIndex: 0,
        pointerEvents: "none",
        background: "linear-gradient(135deg, #fff 60%, #f8f9fa 100%)",
      }}
    >
      {flowers.map((f, i) => (
        <Lily key={i} {...f} />
      ))}
    </Box>
  );
}
