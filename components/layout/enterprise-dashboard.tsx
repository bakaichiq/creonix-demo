"use client";

import { useMemo, useState } from "react";
import Link from "next/link";
import { BrainCircuit, ChevronRight, CircleDollarSign, FileText, Lightbulb, ShieldAlert, TrendingUp } from "lucide-react";

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
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Tabs, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { getScaledDemoData, getTimeframeLabel, type Timeframe } from "@/lib/demo";
import type { BusinessProfile, BusinessSlug } from "@/lib/types";
import { cn, getInsightClasses, getTrendClasses } from "@/lib/utils";
import { LiveSimulation } from "@/components/widgets/live-simulation";

interface EnterpriseDashboardProps {
  slug: BusinessSlug;
  business: BusinessProfile;
  initialDemo: any;
}

export function EnterpriseDashboard({ slug, business, initialDemo }: EnterpriseDashboardProps) {
  const [timeframe, setTimeframe] = useState<Timeframe>("today");
  const demo = useMemo(() => getScaledDemoData(initialDemo, timeframe), [initialDemo, timeframe]);
  const isConstruction = business.slug === "construction";
  const isLogistics = business.slug === "logistics";
  const isDistribution = business.slug === "distribution";
  const sectionCardClass = cn(
    "rounded-[24px] shadow-soft",
    isConstruction ? "rounded-sm border-slate-300 bg-white" :
    isLogistics ? "border-slate-900 bg-white/90 shadow-[0_24px_80px_-48px_rgba(8,145,178,0.35)]" :
    isDistribution ? "border-indigo-100 bg-[linear-gradient(180deg,rgba(255,255,255,0.98),rgba(238,242,255,0.8))]" :
    "border-slate-200 bg-white/90"
  );
  const sectionPanelClass = cn(
    "rounded-[18px] border p-4",
    isConstruction ? "rounded-sm border-slate-300 bg-slate-50" :
    isLogistics ? "rounded-[12px] border-cyan-100 bg-cyan-50/70" :
    isDistribution ? "border-indigo-100 bg-indigo-50/70" :
    "border-slate-200 bg-slate-50"
  );
  const darkSignalCardClass = cn(
    "rounded-[24px] border-cyan-900/40 bg-slate-950 text-white",
    isConstruction && "rounded-sm border-slate-900 bg-slate-950",
    isLogistics && "border-cyan-900/50 shadow-[0_24px_90px_-52px_rgba(8,145,178,0.5)]"
  );
  const sectionBadgeClass = cn(
    "w-fit text-white",
    isConstruction ? "rounded-sm bg-slate-950" :
    isLogistics ? "rounded-[10px] bg-slate-950" :
    isDistribution ? "rounded-full bg-indigo-700" :
    "rounded-full bg-slate-950"
  );
  const signalBadgeClass = cn(
    "w-fit",
    isConstruction ? "rounded-sm bg-white/10 text-white/90" :
    isLogistics ? "rounded-[10px] bg-cyan-500/15 text-cyan-100" :
    "rounded-full bg-white/10 text-white/90"
  );

  const financeTrend = demo.finance.cashflow.map((item: any) => ({
    name: item.name,
    revenue: item.income,
    expenses: item.expense,
    profit: item.net
  }));

  const criticalRisks = demo.risks.filter((risk: any) => risk.severity === "high").length;

  return (
    <div
      className={cn(
        "min-h-screen space-y-6 p-4 font-sans text-slate-800",
        isConstruction
          ? "bg-[linear-gradient(180deg,#f8fafc_0%,#eef2f7_100%),linear-gradient(90deg,rgba(148,163,184,0.06)_1px,transparent_1px),linear-gradient(rgba(148,163,184,0.05)_1px,transparent_1px)] [background-size:auto,32px_32px,32px_32px]"
          : isLogistics
            ? "bg-[radial-gradient(circle_at_top_right,rgba(6,182,212,0.08),transparent_24%),linear-gradient(180deg,#f8fafc_0%,#edf4f7_100%)]"
            : "bg-[linear-gradient(180deg,#f8fafc_0%,#eef2f7_100%)]"
      )}
    >
      <LiveSimulation slug={slug} business={business} />
      <GuidedTour business={business} />

      <div className="grid gap-4 xl:grid-cols-[1.2fr,0.8fr]">
        <Card className={cn(
          "rounded-[24px] shadow-soft",
          isConstruction ? "rounded-sm border-slate-300 bg-white" :
          isLogistics ? "border-slate-900 bg-[linear-gradient(135deg,#0f172a,#111827)] text-white" :
          "border-slate-200 bg-white/90"
        )}>
          <div className={cn(
            "h-1.5",
            isConstruction
              ? "bg-[linear-gradient(90deg,#0ea5e9_0%,#38bdf8_38%,#64748b_100%)]"
              : isLogistics
                ? "bg-[linear-gradient(90deg,#06b6d4_0%,#38bdf8_38%,#f97316_100%)]"
                : "bg-gradient-to-r from-sky-500 via-cyan-400 to-emerald-300"
          )} />
          <CardContent className="grid gap-6 p-6 lg:grid-cols-[1.1fr,0.9fr] lg:items-end">
            <div className="space-y-3">
              <div className={cn("text-[11px] uppercase font-semibold tracking-[0.22em]", isLogistics ? "text-cyan-400/70" : "text-slate-400")}>{business.design.designSystemName}</div>
              <h2 className={cn("font-display text-3xl", isLogistics ? "text-white" : "text-slate-950", business.design.headingClass)}>{business.name}</h2>
              <p className={cn("max-w-2xl text-sm leading-7", isLogistics ? "text-slate-300" : "text-slate-600")}>
                {isConstruction
                  ? "Структура экрана собрана как project board: объект, риск, деньги и исполнение графика читаются сразу."
                  : isLogistics
                    ? "Экран ощущается как dispatch console: статус рейсов, SLA, маршрут и риск просрочки собираются в один readout."
                    : isDistribution
                      ? "Дистрибуция читает интерфейс через дебиторку, каналы, отгрузки и оборот: финансовый риск важнее декоративности."
                    : "Светлая enterprise-тема теперь собрана вокруг читаемой структуры: KPI, финансовый контур, риски, реестры и AI-помощник без ощущения длинной ленты случайных карточек."}
              </p>
            </div>

            <div className={cn(
              "grid gap-3 p-4",
              isConstruction ? "rounded-sm border border-slate-300 bg-slate-50" :
              isLogistics ? "rounded-[18px] border border-cyan-500/20 bg-cyan-500/10" :
              "rounded-[20px] border border-slate-200 bg-slate-50"
            )}>
              <div className="flex items-center justify-between gap-3">
                <div className={cn("text-sm font-medium", isLogistics ? "text-white" : "text-slate-900")}>
                  {isConstruction ? "Штаб проекта" : isLogistics ? "Диспетчерская" : isDistribution ? "Коммерческий центр" : "Контур руководителя"}
                </div>
                <Badge className={cn(
                  "text-white",
                  isConstruction ? "rounded-sm bg-slate-950" :
                  isLogistics ? "rounded-[10px] bg-cyan-500/15 text-cyan-100" :
                  isDistribution ? "rounded-full bg-indigo-100 text-indigo-700" :
                  "rounded-full bg-slate-950"
                )}>
                  {isConstruction ? "Режим доски" : isLogistics ? "Диспетчер онлайн" : isDistribution ? "Контроль выручки" : "Режим доски"}
                </Badge>
              </div>
              <div className="grid gap-3 sm:grid-cols-3 lg:grid-cols-1 xl:grid-cols-3">
                {[
                  { label: "Период", value: getTimeframeLabel(timeframe) },
                  { label: isLogistics ? "SLA риск" : "Критично", value: `${criticalRisks} ${isLogistics ? "рейса" : "зоны"}` },
                  { label: "AI", value: isLogistics ? "route online" : "включен" }
                ].map((item) => (
                  <div
                    key={item.label}
                    className={cn(
                      "px-4 py-3",
                      isConstruction ? "rounded-sm border border-slate-300 bg-white" :
                      isLogistics ? "rounded-[12px] border border-white/10 bg-slate-950/40" :
                      "rounded-[16px] border border-slate-200 bg-white"
                    )}
                  >
                    <div className={cn("text-[11px] uppercase tracking-[0.16em]", isLogistics ? "text-slate-500" : "text-slate-400")}>{item.label}</div>
                    <div className={cn("mt-2 text-sm font-semibold", isLogistics ? "text-white" : "text-slate-900")}>{item.value}</div>
                  </div>
                ))}
              </div>
            </div>
          </CardContent>
        </Card>

        <Card className={cn(
          "rounded-[24px] shadow-soft",
          isConstruction ? "rounded-sm border-slate-300 bg-white" :
          isLogistics ? "border-slate-900 bg-white/90" :
          "border-slate-200 bg-white/90"
        )}>
          <CardContent className="space-y-4 p-5">
            <div>
              <div className={cn("text-[11px] uppercase font-semibold tracking-[0.22em]", isLogistics ? "text-cyan-700/70" : "text-slate-400")}>Горизонт анализа</div>
              <div className="mt-2 text-lg font-semibold text-slate-950">{isConstruction ? "Сводка по объектам" : isLogistics ? "Сводка диспетчера" : "Сводка для руководителя"}</div>
            </div>

            <Tabs value={timeframe} onValueChange={(v) => setTimeframe(v as Timeframe)} className="w-full">
              <TabsList className={cn(
                "grid w-full grid-cols-4 p-1",
                isConstruction ? "rounded-sm bg-slate-100" :
                isLogistics ? "rounded-[12px] bg-slate-100" :
                "rounded-2xl bg-slate-100"
              )}>
                <TabsTrigger value="today" className={cn(isConstruction ? "rounded-sm" : "rounded-xl")}>Сегодня</TabsTrigger>
                <TabsTrigger value="week" className={cn(isConstruction ? "rounded-sm" : "rounded-xl")}>Неделя</TabsTrigger>
                <TabsTrigger value="month" className={cn(isConstruction ? "rounded-sm" : "rounded-xl")}>Месяц</TabsTrigger>
                <TabsTrigger value="quarter" className={cn(isConstruction ? "rounded-sm" : "rounded-xl")}>Квартал</TabsTrigger>
              </TabsList>
            </Tabs>

            <div className="grid gap-3">
              {(
                isConstruction
                  ? [
                      "Объект, этап, деньги и риск считываются как единый board.",
                      "Плотность данных выше, чтобы руководитель видел больше на первом экране.",
                      "Визуальный язык стал ближе к инженерной проектной среде."
                    ]
                  : isLogistics
                    ? [
                        "Рейсы и SLA читаются как live operations feed.",
                        "Контраст и сигнальные акценты смещены к dispatch-логике.",
                        "Диспетчерский режим отделён от обычного enterprise-кабинета."
                      ]
                    : isDistribution
                      ? [
                          "Каналы, дебиторка и отгрузки читаются как единый revenue board.",
                          "Финансовый риск поднят выше, чем декоративные сценарии интерфейса.",
                          "Enterprise-слой стал ближе к B2B commercial control room."
                        ]
                    : [
                        "Один и тот же UX-сценарий работает для всех отраслей, меняется только доменный язык.",
                        "Верх экрана сокращён до реальных управленческих сигналов.",
                        "Навигация sidebar теперь соответствует всем секциям страницы."
                      ]
              ).map((item) => (
                <div key={item} className={cn(
                  "px-4 py-3 text-sm leading-6",
                  isConstruction ? "rounded-sm border border-slate-300 bg-slate-50 text-slate-600" :
                  isLogistics ? "rounded-[12px] border border-cyan-200 bg-cyan-50 text-slate-700" :
                  "rounded-[18px] border border-slate-200 bg-slate-50 text-slate-600"
                )}>
                  {item}
                </div>
              ))}
            </div>
          </CardContent>
        </Card>
      </div>

      <section id="dashboard" className="space-y-5">
        <div className="grid gap-4 md:grid-cols-2 xl:grid-cols-3">
          {demo.kpis.map((item: any) => (
            <KpiCard key={item.label} item={item} accentColor={business.palette.chart[1]} uiTheme="enterprise" variant={business.design.kpiVariant} />
          ))}
        </div>

        <div className="grid gap-4 lg:grid-cols-12">
          <div className="lg:col-span-8 flex flex-col gap-4">
            <Card className="rounded-[24px] border-slate-200 bg-white/90 shadow-soft">
              <CardHeader className="border-b border-slate-100 py-5">
                <CardTitle className="font-display text-xl font-semibold text-slate-950">
                  Операционные метрики: {business.vocabulary.sales}
                </CardTitle>
                <CardDescription>Две ключевые проекции: деньги и исполнение плана.</CardDescription>
              </CardHeader>
              <CardContent className="grid gap-4 p-5 xl:grid-cols-2">
                <RevenueChart data={demo.revenueTrend} colors={business.palette.chart} currency={business.currency} />
                <PlanFactChart data={demo.planFact} colors={business.palette.chart} />
              </CardContent>
            </Card>

            <Card className="rounded-[24px] border-slate-200 bg-white/90 shadow-soft">
              <CardHeader className="border-b border-slate-100 py-5">
                <CardTitle className="font-display text-xl font-semibold text-slate-950">Журнал операций</CardTitle>
                <CardDescription>Последние изменения по процессам, статусам и владельцам.</CardDescription>
              </CardHeader>
              <CardContent className="px-5 pb-5">
                <OperationsTable rows={demo.operations} />
              </CardContent>
            </Card>
          </div>

          <div className="lg:col-span-4 flex flex-col gap-4">
            <Card className="rounded-[24px] border-slate-200 bg-white/90 shadow-soft">
              <CardHeader className="border-b border-slate-100 bg-slate-50/80 py-4">
                <CardTitle className="flex items-center gap-2 text-base font-semibold text-slate-900">
                  <ShieldAlert className="h-4 w-4 text-amber-500" />
                  Инциденты и риски
                </CardTitle>
              </CardHeader>
              <CardContent className="grid gap-3 p-4">
                {demo.risks.map((risk: any) => (
                  <div key={risk.title} className="rounded-[18px] border border-slate-200 bg-white p-4 shadow-sm">
                    <div className="flex items-start justify-between gap-3">
                      <div className="text-sm font-semibold text-slate-900">{risk.title}</div>
                      <Badge
                        variant="outline"
                        className={cn(
                          "rounded-full border-amber-300 bg-amber-50 text-amber-700",
                          risk.severity === "high" && "border-rose-300 bg-rose-50 text-rose-700"
                        )}
                      >
                        {risk.severity === "high" ? "Критично" : "Внимание"}
                      </Badge>
                    </div>
                    <p className="mt-2 text-sm leading-6 text-slate-600">{risk.description}</p>
                    <div className="mt-2 text-[11px] font-semibold uppercase tracking-[0.16em] text-slate-400">{risk.impact}</div>
                  </div>
                ))}
              </CardContent>
            </Card>

            <Card variant="dark" className="rounded-[24px] border-cyan-900/40 bg-slate-950 text-white shadow-[0_24px_80px_-40px_rgba(8,145,178,0.55)]">
              <CardHeader className="border-b border-slate-800 bg-slate-950/20 py-4">
                <CardTitle className="flex items-center gap-2 text-base font-semibold text-white">
                  <BrainCircuit className="h-4 w-4 text-cyan-400" />
                  AI анализ
                </CardTitle>
              </CardHeader>
              <CardContent className="grid gap-3 p-4">
                {demo.aiInsights.map((insight: any) => (
                  <div key={insight.title} className="rounded-[18px] border border-slate-800 bg-slate-900 p-4">
                    <div className="text-sm font-semibold text-cyan-100">{insight.title}</div>
                    <p className="mt-2 text-sm leading-6 text-slate-300">{insight.description}</p>
                    <div className="mt-3 rounded-[14px] bg-cyan-500/10 px-3 py-2 text-xs font-medium text-cyan-200">
                      {insight.recommendation}
                    </div>
                  </div>
                ))}
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      <section id="crm" className="grid gap-6 xl:grid-cols-[1.15fr,0.85fr]">
        <Card className={sectionCardClass}>
          <CardHeader>
            <Badge className={cn("w-fit rounded-full", business.palette.badge)}>{business.vocabulary.crm}</Badge>
            <CardTitle className="text-3xl">
              {isConstruction
                ? `${business.vocabulary.crm}: контрагенты, стадии и ответственные`
                : isLogistics
                  ? `${business.vocabulary.crm}: клиенты, SLA и route handoff`
                  : isDistribution
                    ? `${business.vocabulary.crm}: каналы, контрагенты и платежная дисциплина`
                  : `${business.vocabulary.crm}: сделки и владельцы`}
            </CardTitle>
          </CardHeader>
          <CardContent>
            <CrmTable rows={demo.crm.leads} />
          </CardContent>
        </Card>

        <Card className={sectionCardClass}>
          <CardHeader>
            <CardTitle>{demo.crm.featuredClient.company}</CardTitle>
            <CardDescription>{demo.crm.featuredClient.segment}</CardDescription>
          </CardHeader>
          <CardContent className="space-y-4">
            <div className={cn(sectionPanelClass, "text-sm leading-6 text-slate-600")}>
              LTV: {demo.crm.featuredClient.ltv}<br />
              Последний счет: {demo.crm.featuredClient.lastInvoice}<br />
              Менеджер: {demo.crm.featuredClient.manager}
            </div>
            <div className="grid gap-3">
              {demo.crm.featuredClient.history.map((entry: any) => (
                <div key={`${entry.date}-${entry.title}`} className={sectionPanelClass}>
                  <div className="flex items-center justify-between gap-3">
                    <div className="font-medium text-slate-900">{entry.title}</div>
                    <Badge variant="secondary" className={cn(isConstruction && "rounded-sm", isLogistics && "rounded-[10px]")}>{entry.date}</Badge>
                  </div>
                  <div className="mt-2 text-sm text-slate-600">{entry.type} • {entry.author}</div>
                </div>
              ))}
            </div>
          </CardContent>
        </Card>
      </section>

      <div className="grid gap-6 lg:grid-cols-2">
        <section id="inventory">
          <Card className={cn("h-full", sectionCardClass)}>
            <CardHeader>
              <Badge className={cn("w-fit rounded-full", business.palette.badge)}>{business.vocabulary.inventory}</Badge>
              <CardTitle className="text-3xl">{business.vocabulary.inventory}</CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <InventoryTable rows={demo.inventory.items} />
              <div className="grid gap-3">
                {demo.inventory.alerts.map((alert: string) => (
                  <div key={alert} className={cn(sectionPanelClass, "px-4 py-3 text-sm leading-6 text-slate-600")}>
                    {alert}
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>
        </section>

        <section id="sales">
          <Card className={cn("h-full", sectionCardClass)}>
            <CardHeader>
              <Badge className={cn("w-fit rounded-full", business.palette.badge)}>{business.vocabulary.sales}</Badge>
              <CardTitle className="text-3xl">{business.vocabulary.sales}</CardTitle>
            </CardHeader>
            <CardContent className="space-y-5">
              <div className="grid gap-4 md:grid-cols-2 xl:grid-cols-4">
                {demo.sales.summary.map((item: any) => (
                  <div key={item.label} className={sectionPanelClass}>
                    <div className="text-sm text-slate-500">{item.label}</div>
                    <div className="mt-2 flex items-center justify-between gap-2">
                      <div className="font-display text-xl font-semibold text-slate-950">{item.value}</div>
                      <Badge className={cn(isConstruction ? "rounded-sm" : isLogistics ? "rounded-[10px]" : "rounded-full", getTrendClasses(item.tone))}>{item.tone === "down" ? "Риск" : item.tone === "up" ? "Рост" : "Контроль"}</Badge>
                    </div>
                  </div>
                ))}
              </div>
              <SalesTable rows={demo.sales.orders} />
            </CardContent>
          </Card>
        </section>
      </div>

      <section id="operations" className="grid gap-6 xl:grid-cols-[1.15fr,0.85fr]">
        <Card className={sectionCardClass}>
          <CardHeader>
            <Badge className={sectionBadgeClass}>{isConstruction ? "Доска проекта" : isLogistics ? "Лента диспетчера" : isDistribution ? "Операции выручки" : "Операции"}</Badge>
            <CardTitle className="text-3xl">{business.operationLabel}</CardTitle>
            <CardDescription>
              {isConstruction
                ? "Операционный слой подан как board по объекту: этап, ответственный, дедлайн и блокер должны считываться моментально."
                : isLogistics
                  ? "Вместо абстрактного операционного блока здесь dispatch-feed: исполнение маршрутов, handoff и отклонения по SLA."
                  : isDistribution
                    ? "Для дистрибуции операции это отгрузка, канал и дисциплина оплаты, а не просто список задач."
                  : business.operationSubtitle}
            </CardDescription>
          </CardHeader>
          <CardContent>
            <OperationsTable rows={demo.operationsCenter.items} mode="operations" />
          </CardContent>
        </Card>

        <Card className={sectionCardClass}>
          <CardHeader>
            <CardTitle>{isLogistics ? "Маршрут / передача / доставка" : isDistribution ? "Заказ / отгрузка / сбор оплат" : "Ключевые этапы процесса"}</CardTitle>
            <CardDescription>{isConstruction ? "Процент прохождения по проектным этапам и readiness-блокам." : isLogistics ? "Pipeline показывает, где теряется темп: маршрут, handoff, погрузка или доставка." : isDistribution ? "Pipeline показывает, где теряется цикл: заказ, отгрузка или сбор денег." : "Процент прохождения по основным операционным блокам."}</CardDescription>
          </CardHeader>
          <CardContent className="grid gap-4">
            {demo.operationsCenter.pipeline.map((step: any) => (
              <div key={step.label} className={sectionPanelClass}>
                <div className="flex items-center justify-between gap-3">
                  <div className="font-medium text-slate-900">{step.label}</div>
                  <div className={cn("text-sm", isLogistics ? "font-semibold text-cyan-700" : "text-slate-500")}>{step.value}%</div>
                </div>
                <div className={cn("mt-3 h-2 bg-slate-100", isConstruction ? "rounded-sm" : "rounded-full")}>
                  <div className={cn("h-2 bg-gradient-to-r", business.palette.gradient, isConstruction ? "rounded-sm" : "rounded-full")} style={{ width: `${step.value}%` }} />
                </div>
              </div>
            ))}
          </CardContent>
        </Card>
      </section>

      <section id="finance" className="grid gap-6 xl:grid-cols-[1.05fr,0.95fr]">
        <Card className={sectionCardClass}>
          <CardHeader>
            <Badge className={sectionBadgeClass}>{isConstruction ? "Бюджетная доска" : isLogistics ? "Контроль затрат" : isDistribution ? "Дебиторская ведомость" : "Финансы"}</Badge>
            <CardTitle className="text-3xl">{isConstruction ? "Бюджет, факт и отклонения по объекту" : isLogistics ? "Доходы, рейсовая себестоимость и отклонения" : isDistribution ? "Дебиторка, отгрузки и денежные отклонения" : "Доходы, расходы и отклонения"}</CardTitle>
          </CardHeader>
          <CardContent className="grid gap-3">
            {demo.finance.rows.map((row: any) => (
              <div key={row.category} className={sectionPanelClass}>
                <div className="flex items-center justify-between gap-3">
                  <div className="text-sm font-medium text-slate-800">{row.category}</div>
                  <div className="text-sm font-semibold text-slate-950">{row.fact}</div>
                </div>
                <div className="mt-2 flex items-center justify-between gap-3 text-xs text-slate-500">
                  <span>План: {row.plan}</span>
                  <span>Маржа: {row.margin}</span>
                  <Badge className={cn(isConstruction ? "rounded-sm" : isLogistics ? "rounded-[10px]" : "rounded-full", row.delta.startsWith("-") ? getTrendClasses("down") : getTrendClasses("up"))}>
                    {row.delta}
                  </Badge>
                </div>
              </div>
            ))}
          </CardContent>
        </Card>

        <Card className={sectionCardClass}>
          <CardHeader>
            <CardTitle>Денежный поток</CardTitle>
            <CardDescription>{isConstruction ? "Строительный режим делает акцент на кассовых разрывах по этапам и оплатам." : isLogistics ? "Диспетчерский режим связывает cashflow с движением рейсов и SLA." : isDistribution ? "В дистрибуции cashflow связан с каналами, отгрузкой и сроком оплаты." : "Динамика доходов и расходов по периодам."}</CardDescription>
          </CardHeader>
          <CardContent>
            <RevenueChart data={financeTrend} colors={business.palette.chart} currency={business.currency} />
          </CardContent>
        </Card>
      </section>

      <section id="bi" className="grid gap-6 xl:grid-cols-[1.05fr,0.95fr]">
        <Card className={sectionCardClass}>
          <CardHeader>
            <Badge className={sectionBadgeClass}>BI аналитика</Badge>
            <CardTitle className="text-3xl">Динамика и прогноз</CardTitle>
          </CardHeader>
          <CardContent>
            <BiOverviewChart data={demo.bi.trend} colors={business.palette.chart} />
          </CardContent>
        </Card>

        <Card className={sectionCardClass}>
          <CardHeader>
            <CardTitle>Отклонения и прогноз системы</CardTitle>
          </CardHeader>
          <CardContent className="grid gap-3">
            <div className={cn(sectionPanelClass, "text-sm leading-6 text-slate-600")}>
              <div className="mb-2 flex items-center gap-2 font-medium text-slate-900">
                <TrendingUp className="h-4 w-4" />
                Прогноз
              </div>
              {demo.bi.forecast}
            </div>
            {demo.bi.deviations.map((deviation: string) => (
              <div key={deviation} className={cn(sectionPanelClass, "text-sm leading-6 text-slate-600")}>
                {deviation}
              </div>
            ))}
          </CardContent>
        </Card>
      </section>

      <section id="assistant" className="grid gap-6 xl:grid-cols-[0.9fr,1.1fr]">
        <Card variant="dark" className={darkSignalCardClass}>
          <CardHeader>
            <Badge className={signalBadgeClass}>{isConstruction ? "ИИ проекта" : isLogistics ? "ИИ диспетчера" : isDistribution ? "ИИ выручки" : "ИИ помощник"}</Badge>
            <CardTitle className="text-3xl text-white">{demo.assistant.headline}</CardTitle>
          </CardHeader>
          <CardContent className="grid gap-3">
            {demo.assistant.bullets.map((bullet: string) => (
              <div key={bullet} className={cn(
                "border border-white/10 bg-white/10 p-4 text-sm leading-6 text-slate-200",
                isConstruction ? "rounded-sm" : isLogistics ? "rounded-[12px]" : "rounded-[18px]"
              )}>
                {bullet}
              </div>
            ))}
          </CardContent>
        </Card>

        <div className="grid gap-4">
          {demo.assistant.messages.map((message: any) => (
            <Card key={message.title} className={sectionCardClass}>
              <CardContent className="p-5">
                <div className="flex items-start justify-between gap-4">
                  <div>
                    <div className="font-display text-xl font-semibold text-slate-950">{message.title}</div>
                    <div className={cn("mt-2 text-sm", isLogistics ? "text-cyan-700" : isConstruction ? "text-sky-700" : "text-cyan-700")}>{message.metric}</div>
                  </div>
                  <div className={cn("bg-sky-100 p-2", isConstruction ? "rounded-sm" : isLogistics ? "rounded-[12px]" : "rounded-2xl")}>
                    <Lightbulb className={cn("h-4 w-4", isLogistics ? "text-cyan-700" : "text-sky-700")} />
                  </div>
                </div>
                <p className="mt-4 text-sm leading-7 text-slate-600">{message.summary}</p>
                <div className={cn(
                  "mt-4 border p-4 text-sm font-medium leading-6",
                  isConstruction ? "rounded-sm" : isLogistics ? "rounded-[12px]" : "rounded-[18px]",
                  getInsightClasses(message.tone ?? "positive")
                )}>
                  {message.recommendation}
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </section>

      <section id="documents" className="grid gap-6 xl:grid-cols-[1fr,1fr]">
        <Card className={sectionCardClass}>
          <CardHeader>
            <Badge className={sectionBadgeClass}>{isConstruction ? "Реестр" : isLogistics ? "Накладные / подтверждения" : isDistribution ? "Коммерческие документы" : "Документы"}</Badge>
            <CardTitle className="text-3xl">{isConstruction ? "Документы, акты и статусы" : isLogistics ? "Накладные, POD и статусы" : isDistribution ? "Договоры, счета и статусы оплат" : "Документы и статусы"}</CardTitle>
          </CardHeader>
          <CardContent className="grid gap-3">
            {demo.documents.map((document: any) => (
              <div key={document.name} className={sectionPanelClass}>
                <div className="flex items-start justify-between gap-3">
                  <div>
                    <div className="font-medium text-slate-900">{document.name}</div>
                    <div className="mt-2 text-sm text-slate-500">{document.type} • {document.owner} • {document.date}</div>
                  </div>
                  <Badge variant="secondary" className={cn(isConstruction && "rounded-sm", isLogistics && "rounded-[10px]")}>{document.status}</Badge>
                </div>
              </div>
            ))}
          </CardContent>
        </Card>

        <Card className={sectionCardClass}>
          <CardHeader>
            <Badge className={sectionBadgeClass}>{isConstruction ? "План развёртывания" : isLogistics ? "Путь запуска" : isDistribution ? "Ввод по каналам" : "Внедрение"}</Badge>
            <CardTitle className="text-3xl">До / После по отрасли</CardTitle>
          </CardHeader>
          <CardContent className="grid gap-4 md:grid-cols-2">
            <div className="rounded-[18px] border border-rose-100 bg-rose-50/60 p-4">
              <div className="mb-2 text-sm font-semibold uppercase tracking-[0.16em] text-rose-600">До</div>
              <div className="grid gap-2 text-sm leading-6 text-slate-600">
                {business.beforeAfter.before.map((item) => (
                  <div key={item}>{item}</div>
                ))}
              </div>
            </div>
            <div className="rounded-[18px] border border-emerald-100 bg-emerald-50/60 p-4">
              <div className="mb-2 text-sm font-semibold uppercase tracking-[0.16em] text-emerald-700">После</div>
              <div className="grid gap-2 text-sm leading-6 text-slate-600">
                {business.beforeAfter.after.map((item) => (
                  <div key={item}>{item}</div>
                ))}
              </div>
            </div>
          </CardContent>
        </Card>
      </section>

      <section id="settings">
        <Card id="request-implementation" variant="dark" className="overflow-hidden rounded-[24px] border-white/10 bg-gradient-to-r from-slate-950 via-slate-900 to-slate-800 text-white">
          <CardContent className="grid gap-6 p-8 lg:grid-cols-[1.1fr,0.9fr] lg:items-center">
            <div className="space-y-4">
              <Badge className="w-fit rounded-full bg-white/10 text-white/90">Запросить внедрение</Badge>
              <div className="font-display text-3xl font-semibold">Переведем demo в рабочую ERP+CRM под вашу компанию</div>
              <p className="max-w-2xl text-base leading-7 text-slate-300">{business.implementationPromise}</p>
            </div>

            <div className="grid gap-3 rounded-[28px] border border-white/10 bg-white/10 p-5">
              <div className="rounded-[20px] border border-white/10 bg-white/10 p-4 text-sm text-slate-200">1. Разбираем текущие боли и узкие места процесса.</div>
              <div className="rounded-[20px] border border-white/10 bg-white/10 p-4 text-sm text-slate-200">2. Собираем дорожную карту запуска на 30 дней.</div>
              <div className="rounded-[20px] border border-white/10 bg-white/10 p-4 text-sm text-slate-200">3. Настраиваем отраслевые блоки, а не абстрактную CRM.</div>
              <div className="grid gap-3 sm:grid-cols-2">
                <div className="rounded-[20px] border border-white/10 bg-white/10 p-4">
                  <div className="mb-2 flex items-center gap-2 text-sm font-medium text-white">
                    <CircleDollarSign className="h-4 w-4" />
                    Цель запуска
                  </div>
                  <p className="text-sm leading-6 text-slate-300">{business.implementationPromise}</p>
                </div>
                <div className="rounded-[20px] border border-white/10 bg-white/10 p-4">
                  <div className="mb-2 flex items-center gap-2 text-sm font-medium text-white">
                    <FileText className="h-4 w-4" />
                    Первые модули
                  </div>
                  <div className="flex flex-wrap gap-2">
                    {business.modules.slice(0, 4).map((module) => (
                      <Badge key={module} className="bg-white/10 text-white">{module}</Badge>
                    ))}
                  </div>
                </div>
              </div>
              <Button asChild variant="gradient" size="lg" className="mt-2 rounded-2xl">
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
