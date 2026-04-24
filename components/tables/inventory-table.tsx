import { Badge } from "@/components/ui/badge";
import { TableHeader, TableRow, TableShell } from "@/components/tables/table-shell";
import type { InventoryItem } from "@/lib/types";

interface InventoryTableProps {
  rows: InventoryItem[];
}

function getAlertVariant(alert: string) {
  const normalized = alert.toLowerCase();

  if (normalized.includes("крит") || normalized.includes("закуп") || normalized.includes("риск")) {
    return "critical" as const;
  }

  if (normalized.includes("попол") || normalized.includes("контроль") || normalized.includes("медленно")) {
    return "warning" as const;
  }

  return "positive" as const;
}

export function InventoryTable({ rows }: InventoryTableProps) {
  return (
    <TableShell minWidthClass="min-w-[860px]">
      <TableHeader className="grid grid-cols-[1.4fr,0.8fr,0.8fr,0.8fr,0.8fr] gap-4">
          <div className="min-w-0">Позиция</div>
          <div className="min-w-0">Остаток</div>
          <div className="min-w-0">Резерв</div>
          <div className="min-w-0">Оборачиваемость</div>
          <div className="min-w-0">Статус</div>
      </TableHeader>
      <div className="divide-y divide-slate-100">
          {rows.map((row) => (
            <TableRow
              key={row.sku}
              className="grid cursor-default grid-cols-[1.4fr,0.8fr,0.8fr,0.8fr,0.8fr] gap-4"
            >
              <div className="min-w-0">
                <div className="break-anywhere font-medium text-slate-900">{row.name}</div>
                <div className="break-anywhere mt-1 text-slate-500">{row.sku}</div>
              </div>
              <div className="break-anywhere min-w-0 text-slate-700">{row.stock}</div>
              <div className="break-anywhere min-w-0 text-slate-700">{row.reserve}</div>
              <div className="break-anywhere min-w-0 text-slate-700">{row.turnover}</div>
              <div className="flex items-start">
                <Badge variant={getAlertVariant(row.alert)} className="max-w-full break-anywhere whitespace-normal">{row.alert}</Badge>
              </div>
            </TableRow>
          ))}
      </div>
    </TableShell>
  );
}
