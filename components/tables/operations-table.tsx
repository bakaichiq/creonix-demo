import { Badge } from "@/components/ui/badge";
import { TableHeader, TableRow, TableShell } from "@/components/tables/table-shell";
import type { OperationItem, OperationLogItem } from "@/lib/types";

interface OperationsTableProps {
  rows: OperationLogItem[] | OperationItem[];
  mode?: "log" | "operations";
}

function getBadgeVariant(status: string) {
  const normalized = status.toLowerCase();

  if (normalized.includes("крит") || normalized.includes("риск") || normalized.includes("отстав")) {
    return "critical" as const;
  }

  if (
    normalized.includes("соглас") ||
    normalized.includes("разбор") ||
    normalized.includes("в работе") ||
    normalized.includes("подготов")
  ) {
    return "warning" as const;
  }

  return "positive" as const;
}

export function OperationsTable({ rows, mode = "log" }: OperationsTableProps) {
  if (mode === "operations") {
    const items = rows as OperationItem[];

    return (
      <TableShell minWidthClass="min-w-[760px]">
          <TableHeader className="grid grid-cols-[1.6fr,1fr,1fr,0.8fr] gap-4">
            <div className="min-w-0">Операция</div>
            <div className="min-w-0">Статус</div>
            <div className="min-w-0">Срок</div>
            <div className="min-w-0">Прогресс</div>
          </TableHeader>
          <div className="divide-y divide-slate-100">
            {items.map((item) => (
              <TableRow key={`${item.item}-${item.stage}`} className="grid grid-cols-[1.6fr,1fr,1fr,0.8fr] gap-4">
                <div className="min-w-0">
                  <div className="break-anywhere font-medium text-slate-900">{item.item}</div>
                  <div className="break-anywhere mt-1 text-slate-500">{item.stage}</div>
                </div>
                <div className="flex items-start">
                  <Badge variant={getBadgeVariant(item.status)} className="max-w-full break-anywhere whitespace-normal">{item.status}</Badge>
                </div>
                <div className="min-w-0">
                  <div className="break-anywhere text-slate-900">{item.due}</div>
                  <div className="break-anywhere mt-1 text-slate-500">{item.owner}</div>
                </div>
                <div className="space-y-2">
                  <div className="text-slate-900">{item.progress}%</div>
                  <div className="h-2 rounded-full bg-slate-100">
                    <div className="h-2 rounded-full bg-slate-900 transition-[width]" style={{ width: `${item.progress}%` }} />
                  </div>
                </div>
              </TableRow>
            ))}
          </div>
      </TableShell>
    );
  }

  const items = rows as OperationLogItem[];

  return (
    <TableShell minWidthClass="min-w-[760px]">
      <TableHeader className="grid grid-cols-[1.7fr,0.9fr,0.8fr,0.8fr] gap-4">
          <div className="min-w-0">Операция</div>
          <div className="min-w-0">Ответственный</div>
          <div className="min-w-0">Сумма</div>
          <div className="min-w-0">Статус</div>
      </TableHeader>
        <div className="divide-y divide-slate-100">
          {items.map((item) => (
            <TableRow key={item.id} className="grid grid-cols-[1.7fr,0.9fr,0.8fr,0.8fr] gap-4">
              <div className="min-w-0">
                <div className="break-anywhere font-medium text-slate-900">{item.title}</div>
                <div className="break-anywhere mt-1 text-slate-500">
                  {item.meta} • {item.date}
                </div>
              </div>
              <div className="break-anywhere min-w-0 text-slate-700">{item.owner}</div>
              <div className="break-anywhere min-w-0 font-medium text-slate-900">{item.amount}</div>
              <div className="flex items-start">
                <Badge variant={getBadgeVariant(item.status)} className="max-w-full break-anywhere whitespace-normal">{item.status}</Badge>
              </div>
            </TableRow>
          ))}
        </div>
    </TableShell>
  );
}
