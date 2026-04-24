import * as React from "react";
import { cva, type VariantProps } from "class-variance-authority";

import { cn } from "@/lib/utils";

const badgeVariants = cva(
  "inline-flex items-center rounded-full px-3 py-1 text-xs font-medium tracking-wide",
  {
    variants: {
      variant: {
        default: "bg-slate-950 text-white",
        secondary: "bg-slate-100 text-slate-700",
        positive: "bg-emerald-500/10 text-emerald-700",
        warning: "bg-amber-500/10 text-amber-700",
        critical: "bg-rose-500/10 text-rose-700",
        outline: "border border-slate-200 bg-white text-slate-700"
      }
    },
    defaultVariants: {
      variant: "secondary"
    }
  }
);

export interface BadgeProps
  extends React.HTMLAttributes<HTMLDivElement>,
    VariantProps<typeof badgeVariants> {}

function Badge({ className, variant, ...props }: BadgeProps) {
  return <div className={cn(badgeVariants({ variant }), className)} {...props} />;
}

export { Badge, badgeVariants };
