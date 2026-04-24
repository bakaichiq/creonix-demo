"use client";

import { motion } from "framer-motion";
import { Tractor, CloudRain, Sun, AlertCircle } from "lucide-react";

const fields = [
  { name: "Поле А-1", crop: "Пшеница озимая", ha: 42, stage: "Колошение", progress: 78, risk: "low", yield: "38 ц/га" },
  { name: "Поле А-2", crop: "Ячмень", ha: 36, stage: "Уборка", progress: 94, risk: "low", yield: "29 ц/га" },
  { name: "Поле Б-1", crop: "Подсолнечник", ha: 58, stage: "Цветение", progress: 61, risk: "medium", yield: "прогноз 22 ц/га" },
  { name: "Поле Б-2", crop: "Кукуруза", ha: 44, stage: "Вегетация", progress: 42, risk: "low", yield: "прогноз 64 ц/га" },
  { name: "Поле В-1", crop: "Рапс яровой", ha: 29, stage: "Засуха ⚠", progress: 35, risk: "high", yield: "риск недобора" },
  { name: "Поле В-2", crop: "Горох", ha: 21, stage: "Подготовка", progress: 12, risk: "low", yield: "ожид. 28 ц/га" },
];

const stageIcon = (risk: string) => {
  if (risk === "high") return <AlertCircle className="h-4 w-4 text-red-500 shrink-0" />;
  if (risk === "medium") return <CloudRain className="h-4 w-4 text-amber-500 shrink-0" />;
  return <Sun className="h-4 w-4 text-lime-500 shrink-0" />;
};

export function AgroFields() {
  const totalHa = fields.reduce((s, f) => s + f.ha, 0);
  const highRisk = fields.filter((f) => f.risk === "high").length;
  const mediumRisk = fields.filter((f) => f.risk === "medium").length;
  const avgProgress = Math.round(fields.reduce((s, f) => s + f.progress, 0) / fields.length);

  return (
    <div>
      <div className="mb-3 flex flex-wrap items-start justify-between gap-2">
        <div>
          <p className="text-sm font-semibold text-slate-700">Состояние полей и прогноз урожая</p>
          <p className="mt-1 text-xs text-slate-500">Риски по погоде и фазе роста в одном коротком обзоре.</p>
        </div>
        <div className="flex items-center gap-1.5 text-xs text-slate-500">
          <Tractor className="h-3.5 w-3.5" />
          <span>{fields.length} полей активно</span>
        </div>
      </div>

      {/* Summary stats */}
      <div className="mb-3 grid grid-cols-4 divide-x divide-slate-200 rounded-xl border border-slate-200 bg-slate-50 text-center">
        <div className="px-2 py-2">
          <p className="text-base font-bold text-slate-900">{totalHa}</p>
          <p className="text-[10px] text-slate-400">га всего</p>
        </div>
        <div className="px-2 py-2">
          <p className="text-base font-bold text-lime-600">{avgProgress}%</p>
          <p className="text-[10px] text-slate-400">Ср. прогр.</p>
        </div>
        <div className="px-2 py-2">
          <p className="text-base font-bold text-amber-500">{mediumRisk}</p>
          <p className="text-[10px] text-slate-400">Внимание</p>
        </div>
        <div className="px-2 py-2">
          <p className="text-base font-bold text-red-500">{highRisk}</p>
          <p className="text-[10px] text-slate-400">Критично</p>
        </div>
      </div>

      <div className="grid gap-2 sm:grid-cols-2 lg:grid-cols-3">
        {fields.map((field, i) => (
          <motion.div
            key={field.name}
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: i * 0.08, duration: 0.4 }}
            className={`rounded-2xl border p-3 ${
              field.risk === "high"
                ? "border-red-200 bg-red-50"
                : field.risk === "medium"
                ? "border-amber-200 bg-amber-50"
                : "border-lime-200 bg-lime-50"
            }`}
          >
            <div className="flex items-start justify-between gap-1 mb-2">
              <div className="min-w-0">
                <p className="text-xs font-bold text-slate-800">{field.name}</p>
                <p className="text-[11px] text-slate-500 truncate">{field.crop} · {field.ha} га</p>
              </div>
              {stageIcon(field.risk)}
            </div>
            <div className="flex items-center gap-2 mb-1.5">
              <div className="h-1.5 flex-1 overflow-hidden rounded-full bg-white/70">
                <motion.div
                  initial={{ width: 0 }}
                  animate={{ width: `${field.progress}%` }}
                  transition={{ delay: i * 0.08 + 0.3, duration: 0.7, ease: "easeOut" }}
                  className={`h-full rounded-full ${
                    field.risk === "high" ? "bg-red-400" : field.risk === "medium" ? "bg-amber-400" : "bg-lime-500"
                  }`}
                />
              </div>
              <span className="shrink-0 text-[11px] font-bold text-slate-700">{field.progress}%</span>
            </div>
            <p className={`text-[10px] font-medium truncate ${
              field.risk === "high" ? "text-red-600" : "text-slate-500"
            }`}>
              {field.stage} · {field.yield}
            </p>
          </motion.div>
        ))}
      </div>
    </div>
  );
}
