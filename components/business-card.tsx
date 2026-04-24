"use client";

import Link from "next/link";
import { ArrowRight, CheckCircle2, TrendingUp } from "lucide-react";
import { motion } from "framer-motion";

import { iconMap } from "@/components/icon-map";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import type { BusinessProfile } from "@/lib/types";
import { cn } from "@/lib/utils";

interface BusinessCardProps {
  business: BusinessProfile;
  index: number;
}

export function BusinessCard({ business, index }: BusinessCardProps) {
  const Icon = iconMap[business.icon];
  const isConstruction = business.slug === "construction";
  const isBoutique = business.slug === "boutique";
  const isLogistics = business.slug === "logistics";
  const isGrocery = business.slug === "grocery";
  const isSewing = business.slug === "sewing";
  const isAgro = business.slug === "agro";
  const isBakery = business.slug === "bakery";
  const isRestaurant = business.slug === "restaurant";
  const isManufacturing = business.slug === "manufacturing";
  const isDistribution = business.slug === "distribution";

  return (
    <motion.div
      initial={{ opacity: 0, y: 24 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-40px" }}
      transition={{ duration: 0.45, delay: index * 0.05 }}
    >
      <Card
        className={
          isConstruction
            ? "group relative h-full overflow-hidden rounded-sm border-slate-300 bg-white transition-all duration-300 hover:-translate-y-1 hover:shadow-[0_28px_70px_-28px_rgba(15,23,42,0.22)]"
            : isBoutique
              ? "group relative h-full overflow-hidden rounded-[8px] border-stone-200 bg-[linear-gradient(180deg,rgba(255,255,255,0.98),rgba(248,245,242,0.95))] transition-all duration-300 hover:-translate-y-1 hover:shadow-[0_24px_70px_-30px_rgba(41,37,36,0.18)]"
              : isLogistics
                ? "group relative h-full overflow-hidden rounded-[18px] border-slate-800 bg-[linear-gradient(145deg,#0f172a,#111827)] text-white transition-all duration-300 hover:-translate-y-1 hover:shadow-[0_30px_80px_-30px_rgba(6,182,212,0.3)]"
                : isGrocery
                  ? "group relative h-full overflow-hidden rounded-[24px] border-emerald-100 bg-[linear-gradient(180deg,rgba(255,255,255,0.98),rgba(240,253,244,0.94))] transition-all duration-300 hover:-translate-y-1.5 hover:shadow-[0_32px_80px_-24px_rgba(34,197,94,0.2)]"
                  : isSewing
                    ? "group relative h-full overflow-hidden rounded-[26px] border-fuchsia-100 bg-[linear-gradient(180deg,rgba(255,255,255,0.96),rgba(253,242,248,0.94))] transition-all duration-300 hover:-translate-y-1.5 hover:shadow-[0_32px_80px_-24px_rgba(217,70,239,0.18)]"
                    : isAgro
                      ? "group relative h-full overflow-hidden rounded-[20px] border-emerald-900/20 bg-[linear-gradient(145deg,#052e16,#0f172a)] text-white transition-all duration-300 hover:-translate-y-1 hover:shadow-[0_30px_80px_-30px_rgba(34,197,94,0.24)]"
                      : isBakery
                        ? "group relative h-full overflow-hidden rounded-[24px] border-amber-100 bg-[linear-gradient(180deg,rgba(255,251,235,0.98),rgba(255,247,237,0.94))] transition-all duration-300 hover:-translate-y-1.5 hover:shadow-[0_32px_80px_-24px_rgba(245,158,11,0.18)]"
                        : isRestaurant
                          ? "group relative h-full overflow-hidden rounded-[22px] border-orange-100 bg-[linear-gradient(180deg,rgba(255,255,255,0.96),rgba(255,247,237,0.94))] transition-all duration-300 hover:-translate-y-1.5 hover:shadow-[0_32px_80px_-24px_rgba(234,88,12,0.18)]"
                          : isManufacturing
                            ? "group relative h-full overflow-hidden rounded-[16px] border-sky-900/20 bg-[linear-gradient(145deg,#0f172a,#111827)] text-white transition-all duration-300 hover:-translate-y-1 hover:shadow-[0_30px_80px_-30px_rgba(14,165,233,0.22)]"
                            : isDistribution
                              ? "group relative h-full overflow-hidden rounded-[20px] border-indigo-100 bg-[linear-gradient(180deg,rgba(255,255,255,0.98),rgba(238,242,255,0.94))] transition-all duration-300 hover:-translate-y-1.5 hover:shadow-[0_32px_80px_-24px_rgba(79,70,229,0.18)]"
                : "group relative h-full overflow-hidden border-white/70 bg-white/80 transition-all duration-300 hover:-translate-y-1.5 hover:shadow-[0_32px_80px_-24px_rgba(15,23,42,0.25)]"
        }
      >
        {/* Colored top accent bar */}
        <div className={`absolute inset-x-0 top-0 h-1 bg-gradient-to-r ${business.palette.gradient}`} />

        {/* Subtle gradient overlay on hover */}
        <div
          className={`absolute inset-0 opacity-0 transition-opacity duration-300 group-hover:opacity-100 bg-gradient-to-br ${business.palette.gradient}`}
          style={{ opacity: 0 }}
          aria-hidden="true"
        />

        <CardContent className="relative flex h-full min-w-0 flex-col gap-5 p-6">
          <div className="flex min-w-0 items-start justify-between gap-4">
            <div
              className={`flex h-14 w-14 shrink-0 items-center justify-center rounded-2xl bg-gradient-to-br ${business.palette.gradient} text-white shadow-lg transition-transform duration-300 group-hover:scale-110`}
            >
              <Icon className="h-7 w-7" />
            </div>
            <Badge className={cn(
              "max-w-[65%] shrink-0 break-anywhere whitespace-normal text-right",
              business.palette.badge,
              isLogistics && "bg-cyan-500/10 text-cyan-200",
              isBoutique && "rounded-[6px] bg-stone-100 text-stone-700",
              isAgro && "bg-emerald-500/10 text-emerald-200",
              isManufacturing && "bg-sky-500/10 text-sky-200",
              isDistribution && "bg-indigo-100 text-indigo-700"
            )}>
              {business.demoMetric}
            </Badge>
          </div>

          <div className="min-w-0 space-y-2">
            <h3 className={cn(
              "break-anywhere font-display text-2xl transition-colors",
              isBoutique ? "font-light tracking-[0.06em] text-stone-900 group-hover:text-stone-700" :
              isLogistics ? "font-semibold text-white group-hover:text-cyan-100" :
              isAgro ? "font-semibold text-white group-hover:text-emerald-100" :
              isManufacturing ? "font-semibold uppercase tracking-[0.04em] text-white group-hover:text-sky-100" :
              isSewing ? "italic text-fuchsia-950 group-hover:text-fuchsia-800" :
              isBakery ? "font-semibold text-amber-950 group-hover:text-amber-800" :
              isRestaurant ? "font-semibold text-orange-950 group-hover:text-orange-800" :
              isDistribution ? "font-semibold text-indigo-950 group-hover:text-indigo-800" :
              "font-semibold text-slate-950 group-hover:text-slate-800"
            )}>
              {business.name}
            </h3>
            <p className={cn("break-anywhere text-sm leading-6", isLogistics || isAgro || isManufacturing ? "text-slate-300" : "text-slate-600")}>{business.description}</p>
          </div>

          <div className="space-y-3">
            <div className={cn("text-xs uppercase tracking-[0.16em]", isBoutique ? "font-medium text-stone-400" : isLogistics || isAgro || isManufacturing ? "font-medium text-slate-500" : "font-semibold text-slate-400")}>
              Боли бизнеса
            </div>
            <div className="flex flex-wrap gap-2">
              {business.pains.map((pain) => (
                <Badge
                  key={pain}
                  variant="outline"
                  className={cn(
                    "bg-white/80",
                    isConstruction && "rounded-sm bg-slate-50",
                    isBoutique && "rounded-[6px] border-stone-200 bg-white",
                    isLogistics && "rounded-full border-slate-700 bg-slate-900 text-slate-300",
                    isAgro && "rounded-full border-emerald-900/30 bg-emerald-950/30 text-emerald-100",
                    isManufacturing && "rounded-none border-sky-900/30 bg-slate-900 text-sky-100",
                    isGrocery && "border-emerald-100 bg-white",
                    isSewing && "border-fuchsia-100 bg-white",
                    isBakery && "border-amber-100 bg-white",
                    isRestaurant && "border-orange-100 bg-white",
                    isDistribution && "border-indigo-100 bg-white"
                  )}
                >
                  {pain}
                </Badge>
              ))}
            </div>
          </div>

          <div className="mt-auto space-y-3">
            <div className="grid gap-2">
              {business.outcomes.slice(0, 2).map((item) => (
                <div key={item} className={cn("flex items-center gap-2 text-sm", isLogistics || isAgro || isManufacturing ? "text-slate-300" : "text-slate-600")}>
                  <CheckCircle2 className={cn("h-4 w-4 shrink-0", isLogistics ? "text-cyan-400" : isAgro ? "text-emerald-400" : isManufacturing ? "text-sky-400" : "text-emerald-500")} />
                  <span className="break-anywhere">{item}</span>
                </div>
              ))}
            </div>

            <Button
              asChild
              variant="secondary"
              className={cn(
                "w-full justify-between transition-all duration-200",
                isConstruction && "rounded-sm group-hover:bg-slate-100",
                isBoutique && "rounded-[8px] bg-stone-950 text-white hover:bg-stone-800",
                isLogistics && "rounded-[14px] border border-slate-700 bg-slate-900 text-white hover:bg-slate-800",
                isAgro && "rounded-[14px] border border-emerald-900/30 bg-emerald-950/40 text-white hover:bg-emerald-950/60",
                isManufacturing && "rounded-none border border-sky-900/30 bg-slate-900 text-white hover:bg-slate-800",
                isDistribution && "rounded-[14px] bg-indigo-950 text-white hover:bg-indigo-900",
                !isConstruction && !isBoutique && !isLogistics && !isAgro && !isManufacturing && !isDistribution && "rounded-2xl group-hover:bg-slate-100"
              )}
            >
              <Link href={`/demo/${business.slug}`}>
                <span className="flex items-center gap-2">
                  <TrendingUp className={cn("h-4 w-4", isLogistics ? "text-cyan-300" : isAgro ? "text-emerald-300" : isManufacturing ? "text-sky-300" : "text-slate-500")} />
                  Открыть демо
                </span>
                <ArrowRight className="h-4 w-4 transition-transform duration-200 group-hover:translate-x-1" />
              </Link>
            </Button>
          </div>
        </CardContent>
      </Card>
    </motion.div>
  );
}
