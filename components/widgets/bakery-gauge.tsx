"use client";

import { motion } from "framer-motion";
import { TrendingDown, TrendingUp } from "lucide-react";

const products = [
  { name: "Хлеб пшеничный", plan: 340, fact: 312, unit: "буханок", color: "#c2410c" },
  { name: "Круассаны", plan: 180, fact: 196, unit: "шт", color: "#d97706" },
  { name: "Лаваш тонкий", plan: 220, fact: 198, unit: "шт", color: "#92400e" },
  { name: "Сдоба / булки", plan: 160, fact: 144, unit: "шт", color: "#b45309" },
];

function ArcGauge({ value, color }: { value: number; color: string }) {
  const r = 38;
  const angle = 240;
  const startAngle = -120;
  const sweepAngle = (value / 100) * angle;
  const cx = 48, cy = 52;

  function polarToXY(deg: number) {
    const rad = (deg * Math.PI) / 180;
    return { x: cx + r * Math.cos(rad), y: cy + r * Math.sin(rad) };
  }

  const start = polarToXY(startAngle);
  const end = polarToXY(startAngle + angle);
  const filled = polarToXY(startAngle + sweepAngle);
  const large = angle > 180 ? 1 : 0;
  const filledLarge = sweepAngle > 180 ? 1 : 0;
  const status = value >= 100 ? "emerald" : value >= 85 ? "amber" : "red";
  const textColor = status === "emerald" ? "#059669" : status === "amber" ? "#d97706" : "#dc2626";

  return (
    <svg viewBox="0 0 96 80" className="w-full max-w-[110px]">
      <path
        d={`M ${start.x} ${start.y} A ${r} ${r} 0 ${large} 1 ${end.x} ${end.y}`}
        fill="none" stroke="#e2e8f0" strokeWidth="7" strokeLinecap="round"
      />
      <motion.path
        d={`M ${start.x} ${start.y} A ${r} ${r} 0 ${filledLarge} 1 ${filled.x} ${filled.y}`}
        fill="none" stroke={color} strokeWidth="7" strokeLinecap="round"
        initial={{ pathLength: 0 }}
        animate={{ pathLength: 1 }}
        transition={{ duration: 1.2, ease: "easeOut" }}
      />
      <text x={cx} y={cy - 4} textAnchor="middle" fontSize="14" fontWeight="800" fill={textColor}>
        {value}%
      </text>
      <text x={cx} y={cy + 10} textAnchor="middle" fontSize="7" fill="#94a3b8">
        план-факт
      </text>
    </svg>
  );
}

export function BakeryGauge() {
  const totalPlan = products.reduce((s, p) => s + p.plan, 0);
  const totalFact = products.reduce((s, p) => s + p.fact, 0);
  const totalPct = Math.round((totalFact / totalPlan) * 100);
  const overCount = products.filter((p) => p.fact >= p.plan).length;

  return (
    <div>
      <div className="mb-3 flex flex-wrap items-start justify-between gap-2">
        <div>
          <p className="text-sm font-semibold text-[#4a2f1d]">Выпуск за смену — план / факт</p>
          <p className="mt-1 text-xs text-[#7c5a3b]">Быстрый обзор по ключевым позициям текущей смены.</p>
        </div>
        <div className="flex flex-wrap items-center gap-2 text-[10px]">
          <span className="rounded-full bg-[#ecfdf5] px-2 py-0.5 font-semibold text-[#047857]">
            {overCount} в плане
          </span>
          <span className="rounded-full bg-[#fff1dd] px-2 py-0.5 font-semibold text-[#9a3412]">
            {products.length - overCount} отстаёт
          </span>
        </div>
      </div>

      <div className="grid grid-cols-2 gap-3 sm:grid-cols-4">
        {products.map((p, i) => {
          const pct = Math.round((p.fact / p.plan) * 100);
          const over = pct >= 100;
          return (
            <motion.div
              key={p.name}
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: i * 0.1, duration: 0.4 }}
              className={`flex flex-col items-center rounded-2xl border p-3 transition-colors ${
                over ? "border-emerald-200 bg-emerald-50" : pct >= 85 ? "border-[#e8c9a4] bg-[#fff5e8]" : "border-rose-200 bg-rose-50"
              }`}
            >
              <ArcGauge value={Math.min(pct, 100)} color={p.color} />
              <p className="mt-1 text-center text-[11px] font-semibold leading-tight text-[#4a2f1d]">{p.name}</p>
              <p className="mt-0.5 text-[10px] text-[#7c5a3b]">{p.fact}/{p.plan} {p.unit}</p>
              <div className={`mt-1 flex items-center gap-0.5 text-[10px] font-bold ${over ? "text-emerald-600" : "text-[#b91c1c]"}`}>
                {over ? <TrendingUp className="h-3 w-3" /> : <TrendingDown className="h-3 w-3" />}
                {over ? `+${pct - 100}%` : `${pct - 100}%`}
              </div>
            </motion.div>
          );
        })}
      </div>

      {/* Total summary */}
      <div className="mt-3 flex items-center justify-between rounded-xl border border-[#e8c9a4] bg-[#fff3e2] px-4 py-2.5">
        <div>
          <p className="text-[11px] font-medium text-[#9a3412]">Итого смена</p>
          <p className="text-xs text-[#7c5a3b]">{totalFact} / {totalPlan} шт.</p>
        </div>
        <div className="text-right">
          <p className={`text-xl font-black ${totalPct >= 100 ? "text-emerald-600" : totalPct >= 85 ? "text-[#9a3412]" : "text-red-500"}`}>
            {totalPct}%
          </p>
          <p className="text-[10px] text-[#b45309]">план-факт</p>
        </div>
      </div>
    </div>
  );
}
