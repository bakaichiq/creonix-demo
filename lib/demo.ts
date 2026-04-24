import type { DemoBusinessData } from "@/lib/types";

export type Timeframe = "today" | "week" | "month" | "quarter";

const timeframeMultipliers: Record<Timeframe, number> = {
  today: 1,
  week: 7.1,
  month: 30.5,
  quarter: 92.4
};

export function getTimeframeLabel(timeframe: Timeframe) {
  if (timeframe === "today") return "Сегодня";
  if (timeframe === "week") return "Неделя";
  if (timeframe === "month") return "Месяц";
  return "Квартал";
}

export function scaleStringValue(str: string, multiplier: number): string {
  if (!str) return str;

  const match = str.match(/^([^\d]*)(\d+(?:\.\d+)?)([^\d]*)$/);
  if (!match) return str;

  const num = parseFloat(match[2]);
  const newNum = (num * multiplier).toFixed(str.includes(".") ? 1 : 0);

  return `${match[1]}${newNum}${match[3]}`;
}

export function getScaledDemoData(initialDemo: DemoBusinessData, timeframe: Timeframe) {
  const multiplier = timeframeMultipliers[timeframe];

  if (multiplier === 1) {
    return initialDemo;
  }

  const scaled = JSON.parse(JSON.stringify(initialDemo)) as DemoBusinessData;

  scaled.kpis = scaled.kpis.map((kpi) => ({
    ...kpi,
    value: scaleStringValue(kpi.value, multiplier)
  }));

  scaled.revenueTrend = scaled.revenueTrend.map((point) => ({
    ...point,
    revenue: Math.round(point.revenue * multiplier),
    expenses: Math.round(point.expenses * multiplier),
    profit: Math.round(point.profit * multiplier)
  }));

  scaled.planFact = scaled.planFact.map((point) => ({
    ...point,
    plan: Math.round(point.plan * multiplier),
    fact: Math.round(point.fact * multiplier)
  }));

  scaled.finance.cashflow = scaled.finance.cashflow.map((row) => ({
    ...row,
    income: Math.round(row.income * multiplier),
    expense: Math.round(row.expense * multiplier),
    net: Math.round(row.net * multiplier)
  }));

  scaled.sales.summary = scaled.sales.summary.map((item) => ({
    ...item,
    value: scaleStringValue(item.value, multiplier)
  }));

  scaled.finance.rows = scaled.finance.rows.map((row) => ({
    ...row,
    plan: scaleStringValue(row.plan, multiplier),
    fact: scaleStringValue(row.fact, multiplier)
  }));

  return scaled;
}
