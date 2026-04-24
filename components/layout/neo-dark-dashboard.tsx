"use client";

import { useMemo, useState } from "react";
import Link from "next/link";
import { Activity, BrainCircuit, ChevronRight, CircleDollarSign, FileText, Lightbulb, ShieldAlert, TrendingUp } from "lucide-react";

import { BiOverviewChart } from "@/components/charts/bi-overview-chart";
import { PlanFactChart } from "@/components/charts/plan-fact-chart";
import { RevenueChart } from "@/components/charts/revenue-chart";
import { KpiCard } from "@/components/kpi-card";
import { GuidedTour } from "@/components/widgets/guided-tour";
import { InventoryTable } from "@/components/tables/inventory-table";
import { OperationsTable } from "@/components/tables/operations-table";
import { CrmTable } from "@/components/tables/crm-table";
import { SalesTable } from "@/components/tables/sales-table";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Tabs, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { getScaledDemoData, getTimeframeLabel, type Timeframe } from "@/lib/demo";
import type { BusinessProfile, BusinessSlug } from "@/lib/types";
import { cn, getTrendClasses } from "@/lib/utils";
import { LiveSimulation } from "@/components/widgets/live-simulation";

interface NeoDarkDashboardProps {
  slug: BusinessSlug;
  business: BusinessProfile;
  initialDemo: any;
}

export function NeoDarkDashboard({ slug, business, initialDemo }: NeoDarkDashboardProps) {
  const [timeframe, setTimeframe] = useState<Timeframe>("today");
  const demo = useMemo(() => getScaledDemoData(initialDemo, timeframe), [initialDemo, timeframe]);
  const isAgro = business.slug === "agro";
  const isManufacturing = business.slug === "manufacturing";
  const darkPanelClass = cn(
    "border border-slate-800 bg-slate-900/80 text-slate-200",
    isAgro && "border-emerald-900/30 bg-[linear-gradient(180deg,rgba(6,78,59,0.2),rgba(2,6,23,0.96))]",
    isManufacturing && "border-sky-900/30 bg-[linear-gradient(180deg,rgba(15,23,42,0.98),rgba(3,7,18,0.98))]"
  );
  const dataPanelClass = cn(
    "border border-slate-800 bg-slate-950/40 p-4",
    isAgro && "border-emerald-900/30 bg-emerald-950/10",
    isManufacturing && "border-sky-900/30 bg-slate-950/70"
  );
  const monoBadgeClass = cn(
    "rounded-none bg-cyan-950/40 text-cyan-300",
    isAgro && "bg-emerald-950/40 text-emerald-300",
    isManufacturing && "bg-sky-950/40 text-sky-300"
  );

  const financeTrend = demo.finance.cashflow.map((item: any) => ({
    name: item.name,
    revenue: item.income,
    expenses: item.expense,
    profit: item.net
  }));

  const criticalRisks = demo.risks.filter((risk: any) => risk.severity === "high").length;

  return (
    <div className="min-h-screen space-y-6 bg-[radial-gradient(circle_at_top_left,rgba(8,145,178,0.1),transparent_22%),linear-gradient(180deg,#020617_0%,#020617_100%)] p-4 font-sans text-slate-300 selection:bg-cyan-500/30 sm:p-6">
      <LiveSimulation slug={slug} business={business} />
      <GuidedTour business={business} compact />

      <div className="grid gap-4 xl:grid-cols-[1.15fr,0.85fr]">
        <Card variant="dark" className="border border-slate-800 bg-slate-900/90 p-0 text-slate-200 shadow-[0_0_20px_rgba(0,0,0,0.5)]">
          <CardContent className="grid gap-6 p-6 lg:grid-cols-[minmax(0,1.15fr),minmax(320px,0.85fr)] lg:items-center">
            <div className="flex min-w-0 items-start gap-4">
              <Activity className="mt-1 h-8 w-8 animate-pulse text-cyan-400" />
              <div className="min-w-0">
                <div className="font-mono text-[11px] uppercase tracking-[0.24em] text-cyan-500/70">
                  {business.design.designSystemName} // В СЕТИ
                </div>
                <h2 className={cn("break-anywhere mt-2 font-display text-3xl text-white sm:text-4xl", business.design.headingClass)}>{business.name}</h2>
                <p className="break-anywhere mt-3 max-w-2xl text-sm leading-7 text-slate-300">
                  {isAgro
                    ? "Темная тема для агро стала field-operations console: сезон, поля, техника и прогноз поданы как спокойный ночной мониторинг."
                    : isManufacturing
                      ? "Производственный режим ощущается как industrial systems monitor: линии, OEE, простои и качество читаются без визуального шума."
                      : "Темная тема перестроена как спокойный operations-center: больше ритма, меньше декоративного шума и одинаковая секционная логика с другими режимами."}
                </p>
              </div>
            </div>

            <div className="grid min-w-0 gap-3 grid-cols-1 sm:grid-cols-3 lg:grid-cols-1 xl:grid-cols-3">
              {[
                { label: "ПЕРИОД", value: getTimeframeLabel(timeframe).toUpperCase() },
                { label: "РИСК", value: `${criticalRisks}` },
                { label: "ИИ", value: "ОНЛАЙН" }
              ].map((item) => (
                <div key={item.label} className="min-w-0 overflow-hidden border border-slate-700 bg-slate-950/80 px-4 py-4 shadow-[inset_0_1px_0_rgba(255,255,255,0.02)]">
                  <div className="break-anywhere font-mono text-[10px] uppercase tracking-[0.18em] text-slate-400">{item.label}</div>
                  <div className="break-anywhere mt-2 text-lg font-semibold text-white">{item.value}</div>
                </div>
              ))}
            </div>
          </CardContent>
        </Card>

        <Card variant="dark" className="border border-slate-800 bg-slate-900/90 p-0 text-slate-200 shadow-[0_0_20px_rgba(0,0,0,0.5)]">
          <CardContent className="space-y-4 p-5">
            <div>
              <div className="font-mono text-[11px] uppercase tracking-[0.22em] text-cyan-400/80">ГОРИЗОНТ</div>
              <div className="mt-2 text-lg font-medium text-white">Управленческий горизонт</div>
            </div>

            <Tabs value={timeframe} onValueChange={(v) => setTimeframe(v as Timeframe)} className="w-full">
              <TabsList className="grid h-12 w-full grid-cols-4 border border-slate-700 bg-slate-950/90 p-1 text-slate-300">
                <TabsTrigger value="today" className="rounded-none font-mono text-xs uppercase tracking-wider text-slate-400 hover:text-white data-[state=active]:bg-white data-[state=active]:text-slate-950">1D</TabsTrigger>
                <TabsTrigger value="week" className="rounded-none font-mono text-xs uppercase tracking-wider text-slate-400 hover:text-white data-[state=active]:bg-white data-[state=active]:text-slate-950">7D</TabsTrigger>
                <TabsTrigger value="month" className="rounded-none font-mono text-xs uppercase tracking-wider text-slate-400 hover:text-white data-[state=active]:bg-white data-[state=active]:text-slate-950">1M</TabsTrigger>
                <TabsTrigger value="quarter" className="rounded-none font-mono text-xs uppercase tracking-wider text-slate-400 hover:text-white data-[state=active]:bg-white data-[state=active]:text-slate-950">3M</TabsTrigger>
              </TabsList>
            </Tabs>

            <div className="grid gap-3">
              {[
                "Первый экран подчинен аналитике, а не спецэффектам.",
                isAgro ? "Поля, урожайность и погодный риск читаются как seasonal board." : isManufacturing ? "Линии, downtime и загрузка читаются как industrial board." : "Все разделы доступны из sidebar без пустых якорей.",
                isAgro ? "Dark-theme сохраняет спокойный характер полевого мониторинга." : isManufacturing ? "Dark-theme держит техничный характер без лишнего sci-fi шума." : "Dark-theme сохранила характер, но стала легче для чтения."
              ].map((item) => (
                <div key={item} className="border border-slate-700 bg-slate-950/70 px-4 py-3 text-sm leading-6 text-slate-300">
                  {item}
                </div>
              ))}
            </div>
          </CardContent>
        </Card>
      </div>

      <section id="dashboard" className="space-y-6">
        <div className="grid gap-4 md:grid-cols-2 xl:grid-cols-4">
          {demo.kpis.map((item: any) => (
            <KpiCard key={item.label} item={item} accentColor={business.palette.chart[0]} uiTheme="neo-dark" variant={business.design.kpiVariant} />
          ))}
        </div>

        <div className="grid gap-6 xl:grid-cols-[1.1fr,0.9fr]">
          <Card variant="dark" className={darkPanelClass}>
            <CardHeader className="border-b border-slate-800/50 py-5">
              <CardTitle className="font-display text-xl font-light tracking-wide text-white">{isAgro ? "Урожай / Сезон / План-Факт" : isManufacturing ? "Выпуск / ОЭЭ / План-Факт" : "Выручка / План-Факт"}</CardTitle>
            </CardHeader>
            <CardContent className="grid gap-4 p-6 xl:grid-cols-2">
              <RevenueChart data={demo.revenueTrend} colors={["#22d3ee", "#334155", "#0ea5e9"]} currency={business.currency} />
              <PlanFactChart data={demo.planFact} colors={["#2db7f5", "#0ea5e9", "#0284c7"]} />
            </CardContent>
          </Card>

          <Card variant="dark" className={darkPanelClass}>
            <CardHeader className="border-b border-slate-800/50 py-4">
              <CardTitle className="flex items-center gap-2 text-sm font-mono uppercase tracking-widest text-cyan-400">
                <ShieldAlert className="h-4 w-4" />
                {isAgro ? "Полевые отклонения" : isManufacturing ? "Системные валидации линии" : "Системные валидации"}
              </CardTitle>
            </CardHeader>
            <CardContent className="grid gap-3 p-4">
              {demo.risks.map((risk: any) => (
                <div key={risk.title} className={cn("border-l-2 border-cyan-500 bg-slate-900/80 p-4 shadow-[0_0_10px_rgba(34,211,238,0.06)]", isAgro && "border-emerald-500 shadow-[0_0_10px_rgba(16,185,129,0.06)]", isManufacturing && "border-sky-500 shadow-[0_0_10px_rgba(14,165,233,0.06)]")}>
                  <div className="flex items-start justify-between gap-3">
                    <div className="font-mono text-sm text-white">{risk.title}</div>
                    <Badge
                      variant="outline"
                      className={cn(
                        "rounded-none border-cyan-500/50 font-mono text-[10px] uppercase text-cyan-400",
                        risk.severity === "high" && "border-rose-500/50 bg-rose-500/10 text-rose-400"
                      )}
                    >
                      {risk.severity === "high" ? "КРИТИЧНО" : "ВНИМАНИЕ"}
                    </Badge>
                  </div>
                  <p className="mt-2 font-mono text-xs leading-relaxed text-slate-400">{risk.description}</p>
                </div>
              ))}
            </CardContent>
          </Card>
        </div>
      </section>

      <section id="crm" className="grid gap-6 xl:grid-cols-[1.15fr,0.85fr]">
        <Card variant="dark" className={darkPanelClass}>
          <CardHeader className="border-b border-slate-800/50">
            <CardTitle className="font-display text-2xl font-light text-white">{business.vocabulary.crm}</CardTitle>
          </CardHeader>
          <CardContent className="p-4">
            <CrmTable rows={demo.crm.leads} />
          </CardContent>
        </Card>

        <Card variant="dark" className={darkPanelClass}>
          <CardHeader className="border-b border-slate-800/50">
            <CardTitle className="font-display text-xl font-light text-white">{demo.crm.featuredClient.company}</CardTitle>
          </CardHeader>
          <CardContent className="grid gap-3 p-4">
            <div className={cn(dataPanelClass, "font-mono text-xs leading-6 text-slate-400")}>
              SEGMENT: {demo.crm.featuredClient.segment}<br />
              LTV: {demo.crm.featuredClient.ltv}<br />
              OWNER: {demo.crm.featuredClient.manager}
            </div>
            {demo.crm.featuredClient.history.map((entry: any) => (
              <div key={`${entry.date}-${entry.title}`} className={dataPanelClass}>
                <div className="font-mono text-sm text-white">{entry.title}</div>
                <div className="mt-2 font-mono text-xs text-cyan-400">{entry.date} • {entry.type} • {entry.author}</div>
              </div>
            ))}
          </CardContent>
        </Card>
      </section>

      <div className="grid gap-6 lg:grid-cols-2">
        <section id="inventory">
          <Card variant="dark" className={cn("h-full", darkPanelClass)}>
            <CardHeader className="border-b border-slate-800/50">
              <CardTitle className="font-display text-2xl font-light text-white">{business.vocabulary.inventory}</CardTitle>
            </CardHeader>
            <CardContent className="space-y-4 p-4">
              <InventoryTable rows={demo.inventory.items} />
              <div className="grid gap-3">
                {demo.inventory.alerts.map((alert: string) => (
                  <div key={alert} className={cn(dataPanelClass, "px-4 py-3 font-mono text-xs leading-6 text-slate-400")}>
                    {alert}
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>
        </section>

        <section id="sales">
          <Card variant="dark" className={cn("h-full", darkPanelClass)}>
            <CardHeader className="border-b border-slate-800/50">
              <CardTitle className="font-display text-2xl font-light text-white">{business.vocabulary.sales}</CardTitle>
            </CardHeader>
            <CardContent className="space-y-5 p-4">
              <div className="grid gap-4 md:grid-cols-2 xl:grid-cols-4">
                {demo.sales.summary.map((item: any) => (
                  <div key={item.label} className={dataPanelClass}>
                    <div className="break-anywhere font-mono text-[11px] uppercase tracking-[0.16em] text-slate-500">{item.label}</div>
                    <div className="mt-2 flex min-w-0 flex-col items-start gap-2">
                      <div className="break-anywhere font-display text-lg text-white">{item.value}</div>
                      <Badge className={cn("max-w-full whitespace-normal rounded-none", getTrendClasses(item.tone))}>{item.tone.toUpperCase()}</Badge>
                    </div>
                  </div>
                ))}
              </div>
              <SalesTable rows={demo.sales.orders} />
            </CardContent>
          </Card>
        </section>
      </div>

      <section id="operations" className="grid gap-6 xl:grid-cols-[1.25fr,0.75fr]">
          <Card variant="dark" className={darkPanelClass}>
          <CardHeader className="border-b border-slate-800/50">
            <CardTitle className="text-xl font-light text-white">{business.operationLabel}</CardTitle>
          </CardHeader>
          <CardContent className="p-4">
            <OperationsTable rows={demo.operationsCenter.items} mode="operations" />
          </CardContent>
        </Card>

        <Card variant="dark" className={cn("border border-slate-800 bg-slate-950 text-slate-200", isAgro && "border-emerald-900/30", isManufacturing && "border-sky-900/30")}>
          <CardHeader className="border-b border-slate-800/50 bg-cyan-950/20">
            <CardTitle className={cn("text-sm font-mono uppercase tracking-widest text-cyan-400", isAgro && "text-emerald-400", isManufacturing && "text-sky-400")}>{isAgro ? "СЕЗОННЫЙ ПОТОК" : isManufacturing ? "ПОТОК ЛИНИИ" : "РАБОЧИЙ ПОТОК"}</CardTitle>
          </CardHeader>
          <CardContent className="grid gap-3 p-4">
            {demo.operationsCenter.pipeline.map((step: any) => (
              <div key={step.label} className={cn("border border-slate-800 bg-slate-900/70 p-4", isAgro && "border-emerald-900/30 bg-emerald-950/10", isManufacturing && "border-sky-900/30 bg-slate-900/90")}>
                <div className="flex items-center justify-between gap-3">
                  <div className="font-mono text-sm text-white">{step.label}</div>
                  <div className={cn("font-mono text-xs text-cyan-400", isAgro && "text-emerald-400", isManufacturing && "text-sky-400")}>{step.value}%</div>
                </div>
                <div className="mt-3 h-1.5 bg-slate-800">
                  <div className={cn("h-1.5 bg-gradient-to-r from-cyan-500 to-sky-500", isAgro && "from-emerald-500 to-lime-400", isManufacturing && "from-sky-500 to-cyan-400")} style={{ width: `${step.value}%` }} />
                </div>
              </div>
            ))}
          </CardContent>
        </Card>
      </section>

      <section id="finance" className="grid gap-6 xl:grid-cols-[1.05fr,0.95fr]">
        <Card variant="dark" className={darkPanelClass}>
          <CardHeader className="border-b border-slate-800/50">
            <CardTitle className="text-xl font-light text-white">{isAgro ? "ФИНАНСЫ СЕЗОНА" : isManufacturing ? "ФИНАНСЫ ЗАВОДА" : "ФИНАНСОВАЯ МАТРИЦА"}</CardTitle>
          </CardHeader>
          <CardContent className="grid gap-3 p-4">
            {demo.finance.rows.map((row: any) => (
              <div key={row.category} className={dataPanelClass}>
                <div className="flex items-center justify-between gap-3">
                  <div className="font-mono text-sm text-white">{row.category}</div>
                  <div className="font-mono text-xs text-cyan-300">{row.fact}</div>
                </div>
                <div className="mt-2 flex items-center justify-between gap-3 font-mono text-[11px] uppercase tracking-[0.16em] text-slate-500">
                  <span>План {row.plan}</span>
                  <span>Маржа {row.margin}</span>
                  <span>{row.delta}</span>
                </div>
              </div>
            ))}
          </CardContent>
        </Card>

        <Card variant="dark" className={darkPanelClass}>
          <CardHeader className="border-b border-slate-800/50">
            <CardTitle className="text-xl font-light tracking-wide text-white">Динамика денежного потока</CardTitle>
          </CardHeader>
          <CardContent className="p-6">
            <RevenueChart data={financeTrend} colors={["#22d3ee", "#334155", "#0ea5e9"]} currency={business.currency} />
          </CardContent>
        </Card>
      </section>

      <section id="bi" className="grid gap-6 xl:grid-cols-[1.05fr,0.95fr]">
        <Card variant="dark" className={darkPanelClass}>
          <CardHeader className="border-b border-slate-800/50">
            <CardTitle className="text-xl font-light tracking-wide text-white">{isAgro ? "Сигналы полей" : isManufacturing ? "Сигналы завода" : "BI сигналы"}</CardTitle>
          </CardHeader>
          <CardContent className="p-6">
            <BiOverviewChart data={demo.bi.trend} colors={["#22d3ee", "#0ea5e9", "#38bdf8"]} />
          </CardContent>
        </Card>

        <Card variant="dark" className={cn("border border-slate-800 bg-slate-950 text-slate-200", isAgro && "border-emerald-900/30", isManufacturing && "border-sky-900/30")}>
          <CardHeader className="border-b border-slate-800/50 bg-cyan-950/20">
            <CardTitle className={cn("text-sm font-mono uppercase tracking-widest text-cyan-400", isAgro && "text-emerald-400", isManufacturing && "text-sky-400")}>{isAgro ? "ПРОГНОЗ / ПОГОДА / ОТКЛОНЕНИЯ" : isManufacturing ? "ПРОГНОЗ / ПРОСТОИ / ОТКЛОНЕНИЯ" : "ПРОГНОЗ / ОТКЛОНЕНИЯ"}</CardTitle>
          </CardHeader>
          <CardContent className="grid gap-3 p-4">
            <div className={cn("border border-slate-800 bg-slate-900/70 p-4 text-sm leading-6 text-slate-400", isAgro && "border-emerald-900/30 bg-emerald-950/10", isManufacturing && "border-sky-900/30 bg-slate-900/90")}>
              <div className={cn("mb-2 flex items-center gap-2 font-mono text-xs uppercase tracking-[0.18em] text-cyan-400", isAgro && "text-emerald-400", isManufacturing && "text-sky-400")}>
                <TrendingUp className="h-4 w-4" />
                Прогноз
              </div>
              {demo.bi.forecast}
            </div>
            {demo.bi.deviations.map((deviation: string) => (
              <div key={deviation} className={cn(dataPanelClass, "font-mono text-xs leading-6 text-slate-400")}>
                {deviation}
              </div>
            ))}
          </CardContent>
        </Card>
      </section>

      <section id="assistant" className="grid gap-6 xl:grid-cols-[0.8fr,1.2fr]">
        <Card variant="dark" className={cn("border border-cyan-900/30 bg-gradient-to-r from-slate-950 via-cyan-950/10 to-slate-950 text-white shadow-[0_0_32px_rgba(34,211,238,0.08)]", isAgro && "border-emerald-900/30 via-emerald-950/10 shadow-[0_0_32px_rgba(16,185,129,0.08)]", isManufacturing && "border-sky-900/30 via-sky-950/10 shadow-[0_0_32px_rgba(14,165,233,0.08)]")}>
          <CardContent className="p-8">
            <div className="flex items-center gap-3 border-b border-slate-800 pb-4">
              <BrainCircuit className="h-8 w-8 animate-pulse text-cyan-400" />
              <div>
                <div className={cn("font-mono text-xs uppercase tracking-[0.2em] text-cyan-500/70", isAgro && "text-emerald-500/70", isManufacturing && "text-sky-500/70")}>{isAgro ? "ИИ ПОЛЕЙ ОНЛАЙН" : isManufacturing ? "ИИ ЗАВОДА ОНЛАЙН" : "ИИ ДВИЖОК ОНЛАЙН"}</div>
                <h2 className="mt-1 text-2xl font-light">{demo.assistant.headline}</h2>
              </div>
            </div>
            <div className="mt-6 space-y-4">
              {demo.assistant.bullets.map((bullet: string) => (
                <div key={bullet} className="flex items-start gap-3 font-mono text-xs leading-relaxed text-slate-400">
                  <span className={cn("mt-0.5 text-cyan-500", isAgro && "text-emerald-500", isManufacturing && "text-sky-500")}>_&gt;</span>
                  <span>{bullet}</span>
                </div>
              ))}
            </div>
          </CardContent>
        </Card>

        <div className="grid gap-4">
          {demo.assistant.messages.map((message: any) => (
            <Card key={message.title} variant="dark" className={cn("border border-slate-800 bg-slate-900/50 text-slate-200", isAgro && "border-emerald-900/30 bg-emerald-950/10", isManufacturing && "border-sky-900/30 bg-slate-900/80")}>
              <CardContent className="relative overflow-hidden p-6">
                <div className="absolute left-0 top-0 h-px w-full bg-gradient-to-r from-transparent via-cyan-500 to-transparent opacity-50" />
                <div className="flex items-start justify-between gap-4">
                  <div>
                    <div className="font-display text-xl text-white">{message.title}</div>
                    <div className={cn("mt-1 font-mono text-xs text-cyan-400", isAgro && "text-emerald-400", isManufacturing && "text-sky-400")}>{message.metric}</div>
                  </div>
                  <Lightbulb className="h-5 w-5 text-yellow-400/80" />
                </div>
                <p className="mt-4 font-mono text-sm leading-7 text-slate-400">{message.summary}</p>
                <div className={cn("mt-6 border-l-2 border-cyan-500 pl-4", isAgro && "border-emerald-500", isManufacturing && "border-sky-500")}>
                  <div className={cn("mb-1 text-xs font-mono uppercase text-cyan-500/70", isAgro && "text-emerald-500/70", isManufacturing && "text-sky-500/70")}>рекомендация</div>
                  <div className="text-sm font-semibold text-cyan-50">{message.recommendation}</div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </section>

      <section id="documents" className="grid gap-6 xl:grid-cols-[1fr,1fr]">
        <Card variant="dark" className={darkPanelClass}>
          <CardHeader className="border-b border-slate-800/50">
            <CardTitle className="text-xl font-light text-white">{isAgro ? "Реестр полей" : isManufacturing ? "Реестр завода" : "Реестр документов"}</CardTitle>
          </CardHeader>
          <CardContent className="grid gap-3 p-4">
            {demo.documents.map((document: any) => (
              <div key={document.name} className={dataPanelClass}>
                <div className="flex items-start justify-between gap-3">
                  <div>
                    <div className="font-mono text-sm text-white">{document.name}</div>
                    <div className="mt-2 font-mono text-xs text-slate-500">{document.type} • {document.owner} • {document.date}</div>
                  </div>
                  <Badge className={monoBadgeClass}>{document.status}</Badge>
                </div>
              </div>
            ))}
          </CardContent>
        </Card>

        <Card variant="dark" className={darkPanelClass}>
          <CardHeader className="border-b border-slate-800/50">
            <CardTitle className="text-xl font-light text-white">{isAgro ? "До / После в агро" : isManufacturing ? "До / После на заводе" : "До / После внедрения"}</CardTitle>
          </CardHeader>
          <CardContent className="grid gap-4 p-4 md:grid-cols-2">
            <div className="border border-rose-900/40 bg-rose-950/10 p-4">
              <div className="mb-2 font-mono text-xs uppercase tracking-[0.16em] text-rose-400">до</div>
              <div className="grid gap-2 text-sm leading-6 text-slate-400">
                {business.beforeAfter.before.map((item) => (
                  <div key={item}>{item}</div>
                ))}
              </div>
            </div>
            <div className="border border-emerald-900/40 bg-emerald-950/10 p-4">
              <div className="mb-2 font-mono text-xs uppercase tracking-[0.16em] text-emerald-400">после</div>
              <div className="grid gap-2 text-sm leading-6 text-slate-400">
                {business.beforeAfter.after.map((item) => (
                  <div key={item}>{item}</div>
                ))}
              </div>
            </div>
          </CardContent>
        </Card>
      </section>

      <section id="settings">
        <Card id="request-implementation" variant="dark" className="border border-cyan-900/30 bg-gradient-to-r from-slate-950 via-slate-900 to-slate-950 text-white">
          <CardContent className="grid gap-6 p-8 lg:grid-cols-[1.1fr,0.9fr] lg:items-center">
            <div className="space-y-4">
              <Badge className="rounded-none bg-cyan-950/40 text-cyan-300">ЗАПРОСИТЬ ВНЕДРЕНИЕ</Badge>
              <div className="font-display text-3xl font-light">Переведем этот сценарий из demo в рабочую ERP+CRM</div>
              <p className="max-w-2xl text-base leading-7 text-slate-300">{business.implementationPromise}</p>
            </div>

            <div className="grid gap-3 border border-slate-800 bg-slate-900/70 p-5">
              <div className="border border-slate-800 bg-slate-950/40 p-4 font-mono text-xs text-slate-300">1. Анализируем текущий процесс и узкие места.</div>
              <div className="border border-slate-800 bg-slate-950/40 p-4 font-mono text-xs text-slate-300">2. Собираем маршрут запуска на 30 дней.</div>
              <div className="border border-slate-800 bg-slate-950/40 p-4 font-mono text-xs text-slate-300">3. Настраиваем отраслевые блоки и роли.</div>
              <div className="grid gap-3 sm:grid-cols-2">
                <div className="border border-slate-800 bg-slate-950/40 p-4">
                  <div className="mb-2 flex items-center gap-2 font-mono text-xs uppercase tracking-[0.16em] text-cyan-400">
                    <CircleDollarSign className="h-4 w-4" />
                    цель
                  </div>
                  <p className="text-sm leading-6 text-slate-300">{business.implementationPromise}</p>
                </div>
                <div className="border border-slate-800 bg-slate-950/40 p-4">
                  <div className="mb-2 flex items-center gap-2 font-mono text-xs uppercase tracking-[0.16em] text-cyan-400">
                    <FileText className="h-4 w-4" />
                    модули
                  </div>
                  <div className="flex flex-wrap gap-2">
                    {business.modules.slice(0, 4).map((module) => (
                      <Badge key={module} className="rounded-none bg-white/5 text-white">{module}</Badge>
                    ))}
                  </div>
                </div>
              </div>
              <Button asChild variant="gradient" size="lg" className="mt-2 rounded-none">
                <Link href="/">
                  Выбрать еще отрасль
                  <ChevronRight className="h-4 w-4" />
                </Link>
              </Button>
            </div>
          </CardContent>
        </Card>
      </section>
    </div>
  );
}
