"use client";

import {
  Bar,
  BarChart,
  CartesianGrid,
  LabelList,
  Legend,
  ResponsiveContainer,
  Tooltip,
  XAxis,
  YAxis
} from "recharts";

import type { PlanFactPoint } from "@/lib/types";
import { chartTooltipStyle } from "@/lib/utils";

interface PlanFactChartProps {
  data: PlanFactPoint[];
  colors: [string, string, string];
}

function CustomLabel({ x, y, width, value }: { x?: number; y?: number; width?: number; value?: number }) {
  if (!value || !x || !y || !width) return null;
  return (
    <text
      x={x + width / 2}
      y={y - 4}
      fill="#64748b"
      textAnchor="middle"
      fontSize={10}
      fontWeight={600}
    >
      {value >= 1000 ? `${Math.round(value / 1000)}k` : value}
    </text>
  );
}

export function PlanFactChart({ data, colors }: PlanFactChartProps) {
  return (
    <div>
      <div className="h-[250px] w-full">
        <ResponsiveContainer width="100%" height="100%">
          <BarChart data={data} barGap={4} margin={{ top: 20, right: 8, left: -8, bottom: 0 }}>
            <CartesianGrid strokeDasharray="3 3" stroke="#e2e8f0" vertical={false} />
            <XAxis dataKey="name" tickLine={false} axisLine={false} tick={{ fill: "#64748b", fontSize: 12 }} />
            <YAxis tickLine={false} axisLine={false} tick={{ fill: "#64748b", fontSize: 12 }} />
            <Tooltip contentStyle={chartTooltipStyle} />
            <Legend wrapperStyle={{ paddingTop: 12, fontSize: 12 }} iconType="circle" />
            <Bar radius={[6, 6, 0, 0]} dataKey="plan" fill={colors[1]} name="План" fillOpacity={0.7}>
              <LabelList content={<CustomLabel />} />
            </Bar>
            <Bar radius={[6, 6, 0, 0]} dataKey="fact" fill={colors[0]} name="Факт">
              <LabelList content={<CustomLabel />} />
            </Bar>
          </BarChart>
        </ResponsiveContainer>
      </div>
    </div>
  );
}
