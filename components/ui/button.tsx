import * as React from "react";
import { Slot } from "@radix-ui/react-slot";
import { cva, type VariantProps } from "class-variance-authority";

import { cn } from "@/lib/utils";

const buttonVariants = cva(
  "theme-button-radius inline-flex items-center justify-center gap-2 whitespace-nowrap text-sm font-semibold transition-all focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring disabled:pointer-events-none disabled:opacity-50",
  {
    variants: {
      variant: {
        default: "bg-slate-950 text-white shadow-lg shadow-slate-950/10 hover:-translate-y-0.5 hover:bg-slate-900",
        secondary: "bg-white/80 text-slate-900 ring-1 ring-slate-200 backdrop-blur hover:bg-white",
        ghost: "text-slate-700 hover:bg-slate-100",
        subtle: "bg-slate-100 text-slate-700 hover:bg-slate-200",
        panel: "bg-white/70 text-slate-900 ring-1 ring-slate-200 shadow-sm backdrop-blur hover:bg-white",
        dark: "bg-slate-950/90 text-white ring-1 ring-white/10 hover:bg-slate-900",
        gradient:
          "bg-gradient-to-r from-sky-500 via-cyan-500 to-emerald-400 text-white shadow-glow hover:opacity-95"
      },
      size: {
        default: "h-11 px-5",
        sm: "h-9 px-4 text-xs",
        lg: "h-12 px-6 text-sm"
      }
    },
    defaultVariants: {
      variant: "default",
      size: "default"
    }
  }
);

export interface ButtonProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement>,
    VariantProps<typeof buttonVariants> {
  asChild?: boolean;
}

const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
  ({ className, variant, size, asChild = false, ...props }, ref) => {
    const Comp = asChild ? Slot : "button";

    return <Comp className={cn(buttonVariants({ variant, size, className }))} ref={ref} {...props} />;
  }
);
Button.displayName = "Button";

export { Button, buttonVariants };
