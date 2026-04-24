"use client";

import { type ReactNode } from "react";
import type { BusinessDesignConfig } from "@/lib/types";
import { cn } from "@/lib/utils";

interface BusinessStyleProviderProps {
  design: BusinessDesignConfig;
  children: ReactNode;
  className?: string;
}

/**
 * Wraps the demo page with per-business CSS variables and Tailwind background classes.
 * All child components can use var(--biz-primary), var(--biz-primary-muted), etc.
 */
export function BusinessStyleProvider({ design, children, className }: BusinessStyleProviderProps) {
  const radius =
    design.cardRadius === "rounded-none" ? "0px"
      : design.cardRadius === "rounded-sm" ? "4px"
      : design.cardRadius === "rounded-[4px]" ? "4px"
      : design.cardRadius === "rounded-[16px]" ? "16px"
      : design.cardRadius === "rounded-[20px]" ? "20px"
      : design.cardRadius === "rounded-[24px]" ? "24px"
      : design.cardRadius === "rounded-[28px]" ? "28px"
      : "12px";

  return (
    <div
      className={cn("min-h-screen", design.pageBg, className)}
      style={{
        "--biz-primary": design.primary,
        "--biz-primary-muted": design.primaryMuted,
        "--panel-bg": design.cardBg.includes("bg-white") ? "rgba(255,255,255,0.86)" : "rgba(15,23,42,0.88)",
        "--panel-border": design.cardBorder.includes("slate-200")
          ? "rgba(226,232,240,0.92)"
          : "rgba(255,255,255,0.18)",
        "--panel-shadow": design.primaryMuted
          ? `0 24px 70px -34px ${design.primary}33`
          : "0 24px 60px -28px rgba(15, 23, 42, 0.35)",
        "--panel-muted": design.cardBg.includes("bg-white")
          ? "rgba(248,250,252,0.92)"
          : "rgba(15,23,42,0.72)",
        "--panel-foreground": design.cardBg.includes("bg-white")
          ? "#0f172a"
          : "#f8fafc",
        "--panel-muted-foreground": design.cardBg.includes("bg-white")
          ? "#475569"
          : "#cbd5e1",
        "--biz-card-radius": radius,
        "--panel-radius": radius,
        "--button-radius":
          design.buttonStyle === "sharp" ? "10px"
            : design.buttonStyle === "soft" ? "18px"
            : design.buttonStyle === "editorial" ? "6px"
            : "999px",
        "--nav-radius":
          design.navStyle === "signal" ? "10px"
            : design.navStyle === "minimal" ? "12px"
            : design.navStyle === "rail" ? "14px"
            : "18px",
        "--content-gap":
          design.density === "compact" ? "1rem"
            : design.density === "airy" ? "2rem"
            : "1.5rem",
      } as React.CSSProperties}
    >
      {children}
    </div>
  );
}
