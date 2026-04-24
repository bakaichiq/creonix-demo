"use client";

import { useState } from "react";
import {
  CartesianGrid,
  Legend,
  Line,
  LineChart,
  ResponsiveContainer,
  Tooltip,
  XAxis,
  YAxis
} from "recharts";

import type { ForecastPoint } from "@/lib/types";
import { chartTooltipStyle } from "@/lib/utils";

interface BiOverviewChartProps {
  data: ForecastPoint[];
  colors: [string, string, string];
}

const SERIES = [
  { key: "previous", name: "Прошлый период" },
  { key: "current", name: "Текущий период" },
  { key: "forecast", name: "Прогноз" },
] as const;

type SeriesKey = typeof SERIES[number]["key"];

export function BiOverviewChart({ data, colors }: BiOverviewChartProps) {
  const [hidden, setHidden] = useState<Set<SeriesKey>>(new Set());

  const toggle = (key: SeriesKey) => {
    setHidden((prev) => {
      const next = new Set(prev);
      if (next.has(key)) next.delete(key);
      else next.add(key);
      return next;
    });
  };

  const seriesColors: Record<SeriesKey, string> = {
    previous: colors[1],
    current: colors[0],
    forecast: colors[2],
  };

  return (
    <div>
      {/* Interactive legend */}
      <div className="mb-3 flex flex-wrap gap-2">
        {SERIES.map((s) => {
          const isHidden = hidden.has(s.key);
          return (
            <button
              key={s.key}
              onClick={() => toggle(s.key)}
              className={`flex items-center gap-1.5 rounded-full border px-2.5 py-1 text-[11px] font-medium transition-all ${
                isHidden
                  ? "border-slate-200 bg-slate-50 text-slate-400 opacity-50"
                  : "border-slate-200 bg-white text-slate-700 shadow-sm hover:border-slate-300"
              }`}
            >
              <span
                className="h-2.5 w-2.5 rounded-full"
                style={{ backgroundColor: isHidden ? "#cbd5e1" : seriesColors[s.key] }}
              />
              {s.name}
            </button>
          );
        })}
      </div>

      <div className="h-[260px] w-full">
        <ResponsiveContainer width="100%" height="100%">
          <LineChart data={data} margin={{ top: 8, right: 8, left: -8, bottom: 0 }}>
            <CartesianGrid strokeDasharray="3 3" stroke="#e2e8f0" vertical={false} />
            <XAxis dataKey="name" tickLine={false} axisLine={false} tick={{ fill: "#64748b", fontSize: 12 }} />
            <YAxis tickLine={false} axisLine={false} tick={{ fill: "#64748b", fontSize: 12 }} />
            <Tooltip contentStyle={chartTooltipStyle} />
            {!hidden.has("previous") && (
              <Line
                type="monotone"
                dataKey="previous"
                stroke={colors[1]}
                strokeWidth={2}
                dot={false}
                name="Прошлый период"
                strokeDasharray="4 2"
              />
            )}
            {!hidden.has("current") && (
              <Line
                type="monotone"
                dataKey="current"
                stroke={colors[0]}
                strokeWidth={3}
                name="Текущий период"
                dot={{ r: 3, fill: colors[0] }}
                activeDot={{ r: 5 }}
              />
            )}
            {!hidden.has("forecast") && (
              <Line
                type="monotone"
                dataKey="forecast"
                stroke={colors[2]}
                strokeDasharray="6 6"
                strokeWidth={2}
                name="Прогноз"
                dot={false}
                strokeOpacity={0.8}
              />
            )}
          </LineChart>
        </ResponsiveContainer>
      </div>
    </div>
  );
}
