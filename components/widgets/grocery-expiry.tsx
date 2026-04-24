"use client";

import { motion } from "framer-motion";
import { AlertTriangle, Package } from "lucide-react";

const categories = [
  { name: "Мясо и птица",    expiring1: 4,  expiring7: 12, expiring14: 28, total: 186 },
  { name: "Молочные",        expiring1: 11, expiring7: 24, expiring14: 31, total: 203 },
  { name: "Овощи и фрукты",  expiring1: 7,  expiring7: 19, expiring14: 44, total: 312 },
  { name: "Хлебобулочные",   expiring1: 18, expiring7: 6,  expiring14: 14, total: 98 },
  { name: "Замороженные",    expiring1: 0,  expiring7: 3,  expiring14: 21, total: 247 },
];

export function GroceryExpiry() {
  const totalCritical = categories.reduce((s, c) => s + c.expiring1, 0);
  const totalWeek = categories.reduce((s, c) => s + c.expiring7, 0);
  const totalAtRisk = totalCritical + totalWeek;
  const totalSKU = categories.reduce((s, c) => s + c.total, 0);

  return (
    <div className="space-y-2">
      <div className="mb-3 flex flex-wrap items-start justify-between gap-2">
        <div>
          <p className="text-sm font-semibold text-slate-700">Срок годности по категориям</p>
          <p className="mt-1 text-xs text-slate-500">Где риск списаний начнёт влиять на маржу раньше всего.</p>
        </div>
        <div className="flex flex-wrap items-center gap-3 text-xs text-slate-500">
          <span className="flex items-center gap-1"><span className="h-2 w-2 rounded-full bg-red-500 inline-block" />&lt;3д</span>
          <span className="flex items-center gap-1"><span className="h-2 w-2 rounded-full bg-amber-400 inline-block" />&lt;7д</span>
          <span className="flex items-center gap-1"><span className="h-2 w-2 rounded-full bg-emerald-400 inline-block" />&lt;14д</span>
        </div>
      </div>

      {/* Risk summary */}
      <div className="mb-3 grid grid-cols-3 divide-x divide-slate-200 rounded-xl border border-slate-200 bg-slate-50 text-center">
        <div className="px-2 py-2">
          <p className="text-base font-bold text-red-600">{totalCritical}</p>
          <p className="text-[10px] text-slate-400">До 3 дней</p>
        </div>
        <div className="px-2 py-2">
          <p className="text-base font-bold text-amber-600">{totalWeek}</p>
          <p className="text-[10px] text-slate-400">До 7 дней</p>
        </div>
        <div className="px-2 py-2">
          <p className="text-base font-bold text-slate-700">{totalAtRisk}</p>
          <p className="text-[10px] text-slate-400">Под риском</p>
        </div>
      </div>

      {categories.map((cat, i) => {
        const critical = cat.expiring1 > 5;
        const riskPct = Math.round(((cat.expiring1 + cat.expiring7) / cat.total) * 100);
        return (
          <motion.div
            key={cat.name}
            initial={{ opacity: 0, y: 8 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: i * 0.08, duration: 0.4 }}
            className={`flex items-center gap-3 rounded-2xl border p-3 ${
              critical ? "border-red-200 bg-red-50" : "border-slate-200 bg-slate-50"
            }`}
          >
            <div className="flex min-w-0 flex-1 flex-col gap-1">
              <div className="flex items-center gap-1.5">
                {critical && <AlertTriangle className="h-3 w-3 shrink-0 text-red-500" />}
                <span className="truncate text-xs font-semibold text-slate-800">{cat.name}</span>
                <span className="ml-auto shrink-0 flex items-center gap-1 text-xs text-slate-400">
                  <Package className="h-3 w-3" />
                  {cat.total}
                </span>
              </div>
              <div className="flex h-2 w-full overflow-hidden rounded-full bg-slate-200">
                <motion.div
                  initial={{ width: 0 }}
                  animate={{ width: `${(cat.expiring1 / cat.total) * 100}%` }}
                  transition={{ delay: i * 0.08 + 0.3, duration: 0.6 }}
                  className="bg-red-500"
                />
                <motion.div
                  initial={{ width: 0 }}
                  animate={{ width: `${(cat.expiring7 / cat.total) * 100}%` }}
                  transition={{ delay: i * 0.08 + 0.4, duration: 0.6 }}
                  className="bg-amber-400"
                />
                <motion.div
                  initial={{ width: 0 }}
                  animate={{ width: `${(cat.expiring14 / cat.total) * 100}%` }}
                  transition={{ delay: i * 0.08 + 0.5, duration: 0.6 }}
                  className="bg-emerald-400"
                />
              </div>
              <p className="text-[10px] text-slate-400">
                {riskPct}% под риском списания
              </p>
            </div>
            <div className="shrink-0 text-right text-xs">
              <span className="block font-bold text-red-600">{cat.expiring1}</span>
              <span className="text-slate-400">критич.</span>
            </div>
          </motion.div>
        );
      })}

      <div className="flex items-center justify-between rounded-xl bg-slate-50 border border-slate-200 px-3 py-2">
        <span className="text-[11px] text-slate-500">Всего SKU на складе</span>
        <span className="text-sm font-bold text-slate-800">{totalSKU.toLocaleString("ru-RU")}</span>
      </div>
    </div>
  );
}
