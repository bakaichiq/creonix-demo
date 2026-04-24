"use client";

import { motion } from "framer-motion";
import { MapPin, Clock, Truck, CheckCircle2, AlertTriangle } from "lucide-react";

const routes = [
  { id: "R-2241", courier: "Алимов Д.", zone: "Центр", orders: 12, done: 9, status: "active", eta: "14:30", late: false },
  { id: "R-2238", courier: "Нуров Б.", zone: "Сев. район", orders: 8, done: 8, status: "done", eta: "13:55", late: false },
  { id: "R-2235", courier: "Адилов К.", zone: "Мкр. Таш", orders: 15, done: 7, status: "active", eta: "15:10", late: false },
  { id: "R-2232", courier: "Хасанов Р.", zone: "Юг-2", orders: 11, done: 4, status: "delayed", eta: "15:44", late: true },
  { id: "R-2229", courier: "Юсупов Г.", zone: "Аэропорт", orders: 6, done: 6, status: "done", eta: "13:20", late: false },
  { id: "R-2226", courier: "Рахимов Ф.", zone: "Пром. зона", orders: 9, done: 2, status: "delayed", eta: "16:20", late: true },
];

const statusConfig = {
  active: { label: "В пути", bg: "bg-cyan-100", text: "text-cyan-700", bar: "bg-cyan-500" },
  done: { label: "Завершён", bg: "bg-emerald-100", text: "text-emerald-700", bar: "bg-emerald-500" },
  delayed: { label: "Просрочка", bg: "bg-red-100", text: "text-red-600", bar: "bg-red-500" },
};

export function LogisticsRoutes() {
  const totalOrders = routes.reduce((s, r) => s + r.orders, 0);
  const totalDone = routes.reduce((s, r) => s + r.done, 0);
  const activeCount = routes.filter((r) => r.status === "active").length;
  const delayedCount = routes.filter((r) => r.status === "delayed").length;
  const doneCount = routes.filter((r) => r.status === "done").length;
  const deliveryRate = Math.round((totalDone / totalOrders) * 100);

  return (
    <div>
      <div className="mb-3 flex items-start justify-between gap-2">
        <div className="flex items-center gap-2">
          <Truck className="h-4 w-4 text-cyan-600 shrink-0" />
          <div>
            <p className="text-sm font-semibold text-slate-700">Активные рейсы — реальное время</p>
            <p className="mt-1 text-xs text-slate-500">Маршруты, статус и ETA без переключения в журнал.</p>
          </div>
        </div>
        <span className="flex h-2 w-2 shrink-0 animate-pulse rounded-full bg-emerald-500 mt-1" />
      </div>

      {/* Summary stats */}
      <div className="mb-3 grid grid-cols-4 divide-x divide-slate-200 rounded-xl border border-slate-200 bg-slate-50 text-center">
        <div className="px-2 py-2">
          <p className="text-sm font-bold text-slate-900">{routes.length}</p>
          <p className="text-[10px] text-slate-400">Рейсов</p>
        </div>
        <div className="px-2 py-2">
          <p className="text-sm font-bold text-cyan-600">{activeCount}</p>
          <p className="text-[10px] text-slate-400">В пути</p>
        </div>
        <div className="px-2 py-2">
          <p className="text-sm font-bold text-red-500">{delayedCount}</p>
          <p className="text-[10px] text-slate-400">Задержка</p>
        </div>
        <div className="px-2 py-2">
          <p className="text-sm font-bold text-emerald-600">{deliveryRate}%</p>
          <p className="text-[10px] text-slate-400">Выполнено</p>
        </div>
      </div>

      {/* Overall delivery progress */}
      <div className="mb-3 flex items-center gap-2">
        <div className="h-1.5 flex-1 overflow-hidden rounded-full bg-slate-200">
          <motion.div
            initial={{ width: 0 }}
            animate={{ width: `${deliveryRate}%` }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            className="h-full rounded-full bg-cyan-500"
          />
        </div>
        <span className="shrink-0 text-[11px] font-semibold text-slate-600">{totalDone}/{totalOrders} заказов</span>
      </div>

      <div className="space-y-2">
        {routes.map((r, i) => {
          const cfg = statusConfig[r.status as keyof typeof statusConfig];
          const pct = Math.round((r.done / r.orders) * 100);
          return (
            <motion.div
              key={r.id}
              initial={{ opacity: 0, x: 16 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: i * 0.07, duration: 0.35 }}
              className={`rounded-2xl border p-3 transition-colors ${r.late ? "border-red-200 bg-red-50" : "border-slate-200 bg-slate-50"}`}
            >
              <div className="flex items-center gap-3">
                <div className="flex flex-col items-center justify-center min-w-[38px]">
                  <span className="text-[10px] font-bold text-slate-400">{r.id}</span>
                  {r.status === "done" && <CheckCircle2 className="mt-0.5 h-3.5 w-3.5 text-emerald-500" />}
                  {r.late && <AlertTriangle className="mt-0.5 h-3.5 w-3.5 text-red-400" />}
                </div>

                <div className="min-w-0 flex-1">
                  <div className="flex items-center gap-2 mb-1">
                    <span className="text-xs font-semibold text-slate-800 truncate">{r.courier}</span>
                    <div className="flex items-center gap-0.5 text-[10px] text-slate-400 shrink-0">
                      <MapPin className="h-2.5 w-2.5" />
                      {r.zone}
                    </div>
                    <span className={`ml-auto shrink-0 rounded-full px-2 py-0.5 text-[10px] font-semibold ${cfg.bg} ${cfg.text}`}>
                      {cfg.label}
                    </span>
                  </div>
                  <div className="flex items-center gap-2">
                    <div className="h-1.5 flex-1 overflow-hidden rounded-full bg-white">
                      <motion.div
                        initial={{ width: 0 }}
                        animate={{ width: `${pct}%` }}
                        transition={{ delay: i * 0.07 + 0.3, duration: 0.6, ease: "easeOut" }}
                        className={`h-full rounded-full ${cfg.bar}`}
                      />
                    </div>
                    <span className="shrink-0 text-[11px] text-slate-500">{r.done}/{r.orders}</span>
                    <div className={`flex items-center gap-0.5 text-[10px] shrink-0 ${r.late ? "text-red-600 font-semibold" : "text-slate-400"}`}>
                      <Clock className="h-2.5 w-2.5" />
                      {r.eta}
                    </div>
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
