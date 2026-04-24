import { clsx, type ClassValue } from "clsx";
import { twMerge } from "tailwind-merge";

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

export function getTrendClasses(trend: "up" | "down" | "neutral") {
  if (trend === "up") {
    return "bg-emerald-500/10 text-emerald-700";
  }

  if (trend === "down") {
    return "bg-rose-500/10 text-rose-700";
  }

  return "bg-slate-500/10 text-slate-700";
}

export function getSeverityClasses(severity: "low" | "medium" | "high") {
  if (severity === "high") {
    return "border-rose-300 bg-rose-50 text-rose-900";
  }

  if (severity === "medium") {
    return "border-amber-300 bg-amber-50 text-amber-900";
  }

  return "border-emerald-300 bg-emerald-50 text-emerald-900";
}

export function getInsightClasses(tone: "positive" | "warning" | "critical") {
  if (tone === "critical") {
    return "border-rose-300 bg-rose-50 text-rose-900";
  }

  if (tone === "warning") {
    return "border-amber-300 bg-amber-50 text-amber-900";
  }

  return "border-emerald-300 bg-emerald-50 text-emerald-900";
}

export function formatCompactSom(value: number) {
  if (value >= 1_000_000) {
    return `${(value / 1_000_000).toFixed(1)} млн`;
  }

  if (value >= 1_000) {
    return `${Math.round(value / 1_000)} тыс`;
  }

  return String(value);
}

export function formatPercent(value: number) {
  return `${value}%`;
}

export const chartTooltipStyle = {
  borderRadius: "18px",
  borderColor: "#e2e8f0",
  backgroundColor: "rgba(255,255,255,0.96)",
  boxShadow: "0 24px 60px -28px rgba(15,23,42,0.28)"
};
