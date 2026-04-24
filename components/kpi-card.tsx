"use client";

import { useState } from "react";
import { AnimatePresence } from "framer-motion";
import type { KpiMetric } from "@/lib/types";
import {
  KpiSpark,
  KpiProgress,
  KpiLuxury,
  KpiThreshold,
  KpiSystem,
  KpiModal,
} from "@/components/kpi-variants";

// Classic variant re-export from original implementation (legacy glass/enterprise/neo-dark by uiTheme)
import { KpiCardClassic } from "@/components/kpi-card-classic";

export type KpiVariant = "classic" | "spark" | "progress" | "luxury" | "threshold" | "system";

interface KpiCardProps {
  item: KpiMetric;
  accentColor?: string;
  uiTheme?: "glass" | "enterprise" | "neo-dark";
  variant?: KpiVariant;
}

export function KpiCard({ item, accentColor, uiTheme = "glass", variant = "classic" }: KpiCardProps) {
  const [isOpen, setIsOpen] = useState(false);

  const variantProps = {
    item,
    accentColor,
    onOpen: () => setIsOpen(true),
  };

  return (
    <>
      {variant === "spark"   && <KpiSpark {...variantProps} />}
      {variant === "progress" && <KpiProgress {...variantProps} />}
      {variant === "luxury"  && <KpiLuxury {...variantProps} />}
      {variant === "threshold" && <KpiThreshold {...variantProps} />}
      {variant === "system"  && <KpiSystem {...variantProps} />}
      {variant === "classic" && (
        <KpiCardClassic
          item={item}
          accentColor={accentColor}
          uiTheme={uiTheme}
        />
      )}

      <AnimatePresence>
        {isOpen && variant !== "classic" && (
          <KpiModal
            item={item}
            accentColor={accentColor}
            uiTheme={uiTheme}
            onClose={() => setIsOpen(false)}
          />
        )}
      </AnimatePresence>
    </>
  );
}
