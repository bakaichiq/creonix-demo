"use client";

import { motion } from "framer-motion";
import { AlertTriangle, Info } from "lucide-react";

const lines = [
  { name: "Линия А-1", product: "Профиль 60×30", oee: 82, availability: 91, performance: 88, quality: 97 },
  { name: "Линия А-2", product: "Лист 2мм", oee: 67, availability: 74, performance: 88, quality: 94 },
  { name: "Линия Б-1", product: "Труба ⌀50", oee: 54, availability: 61, performance: 82, quality: 91, alert: "Простой 40 мин" },
  { name: "Линия Б-2", product: "Швеллер 100", oee: 91, availability: 96, performance: 94, quality: 99 },
];

function getOeeStatus(oee: number) {
  if (oee >= 85) return { color: "#22c55e", label: "Отлично", badge: "bg-emerald-100 text-emerald-700" };
  if (oee >= 65) return { color: "#f59e0b", label: "Норма", badge: "bg-amber-100 text-amber-700" };
  return { color: "#ef4444", label: "Критично", badge: "bg-red-100 text-red-700" };
}

function MiniBar({ value, color, label }: { value: number; color: string; label: string }) {
  return (
    <div className="flex items-center gap-1.5">
      <span className="w-14 shrink-0 text-[10px] text-slate-400">{label}</span>
      <div className="h-1.5 flex-1 overflow-hidden rounded-full bg-slate-200">
        <motion.div
          initial={{ width: 0 }}
          animate={{ width: `${value}%` }}
          transition={{ duration: 0.7, ease: "easeOut" }}
          className="h-full rounded-full"
          style={{ backgroundColor: color }}
        />
      </div>
      <span className="w-7 shrink-0 text-right text-[11px] font-semibold text-slate-600">{value}%</span>
    </div>
  );
}

function OeeArc({ value }: { value: number }) {
  const r = 26, cx = 30, cy = 32;
  const circ = 2 * Math.PI * r;
  const { color } = getOeeStatus(value);
  return (
    <svg viewBox="0 0 60 60" className="h-14 w-14 shrink-0">
      <circle cx={cx} cy={cy} r={r} fill="none" stroke="#e2e8f0" strokeWidth="6" />
      <motion.circle
        cx={cx} cy={cy} r={r}
        fill="none"
        stroke={color}
        strokeWidth="6"
        strokeLinecap="round"
        strokeDasharray={circ}
        initial={{ strokeDashoffset: circ }}
        animate={{ strokeDashoffset: circ - (value / 100) * circ }}
        transition={{ duration: 1, ease: "easeOut" }}
        transform={`rotate(-90 ${cx} ${cy})`}
      />
      <text x={cx} y={cy + 4} textAnchor="middle" fontSize="11" fontWeight="700" fill="#0f172a">{value}</text>
    </svg>
  );
}

export function ManufacturingOee() {
  const avgOee = Math.round(lines.reduce((s, l) => s + l.oee, 0) / lines.length);
  const alertLines = lines.filter((l) => l.alert).length;
  const goodLines = lines.filter((l) => l.oee >= 85).length;

  return (
    <div>
      <div className="mb-3 flex flex-wrap items-start justify-between gap-2">
        <div>
          <p className="text-sm font-semibold text-slate-700">OEE производственных линий</p>
          <p className="mt-1 text-xs text-slate-500">Доступность × Производительность × Качество.</p>
        </div>
        {/* OEE threshold legend */}
        <div className="flex flex-wrap items-center gap-2 text-[10px] text-slate-500">
          <span className="flex items-center gap-1"><span className="inline-block h-2 w-2 rounded-full bg-emerald-500" />≥85% отлично</span>
          <span className="flex items-center gap-1"><span className="inline-block h-2 w-2 rounded-full bg-amber-500" />≥65% норма</span>
          <span className="flex items-center gap-1"><span className="inline-block h-2 w-2 rounded-full bg-red-500" />&lt;65% крит.</span>
        </div>
      </div>

      {/* Summary bar */}
      <div className="mb-3 grid grid-cols-3 divide-x divide-slate-200 rounded-xl border border-slate-200 bg-slate-50">
        <div className="px-3 py-2 text-center">
          <p className="text-base font-bold text-slate-900">{avgOee}%</p>
          <p className="text-[10px] text-slate-400">Средний OEE</p>
        </div>
        <div className="px-3 py-2 text-center">
          <p className="text-base font-bold text-emerald-600">{goodLines}</p>
          <p className="text-[10px] text-slate-400">В норме</p>
        </div>
        <div className="px-3 py-2 text-center">
          <p className="text-base font-bold text-amber-600">{alertLines}</p>
          <p className="text-[10px] text-slate-400">Алерты</p>
        </div>
      </div>

      <div className="grid gap-3 sm:grid-cols-2">
        {lines.map((line, i) => {
          const status = getOeeStatus(line.oee);
          return (
            <motion.div
              key={line.name}
              initial={{ opacity: 0, y: 12 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: i * 0.1, duration: 0.4 }}
              className={`rounded-2xl border p-4 ${line.alert ? "border-amber-200 bg-amber-50" : "border-slate-200 bg-slate-50"}`}
            >
              <div className="flex items-start gap-3">
                <OeeArc value={line.oee} />
                <div className="min-w-0 flex-1">
                  <div className="mb-1 flex items-center gap-1.5 flex-wrap">
                    <p className="text-xs font-bold text-slate-900">{line.name}</p>
                    <span className={`rounded-full px-1.5 py-0.5 text-[9px] font-semibold ${status.badge}`}>
                      {status.label}
                    </span>
                    {line.alert && <AlertTriangle className="h-3 w-3 text-amber-500 shrink-0" />}
                  </div>
                  <p className="mb-2 text-[10px] text-slate-500">{line.product}</p>
                  <div className="space-y-1.5">
                    <MiniBar value={line.availability} color="#38bdf8" label="Доступн." />
                    <MiniBar value={line.performance} color="#818cf8" label="Произв." />
                    <MiniBar value={line.quality} color="#34d399" label="Качество" />
                  </div>
                  {line.alert && (
                    <p className="mt-1.5 flex items-center gap-1 text-[10px] font-semibold text-amber-600">
                      <Info className="h-3 w-3" />
                      {line.alert}
                    </p>
                  )}
                </div>
              </div>
            </motion.div>
          );
        })}
      </div>
    </div>
  );
}
