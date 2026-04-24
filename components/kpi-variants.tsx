"use client";

import { useState } from "react";
import { ArrowDownRight, ArrowRight, ArrowUpRight, X, BarChart3, Activity, Zap, CheckCircle2, AlertCircle, Clock } from "lucide-react";
import { AnimatePresence, motion } from "framer-motion";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import type { KpiMetric } from "@/lib/types";
import { cn, getTrendClasses } from "@/lib/utils";

// ─── Helpers ──────────────────────────────────────────────────────────────────

function TrendIcon({ trend }: { trend: KpiMetric["trend"] }) {
  if (trend === "up") return <ArrowUpRight className="h-3.5 w-3.5" />;
  if (trend === "down") return <ArrowDownRight className="h-3.5 w-3.5" />;
  return <ArrowRight className="h-3.5 w-3.5" />;
}

function useMiniChart(trend: KpiMetric["trend"]) {
  const [bars] = useState(() =>
    Array.from({ length: 10 }, (_, i) => {
      const base = trend === "up" ? 30 + i * 6 : trend === "down" ? 90 - i * 6 : 50 + Math.sin(i) * 15;
      return Math.max(10, Math.min(100, base + (Math.random() - 0.5) * 20));
    })
  );
  return bars;
}

// ─── Spark Variant (Grocery, Bakery) ──────────────────────────────────────────
// Shows a 10-bar sparkline at the bottom representing the trend

export function KpiSpark({ item, accentColor, onOpen }: { item: KpiMetric; accentColor?: string; onOpen: () => void }) {
  const bars = useMiniChart(item.trend);
  const TIcon = item.trend === "up" ? ArrowUpRight : item.trend === "down" ? ArrowDownRight : ArrowRight;

  return (
    <motion.div
      layoutId={`kpi-container-${item.label}`}
      onClick={onOpen}
      className="group h-full cursor-pointer focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2"
      role="button"
      tabIndex={0}
      aria-label={`Открыть аналитику по метрике ${item.label}`}
      onKeyDown={(event) => {
        if (event.key === "Enter" || event.key === " ") {
          event.preventDefault();
          onOpen();
        }
      }}
      whileHover={{ scale: 1.02 }}
      whileTap={{ scale: 0.98 }}
    >
      <div className="relative h-full overflow-hidden rounded-[20px] border border-white/60 bg-white/80 backdrop-blur-sm shadow-sm hover:shadow-md transition-all flex flex-col">
        {/* Top accent */}
        {accentColor && (
          <div className="h-[3px] rounded-t-[20px] opacity-70 group-hover:opacity-100 transition-opacity"
               style={{ background: `linear-gradient(to right, ${accentColor}, ${accentColor}88)` }} />
        )}

        <div className="flex items-start justify-between gap-2 p-4 pb-2 flex-1">
          <div className="min-w-0">
            <motion.div layoutId={`kpi-label-${item.label}`} className="text-xs font-medium text-slate-500 uppercase tracking-wide truncate">{item.label}</motion.div>
            <motion.div layoutId={`kpi-value-${item.label}`} className="text-2xl font-bold text-slate-950 mt-0.5 leading-tight">{item.value}</motion.div>
            <div className="text-xs text-slate-400 mt-0.5 truncate">{item.hint}</div>
          </div>
          <motion.div layoutId={`kpi-badge-${item.label}`} className="shrink-0">
            <Badge className={cn("rounded-full gap-1 px-2 py-1 text-xs font-medium", getTrendClasses(item.trend))}>
              <TIcon className="h-3 w-3" />
              {item.delta}
            </Badge>
          </motion.div>
        </div>

        {/* Sparkline */}
        <div className="px-4 pb-3 pt-1 flex items-end gap-[3px] h-10">
          {bars.map((h, i) => (
            <motion.div
              key={i}
              initial={{ height: 0 }}
              animate={{ height: `${h}%` }}
              transition={{ delay: i * 0.03, duration: 0.4, ease: "easeOut" }}
              className="flex-1 rounded-t-[2px] opacity-80 group-hover:opacity-100 transition-opacity"
              style={{ backgroundColor: i >= 6 ? (accentColor ?? "#6366f1") : `${accentColor ?? "#6366f1"}40` }}
            />
          ))}
        </div>
      </div>
    </motion.div>
  );
}

// ─── Progress Variant (Construction, Sewing, Manufacturing) ─────────────────────
// Shows a linear progress bar reflecting plan completion or capacity

export function KpiProgress({ item, accentColor, onOpen }: { item: KpiMetric; accentColor?: string; onOpen: () => void }) {
  const progress = item.progress ?? 50;
  const isAlert = item.trend === "down" && progress > 80;
  const barColor = isAlert ? "#ef4444" : (accentColor ?? "#6366f1");

  return (
    <motion.div
      layoutId={`kpi-container-${item.label}`}
      onClick={onOpen}
      className="group h-full cursor-pointer focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2"
      role="button"
      tabIndex={0}
      aria-label={`Открыть аналитику по метрике ${item.label}`}
      onKeyDown={(event) => {
        if (event.key === "Enter" || event.key === " ") {
          event.preventDefault();
          onOpen();
        }
      }}
      whileHover={{ scale: 1.01 }}
      whileTap={{ scale: 0.98 }}
    >
      <div className="relative h-full overflow-hidden rounded-sm border border-slate-200 bg-white shadow-sm hover:shadow-md transition-all flex flex-col">
        {/* Left accent border */}
        <div className="absolute left-0 top-0 bottom-0 w-[3px]" style={{ backgroundColor: barColor }} />

        <div className="pl-4 pr-4 pt-4 pb-2 flex items-start justify-between gap-2 flex-1">
          <div className="min-w-0">
            <motion.div layoutId={`kpi-label-${item.label}`}
              className="text-[10px] font-bold uppercase tracking-[0.12em] text-slate-500 truncate"
            >{item.label}</motion.div>
            <motion.div layoutId={`kpi-value-${item.label}`}
              className="text-xl font-bold text-slate-900 mt-1 leading-tight"
            >{item.value}</motion.div>
            <div className="text-[11px] text-slate-400 mt-0.5 truncate">{item.hint}</div>
          </div>
          <motion.div layoutId={`kpi-badge-${item.label}`} className="shrink-0">
            <Badge className={cn("rounded-sm text-[10px] gap-1 px-2 py-0.5 font-mono font-medium border", getTrendClasses(item.trend))}>
              <TrendIcon trend={item.trend} />
              {item.delta}
            </Badge>
          </motion.div>
        </div>

        {/* Progress bar */}
        <div className="px-4 pb-4">
          <div className="flex items-center justify-between mb-1">
            <span className="text-[10px] text-slate-400 font-mono uppercase">
              {item.statusLabel ?? "Прогресс"}
            </span>
            <span className="text-[10px] font-mono font-bold" style={{ color: barColor }}>{progress}%</span>
          </div>
          <div className="h-1.5 rounded-full bg-slate-100 overflow-hidden">
            <motion.div
              initial={{ width: 0 }}
              animate={{ width: `${progress}%` }}
              transition={{ duration: 0.8, ease: "easeOut" }}
              className="h-full rounded-full"
              style={{ backgroundColor: barColor }}
            />
          </div>
        </div>
      </div>
    </motion.div>
  );
}

// ─── Luxury Variant (Boutique) ──────────────────────────────────────────────
// Ultra minimal: generous whitespace, thin left accent, large typography

export function KpiLuxury({ item, accentColor, onOpen }: { item: KpiMetric; accentColor?: string; onOpen: () => void }) {
  return (
    <motion.div
      layoutId={`kpi-container-${item.label}`}
      onClick={onOpen}
      className="group h-full cursor-pointer focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2"
      role="button"
      tabIndex={0}
      aria-label={`Открыть аналитику по метрике ${item.label}`}
      onKeyDown={(event) => {
        if (event.key === "Enter" || event.key === " ") {
          event.preventDefault();
          onOpen();
        }
      }}
      whileHover={{ scale: 1.01 }}
      whileTap={{ scale: 0.98 }}
    >
      <div
        className="relative h-full bg-white border-l-[2px] border-b border-r border-t border-stone-100 p-5 flex flex-col justify-between transition-all hover:shadow-sm"
        style={{ borderLeftColor: accentColor ?? "#8b5cf6" }}
      >
        <div>
          <motion.div layoutId={`kpi-label-${item.label}`}
            className="text-[10px] tracking-[0.25em] uppercase text-stone-400 font-light"
          >{item.label}</motion.div>
          <motion.div layoutId={`kpi-value-${item.label}`}
            className="text-3xl font-light text-stone-900 mt-3 leading-none tracking-tight"
          >{item.value}</motion.div>
        </div>

        <div className="flex items-end justify-between mt-4">
          <div className="text-[11px] text-stone-400 leading-relaxed max-w-[70%]">{item.hint}</div>
          <motion.div layoutId={`kpi-badge-${item.label}`}>
            <div className={cn(
              "text-[10px] font-light tracking-wide flex items-center gap-1",
              item.trend === "up" ? "text-emerald-600" : item.trend === "down" ? "text-rose-500" : "text-stone-400"
            )}>
              <TrendIcon trend={item.trend} />
              {item.delta}
            </div>
          </motion.div>
        </div>

        {/* Thin bottom accent line on hover */}
        <div className="absolute bottom-0 left-0 right-0 h-[1px] opacity-0 group-hover:opacity-100 transition-opacity"
             style={{ backgroundColor: accentColor ?? "#8b5cf6" }} />
      </div>
    </motion.div>
  );
}

// ─── Threshold Variant (Restaurant, Logistics) ──────────────────────────────
// Traffic-light dot + status label shows if metric is within acceptable bounds

const thresholdIcon = {
  up: CheckCircle2,
  down: AlertCircle,
  neutral: Clock,
};

const thresholdDot = {
  up: "bg-emerald-400",
  down: "bg-rose-500",
  neutral: "bg-amber-400",
};

export function KpiThreshold({ item, accentColor, onOpen }: { item: KpiMetric; accentColor?: string; onOpen: () => void }) {
  const StatusIcon = thresholdIcon[item.trend];
  const dotClass = thresholdDot[item.trend];

  return (
    <motion.div
      layoutId={`kpi-container-${item.label}`}
      onClick={onOpen}
      className="group h-full cursor-pointer focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2"
      role="button"
      tabIndex={0}
      aria-label={`Открыть аналитику по метрике ${item.label}`}
      onKeyDown={(event) => {
        if (event.key === "Enter" || event.key === " ") {
          event.preventDefault();
          onOpen();
        }
      }}
      whileHover={{ scale: 1.02 }}
      whileTap={{ scale: 0.98 }}
    >
      <div className="relative h-full overflow-hidden rounded-[20px] border border-current/10 bg-current/5 flex flex-col transition-all hover:shadow-md"
           style={{ background: `linear-gradient(135deg, ${accentColor}08 0%, white 70%)`, borderColor: `${accentColor}20` }}>

        {/* Status dot row */}
        <div className="flex items-center gap-2 px-4 pt-4 pb-2">
          <span className={cn("h-2 w-2 rounded-full animate-pulse", dotClass)} />
          <span className="text-[10px] font-semibold uppercase tracking-[0.15em] text-slate-500">
            {item.statusLabel ?? (item.trend === "up" ? "В норме" : item.trend === "down" ? "Отклонение" : "Контроль")}
          </span>
        </div>

        <div className="px-4 pb-2 flex-1">
          <motion.div layoutId={`kpi-label-${item.label}`}
            className="text-xs text-slate-500 mb-1"
          >{item.label}</motion.div>
          <motion.div layoutId={`kpi-value-${item.label}`}
            className="text-2xl font-bold tracking-tight"
            style={{ color: item.trend === "down" ? "#e11d48" : "#0f172a" }}
          >{item.value}</motion.div>
          <div className="text-xs text-slate-400 mt-0.5">{item.hint}</div>
        </div>

        <div className="px-4 pb-4 flex items-center justify-between">
          <motion.div layoutId={`kpi-badge-${item.label}`}>
            <div className={cn("text-xs font-medium flex items-center gap-1",
              item.trend === "up" ? "text-emerald-600" : item.trend === "down" ? "text-rose-600" : "text-amber-600"
            )}>
              <StatusIcon className="h-3.5 w-3.5" />
              {item.delta}
            </div>
          </motion.div>
          <Zap className="h-4 w-4 opacity-0 group-hover:opacity-100 transition-opacity" style={{ color: accentColor }} />
        </div>
      </div>
    </motion.div>
  );
}

// ─── System Variant (Agro, Distribution) ──────────────────────────────────────
// Terminal / system-monitor style: monospace, code aesthetic

export function KpiSystem({ item, accentColor, onOpen }: { item: KpiMetric; accentColor?: string; onOpen: () => void }) {
  return (
    <motion.div
      layoutId={`kpi-container-${item.label}`}
      onClick={onOpen}
      className="group h-full cursor-pointer focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2"
      role="button"
      tabIndex={0}
      aria-label={`Открыть аналитику по метрике ${item.label}`}
      onKeyDown={(event) => {
        if (event.key === "Enter" || event.key === " ") {
          event.preventDefault();
          onOpen();
        }
      }}
      whileHover={{ scale: 1.02 }}
      whileTap={{ scale: 0.98 }}
    >
      <div
        className="relative h-full overflow-hidden border flex flex-col transition-all"
        style={{
          background: "linear-gradient(145deg, rgba(15,23,42,0.95), rgba(2,6,23,0.98))",
          borderColor: `${accentColor}30`,
          boxShadow: `0 0 20px ${accentColor}08`,
        }}
      >
        {/* Terminal header bar */}
        <div className="flex items-center gap-1.5 px-3 py-2 border-b" style={{ borderColor: `${accentColor}20` }}>
          <span className="h-2 w-2 rounded-full bg-rose-500/60" />
          <span className="h-2 w-2 rounded-full bg-amber-400/60" />
          <span className="h-2 w-2 rounded-full" style={{ background: `${accentColor}80` }} />
          <span className="ml-auto text-[9px] font-mono opacity-40" style={{ color: accentColor }}>SYS.MONITOR</span>
        </div>

        <div className="flex-1 p-3 font-mono">
          <div className="text-[9px] opacity-40 mb-0.5" style={{ color: accentColor }}>
            # {item.label.toUpperCase()}
          </div>
          <motion.div layoutId={`kpi-value-${item.label}`}
            className="text-2xl font-light tracking-wide leading-tight"
            style={{ color: accentColor, textShadow: `0 0 20px ${accentColor}` }}
          >
            {item.value}
          </motion.div>
          <div className="text-[10px] text-slate-500 mt-1 truncate">{item.hint}</div>
        </div>

        <div className="px-3 pb-3 flex items-center justify-between">
          <motion.div layoutId={`kpi-badge-${item.label}`}>
            <div className={cn(
              "text-[10px] font-mono flex items-center gap-1",
              item.trend === "up" ? "text-emerald-400" : item.trend === "down" ? "text-rose-400" : "text-slate-400"
            )}>
              <TrendIcon trend={item.trend} />
              {item.delta}
            </div>
          </motion.div>
          <Activity className="h-3 w-3 opacity-30 group-hover:opacity-80 transition-opacity" style={{ color: accentColor }} />
        </div>

        {/* Glow border bottom on hover */}
        <div
          className="absolute bottom-0 left-0 right-0 h-[1px] opacity-0 group-hover:opacity-100 transition-opacity"
          style={{ backgroundColor: accentColor, boxShadow: `0 0 8px ${accentColor}` }}
        />
      </div>
    </motion.div>
  );
}

// ─── Drill-down Modal (shared by all variants) ─────────────────────────────────

interface KpiModalProps {
  item: KpiMetric;
  accentColor?: string;
  uiTheme: "glass" | "enterprise" | "neo-dark";
  onClose: () => void;
}

export function KpiModal({ item, accentColor, uiTheme, onClose }: KpiModalProps) {
  const isNeo = uiTheme === "neo-dark";
  const isEnt = uiTheme === "enterprise";

  const [chartData] = useState(() =>
    Array.from({ length: 14 }, () => 20 + Math.random() * 80)
  );

  const modalClass = cn(
    "pointer-events-auto relative w-full max-w-lg overflow-hidden shadow-2xl",
    isNeo && "rounded-none bg-slate-900 border border-slate-800 shadow-[0_0_50px_rgba(34,211,238,0.1)]",
    isEnt && "rounded-sm bg-white border border-slate-200",
    !isNeo && !isEnt && "rounded-[32px] bg-white border border-white/50"
  );

  return (
    <>
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        onClick={onClose}
        className={cn("fixed inset-0 z-50 backdrop-blur-md", isNeo ? "bg-slate-950/80" : "bg-slate-950/60")}
      />
      <div className="fixed inset-0 z-50 pointer-events-none flex items-center justify-center p-4">
        <motion.div layoutId={`kpi-container-${item.label}`} className={modalClass}>
          <div className="p-8">
            <button
              onClick={onClose}
              className={cn("absolute right-6 top-6 p-2 transition-colors",
                isNeo ? "bg-transparent text-slate-500 hover:text-cyan-400" :
                isEnt ? "bg-transparent text-slate-400 hover:bg-slate-100" :
                "rounded-full bg-slate-100 text-slate-400 hover:bg-slate-200 hover:text-slate-600"
              )}
            >
              <X className="h-5 w-5" />
            </button>

            <div className="flex items-start justify-between gap-4">
              <div className="space-y-2">
                <motion.div layoutId={`kpi-label-${item.label}`}
                  className={cn("text-sm uppercase tracking-wider font-semibold",
                    isNeo ? "text-cyan-500/70 font-mono" : "text-slate-500"
                  )}
                >{item.label}</motion.div>
                <motion.div layoutId={`kpi-value-${item.label}`}
                  className={cn("font-display text-5xl font-semibold",
                    isNeo ? "text-white" : "text-slate-950"
                  )}
                >{item.value}</motion.div>
              </div>
              <motion.div layoutId={`kpi-badge-${item.label}`}>
                <Badge className={cn("shrink-0 gap-1 px-4 py-2 font-medium text-sm",
                  isNeo ? "rounded-none border border-current bg-transparent font-mono" : "rounded-full",
                  getTrendClasses(item.trend)
                )}>
                  <TrendIcon trend={item.trend} />
                  {item.delta}
                </Badge>
              </motion.div>
            </div>

            <div className="mt-6 text-sm text-slate-500">{item.hint}</div>

            <div className="mt-8">
              <div className={cn("mb-4 flex items-center justify-between text-sm font-medium border-b pb-2",
                isNeo ? "border-slate-800 text-slate-400 font-mono uppercase" : "border-slate-100 text-slate-500"
              )}>
                <span>Динамика за 14 дней</span>
                <BarChart3 className="h-4 w-4" />
              </div>
              <div className="flex items-end gap-1.5 h-32 mt-4 max-w-full overflow-hidden">
                {chartData.map((val, idx) => (
                  <motion.div
                    key={idx}
                    initial={{ height: 0, opacity: 0 }}
                    animate={{ height: `${val}%`, opacity: 1 }}
                    transition={{ delay: 0.1 + idx * 0.03, duration: 0.4 }}
                    className={cn("flex-1", isNeo ? "rounded-none" : "rounded-t-sm")}
                    style={{
                      backgroundColor: accentColor && val > 50 ? accentColor : (isNeo ? "#1e293b" : "#e2e8f0"),
                      boxShadow: isNeo && accentColor && val > 50 ? `0 0 10px ${accentColor}` : undefined
                    }}
                  />
                ))}
              </div>
            </div>

            <div className="mt-8 flex gap-3">
              <Button variant={isNeo ? "ghost" : "default"}
                className={cn("w-full shadow-lg",
                  isEnt && "rounded-sm shadow-none",
                  isNeo && "rounded-none border border-cyan-700 text-cyan-400 hover:bg-cyan-950/50 font-mono",
                  !isNeo && !isEnt && "rounded-xl bg-slate-950 text-white"
                )}
              >Детальный отчет</Button>
              <Button variant="secondary"
                className={cn("w-full",
                  isEnt && "rounded-sm bg-slate-100",
                  isNeo && "rounded-none bg-slate-800 text-slate-300 hover:bg-slate-700 font-mono",
                  !isNeo && !isEnt && "rounded-xl"
                )}
              >Факторный анализ</Button>
            </div>
          </div>
        </motion.div>
      </div>
    </>
  );
}
