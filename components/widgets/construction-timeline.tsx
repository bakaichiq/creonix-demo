"use client";

import { motion } from "framer-motion";
import { AlertTriangle, CheckCircle2, Clock } from "lucide-react";

const objects = [
  {
    name: "Блок А — Монолит",
    stages: [
      { label: "Фундамент", done: true },
      { label: "Монолит", done: true },
      { label: "Инженерия", done: true },
      { label: "Отделка", done: false, progress: 72, delayed: false },
      { label: "Сдача", done: false, progress: 0, delayed: false },
    ],
    margin: "18.4 млн",
    status: "ok",
  },
  {
    name: "Блок В — Кровля",
    stages: [
      { label: "Фундамент", done: true },
      { label: "Монолит", done: true },
      { label: "Инженерия", done: false, progress: 48, delayed: true },
      { label: "Отделка", done: false, progress: 0, delayed: false },
      { label: "Сдача", done: false, progress: 0, delayed: false },
    ],
    margin: "11.1 млн",
    status: "warn",
  },
  {
    name: "Административный",
    stages: [
      { label: "Фундамент", done: true },
      { label: "Монолит", done: false, progress: 91, delayed: false },
      { label: "Инженерия", done: false, progress: 0, delayed: false },
      { label: "Отделка", done: false, progress: 0, delayed: false },
      { label: "Сдача", done: false, progress: 0, delayed: false },
    ],
    margin: "6.3 млн",
    status: "ok",
  },
  {
    name: "Паркинг Б",
    stages: [
      { label: "Фундамент", done: true },
      { label: "Монолит", done: true },
      { label: "Инженерия", done: true },
      { label: "Отделка", done: true },
      { label: "Сдача", done: false, progress: 30, delayed: true },
    ],
    margin: "3.7 млн",
    status: "critical",
  },
];

function calcCompletion(obj: typeof objects[0]) {
  const total = obj.stages.length;
  const done = obj.stages.filter((s) => s.done).length;
  const inProgress = obj.stages.find((s) => !s.done && "progress" in s && (s as any).progress > 0);
  const partial = inProgress ? ((inProgress as any).progress / 100) : 0;
  return Math.round(((done + partial) / total) * 100);
}

export function ConstructionTimeline() {
  const totalObjects = objects.length;
  const okCount = objects.filter((o) => o.status === "ok").length;
  const warnCount = objects.filter((o) => o.status === "warn").length;
  const critCount = objects.filter((o) => o.status === "critical").length;
  const avgCompletion = Math.round(objects.reduce((s, o) => s + calcCompletion(o), 0) / totalObjects);

  return (
    <div className="space-y-3">
      <div className="mb-4 flex flex-wrap items-start justify-between gap-2">
        <div>
          <p className="text-sm font-semibold text-slate-700">Статус объектов по этапам</p>
          <p className="mt-1 text-xs text-slate-500">Краткий срез по прогрессу и отставаниям на площадках.</p>
        </div>
        <div className="flex flex-wrap items-center gap-3 text-xs text-slate-500">
          <span className="flex items-center gap-1"><span className="h-2 w-2 rounded-full bg-sky-500 inline-block" />В работе</span>
          <span className="flex items-center gap-1"><span className="h-2 w-2 rounded-full bg-red-500 inline-block" />Отставание</span>
          <span className="flex items-center gap-1"><span className="h-2 w-2 rounded-full bg-slate-200 inline-block" />Не начат</span>
        </div>
      </div>

      {/* Summary */}
      <div className="grid grid-cols-4 divide-x divide-slate-200 rounded-xl border border-slate-200 bg-slate-50 text-center">
        <div className="px-2 py-2">
          <p className="text-base font-bold text-slate-900">{avgCompletion}%</p>
          <p className="text-[10px] text-slate-400">Ср. готовн.</p>
        </div>
        <div className="px-2 py-2">
          <p className="text-base font-bold text-emerald-600">{okCount}</p>
          <p className="text-[10px] text-slate-400">В норме</p>
        </div>
        <div className="px-2 py-2">
          <p className="text-base font-bold text-amber-500">{warnCount}</p>
          <p className="text-[10px] text-slate-400">Задержки</p>
        </div>
        <div className="px-2 py-2">
          <p className="text-base font-bold text-red-500">{critCount}</p>
          <p className="text-[10px] text-slate-400">Критично</p>
        </div>
      </div>

      {objects.map((obj, i) => {
        const completion = calcCompletion(obj);
        return (
          <motion.div
            key={obj.name}
            initial={{ opacity: 0, x: -16 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: i * 0.1, duration: 0.4 }}
            className="rounded-2xl border border-slate-200 bg-slate-50 p-4"
          >
            <div className="flex items-center justify-between gap-2 mb-3">
              <div className="flex items-center gap-2">
                {obj.status === "critical" ? (
                  <AlertTriangle className="h-4 w-4 shrink-0 text-red-500" />
                ) : obj.status === "warn" ? (
                  <Clock className="h-4 w-4 shrink-0 text-amber-500" />
                ) : (
                  <CheckCircle2 className="h-4 w-4 shrink-0 text-emerald-500" />
                )}
                <span className="text-sm font-semibold text-slate-900">{obj.name}</span>
              </div>
              <div className="flex items-center gap-2 shrink-0">
                <span className="text-xs text-slate-400">Маржа: {obj.margin}</span>
                <span className={`rounded-full px-2 py-0.5 text-[10px] font-bold ${
                  obj.status === "critical" ? "bg-red-100 text-red-600" :
                  obj.status === "warn" ? "bg-amber-100 text-amber-600" :
                  "bg-emerald-100 text-emerald-600"
                }`}>
                  {completion}%
                </span>
              </div>
            </div>
            <div className="flex gap-1.5">
              {obj.stages.map((stage) => {
                const isActive = !stage.done && "progress" in stage && (stage as any).progress > 0;
                const isDelayed = "delayed" in stage && stage.delayed;
                return (
                  <div key={stage.label} className="flex-1" title={`${stage.label}${isActive ? ` — ${(stage as any).progress}%` : stage.done ? " — завершён" : " — не начат"}`}>
                    <div
                      className={`relative h-2 rounded-full overflow-hidden ${
                        stage.done ? "bg-sky-500" : "bg-slate-200"
                      }`}
                    >
                      {isActive && (
                        <motion.div
                          initial={{ width: 0 }}
                          animate={{ width: `${(stage as any).progress}%` }}
                          transition={{ delay: i * 0.1 + 0.3, duration: 0.8, ease: "easeOut" }}
                          className={`absolute inset-y-0 left-0 rounded-full ${isDelayed ? "bg-red-400" : "bg-sky-400"}`}
                        />
                      )}
                    </div>
                    <p className="mt-1 text-center text-[10px] text-slate-400 truncate">{stage.label}</p>
                  </div>
                );
              })}
            </div>
          </motion.div>
        );
      })}
    </div>
  );
}
