"use client";

import { useState } from "react";
import { motion } from "framer-motion";

const timeSlots = ["08–11", "11–14", "14–17", "17–21", "21–23"];
const stations = ["Холодная кухня", "Горячая кухня", "Гриль", "Кондитерская"];

// Load % matrix [station][timeSlot]
const matrix = [
  [30, 82, 55, 71, 20],
  [45, 96, 70, 98, 35],
  [10, 74, 50, 88, 42],
  [60, 45, 35, 30, 65],
];

function getHeatColor(value: number) {
  if (value >= 90) return { bg: "bg-red-500", text: "text-white" };
  if (value >= 70) return { bg: "bg-orange-400", text: "text-white" };
  if (value >= 50) return { bg: "bg-amber-300", text: "text-slate-900" };
  if (value >= 30) return { bg: "bg-yellow-100", text: "text-slate-700" };
  return { bg: "bg-slate-100", text: "text-slate-400" };
}

export function RestaurantHeatmap() {
  const [hoveredRow, setHoveredRow] = useState<number | null>(null);
  const [hoveredCol, setHoveredCol] = useState<number | null>(null);

  // Peak slot per station
  const peakSlot = matrix.map((row) => row.indexOf(Math.max(...row)));

  // Average load per time slot
  const slotAvg = timeSlots.map((_, ti) =>
    Math.round(matrix.reduce((sum, row) => sum + row[ti], 0) / stations.length)
  );

  // Peak time overall
  const peakTime = timeSlots[slotAvg.indexOf(Math.max(...slotAvg))];

  return (
    <div>
      <div className="mb-3 flex flex-wrap items-start justify-between gap-2">
        <div>
          <p className="text-sm font-semibold text-slate-700">Загрузка кухни по станциям и времени</p>
          <p className="mt-1 text-xs text-slate-500">Пиковые окна читаются сразу, без отдельного отчета.</p>
        </div>
        <div className="flex items-center gap-2 text-[10px] text-slate-400">
          <span className="flex h-3 w-3 rounded bg-slate-100 border border-slate-200" />
          <span>0%</span>
          <span className="flex h-3 w-5 rounded bg-gradient-to-r from-yellow-200 via-orange-400 to-red-500" />
          <span>100%</span>
        </div>
      </div>

      {/* Peak summary */}
      <div className="mb-3 flex flex-wrap gap-2">
        <div className="flex items-center gap-1.5 rounded-full bg-red-50 px-2.5 py-1 text-[11px] font-medium text-red-600">
          <span className="h-1.5 w-1.5 rounded-full bg-red-500" />
          Пик: {peakTime}
        </div>
        <div className="flex items-center gap-1.5 rounded-full bg-slate-50 px-2.5 py-1 text-[11px] text-slate-500">
          Макс. загрузка: {Math.max(...matrix.flat())}%
        </div>
      </div>

      {/* Mobile scroll hint */}
      <div className="mb-1 block text-[10px] text-slate-400 sm:hidden">← прокрутите вправо</div>

      <div className="overflow-x-auto">
        <div className="min-w-[380px]">
          {/* Time header */}
          <div className="mb-1 grid grid-cols-[110px,repeat(5,1fr)] gap-1.5">
            <div />
            {timeSlots.map((t, ti) => (
              <div
                key={t}
                className={`text-center text-[10px] font-semibold transition-colors ${
                  hoveredCol === ti ? "text-rose-600" : "text-slate-400"
                }`}
              >
                {t}
                {slotAvg[ti] >= 70 && (
                  <span className="ml-0.5 text-[8px] text-orange-500">▲</span>
                )}
              </div>
            ))}
          </div>

          <div className="space-y-1.5">
            {stations.map((station, si) => (
              <div
                key={station}
                className={`grid grid-cols-[110px,repeat(5,1fr)] gap-1.5 rounded-xl transition-colors ${
                  hoveredRow === si ? "bg-rose-50/50" : ""
                }`}
                onMouseEnter={() => setHoveredRow(si)}
                onMouseLeave={() => setHoveredRow(null)}
              >
                <div className="flex items-center gap-1">
                  {peakSlot[si] === hoveredCol && (
                    <span className="h-1.5 w-1.5 rounded-full bg-red-400 shrink-0" />
                  )}
                  <span className="text-[11px] font-medium text-slate-600 leading-tight">{station}</span>
                </div>
                {matrix[si].map((val, ti) => {
                  const { bg, text } = getHeatColor(val);
                  const isHighlighted = hoveredRow === si || hoveredCol === ti;
                  return (
                    <motion.div
                      key={ti}
                      initial={{ opacity: 0, scale: 0.85 }}
                      animate={{ opacity: 1, scale: 1 }}
                      transition={{ delay: si * 0.05 + ti * 0.04, duration: 0.3 }}
                      className={`flex h-10 cursor-default items-center justify-center rounded-xl transition-all ${bg} ${
                        isHighlighted ? "ring-2 ring-white ring-offset-1 shadow-sm" : ""
                      }`}
                      title={`${station} · ${timeSlots[ti]}: ${val}% загрузка`}
                      onMouseEnter={() => setHoveredCol(ti)}
                      onMouseLeave={() => setHoveredCol(null)}
                    >
                      <span className={`text-xs font-semibold ${text}`}>{val}%</span>
                    </motion.div>
                  );
                })}
              </div>
            ))}

            {/* Avg row */}
            <div className="mt-1 grid grid-cols-[110px,repeat(5,1fr)] gap-1.5 border-t border-slate-100 pt-1.5">
              <span className="text-[10px] font-semibold text-slate-400 uppercase tracking-wide flex items-end pb-0.5">Ср. загр.</span>
              {slotAvg.map((avg, ti) => (
                <div
                  key={ti}
                  className={`text-center text-[11px] font-bold transition-colors ${
                    hoveredCol === ti ? "text-rose-600" : avg >= 70 ? "text-orange-500" : "text-slate-500"
                  }`}
                >
                  {avg}%
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>

      <p className="mt-2 text-right text-[10px] text-slate-400">Данные за сегодня · обновлено 10 мин назад</p>
    </div>
  );
}
