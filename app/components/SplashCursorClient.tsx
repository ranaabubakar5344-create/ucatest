"use client";

import dynamic from "next/dynamic";
import { useEffect, useState } from "react";

const SplashCursor = dynamic(
  () => import("./SplashCursor"),
  { ssr: false, loading: () => null }
);

export default function SplashCursorClient() {
  const [enabled, setEnabled] = useState(false);

  useEffect(() => {
    const isTouch = "ontouchstart" in window || (navigator.maxTouchPoints ?? 0) > 0;
    const reduceMotion = window.matchMedia?.("(prefers-reduced-motion: reduce)")?.matches ?? false;
    const smallScreen = window.innerWidth < 1024;

    const cores = navigator.hardwareConcurrency ?? 8;
    const mem = (navigator as any).deviceMemory ?? 8;
    const lowDevice = cores <= 4 || mem <= 4;

    if (!isTouch && !reduceMotion && !smallScreen && !lowDevice) setEnabled(true);
  }, []);

  if (!enabled) return null;

  return (
    <div className="fixed inset-0 z-0 pointer-events-none">
      <SplashCursor
        SIM_RESOLUTION={64}
        DYE_RESOLUTION={512}
        CAPTURE_RESOLUTION={256}
        SPLAT_FORCE={3500}
        SHADING={false}
        COLOR_UPDATE_SPEED={6}
        TRANSPARENT
      />
    </div>
  );
}
