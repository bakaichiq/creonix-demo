"use client";

import { useId } from "react";
import {
  Area,
  AreaChart,
  CartesianGrid,
  ResponsiveContainer,
  Tooltip,
  XAxis,
  YAxis
} from "recharts";

import type { RevenuePoint } from "@/lib/types";
import { chartTooltipStyle, formatCompactSom } from "@/lib/utils";

interface RevenueChartProps {
  data: RevenuePoint[];
  colors: [string, string, string];
  currency?: string;
}

export function RevenueChart({ data, colors, currency = "сом" }: RevenueChartProps) {
  const chartId = useId().replace(/:/g, "");
  const revenueFillId = `revenue-fill-${chartId}`;
  const expenseFillId = `expense-fill-${chartId}`;

  return (
    <div>
      {/* Legend */}
      <div className="mb-3 flex flex-wrap gap-3 text-[11px] text-slate-600">
        <span className="flex items-center gap-1.5">
          <span className="h-2.5 w-2.5 rounded-full" style={{ backgroundColor: colors[0] }} />
          Выручка
        </span>
        <span className="flex items-center gap-1.5">
          <span className="h-2.5 w-2.5 rounded-full" style={{ backgroundColor: colors[1] }} />
          Расходы
        </span>
      </div>

      <div className="h-[250px] w-full">
        <ResponsiveContainer width="100%" height="100%">
          <AreaChart data={data} margin={{ top: 8, right: 8, left: 0, bottom: 0 }}>
            <defs>
              <linearGradient id={revenueFillId} x1="0" y1="0" x2="0" y2="1">
                <stop offset="5%" stopColor={colors[0]} stopOpacity={0.32} />
                <stop offset="95%" stopColor={colors[0]} stopOpacity={0.02} />
              </linearGradient>
              <linearGradient id={expenseFillId} x1="0" y1="0" x2="0" y2="1">
                <stop offset="5%" stopColor={colors[1]} stopOpacity={0.24} />
                <stop offset="95%" stopColor={colors[1]} stopOpacity={0.02} />
              </linearGradient>
            </defs>
            <CartesianGrid strokeDasharray="3 3" stroke="#e2e8f0" vertical={false} />
            <XAxis dataKey="name" tickLine={false} axisLine={false} tick={{ fill: "#64748b", fontSize: 12 }} />
            <YAxis
              tickFormatter={(value) => `${formatCompactSom(value)}`}
              tickLine={false}
              axisLine={false}
              width={60}
              tick={{ fill: "#64748b", fontSize: 12 }}
            />
            <Tooltip
              contentStyle={chartTooltipStyle}
              formatter={(value: number) => [`${value.toLocaleString("ru-RU")} ${currency}`, ""]}
            />
            <Area type="monotone" dataKey="expenses" stroke={colors[1]} fill={`url(#${expenseFillId})`} strokeWidth={2} name="Расходы" />
            <Area type="monotone" dataKey="revenue" stroke={colors[0]} fill={`url(#${revenueFillId})`} strokeWidth={2.5} name="Выручка" />
          </AreaChart>
        </ResponsiveContainer>
      </div>
    </div>
  );
}
