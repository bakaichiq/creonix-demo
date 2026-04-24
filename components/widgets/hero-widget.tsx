"use client";

import type { BusinessSlug, ThemePalette } from "@/lib/types";
import { AgroFields } from "./agro-fields";
import { BakeryGauge } from "./bakery-gauge";
import { BoutiqueMatrix } from "./boutique-matrix";
import { ConstructionTimeline } from "./construction-timeline";
import { DistributionDebitors } from "./distribution-debitors";
import { GroceryExpiry } from "./grocery-expiry";
import { LogisticsRoutes } from "./logistics-routes";
import { ManufacturingOee } from "./manufacturing-oee";
import { RestaurantHeatmap } from "./restaurant-heatmap";
import { SewingPipeline } from "./sewing-pipeline";

interface HeroWidgetProps {
  slug: BusinessSlug;
  palette: ThemePalette;
  uiTheme?: "glass" | "enterprise" | "neo-dark";
}

const widgetTitles: Record<BusinessSlug, string> = {
  construction: "Операционный пульт объектов",
  grocery: "Мониторинг сроков годности",
  sewing: "Конвейер партий по стадиям",
  boutique: "Матрица размеров и остатков",
  agro: "Состояние полей и урожая",
  bakery: "Выпуск смены — план / факт",
  restaurant: "Загрузка кухни по станциям",
  logistics: "Рейсы и доставки в реальном времени",
  manufacturing: "OEE производственных линий",
  distribution: "Дебиторская задолженность",
};

const widgetDescriptions: Record<BusinessSlug, string> = {
  construction: "Показывает объектный ритм: этапы, дедлайны и зоны отставания по проекту.",
  grocery: "Подсвечивает freshness-риск: срок годности, SKU и приоритет пополнения полки.",
  sewing: "Дает быстрый readout по партиям: где поток тормозит между раскроем, пошивом и ОТК.",
  boutique: "Показывает luxury-мерчендайзинг: размеры, остатки и риск потери sell-through.",
  agro: "Собирает сезонный контур: поле, статус культуры, погода и ожидание по урожаю.",
  bakery: "Сводит shift view: выпуск смены, окно свежести и нагрузку на печи.",
  restaurant: "Подсвечивает tempo сервиса: станция кухни, пик нагрузки и давление на зал.",
  logistics: "Показывает диспетчерский контур: рейсы, отклонения, ETA и проблемные маршруты.",
  manufacturing: "Дает системный обзор линии: OEE, загрузка, простои и качество исполнения.",
  distribution: "Поднимает коммерческий риск: дебиторка, просрочка и проблемные контрагенты."
};

const widgetLabels: Record<BusinessSlug, string> = {
  construction: "Виджет стройки",
  grocery: "Виджет полок",
  sewing: "Виджет ателье",
  boutique: "Виджет коллекции",
  agro: "Виджет полей",
  bakery: "Виджет смены",
  restaurant: "Виджет сервиса",
  logistics: "Виджет диспетчера",
  manufacturing: "Виджет производства",
  distribution: "Виджет выручки"
};

const liveLabels: Record<BusinessSlug, string> = {
  construction: "Доска",
  grocery: "Свежесть",
  sewing: "Поток",
  boutique: "Коллекция",
  agro: "Поле",
  bakery: "Смена",
  restaurant: "Пик",
  logistics: "В сети",
  manufacturing: "ОЭЭ",
  distribution: "Касса"
};

function WidgetContent({ slug }: { slug: BusinessSlug }) {
  switch (slug) {
    case "construction": return <ConstructionTimeline />;
    case "grocery": return <GroceryExpiry />;
    case "sewing": return <SewingPipeline />;
    case "boutique": return <BoutiqueMatrix />;
    case "agro": return <AgroFields />;
    case "bakery": return <BakeryGauge />;
    case "restaurant": return <RestaurantHeatmap />;
    case "logistics": return <LogisticsRoutes />;
    case "manufacturing": return <ManufacturingOee />;
    case "distribution": return <DistributionDebitors />;
    default: return null;
  }
}

import { cn } from "@/lib/utils";

export function HeroWidget({ slug, palette, uiTheme = "glass" }: HeroWidgetProps) {
  const isNeo = uiTheme === "neo-dark";
  const isEnt = uiTheme === "enterprise";

  const outerClass = cn(
    "overflow-hidden transition-all",
    isNeo && "bg-slate-900 border-t border-b border-cyan-900/50 shadow-[0_0_20px_rgba(34,211,238,0.1)] rounded-none",
    isEnt && "rounded-sm border border-slate-300 bg-white shadow-none",
    !isNeo && !isEnt && "rounded-[28px] border border-white/70 bg-white/80 shadow-soft backdrop-blur-xl"
  );
  
  const textClass = cn(
    "text-xs font-semibold tracking-wide uppercase",
    isNeo ? "text-cyan-500 font-mono" : "text-slate-500"
  );

  return (
    <div className={outerClass}>
      {/* Colored accent bar using business gradient */}
      {!isNeo && <div className={`h-1 w-full bg-gradient-to-r ${palette.gradient}`} />}
      <div className="p-5">
        <div className="mb-4 flex items-center gap-2 border-b pb-4" style={{ borderColor: isNeo ? "rgba(34,211,238,0.2)" : "rgba(0,0,0,0.05)" }}>
          <div className={`h-2 w-2 ${isNeo ? "" : "rounded-full"} bg-gradient-to-r ${palette.gradient}`} />
          <span className={textClass}>
            {widgetLabels[slug]}
          </span>
          <span className={cn("ml-auto px-2 py-0.5 text-[10px] font-semibold uppercase tracking-widest", isNeo ? "border border-cyan-500/50 text-cyan-400 bg-cyan-900/40 font-mono" : isEnt ? "rounded-sm bg-slate-100 text-slate-700" : "rounded-full bg-emerald-100 text-emerald-700")}>
            {liveLabels[slug]}
          </span>
        </div>
        <div className={cn("mb-4", isNeo ? "border-b border-slate-800 pb-4" : "border-b border-slate-100 pb-4")}>
          <div className={cn("font-display text-lg", isNeo ? "font-light text-white" : "font-semibold text-slate-950")}>
            {widgetTitles[slug]}
          </div>
          <p className={cn("mt-1 text-sm leading-6", isNeo ? "text-slate-400" : "text-slate-500")}>
            {widgetDescriptions[slug]}
          </p>
        </div>
        <WidgetContent slug={slug} />
      </div>
    </div>
  );
}
