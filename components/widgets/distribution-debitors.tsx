"use client";

import { motion } from "framer-motion";
import { AlertTriangle, TrendingUp, TrendingDown, Minus } from "lucide-react";

const debtors = [
  { name: "ООО «Ритейл Маркет»", segment: "Гипермаркет", debt: 4_820_000, days: 74, risk: "high", trend: "up" },
  { name: "ИП Алматов Б.", segment: "Ларьки (×3)", debt: 1_230_000, days: 48, risk: "medium", trend: "stable" },
  { name: "СТО «Центральный»", segment: "В&B ритейл", debt: 980_000, days: 31, risk: "medium", trend: "down" },
  { name: "Магазин «Нурат»", segment: "Супермаркет", debt: 640_000, days: 18, risk: "low", trend: "stable" },
  { name: "ТЦ «Базар Плаза»", segment: "Торговый центр", debt: 2_100_000, days: 62, risk: "high", trend: "up" },
  { name: "ООО «Фрешмарт»", segment: "Мини-сеть", debt: 390_000, days: 11, risk: "low", trend: "down" },
];

const maxDebt = Math.max(...debtors.map((d) => d.debt));

function fmt(n: number) {
  return (n / 1_000_000).toFixed(2) + " млн";
}

const riskCfg = {
  high: { badge: "bg-red-100 text-red-700", dot: "bg-red-500", label: "Высокий", bar: "bg-red-500" },
  medium: { badge: "bg-amber-100 text-amber-700", dot: "bg-amber-500", label: "Средний", bar: "bg-amber-400" },
  low: { badge: "bg-emerald-100 text-emerald-700", dot: "bg-emerald-500", label: "Низкий", bar: "bg-emerald-500" },
};

function TrendIcon({ trend }: { trend: string }) {
  if (trend === "up") return <TrendingUp className="h-3 w-3 text-red-500" />;
  if (trend === "down") return <TrendingDown className="h-3 w-3 text-emerald-500" />;
  return <Minus className="h-3 w-3 text-slate-400" />;
}

export function DistributionDebitors() {
  const sorted = [...debtors].sort((a, b) => b.debt - a.debt);
  const totalDebt = debtors.reduce((s, d) => s + d.debt, 0);
  const highRiskDebt = debtors.filter((d) => d.risk === "high").reduce((s, d) => s + d.debt, 0);
  const highCount = debtors.filter((d) => d.risk === "high").length;
  const mediumCount = debtors.filter((d) => d.risk === "medium").length;

  return (
    <div>
      <div className="mb-3 flex flex-wrap items-start justify-between gap-2">
        <div className="flex items-center gap-2">
          <AlertTriangle className="h-4 w-4 text-indigo-600 shrink-0" />
          <div>
            <p className="text-sm font-semibold text-slate-700">Дебиторская задолженность</p>
            <p className="mt-1 text-xs text-slate-500">Кто тянет риск по просрочке и где нужен приоритетный контакт.</p>
          </div>
        </div>
      </div>

      {/* Risk breakdown */}
      <div className="mb-3 grid grid-cols-3 divide-x divide-slate-200 rounded-xl border border-slate-200 bg-slate-50 text-center">
        <div className="px-2 py-2">
          <p className="text-base font-bold text-slate-900">{fmt(totalDebt)}</p>
          <p className="text-[10px] text-slate-400">Итого долг</p>
        </div>
        <div className="px-2 py-2">
          <p className="text-base font-bold text-red-600">{highCount}</p>
          <p className="text-[10px] text-slate-400">Высокий риск</p>
        </div>
        <div className="px-2 py-2">
          <p className="text-base font-bold text-amber-600">{mediumCount}</p>
          <p className="text-[10px] text-slate-400">Средний риск</p>
        </div>
      </div>

      {/* High risk share bar */}
      <div className="mb-3">
        <div className="mb-1 flex items-center justify-between text-[10px] text-slate-500">
          <span>Доля высокого риска в долге</span>
          <span className="font-semibold text-red-600">{Math.round((highRiskDebt / totalDebt) * 100)}%</span>
        </div>
        <div className="h-1.5 overflow-hidden rounded-full bg-slate-200">
          <motion.div
            initial={{ width: 0 }}
            animate={{ width: `${(highRiskDebt / totalDebt) * 100}%` }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            className="h-full rounded-full bg-red-500"
          />
        </div>
      </div>

      <div className="space-y-2">
        {sorted.map((d, i) => {
          const cfg = riskCfg[d.risk as keyof typeof riskCfg];
          const barPct = (d.debt / maxDebt) * 100;
          return (
            <motion.div
              key={d.name}
              initial={{ opacity: 0, x: -12 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: i * 0.08, duration: 0.35 }}
              className="rounded-2xl border border-slate-200 bg-slate-50 p-3"
            >
              <div className="flex items-center gap-3">
                <div className="flex min-w-0 flex-1 flex-col gap-1">
                  <div className="flex items-center gap-2">
                    <span className={`shrink-0 h-1.5 w-1.5 rounded-full ${cfg.dot}`} />
                    <span className="truncate text-xs font-semibold text-slate-800">{d.name}</span>
                    <span className="ml-auto shrink-0 text-xs font-bold text-slate-900">{fmt(d.debt)}</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <div className="h-1.5 flex-1 overflow-hidden rounded-full bg-slate-200">
                      <motion.div
                        initial={{ width: 0 }}
                        animate={{ width: `${barPct}%` }}
                        transition={{ delay: i * 0.08 + 0.3, duration: 0.7, ease: "easeOut" }}
                        className={`h-full rounded-full ${cfg.bar}`}
                      />
                    </div>
                  </div>
                  <div className="flex items-center gap-2 flex-wrap">
                    <span className="text-[10px] text-slate-400">{d.segment}</span>
                    <span className={`rounded-full px-1.5 py-0.5 text-[9px] font-semibold ${cfg.badge}`}>
                      {d.days} дн. проср.
                    </span>
                    <TrendIcon trend={d.trend} />
                    <span className={`ml-auto text-[9px] font-semibold ${cfg.badge} rounded-full px-1.5 py-0.5`}>
                      {cfg.label}
                    </span>
                  </div>
                </div>
              </div>
            </motion.div>
          );
        })}
      </div>
    </div>
  );
}
