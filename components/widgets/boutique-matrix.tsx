"use client";

import { useState } from "react";
import { motion } from "framer-motion";

const sizes = ["XS", "S", "M", "L", "XL", "XXL"];

const collections = [
  {
    name: "SS'25 Capsule",
    stock: [12, 34, 48, 41, 22, 8],
    threshold: { low: 10, ok: 25 },
  },
  {
    name: "AW'24 Velvet",
    stock: [3, 8, 17, 21, 14, 5],
    threshold: { low: 5, ok: 15 },
  },
  {
    name: "Basics Essentials",
    stock: [44, 72, 88, 75, 51, 29],
    threshold: { low: 20, ok: 40 },
  },
  {
    name: "Resort Minimal",
    stock: [0, 4, 11, 9, 6, 0],
    threshold: { low: 5, ok: 15 },
  },
];

function getColor(stock: number, low: number, ok: number) {
  if (stock === 0) return { bg: "bg-slate-100", text: "text-slate-400", border: "border-slate-200" };
  if (stock < low) return { bg: "bg-red-50", text: "text-red-600", border: "border-red-200" };
  if (stock < ok) return { bg: "bg-amber-50", text: "text-amber-700", border: "border-amber-200" };
  return { bg: "bg-violet-50", text: "text-violet-700", border: "border-violet-200" };
}

export function BoutiqueMatrix() {
  const [hoveredCol, setHoveredCol] = useState<number | null>(null);
  const [hoveredRow, setHoveredRow] = useState<number | null>(null);

  // Aggregate totals per size (column)
  const sizeTotals = sizes.map((_, si) =>
    collections.reduce((sum, col) => sum + col.stock[si], 0)
  );
  const totalAllSizes = sizeTotals.reduce((a, b) => a + b, 0);

  // Count critical cells
  const criticalCount = collections.reduce((acc, col) =>
    acc + col.stock.filter((qty, si) => qty > 0 && qty < col.threshold.low).length, 0
  );

  return (
    <div>
      <div className="mb-3 flex flex-wrap items-start justify-between gap-2">
        <div>
          <p className="text-sm font-semibold text-slate-700">Матрица остатков по размерам</p>
          <p className="mt-1 text-xs text-slate-500">Сразу видно, где коллекция теряет ключевые размеры.</p>
        </div>
        <div className="flex flex-wrap items-center gap-x-3 gap-y-1 text-xs text-slate-500">
          <span className="flex items-center gap-1"><span className="inline-block h-2 w-2 rounded bg-violet-200" />Норма</span>
          <span className="flex items-center gap-1"><span className="inline-block h-2 w-2 rounded bg-amber-300" />Мало</span>
          <span className="flex items-center gap-1"><span className="inline-block h-2 w-2 rounded bg-red-300" />Критично</span>
          {criticalCount > 0 && (
            <span className="rounded-full bg-red-100 px-2 py-0.5 text-[10px] font-semibold text-red-600">
              {criticalCount} крит. позиций
            </span>
          )}
        </div>
      </div>

      {/* Mobile scroll hint */}
      <div className="mb-1 block text-[10px] text-slate-400 sm:hidden">← прокрутите вправо</div>

      <div className="overflow-x-auto">
        <div className="min-w-[360px]">
          {/* Sizes header */}
          <div className="mb-1 grid grid-cols-[1fr,repeat(6,44px)] gap-1 px-1">
            <div />
            {sizes.map((s, si) => (
              <div
                key={s}
                className={`text-center text-[10px] font-semibold transition-colors ${
                  hoveredCol === si ? "text-violet-600" : "text-slate-400"
                }`}
              >
                {s}
              </div>
            ))}
          </div>

          <div className="space-y-1.5">
            {collections.map((col, ci) => (
              <motion.div
                key={col.name}
                initial={{ opacity: 0, x: -12 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: ci * 0.1, duration: 0.4 }}
                className={`grid grid-cols-[1fr,repeat(6,44px)] items-center gap-1 rounded-xl transition-colors ${
                  hoveredRow === ci ? "bg-violet-50/50" : ""
                }`}
                onMouseEnter={() => setHoveredRow(ci)}
                onMouseLeave={() => setHoveredRow(null)}
              >
                <span className="truncate pr-2 text-xs font-medium text-slate-700">{col.name}</span>
                {col.stock.map((qty, si) => {
                  const colors = getColor(qty, col.threshold.low, col.threshold.ok);
                  const isHighlighted = hoveredCol === si || hoveredRow === ci;
                  return (
                    <motion.div
                      key={si}
                      initial={{ scale: 0.8, opacity: 0 }}
                      animate={{ scale: 1, opacity: 1 }}
                      transition={{ delay: ci * 0.1 + si * 0.04, duration: 0.3 }}
                      className={`flex h-10 flex-col items-center justify-center rounded-xl border transition-all ${colors.bg} ${colors.border} ${
                        isHighlighted ? "ring-1 ring-violet-300 ring-offset-1" : ""
                      }`}
                      title={`${col.name} / ${sizes[si]} — ${qty} шт.`}
                      onMouseEnter={() => setHoveredCol(si)}
                      onMouseLeave={() => setHoveredCol(null)}
                    >
                      <span className={`text-xs font-bold ${colors.text}`}>{qty}</span>
                      <span className="text-[8px] text-slate-400">шт</span>
                    </motion.div>
                  );
                })}
              </motion.div>
            ))}

            {/* Totals row */}
            <div className="mt-1 grid grid-cols-[1fr,repeat(6,44px)] items-center gap-1 border-t border-slate-100 pt-1.5 px-1">
              <span className="text-[10px] font-semibold text-slate-400 uppercase tracking-wide">Итого</span>
              {sizeTotals.map((total, si) => (
                <div
                  key={si}
                  className={`text-center text-[11px] font-bold transition-colors ${
                    hoveredCol === si ? "text-violet-600" : "text-slate-600"
                  }`}
                >
                  {total}
                </div>
              ))}
            </div>
          </div>

          {/* Summary */}
          <div className="mt-3 flex items-center justify-between rounded-xl bg-slate-50 px-3 py-2">
            <span className="text-[11px] text-slate-500">Всего в наличии</span>
            <span className="text-sm font-bold text-slate-800">{totalAllSizes} шт.</span>
          </div>
        </div>
      </div>
    </div>
  );
}
