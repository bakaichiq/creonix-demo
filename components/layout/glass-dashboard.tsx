"use client";

import { useMemo, useState } from "react";
import Link from "next/link";
import { BrainCircuit, ChevronRight, CircleDollarSign, FileText, Lightbulb, Sparkles, TrendingUp } from "lucide-react";

import { BiOverviewChart } from "@/components/charts/bi-overview-chart";
import { PlanFactChart } from "@/components/charts/plan-fact-chart";
import { RevenueChart } from "@/components/charts/revenue-chart";
import { KpiCard } from "@/components/kpi-card";
import { GuidedTour } from "@/components/widgets/guided-tour";
import { HeroWidget } from "@/components/widgets/hero-widget";
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
import { cn, getInsightClasses, getSeverityClasses, getTrendClasses } from "@/lib/utils";
import { LiveSimulation } from "@/components/widgets/live-simulation";

interface GlassDashboardProps {
  slug: BusinessSlug;
  business: BusinessProfile;
  initialDemo: any;
}

export function GlassDashboard({ slug, business, initialDemo }: GlassDashboardProps) {
  const [timeframe, setTimeframe] = useState<Timeframe>("today");
  const demo = useMemo(() => getScaledDemoData(initialDemo, timeframe), [initialDemo, timeframe]);
  const isBoutique = business.slug === "boutique";
  const isGrocery = business.slug === "grocery";
  const isSewing = business.slug === "sewing";
  const isBakery = business.slug === "bakery";
  const isRestaurant = business.slug === "restaurant";
  const isDarkGlass = isRestaurant;
  const boutiqueCardClass = cn(
    "border-white/70 bg-white/80",
    isBoutique && "rounded-[8px] border-stone-200 bg-[linear-gradient(180deg,rgba(255,255,255,0.98),rgba(248,244,240,0.94))]",
    isGrocery && "border-emerald-100 bg-[linear-gradient(180deg,rgba(255,255,255,0.98),rgba(240,253,244,0.92))]",
    isSewing && "border-fuchsia-100 bg-[linear-gradient(180deg,rgba(255,255,255,0.96),rgba(253,242,248,0.94))]",
    isBakery && "border-amber-100 bg-[linear-gradient(180deg,rgba(255,251,235,0.98),rgba(255,255,255,0.92))]",
    isRestaurant && "border-orange-900/35 bg-[linear-gradient(180deg,rgba(24,24,27,0.94),rgba(41,37,36,0.94))] text-white shadow-[0_24px_80px_-40px_rgba(120,53,15,0.38)]"
  );
  const boutiquePanelClass = cn(
    "rounded-[22px] border border-slate-200 p-4",
    isBoutique && "rounded-[6px] border-stone-200 bg-stone-50",
    isGrocery && "border-emerald-100 bg-emerald-50/70",
    isSewing && "border-fuchsia-100 bg-fuchsia-50/70",
    isBakery && "border-amber-100 bg-amber-50/70",
    isRestaurant && "border-orange-900/30 bg-orange-950/30"
  );
  const boutiqueMutedPanelClass = cn(
    "rounded-[24px] border border-slate-200 bg-slate-50 p-5",
    isBoutique && "rounded-[6px] border-stone-200 bg-stone-50",
    isGrocery && "border-emerald-100 bg-emerald-50/70",
    isSewing && "border-fuchsia-100 bg-fuchsia-50/70",
    isBakery && "border-amber-100 bg-amber-50/70",
    isRestaurant && "border-orange-900/30 bg-orange-950/30"
  );
  const boutiqueBadgeClass = cn(
    "w-fit rounded-full",
    isBoutique ? "border border-stone-300 bg-white text-stone-700" :
    isGrocery ? "bg-emerald-600 text-white" :
    isSewing ? "bg-fuchsia-700 text-white" :
    isBakery ? "bg-amber-700 text-white" :
    isRestaurant ? "bg-orange-600 text-white" :
    "bg-slate-950 text-white"
  );
  const boutiqueTitleClass = cn(
    "text-3xl",
    isBoutique && "font-light tracking-[0.04em]",
    isSewing && "italic",
    isBakery && "font-semibold text-amber-950",
    isRestaurant && "text-white"
  );
  const serviceLabelClass = cn(isDarkGlass ? "text-orange-100/55" : isBoutique ? "text-stone-400" : "text-slate-400");
  const serviceHeadingClass = cn(isDarkGlass ? "text-white" : isBoutique ? "font-light tracking-[0.04em]" : "font-semibold", !isDarkGlass && "text-slate-950");
  const serviceBodyClass = cn(isDarkGlass ? "text-slate-300" : isBoutique ? "text-stone-600" : "text-slate-600");
  const servicePanelClass = cn(
    isDarkGlass
      ? "rounded-[18px] border border-orange-200/10 bg-black/16 px-4 py-3 text-sm leading-6 text-stone-100"
      : isBoutique
        ? "rounded-[6px] border border-stone-200 bg-stone-50 px-4 py-3 text-sm leading-7 text-stone-600"
        : "rounded-[18px] border border-slate-200 bg-slate-50 px-4 py-3 text-sm leading-6 text-slate-600"
  );
  const serviceStatsCardClass = cn(
    isDarkGlass ? "rounded-[18px] border border-orange-200/10 bg-black/16 p-4" :
    isBoutique ? "rounded-[6px] border border-stone-200 bg-white px-5 py-4" :
    "rounded-[20px] border border-slate-200 bg-slate-50 p-4"
  );

  const financeTrend = demo.finance.cashflow.map((item: any) => ({
    name: item.name,
    revenue: item.income,
    expenses: item.expense,
    profit: item.net
  }));

  const criticalRisks = demo.risks.filter((risk: any) => risk.severity === "high").length;

  return (
    <div className={cn("space-y-6", isBoutique && "space-y-8")}>
      <LiveSimulation slug={slug} business={business} />

      <div className="grid gap-4 xl:grid-cols-[1.15fr,0.85fr]">
        <Card className={cn(
          isBoutique
            ? "rounded-[8px] border-stone-200 bg-[linear-gradient(180deg,rgba(255,255,255,0.98),rgba(246,242,237,0.95))]"
            : "border-white/70 bg-white/80"
        )}>
          <CardContent className={cn("grid gap-5 p-5 lg:grid-cols-[1.1fr,0.9fr] lg:items-end", isBoutique && "gap-8 p-8")}>
            <div className="space-y-4">
              <Badge className={cn("w-fit rounded-full", business.palette.badge)}>{business.design.designSystemName}</Badge>
              <div className="space-y-3">
                <h2 className={cn("font-display text-3xl text-slate-950", business.design.headingClass, isBoutique && "text-[2.25rem] leading-[1.05]")}>
                  {business.shortName}: первый экран с KPI, рисками и действием
                </h2>
                <p className={cn("max-w-2xl text-sm leading-7 text-slate-600", isBoutique && "max-w-xl text-[15px] leading-8 text-stone-600")}>
                  {isBoutique
                    ? "Бутик читает интерфейс не как складской дашборд, а как editorial control room: коллекции, размеры, возвраты и клиенты живут в более воздушной и премиальной подаче."
                    : isGrocery
                      ? "Ритейл-демо подается как fresh shelf board: сроки годности, SKU, пополнение и маржа читаются как один живой контур магазина."
                      : isSewing
                        ? "Швейный цех должен ощущаться как flow по партиям и линиям: раскрой, пошив, ОТК и bottleneck видны без сухого enterprise-шума."
                        : isBakery
                          ? "Пекарне нужен теплый, сменный и производственный интерфейс: выпуск, печи, свежесть и сырье считываются как today-board."
                          : isRestaurant
                            ? "Ресторанный сценарий читается через tempo и сервис: пик нагрузки, столы, кухня и скорость обслуживания важнее формального back-office вида."
                    : "Демо перестроено как управленческий сценарий: сначала руководитель видит состояние периода, потом углубляется в CRM, склад, операции и документы без визуального шума."}
                </p>
              </div>
            </div>

            <div className="grid gap-3 sm:grid-cols-3 lg:grid-cols-1 xl:grid-cols-3">
                {[
                  { label: "Период", value: getTimeframeLabel(timeframe) },
                  { label: "Критичные зоны", value: `${criticalRisks}` },
                  { label: "AI статус", value: "Активен" }
                ].map((item) => (
                <div key={item.label} className={serviceStatsCardClass}>
                  <div className={cn("text-[11px] uppercase tracking-[0.16em]", serviceLabelClass)}>{item.label}</div>
                  <div className={cn("mt-2 font-display text-xl", isDarkGlass ? "font-semibold text-white" : "text-slate-950", isBoutique && "font-light tracking-[0.05em]")}>{item.value}</div>
                </div>
              ))}
            </div>
          </CardContent>
        </Card>

        <div className="space-y-4">
          <Card className={cn(isBoutique ? "rounded-[8px] border-stone-200 bg-white" : "border-white/70 bg-white/80")}>
            <CardContent className="space-y-4 p-4">
              <div className="flex items-center justify-between gap-4">
                <div>
                  <div className={cn("text-[11px] font-semibold uppercase tracking-[0.18em]", serviceLabelClass)}>
                    Горизонт анализа
                  </div>
                  <div className={cn("mt-2 text-lg", serviceHeadingClass)}>Сценарий для собственника</div>
                </div>
                <div className={cn("hidden text-xs font-semibold sm:block", isDarkGlass ? "text-slate-400" : "text-slate-500")}>Первые 15 секунд чтения</div>
              </div>

              <Tabs value={timeframe} onValueChange={(v) => setTimeframe(v as Timeframe)} className="w-full">
                <TabsList className={cn("grid w-full grid-cols-4 p-1", isDarkGlass ? "rounded-2xl border border-white/10 bg-white/10 text-slate-300" : "bg-slate-100", isBoutique ? "rounded-[8px]" : "rounded-2xl")}>
                  <TabsTrigger value="today" className={cn(isBoutique ? "rounded-[6px]" : "rounded-xl", isDarkGlass && "text-slate-300 data-[state=active]:bg-white data-[state=active]:text-slate-950")}>Сегодня</TabsTrigger>
                  <TabsTrigger value="week" className={cn(isBoutique ? "rounded-[6px]" : "rounded-xl", isDarkGlass && "text-slate-300 data-[state=active]:bg-white data-[state=active]:text-slate-950")}>Неделя</TabsTrigger>
                  <TabsTrigger value="month" className={cn(isBoutique ? "rounded-[6px]" : "rounded-xl", isDarkGlass && "text-slate-300 data-[state=active]:bg-white data-[state=active]:text-slate-950")}>Месяц</TabsTrigger>
                  <TabsTrigger value="quarter" className={cn(isBoutique ? "rounded-[6px]" : "rounded-xl", isDarkGlass && "text-slate-300 data-[state=active]:bg-white data-[state=active]:text-slate-950")}>Квартал</TabsTrigger>
                </TabsList>
              </Tabs>

              <div className="grid gap-3">
                {(isBoutique
                  ? [
                      "Типографика и воздух важнее лишних декоративных контейнеров.",
                      "Коллекции, размеры и возвраты читаются как luxury-merch view.",
                      "Контент смещён от dashboard-shouting к curated presentation."
                    ]
                  : isGrocery
                    ? [
                        "Категории, пополнение и expiry-сигналы поданы как retail board.",
                        "Блоки компактнее, потому что магазин живет в высокой плотности SKU.",
                        "Система говорит языком свежести, полки и оборачиваемости."
                      ]
                    : isSewing
                      ? [
                          "Производственный поток важнее декоративности.",
                          "Партии, линии и качество читаются как atelier pipeline.",
                          "Вторичные блоки мягче, чтобы не ломать ощущение аккуратного workflow."
                        ]
                      : isBakery
                        ? [
                            "Интерфейс стал теплее и ближе к shift-board пекарни.",
                            "Свежесть, выпуск и печи читаются как today operations.",
                            "Даже вторичные карточки поддерживают теплую производственную подачу."
                          ]
                        : isRestaurant
                          ? [
                              "Экран подчинен ритму сервиса и rush-hour логике.",
                              "Показатели и риски читаются как hospitality tempo board.",
                              "Визуальный язык сдвинут к скорости кухни и зала."
                            ]
                  : [
                      "Сначала KPI и отклонения, затем реестры и детальные таблицы.",
                      "Каждый блок привязан к доменному сценарию конкретной отрасли.",
                      "Навигация по секциям теперь одинакова для всех тем."
                    ]).map((item) => (
                  <div key={item} className={servicePanelClass}>
                    {item}
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>

          <GuidedTour business={business} compact />
        </div>
      </div>

      <section id="dashboard" className="space-y-6">
        <Card className={boutiqueCardClass}>
          <CardHeader className="pb-2">
            <Badge className={boutiqueBadgeClass}>
              {isBoutique ? "Управление коллекцией" : isGrocery ? "Доска полок" : isSewing ? "Доска ателье" : isBakery ? "Оперативный контроль" : isRestaurant ? "Темп сервиса" : "Дашборд"}
            </Badge>
            <CardTitle className={boutiqueTitleClass}>{business.shortName}: единый контур управления</CardTitle>
            <CardDescription>
              {isBoutique
                ? "Главный экран собран как luxury-merch control room: KPI, sell-through, клиент и возвраты читаются без ощущения перегруженного ERP."
                : isGrocery
                  ? "Первый экран работает как daily board магазина: свежесть, пополнение, категория и маржа видны до ухода в реестры."
                  : isSewing
                    ? "Главный экран больше похож на аккуратный production-flow, чем на обычный торговый дашборд."
                    : isBakery
                      ? "Сценарий собран как сменный board по выпуску, печам и окну свежести."
                      : isRestaurant
                        ? "Первый экран ведет через сервисный tempo: загрузка, чек, скорость и операционные сигналы."
                : "KPI, план-факт, риски и AI-сигналы на одном уровне приоритета."}
            </CardDescription>
          </CardHeader>
          <CardContent className="grid gap-4 md:grid-cols-2 xl:grid-cols-3">
            {demo.kpis.map((item: any) => (
              <KpiCard key={item.label} item={item} accentColor={business.palette.chart[0]} variant={business.design.kpiVariant} />
            ))}
          </CardContent>
        </Card>

        <div className="grid gap-6 xl:grid-cols-[1.2fr,0.8fr]">
          <Card className={boutiqueCardClass}>
            <CardHeader>
              <CardTitle>{isBoutique ? "Коллекции / продажи / маржа" : isGrocery ? "Категории / пополнение / маржа" : isSewing ? "Партии / выпуск / исполнение" : isBakery ? "Выпуск / смена / маржа" : isRestaurant ? "Сервис / загрузка / выручка" : "Деньги и исполнение плана"}</CardTitle>
              <CardDescription>
                {isBoutique ? "Для бутика важен не только cashflow, но и то, как коллекция продается по размерам и возвратам." : isGrocery ? "Ритейл-сценарий связывает деньги с shelf-turn и списаниями." : isSewing ? "Для цеха прибыль бессмысленна без читаемости партий и bottleneck-этапов." : isBakery ? "Пекарне нужен план-факт через выпуск, окна свежести и сменный темп." : isRestaurant ? "Ресторанная панель связывает выручку с rush-hour и качеством сервиса." : "Основной readout для управленческого экрана."}
              </CardDescription>
            </CardHeader>
            <CardContent className="grid gap-4 xl:grid-cols-2">
              <RevenueChart data={demo.revenueTrend} colors={business.palette.chart} currency={business.currency} />
              <PlanFactChart data={demo.planFact} colors={business.palette.chart} />
            </CardContent>
          </Card>

          <Card className={boutiqueCardClass}>
            <CardHeader>
              <CardTitle>{isBoutique ? "Ключевые проблемные зоны" : isGrocery ? "Срок годности / остатки / маржа" : isSewing ? "Узкие места и риски качества" : isBakery ? "Риски смены и свежести" : isRestaurant ? "Нагрузка на кухню и сервис" : "Проблемные зоны"}</CardTitle>
              <CardDescription>{isBoutique ? "Риски подаются как мерчендайзинговые и клиентские сигналы, а не как сухой список ошибок." : isGrocery ? "Проблемы магазина должны считываться как полка, срок и оборачиваемость." : isSewing ? "Цеховые риски подаются через поток партий и качество." : isBakery ? "Сигналы пекарни читаются через смену, печь и остаток окна свежести." : isRestaurant ? "Риск в ресторане это темп, очередь и просадка сервиса." : "Что требует решения в текущем периоде."}</CardDescription>
            </CardHeader>
            <CardContent className="grid gap-3">
              {demo.risks.map((risk: any) => (
                <div key={risk.title} className={cn(boutiquePanelClass, getSeverityClasses(risk.severity))}>
                  <div className="font-medium">{risk.title}</div>
                  <p className="mt-2 text-sm leading-6">{risk.description}</p>
                  <p className="mt-3 text-xs font-medium uppercase tracking-[0.16em]">{risk.impact}</p>
                </div>
              ))}
            </CardContent>
          </Card>
        </div>
      </section>

      <section id="crm" className="grid gap-6 xl:grid-cols-[1.15fr,0.85fr]">
        <Card className={boutiqueCardClass}>
          <CardHeader>
            <Badge className={cn("w-fit rounded-full", business.palette.badge)}>{business.vocabulary.crm}</Badge>
            <CardTitle className={boutiqueTitleClass}>{business.vocabulary.crm}: {isBoutique ? "клиент, стилист и следующий touchpoint" : "статусы и следующий шаг"}</CardTitle>
          </CardHeader>
          <CardContent>
            <CrmTable rows={demo.crm.leads} />
          </CardContent>
        </Card>

        <Card className={boutiqueCardClass}>
          <CardHeader>
            <CardTitle>{demo.crm.featuredClient.company}</CardTitle>
            <CardDescription>{demo.crm.featuredClient.segment}</CardDescription>
          </CardHeader>
          <CardContent className="space-y-5">
            <div className={boutiqueMutedPanelClass}>
              <div className="grid gap-2 text-sm text-slate-600 sm:grid-cols-2">
                <div>LTV: {demo.crm.featuredClient.ltv}</div>
                <div>Последний счет: {demo.crm.featuredClient.lastInvoice}</div>
                <div>Менеджер: {demo.crm.featuredClient.manager}</div>
                <div>Сегмент: {demo.crm.featuredClient.segment}</div>
              </div>
              <div className="mt-4 flex flex-wrap gap-2">
                {demo.crm.featuredClient.tags.map((tag: string) => (
                  <Badge key={tag} variant="outline">
                    {tag}
                  </Badge>
                ))}
              </div>
            </div>

            <div className="grid gap-3">
              {demo.crm.featuredClient.tasks.map((task: any) => (
                <div key={task.title} className={boutiquePanelClass}>
                  <div className="flex items-center justify-between gap-3">
                    <div className="font-medium text-slate-900">{task.title}</div>
                    <Badge variant="warning">{task.status}</Badge>
                  </div>
                  <div className="mt-2 text-sm text-slate-600">{task.owner} • {task.due}</div>
                </div>
              ))}
            </div>
          </CardContent>
        </Card>
      </section>

      <div className="grid gap-6 lg:grid-cols-2">
        <section id="inventory">
          <Card className={cn("h-full", boutiqueCardClass)}>
            <CardHeader>
              <Badge className={cn("w-fit rounded-full", business.palette.badge)}>{business.vocabulary.inventory}</Badge>
              <CardTitle className={boutiqueTitleClass}>{business.vocabulary.inventory}</CardTitle>
            </CardHeader>
            <CardContent className="space-y-5">
              <InventoryTable rows={demo.inventory.items} />
              <div className="grid gap-3">
                {demo.inventory.alerts.map((alert: string) => (
                  <div key={alert} className={cn(boutiquePanelClass, "text-sm leading-6 text-slate-600")}>
                    {alert}
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>
        </section>

        <section id="sales">
          <Card className={cn("h-full", boutiqueCardClass)}>
            <CardHeader>
              <Badge className={cn("w-fit rounded-full", business.palette.badge)}>{business.vocabulary.sales}</Badge>
              <CardTitle className={boutiqueTitleClass}>{business.vocabulary.sales}</CardTitle>
            </CardHeader>
            <CardContent className="space-y-5">
              <div className="grid gap-4 md:grid-cols-2 xl:grid-cols-4">
                {demo.sales.summary.map((item: any) => (
                  <div key={item.label} className={boutiquePanelClass}>
                    <div className="text-sm text-slate-500">{item.label}</div>
                    <div className="mt-2 flex flex-wrap items-center justify-between gap-2">
                      <div className="max-w-full break-words font-display text-xl font-semibold text-slate-950">{item.value}</div>
                      <Badge className={cn("rounded-full shrink-0", getTrendClasses(item.tone))}>
                        {item.tone === "up" ? "Рост" : item.tone === "down" ? "Риск" : "Контроль"}
                      </Badge>
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
        <Card className={boutiqueCardClass}>
          <CardHeader>
            <Badge className={boutiqueBadgeClass}>{isBoutique ? "Atelier flow" : isGrocery ? "Shelf ops" : isSewing ? "Production flow" : isBakery ? "Shift flow" : isRestaurant ? "Service flow" : "Операции"}</Badge>
            <CardTitle className={boutiqueTitleClass}>{business.operationLabel}</CardTitle>
            <CardDescription>{isBoutique ? "Производство и сервис поданы как аккуратный flow по дропам, задачам и bottleneck'ам." : isGrocery ? "Операционный блок магазина строится вокруг поставок, shelf-health и пополнения." : isSewing ? "Поток цеха считывается как маршрут партии через раскрой, пошив и ОТК." : isBakery ? "Смена, сырье и печи складываются в один теплый operations-board." : isRestaurant ? "Кухня и зал показаны как service-flow с ритмом по времени дня." : business.operationSubtitle}</CardDescription>
          </CardHeader>
          <CardContent>
            <OperationsTable rows={demo.operationsCenter.items} mode="operations" />
          </CardContent>
        </Card>

        <Card className={boutiqueCardClass}>
          <CardHeader>
            <CardTitle>{isBoutique ? "Поток по капсуле / выпуску" : isGrocery ? "Пополнение / полки / списания" : isSewing ? "Раскрой / пошив / ОТК" : isBakery ? "Замес / выпечка / выкладка" : isRestaurant ? "Подготовка / подача / закрытие" : "Этапы процесса"}</CardTitle>
            <CardDescription>{isBoutique ? "Этапы выглядят как curated production flow, а не как тяжелая операционная панель." : isGrocery ? "Для ритейла этапы должны читаться как поток товара и свежести." : isSewing ? "Pipeline подчеркивает bottleneck между линиями и качеством." : isBakery ? "Цикл пекарни подается через сменный выпуск и freshness window." : isRestaurant ? "Сервисный цикл строится вокруг кухни, выдачи и скорости оборота." : "Процент прохождения по ключевым блокам."}</CardDescription>
          </CardHeader>
          <CardContent className="grid gap-4">
            {demo.operationsCenter.pipeline.map((step: any) => (
              <div key={step.label} className={boutiquePanelClass}>
                <div className="flex items-center justify-between gap-3">
                  <div className="font-medium text-slate-900">{step.label}</div>
                  <div className="text-sm text-slate-500">{step.value}%</div>
                </div>
                <div className="mt-3 h-2 rounded-full bg-slate-100">
                  <div className={`h-2 rounded-full bg-gradient-to-r ${business.palette.gradient}`} style={{ width: `${step.value}%` }} />
                </div>
              </div>
            ))}
          </CardContent>
        </Card>
      </section>

      <section id="finance" className="grid gap-6 xl:grid-cols-[1.05fr,0.95fr]">
        <Card className={boutiqueCardClass}>
          <CardHeader>
            <Badge className={boutiqueBadgeClass}>{isBoutique ? "Маржинальность" : isGrocery ? "Маржа ритейла" : isSewing ? "Экономика партий" : isBakery ? "Экономика смены" : isRestaurant ? "Экономика сервиса" : "Финансы"}</Badge>
            <CardTitle className={boutiqueTitleClass}>{isBoutique ? "Маржа, sell-through и cashflow" : isGrocery ? "Маржа категорий, списания и cashflow" : isSewing ? "Себестоимость партий и cashflow" : isBakery ? "Себестоимость смены и cashflow" : isRestaurant ? "Выручка сервиса и cashflow" : "План, факт и cashflow"}</CardTitle>
          </CardHeader>
          <CardContent className="grid gap-4">
            {demo.finance.rows.map((row: any) => (
              <div key={row.category} className={boutiquePanelClass}>
                <div className="flex flex-col gap-3 sm:flex-row sm:items-center sm:justify-between">
                  <div>
                    <div className="font-medium text-slate-900">{row.category}</div>
                    <div className="mt-1 text-sm text-slate-500">План: {row.plan}</div>
                  </div>
                  <div className="flex flex-wrap items-center gap-3">
                    <div className="rounded-full bg-slate-100 px-3 py-1 text-sm font-medium text-slate-700">Факт: {row.fact}</div>
                    <div className="rounded-full bg-slate-950 px-3 py-1 text-sm font-medium text-white">Маржа: {row.margin}</div>
                    <Badge className={cn("rounded-full", row.delta.startsWith("-") ? getTrendClasses("down") : getTrendClasses("up"))}>
                      {row.delta}
                    </Badge>
                  </div>
                </div>
              </div>
            ))}
          </CardContent>
        </Card>

        <Card className={boutiqueCardClass}>
          <CardHeader>
            <CardTitle>Cashflow</CardTitle>
            <CardDescription>Динамика доходов и расходов по периодам.</CardDescription>
          </CardHeader>
          <CardContent>
            <RevenueChart data={financeTrend} colors={business.palette.chart} currency={business.currency} />
          </CardContent>
        </Card>
      </section>

      <section id="bi" className="space-y-6">
        <Card className={boutiqueCardClass}>
          <CardHeader>
            <Badge className={boutiqueBadgeClass}>{isBoutique ? "Аналитика мерчандайзинга" : isGrocery ? "Аналитика категорий" : isSewing ? "Аналитика линий" : isBakery ? "Аналитика выпечки" : isRestaurant ? "Аналитика сервиса" : "BI аналитика"}</Badge>
            <CardTitle className={boutiqueTitleClass}>{isBoutique ? "Динамика коллекций, отклонения и прогноз" : isGrocery ? "Динамика категорий, отклонения и прогноз" : isSewing ? "Динамика линий, отклонения и прогноз" : isBakery ? "Динамика смен, отклонения и прогноз" : isRestaurant ? "Динамика сервиса, отклонения и прогноз" : "Динамика, отклонения и прогноз"}</CardTitle>
          </CardHeader>
          <CardContent className="grid gap-6 xl:grid-cols-[1.1fr,0.9fr]">
            <div className="space-y-6">
              <BiOverviewChart data={demo.bi.trend} colors={business.palette.chart} />
              <div className={boutiqueMutedPanelClass}>
                <div className="mb-3 flex items-center gap-2 font-medium text-slate-900">
                  <TrendingUp className="h-4 w-4" />
                  Прогноз системы
                </div>
                <p className="text-sm leading-7 text-slate-600">{demo.bi.forecast}</p>
              </div>
            </div>

            <div className="space-y-6">
              <div className="grid gap-3">
                {demo.bi.topEntities.map((entity: any) => (
                  <div key={entity.label} className={boutiquePanelClass}>
                    <div className="flex items-center justify-between gap-3">
                      <div className="font-medium text-slate-900">{entity.label}</div>
                      <Badge variant="positive">{entity.growth}</Badge>
                    </div>
                    <div className="mt-2 text-sm text-slate-600">{entity.value}</div>
                    <div className="mt-3 h-2 rounded-full bg-slate-100">
                      <div className="h-2 rounded-full bg-slate-950" style={{ width: `${Math.min(entity.share, 100)}%` }} />
                    </div>
                  </div>
                ))}
              </div>

              <div className={boutiqueMutedPanelClass}>
                <div className="mb-3 text-sm font-semibold uppercase tracking-[0.16em] text-slate-400">Отклонения</div>
                <div className="grid gap-3">
                  {demo.bi.deviations.map((deviation: string) => (
                    <div key={deviation} className={cn("flex items-start gap-3 bg-white p-4 text-sm leading-6 text-slate-700", isBoutique ? "rounded-[6px] border border-stone-200" : "rounded-[18px]")}>
                      <ChevronRight className="mt-1 h-4 w-4 shrink-0 text-slate-400" />
                      <span>{deviation}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </CardContent>
        </Card>
      </section>

      <section id="assistant" className="grid gap-6 xl:grid-cols-[1.05fr,0.95fr]">
        <Card variant={isBoutique ? "default" : "dark"} className={cn("overflow-hidden", isBoutique ? "rounded-[8px] border-stone-200 bg-[linear-gradient(180deg,#1f1725,#31232f)] text-white" : "border-white/10 bg-slate-950 text-white")}>
          <CardHeader className="relative overflow-hidden">
            <div className={cn("absolute inset-0 bg-[radial-gradient(circle_at_top_left,rgba(56,189,248,0.18),transparent_30%),radial-gradient(circle_at_80%_20%,rgba(16,185,129,0.16),transparent_28%)]", isBoutique && "bg-[radial-gradient(circle_at_top_left,rgba(244,114,182,0.18),transparent_28%),radial-gradient(circle_at_80%_20%,rgba(251,191,36,0.14),transparent_25%)]")} />
            <div className="relative">
              <Badge className={cn("w-fit rounded-full bg-white/10 text-white/90", isBoutique && "rounded-[999px] border border-white/10 bg-white/5 text-stone-100")}>{isBoutique ? "ИИ-клиентинг" : isGrocery ? "ИИ-полки" : isSewing ? "ИИ-линия" : isBakery ? "ИИ-смена" : isRestaurant ? "ИИ-сервис" : "ИИ помощник"}</Badge>
              <CardTitle className={cn("mt-3 text-3xl text-white", isBoutique && "font-light tracking-[0.04em]")}>{demo.assistant.headline}</CardTitle>
            </div>
          </CardHeader>
          <CardContent className="grid gap-3">
            {demo.assistant.bullets.map((bullet: string) => (
              <div key={bullet} className={cn("rounded-[22px] border border-white/10 bg-white/10 p-4 text-sm leading-6 text-slate-200", isBoutique && "rounded-[6px] border-white/10 bg-white/5 text-stone-100")}>
                <div className="flex items-start gap-3">
                  <Sparkles className={cn("mt-1 h-4 w-4 shrink-0 text-cyan-300", isBoutique && "text-amber-200")} />
                  <span>{bullet}</span>
                </div>
              </div>
            ))}
          </CardContent>
        </Card>

        <div className="grid gap-4">
          {demo.assistant.messages.map((message: any) => (
            <Card key={message.title} className={boutiqueCardClass}>
              <CardContent className="p-5">
                <div className="flex items-start justify-between gap-4">
                  <div>
                    <div className={cn("font-display text-xl font-semibold text-slate-950", isBoutique && "font-light tracking-[0.03em]")}>{message.title}</div>
                    <div className={cn("mt-2 text-sm text-cyan-700", isBoutique && "text-stone-500")}>{message.metric}</div>
                  </div>
                  <div className={cn("rounded-2xl bg-sky-100 p-2", isBoutique && "rounded-[999px] bg-stone-100")}>
                    <Lightbulb className={cn("h-4 w-4 text-sky-700", isBoutique && "text-stone-700")} />
                  </div>
                </div>
                <p className="mt-4 text-sm leading-7 text-slate-600">{message.summary}</p>
                <div className={cn("mt-4 rounded-[18px] bg-slate-950 p-4 text-sm font-medium leading-6 text-white", isBoutique && "rounded-[6px] bg-stone-950 text-stone-50")}>
                  {message.recommendation}
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </section>

      <section id="documents" className="grid gap-6 xl:grid-cols-[1fr,1fr]">
        <Card className={boutiqueCardClass}>
          <CardHeader>
            <Badge className={boutiqueBadgeClass}>{isBoutique ? "Бэк-офис" : isGrocery ? "Документы поставок" : isSewing ? "Тех. пакет" : isBakery ? "Сменные документы" : isRestaurant ? "Документы сервиса" : "Документы"}</Badge>
            <CardTitle className={boutiqueTitleClass}>{isBoutique ? "Документы, возвраты и статусы" : isGrocery ? "Накладные, поставки и статусы" : isSewing ? "Техзадания, партии и статусы" : isBakery ? "Сменные документы и статусы" : isRestaurant ? "Чеки, заказы и сервисные статусы" : "Документы и статусы"}</CardTitle>
          </CardHeader>
          <CardContent className="grid gap-3">
            {demo.documents.map((document: any) => (
              <div key={document.name} className={boutiquePanelClass}>
                <div className="flex items-start justify-between gap-4">
                  <div>
                    <div className="font-medium text-slate-900">{document.name}</div>
                    <div className="mt-2 text-sm text-slate-500">{document.type} • {document.owner} • {document.date}</div>
                  </div>
                  <Badge variant="secondary">{document.status}</Badge>
                </div>
              </div>
            ))}
          </CardContent>
        </Card>

        <Card className={boutiqueCardClass}>
          <CardHeader>
            <Badge className={boutiqueBadgeClass}>{isBoutique ? "История клиента" : isGrocery ? "История ритейла" : isSewing ? "История фабрики" : isBakery ? "История пекарни" : isRestaurant ? "История ресторана" : "Контекст демо"}</Badge>
            <CardTitle className={boutiqueTitleClass}>{isBoutique ? "Что показывать luxury-клиенту дальше" : isGrocery ? "Что показывать ритейл-клиенту дальше" : isSewing ? "Что показывать владельцу цеха дальше" : isBakery ? "Что показывать владельцу пекарни дальше" : isRestaurant ? "Что показывать владельцу ресторана дальше" : "Что показывать клиенту дальше"}</CardTitle>
          </CardHeader>
          <CardContent className="grid gap-4">
            <HeroWidget slug={slug} palette={business.palette} uiTheme={business.uiTheme} />
            {[
              "После overview менеджер переводит разговор в конкретные реестры и роли.",
              "Пользователь быстро понимает, где в системе лежат деньги, риски и документы.",
              "Секция документов теперь не теряется внизу как остаточный блок."
            ].map((item) => (
              <div key={item} className={cn(boutiquePanelClass, "bg-slate-50 px-4 py-3 text-sm leading-6 text-slate-600")}>
                {item}
              </div>
            ))}
          </CardContent>
        </Card>
      </section>

      <section id="settings">
        <Card id="request-implementation" variant="dark" className="overflow-hidden border-white/10 bg-gradient-to-r from-slate-950 via-slate-900 to-slate-800 text-white">
          <CardContent className="grid gap-6 p-8 lg:grid-cols-[1.1fr,0.9fr] lg:items-center">
            <div className="space-y-4">
              <Badge className="w-fit rounded-full bg-white/10 text-white/90">Запросить внедрение</Badge>
              <div className="font-display text-3xl font-semibold">
                Переведем этот сценарий из demo в рабочую ERP+CRM под вашу компанию
              </div>
              <p className="max-w-2xl text-base leading-7 text-slate-300">{business.implementationPromise}</p>
            </div>

            <div className="grid gap-3 rounded-[28px] border border-white/10 bg-white/10 p-5">
              <div className="rounded-[20px] border border-white/10 bg-white/10 p-4 text-sm text-slate-200">
                1. Приоритизируем модули и роли под реальный процесс.
              </div>
              <div className="rounded-[20px] border border-white/10 bg-white/10 p-4 text-sm text-slate-200">
                2. Собираем дорожную карту запуска на 30 дней.
              </div>
              <div className="rounded-[20px] border border-white/10 bg-white/10 p-4 text-sm text-slate-200">
                3. Настраиваем отраслевые блоки, а не абстрактную CRM.
              </div>
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
