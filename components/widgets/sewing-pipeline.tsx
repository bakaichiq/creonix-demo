"use client";

import { motion } from "framer-motion";

const stages = ["Раскрой", "Пошив", "ОТК", "Упаковка"];

const batches: { stage: number; id: string; item: string; qty: number; due: string; urgent: boolean }[] = [
  { stage: 0, id: "П-441", item: "Куртки зимние", qty: 240, due: "Сег", urgent: true },
  { stage: 0, id: "П-438", item: "Брюки классика", qty: 180, due: "Зав", urgent: false },
  { stage: 0, id: "П-436", item: "Блузки шёлк", qty: 96, due: "+2д", urgent: false },
  { stage: 1, id: "П-432", item: "Платья вечер", qty: 60, due: "Сег", urgent: true },
  { stage: 1, id: "П-429", item: "Костюм двойка", qty: 120, due: "Зав", urgent: false },
  { stage: 1, id: "П-427", item: "Юбки плиссе", qty: 144, due: "+3д", urgent: false },
  { stage: 2, id: "П-421", item: "Худи оверсайз", qty: 300, due: "Сег", urgent: false },
  { stage: 2, id: "П-419", item: "Пальто кашемир", qty: 48, due: "Зав", urgent: false },
  { stage: 2, id: "П-416", item: "Джинсы slim", qty: 192, due: "+4д", urgent: false },
  { stage: 3, id: "П-412", item: "Футболки базовые", qty: 480, due: "Зав", urgent: false },
  { stage: 3, id: "П-409", item: "Толстовки свитшот", qty: 216, due: "+2д", urgent: false },
  { stage: 3, id: "П-407", item: "Шорты льняные", qty: 144, due: "+3д", urgent: false },
];

const totalQty = batches.reduce((s, b) => s + b.qty, 0);
const urgentCount = batches.filter((b) => b.urgent).length;

export function SewingPipeline() {
  return (
    <div>
      <div className="mb-3 flex flex-wrap items-start justify-between gap-2">
        <div>
          <p className="text-sm font-semibold text-slate-700">Партии по стадиям производства</p>
          <p className="mt-1 text-xs text-slate-500">Быстро показывает перегруз и срочные партии на линии.</p>
        </div>
        <div className="flex flex-wrap items-center gap-2 text-[10px]">
          <span className="rounded-full bg-fuchsia-100 px-2 py-0.5 font-semibold text-fuchsia-700">
            {batches.length} партий
          </span>
          <span className="rounded-full bg-slate-100 px-2 py-0.5 font-semibold text-slate-600">
            {totalQty.toLocaleString("ru-RU")} шт
          </span>
          {urgentCount > 0 && (
            <span className="rounded-full bg-red-100 px-2 py-0.5 font-semibold text-red-600">
              {urgentCount} срочных
            </span>
          )}
        </div>
      </div>

      <div className="grid grid-cols-2 gap-2 md:grid-cols-4">
        {stages.map((stage, si) => {
          const stageBatches = batches.filter((b) => b.stage === si);
          const stageQty = stageBatches.reduce((s, b) => s + b.qty, 0);
          const stageUrgent = stageBatches.filter((b) => b.urgent).length;
          return (
            <div key={stage} className="flex flex-col gap-2">
              <div className="rounded-xl bg-fuchsia-50 px-2 py-1.5">
                <div className="flex items-center justify-between gap-1">
                  <span className="text-xs font-semibold text-fuchsia-700">{stage}</span>
                  <span className="rounded-full bg-fuchsia-100 px-1.5 py-0.5 text-[10px] text-fuchsia-600">
                    {stageBatches.length}
                  </span>
                </div>
                <div className="mt-0.5 flex items-center justify-between gap-1">
                  <span className="text-[10px] text-fuchsia-500">{stageQty} шт</span>
                  {stageUrgent > 0 && (
                    <span className="rounded-full bg-red-100 px-1 py-0.5 text-[9px] font-bold text-red-600">
                      ⚡{stageUrgent}
                    </span>
                  )}
                </div>
              </div>
              <div className="flex flex-col gap-1.5">
                {stageBatches.map((b, i) => (
                  <motion.div
                    key={b.id}
                    initial={{ opacity: 0, y: 8 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: si * 0.05 + i * 0.07, duration: 0.35 }}
                    className={`rounded-xl border p-2.5 ${
                      b.urgent
                        ? "border-red-200 bg-red-50"
                        : "border-slate-200 bg-white"
                    }`}
                  >
                    <div className="flex items-start justify-between gap-1 mb-1">
                      <span className="text-[10px] font-bold text-slate-400">{b.id}</span>
                      <span
                        className={`rounded-full px-1.5 py-0.5 text-[9px] font-semibold ${
                          b.due === "Сег"
                            ? "bg-red-100 text-red-600"
                            : b.due === "Зав"
                            ? "bg-amber-100 text-amber-600"
                            : "bg-slate-100 text-slate-500"
                        }`}
                      >
                        {b.due}
                      </span>
                    </div>
                    <p className="text-[11px] font-medium leading-tight text-slate-800">{b.item}</p>
                    <p className="mt-0.5 text-[10px] text-slate-400">{b.qty} шт.</p>
                  </motion.div>
                ))}
              </div>
            </div>
          );
        })}
      </div>

      {/* Flow progress bar */}
      <div className="mt-3 flex gap-1 rounded-xl overflow-hidden">
        {stages.map((stage, si) => {
          const stageBatches = batches.filter((b) => b.stage === si);
          const pct = Math.round((stageBatches.length / batches.length) * 100);
          return (
            <motion.div
              key={stage}
              initial={{ width: 0 }}
              animate={{ width: `${pct}%` }}
              transition={{ delay: si * 0.1 + 0.5, duration: 0.5, ease: "easeOut" }}
              className="flex h-1.5 items-center justify-center rounded-full bg-fuchsia-400 opacity-60"
              title={`${stage}: ${pct}%`}
            />
          );
        })}
      </div>
    </div>
  );
}
