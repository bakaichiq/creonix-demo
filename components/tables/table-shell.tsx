import type { ReactNode } from "react";

import { cn } from "@/lib/utils";

interface TableShellProps {
  children: ReactNode;
  minWidthClass: string;
}

export function TableShell({ children, minWidthClass }: TableShellProps) {
  return (
    <div className="overflow-hidden rounded-[24px] border border-slate-200 bg-white">
      <div className="overflow-x-auto [scrollbar-gutter:stable]">
        <div className={cn(minWidthClass, "relative min-w-0")}>{children}</div>
      </div>
    </div>
  );
}

interface TableHeaderProps {
  className: string;
  children: ReactNode;
}

export function TableHeader({ className, children }: TableHeaderProps) {
  return (
    <div
      className={cn(
        "sticky top-0 z-10 border-b border-slate-200 bg-slate-50/95 px-5 py-3 text-[11px] font-semibold uppercase tracking-[0.18em] text-slate-500 backdrop-blur",
        className
      )}
    >
      {children}
    </div>
  );
}

interface TableRowProps {
  className: string;
  children: ReactNode;
}

export function TableRow({ className, children }: TableRowProps) {
  return (
    <div
      className={cn(
        "min-w-0 px-5 py-4 text-sm transition-colors duration-150 hover:bg-slate-50/80",
        className
      )}
    >
      {children}
    </div>
  );
}
