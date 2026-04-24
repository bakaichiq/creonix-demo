import { Badge } from "@/components/ui/badge";
import { TableHeader, TableRow, TableShell } from "@/components/tables/table-shell";
import type { LeadRow } from "@/lib/types";

interface CrmTableProps {
  rows: LeadRow[];
}

function getStatusVariant(status: string) {
  const normalized = status.toLowerCase();

  if (normalized.includes("договор") || normalized.includes("оплата") || normalized.includes("закры")) {
    return "positive" as const;
  }

  if (normalized.includes("кп") || normalized.includes("в работе")) {
    return "warning" as const;
  }

  return "secondary" as const;
}

export function CrmTable({ rows }: CrmTableProps) {
  return (
    <TableShell minWidthClass="min-w-[1020px]">
      <TableHeader className="grid grid-cols-[minmax(150px,1.3fr)_minmax(140px,1fr)_minmax(120px,0.85fr)_minmax(120px,0.85fr)_minmax(160px,1fr)] gap-3">
          <div className="min-w-0">Клиент</div>
          <div className="min-w-0">Сделка</div>
          <div className="min-w-0">Менеджер</div>
          <div className="min-w-0">Статус</div>
          <div className="min-w-0">Следующий шаг</div>
      </TableHeader>
      <div className="divide-y divide-slate-100">
          {rows.map((row) => (
            <TableRow
              key={`${row.company}-${row.contact}`}
              className="grid cursor-default grid-cols-[minmax(150px,1.3fr)_minmax(140px,1fr)_minmax(120px,0.85fr)_minmax(120px,0.85fr)_minmax(160px,1fr)] gap-3"
            >
              <div className="min-w-0">
                <div className="break-anywhere font-medium text-slate-900">{row.company}</div>
                <div className="break-anywhere mt-1 text-slate-500">{row.contact}</div>
              </div>
              <div className="break-anywhere min-w-0 text-slate-700">{row.deal}</div>
              <div className="break-anywhere min-w-0 text-slate-700">{row.manager}</div>
              <div className="flex items-start">
                <Badge variant={getStatusVariant(row.status)} className="max-w-full break-anywhere whitespace-normal">{row.status}</Badge>
              </div>
              <div className="break-anywhere min-w-0 text-slate-700">
                {row.nextStep}
                <div className="break-anywhere mt-1 text-xs text-slate-500">{row.lastContact}</div>
              </div>
            </TableRow>
          ))}
      </div>
    </TableShell>
  );
}
