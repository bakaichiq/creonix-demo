"use client";

import { useState } from "react";
import { ArrowDownRight, ArrowRight, ArrowUpRight, BarChart3, Activity, X } from "lucide-react";
import { AnimatePresence, motion } from "framer-motion";

import { Badge } from "@/components/ui/badge";
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import type { KpiMetric } from "@/lib/types";
import { cn, getTrendClasses } from "@/lib/utils";

interface KpiCardClassicProps {
  item: KpiMetric;
  accentColor?: string;
  uiTheme?: "glass" | "enterprise" | "neo-dark";
}

const trendBgMap = {
  up: "from-emerald-500/5 to-transparent",
  down: "from-rose-500/5 to-transparent",
  neutral: "from-slate-500/5 to-transparent"
};

const trendBgMapDark = {
  up: "from-emerald-500/10 to-transparent",
  down: "from-rose-500/10 to-transparent",
  neutral: "from-slate-500/10 to-transparent"
};

export function KpiCardClassic({ item, accentColor, uiTheme = "glass" }: KpiCardClassicProps) {
  const [isOpen, setIsOpen] = useState(false);

  const TrendIcon =
    item.trend === "up" ? ArrowUpRight : item.trend === "down" ? ArrowDownRight : ArrowRight;

  const trendBg = uiTheme === "neo-dark"
    ? (trendBgMapDark[item.trend] ?? trendBgMapDark.neutral)
    : (trendBgMap[item.trend] ?? trendBgMap.neutral);

  const generateChartData = () =>
    Array.from({ length: 14 }).map(() => 20 + Math.random() * 80);

  const [chartData] = useState(generateChartData);

  const isNeo = uiTheme === "neo-dark";
  const isEnt = uiTheme === "enterprise";

  const cardOuterClass = cn(
    "group relative overflow-hidden transition-all duration-300",
    isNeo && "rounded-none border-slate-800 bg-slate-900/80 backdrop-blur-md shadow-[0_0_15px_rgba(0,0,0,0.5)] hover:shadow-[0_0_25px_rgba(34,211,238,0.15)] hover:border-cyan-900/50",
    isEnt && "rounded-sm border-slate-200 bg-white shadow-sm hover:shadow-md",
    !isNeo && !isEnt && "rounded-[24px] border-white/70 bg-white/80 shadow-soft hover:shadow-lg backdrop-blur-sm"
  );

  const labelClass = cn(
    "text-sm",
    isNeo ? "text-slate-400 font-mono tracking-wide" : "text-slate-500"
  );

  const valueClass = cn(
    "font-display font-semibold",
    isNeo ? "text-3xl text-white font-light tracking-wide" : "text-2xl text-slate-950",
    isEnt && "text-2xl font-bold"
  );

  const hintClass = cn(
    "text-sm",
    isNeo ? "text-slate-500 font-mono text-xs" : "text-slate-500"
  );

  const iconClass = cn("h-3.5 w-3.5", isNeo && "text-cyan-400");

  const badgeClass = cn(
    "shrink-0 gap-1 px-2.5 py-1 font-medium",
    isNeo ? "rounded-none border border-current bg-transparent font-mono" : "rounded-full",
    getTrendClasses(item.trend)
  );

  const modalOuterClass = cn(
    "pointer-events-auto relative w-full max-w-lg overflow-hidden shadow-2xl",
    isNeo && "rounded-none bg-slate-900 border border-slate-800 shadow-[0_0_50px_rgba(34,211,238,0.1)]",
    isEnt && "rounded-sm bg-white border border-slate-200",
    !isNeo && !isEnt && "rounded-[32px] bg-white border border-white/50"
  );

  return (
    <>
      <motion.div
        layoutId={`kpi-container-${item.label}`}
        onClick={() => setIsOpen(true)}
        className="h-full cursor-pointer focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2"
        role="button"
        tabIndex={0}
        aria-label={`Открыть аналитику по метрике ${item.label}`}
        onKeyDown={(event) => {
          if (event.key === "Enter" || event.key === " ") {
            event.preventDefault();
            setIsOpen(true);
          }
        }}
        whileHover={{ scale: isEnt ? 1.01 : 1.02 }}
        whileTap={{ scale: 0.98 }}
      >
        <Card className={cardOuterClass}>
          {accentColor && (
            <div
              className={cn("absolute inset-x-0 top-0 h-[3px] opacity-70 transition-opacity duration-300 group-hover:opacity-100",
                isNeo ? "" : isEnt ? "opacity-100" : "rounded-t-[24px]"
              )}
              style={{ background: isNeo ? accentColor : `linear-gradient(to right, ${accentColor}, ${accentColor}88)` }}
            />
          )}

          <div
            className={cn("pointer-events-none absolute inset-0 bg-gradient-to-br opacity-60", trendBg, isEnt && "opacity-30")}
          />

          <div className="relative flex items-start justify-between gap-3 p-5 pt-6">
            <div className="space-y-1">
              <motion.div layoutId={`kpi-label-${item.label}`} className={labelClass}>{item.label}</motion.div>
              <motion.div layoutId={`kpi-value-${item.label}`} className={valueClass}>{item.value}</motion.div>
              <div className={hintClass}>{item.hint}</div>
            </div>

            <motion.div layoutId={`kpi-badge-${item.label}`}>
              <Badge className={badgeClass}>
                <TrendIcon className={iconClass} />
                {item.delta}
              </Badge>
            </motion.div>
          </div>

          <div className={cn("mt-2 px-5 pb-5 flex items-center justify-between text-xs transition-opacity group-hover:opacity-100",
            isNeo ? "text-cyan-600 font-mono uppercase tracking-wider" : "text-slate-400 opacity-0"
          )}>
            <span>{isNeo ? "[ SYSTEM ANALYTICS ]" : "Кликните для аналитики"}</span>
            <Activity className="h-3.5 w-3.5" />
          </div>

          {!isEnt && (
            <div
              className={cn("absolute bottom-0 left-0 right-0 h-0.5 bg-gradient-to-r opacity-0 transition-opacity duration-300 group-hover:opacity-100",
                item.trend === "up" ? "from-emerald-400 to-emerald-300" : item.trend === "down" ? "from-rose-400 to-rose-300" : "from-slate-400 to-slate-300",
                isNeo && "from-cyan-500 to-cyan-300 shadow-[0_0_10px_rgba(6,182,212,0.8)]"
              )}
            />
          )}
        </Card>
      </motion.div>

      <AnimatePresence>
        {isOpen && (
          <>
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setIsOpen(false)}
              className={cn("fixed inset-0 z-50 backdrop-blur-md", isNeo ? "bg-slate-950/80" : "bg-slate-950/60")}
            />
            <div className="fixed inset-0 z-50 pointer-events-none flex items-center justify-center p-4">
              <motion.div layoutId={`kpi-container-${item.label}`} className={modalOuterClass}>
                <div className="p-8">
                  <button
                    type="button"
                    onClick={() => setIsOpen(false)}
                    className={cn("absolute right-6 top-6 p-2 transition-colors",
                      isNeo ? "bg-transparent text-slate-500 hover:text-cyan-400" :
                      isEnt ? "bg-transparent text-slate-400 hover:bg-slate-100" :
                      "rounded-full bg-slate-100 text-slate-400 hover:bg-slate-200 hover:text-slate-600"
                    )}
                    aria-label="Закрыть аналитику"
                  >
                    <X className="h-5 w-5" />
                  </button>

                  <div className="flex items-start justify-between gap-4">
                    <div className="space-y-2">
                      <motion.div layoutId={`kpi-label-${item.label}`}
                        className={cn("text-sm uppercase tracking-wider font-semibold", isNeo ? "text-cyan-500/70 font-mono" : "text-slate-500")}
                      >{item.label}</motion.div>
                      <motion.div layoutId={`kpi-value-${item.label}`}
                        className={cn("font-display text-5xl font-semibold", isNeo ? "text-white" : "text-slate-950")}
                      >{item.value}</motion.div>
                    </div>
                    <motion.div layoutId={`kpi-badge-${item.label}`}>
                      <Badge className={cn("shrink-0 gap-1 px-4 py-2 font-medium text-sm",
                        isNeo ? "rounded-none border border-current bg-transparent font-mono" : "rounded-full",
                        getTrendClasses(item.trend)
                      )}>
                        <TrendIcon className="h-4 w-4" />
                        {item.delta}
                      </Badge>
                    </motion.div>
                  </div>

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
                          transition={{ delay: 0.1 + idx * 0.02, duration: 0.4 }}
                          className={cn("flex-1", isNeo ? "rounded-none opacity-80" : "rounded-t-sm")}
                          style={{
                            backgroundColor: accentColor && val > 50 ? accentColor : undefined,
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
                        isNeo && "rounded-none border border-cyan-700 text-cyan-400 hover:bg-cyan-950/50 shadow-[0_0_15px_rgba(6,182,212,0.2)] font-mono",
                        !isNeo && !isEnt && "rounded-xl bg-slate-950 text-white shadow-slate-950/10"
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
        )}
      </AnimatePresence>
    </>
  );
}
