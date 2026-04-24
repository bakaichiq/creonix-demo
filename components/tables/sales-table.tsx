import { Badge } from "@/components/ui/badge";
import { TableHeader, TableRow, TableShell } from "@/components/tables/table-shell";
import type { SalesOrder } from "@/lib/types";

interface SalesTableProps {
  rows: SalesOrder[];
}

function getStatusVariant(status: string) {
  const normalized = status.toLowerCase();

  if (normalized.includes("закрыт") || normalized.includes("отгруж") || normalized.includes("оплач")) {
    return "positive" as const;
  }

  if (normalized.includes("ожида") || normalized.includes("hold") || normalized.includes("кп")) {
    return "critical" as const;
  }

  return "warning" as const;
}

export function SalesTable({ rows }: SalesTableProps) {
  return (
    <TableShell minWidthClass="min-w-[1040px]">
      <TableHeader className="grid grid-cols-[minmax(120px,0.95fr)_minmax(140px,1.15fr)_minmax(120px,0.9fr)_minmax(90px,0.7fr)_minmax(120px,0.85fr)_minmax(120px,0.9fr)] gap-3">
          <div className="min-w-0">Заказ</div>
          <div className="min-w-0">Клиент</div>
          <div className="min-w-0">Сумма</div>
          <div className="min-w-0">Оплата</div>
          <div className="min-w-0">Долг</div>
          <div className="min-w-0">Статус</div>
      </TableHeader>
      <div className="divide-y divide-slate-100">
          {rows.map((row) => (
            <TableRow
              key={row.number}
              className="grid cursor-default grid-cols-[minmax(120px,0.95fr)_minmax(140px,1.15fr)_minmax(120px,0.9fr)_minmax(90px,0.7fr)_minmax(120px,0.85fr)_minmax(120px,0.9fr)] gap-3"
            >
              <div className="min-w-0">
                <div className="break-anywhere font-medium text-slate-900">{row.number}</div>
                <div className="break-anywhere mt-1 text-slate-500">{row.channel}</div>
              </div>
              <div className="min-w-0">
                <div className="break-anywhere text-slate-900">{row.customer}</div>
                <div className="break-anywhere mt-1 text-slate-500">{row.due}</div>
              </div>
              <div className="break-anywhere min-w-0 font-medium text-slate-900">{row.amount}</div>
              <div className="break-anywhere min-w-0 text-slate-700">{row.payment}</div>
              <div className="break-anywhere min-w-0 text-slate-700">{row.debt}</div>
              <div className="flex items-start">
                <Badge variant={getStatusVariant(row.status)} className="max-w-full break-anywhere whitespace-normal">{row.status}</Badge>
              </div>
            </TableRow>
          ))}
      </div>
    </TableShell>
  );
}
