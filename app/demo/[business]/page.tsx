import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import {
  ArrowLeft,
  Bell,
  ChevronRight,
  Home,
  ShieldAlert
} from "lucide-react";

import { BusinessStyleProvider } from "@/components/layout/business-style-provider";
import { ClientDashboard } from "@/components/layout/client-dashboard";
import { Sidebar } from "@/components/layout/sidebar";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { ScrollProgressBar } from "@/components/ui/scroll-progress-bar";
import { businessMap, businesses, getSidebarItems } from "@/data/businesses";
import { getDemoData } from "@/data/demoData";
import type { BusinessSlug, InsightTone } from "@/lib/types";
import { cn } from "@/lib/utils";

interface DemoPageProps {
  params: {
    business: string;
  };
}

const heroModeLabels: Record<BusinessSlug, string> = {
  construction: "Доска проектов",
  grocery: "Аналитика полок",
  sewing: "Поток ателье",
  boutique: "Управление коллекцией",
  agro: "Полевые операции",
  bakery: "Сменная доска",
  restaurant: "Темп сервиса",
  logistics: "Диспетчерская консоль",
  manufacturing: "Производственный монитор",
  distribution: "Контроль выручки"
};

const heroNarratives: Record<BusinessSlug, string> = {
  construction: "Сценарий показывает стройку как board по объектам, этапам, актам и деньгам.",
  grocery: "Сценарий показывает магазин через fresh shelf, пополнение, expiry и маржу категорий.",
  sewing: "Сценарий показывает цех как поток партий, линий, качества и bottleneck-этапов.",
  boutique: "Сценарий показывает бутик как premium workspace для коллекций, размеров и клиентских сегментов.",
  agro: "Сценарий показывает агро-бизнес как сезонный центр управления полями, погодой и урожайностью.",
  bakery: "Сценарий показывает пекарню как сменный board по выпуску, свежести, сырью и печам.",
  restaurant: "Сценарий показывает ресторан через tempo сервиса, rush-hour, кухню и чек.",
  logistics: "Сценарий показывает логистику как live dispatch console по рейсам, SLA и задержкам.",
  manufacturing: "Сценарий показывает производство как systems monitor по OEE, линиям и простоям.",
  distribution: "Сценарий показывает дистрибуцию через каналы, дебиторку, отгрузки и денежную дисциплину."
};

const notificationTitles: Record<BusinessSlug, string> = {
  construction: "Сигналы по объекту",
  grocery: "Сигналы по полке",
  sewing: "Сигналы по потоку",
  boutique: "Сигналы по коллекции",
  agro: "Сигналы по сезону",
  bakery: "Сигналы по смене",
  restaurant: "Сигналы по сервису",
  logistics: "Сигналы диспетчера",
  manufacturing: "Сигналы системы",
  distribution: "Сигналы по деньгам"
};

function getHeroSurface(design: { heroTone: string; primary: string }) {
  if (design.heroTone === "luxury") {
    return {
      background: "linear-gradient(135deg, rgba(250,245,235,0.96) 0%, rgba(245,239,231,0.88) 42%, rgba(28,25,23,0.96) 100%)",
      borderTop: `2px solid ${design.primary}`,
      textClass: "text-stone-950",
      subtitleClass: "text-stone-600",
      panelClass: "border-stone-200 bg-white/70 text-stone-800"
    };
  }

  if (design.heroTone === "dispatch") {
    return {
      background: "linear-gradient(135deg, rgba(8,47,73,0.96) 0%, rgba(15,23,42,0.98) 58%, rgba(251,146,60,0.18) 100%)",
      borderTop: `3px solid ${design.primary}`,
      textClass: "text-white",
      subtitleClass: "text-slate-300",
      panelClass: "border-cyan-500/20 bg-cyan-500/10 text-slate-100"
    };
  }

  if (design.heroTone === "field") {
    return {
      background: "linear-gradient(135deg, rgba(20,83,45,0.9) 0%, rgba(15,23,42,0.96) 52%, rgba(132,204,22,0.2) 100%)",
      borderTop: `3px solid ${design.primary}`,
      textClass: "text-white",
      subtitleClass: "text-slate-300",
      panelClass: "border-lime-400/15 bg-lime-500/10 text-slate-100"
    };
  }

  if (design.heroTone === "warm") {
    return {
      background: "linear-gradient(135deg, rgba(255,250,241,0.98) 0%, rgba(249,239,220,0.96) 36%, rgba(194,65,12,0.26) 68%, rgba(120,53,15,0.9) 100%)",
      borderTop: `3px solid ${design.primary}`,
      textClass: "text-[#4a2f1d]",
      subtitleClass: "text-[#6b3f1f]/78",
      panelClass: "border-[#e8c9a4] bg-[#fff8ef]/72 text-[#4a2f1d]"
    };
  }

  if (design.heroTone === "service") {
    return {
      background: "linear-gradient(135deg, rgba(28,25,23,0.98) 0%, rgba(67,20,7,0.9) 38%, rgba(120,53,15,0.7) 62%, rgba(15,23,42,0.96) 100%)",
      borderTop: `3px solid ${design.primary}`,
      textClass: "text-white",
      subtitleClass: "text-orange-50/82",
      panelClass: "border-orange-300/15 bg-black/18 text-white"
    };
  }

  if (design.heroTone === "atelier") {
    return {
      background: "linear-gradient(135deg, rgba(250,245,255,0.94) 0%, rgba(244,114,182,0.16) 34%, rgba(136,19,55,0.92) 100%)",
      borderTop: `3px solid ${design.primary}`,
      textClass: "text-fuchsia-950",
      subtitleClass: "text-fuchsia-950/72",
      panelClass: "border-fuchsia-200/70 bg-white/55 text-fuchsia-950"
    };
  }

  if (design.heroTone === "fresh") {
    return {
      background: "linear-gradient(135deg, rgba(236,253,245,0.98) 0%, rgba(132,204,22,0.14) 36%, rgba(6,78,59,0.94) 100%)",
      borderTop: `3px solid ${design.primary}`,
      textClass: "text-emerald-950",
      subtitleClass: "text-emerald-950/72",
      panelClass: "border-emerald-200/70 bg-white/55 text-emerald-950"
    };
  }

  if (design.heroTone === "industrial") {
    return {
      background: "linear-gradient(135deg, rgba(15,23,42,0.96) 0%, rgba(51,65,85,0.92) 55%, rgba(59,130,246,0.16) 100%)",
      borderTop: `3px solid ${design.primary}`,
      textClass: "text-white",
      subtitleClass: "text-slate-300",
      panelClass: "border-sky-200/15 bg-white/5 text-white"
    };
  }

  if (design.heroTone === "commerce") {
    return {
      background: "linear-gradient(135deg, rgba(15,23,42,0.98) 0%, rgba(30,27,75,0.96) 50%, rgba(59,130,246,0.18) 100%)",
      borderTop: `3px solid ${design.primary}`,
      textClass: "text-white",
      subtitleClass: "text-slate-300",
      panelClass: "border-indigo-300/20 bg-indigo-500/10 text-white"
    };
  }

  return {
    background: `linear-gradient(135deg, ${design.primary}22 0%, #0f172a 60%)`,
    borderTop: `3px solid ${design.primary}`,
    textClass: "text-white",
    subtitleClass: "text-slate-300",
    panelClass: "border-white/10 bg-white/10 text-white"
  };
}

function getToneBadge(tone: InsightTone) {
  if (tone === "critical") return "critical" as const;
  if (tone === "warning") return "warning" as const;
  return "positive" as const;
}

export function generateStaticParams() {
  return businesses.map((business) => ({
    business: business.slug
  }));
}

export async function generateMetadata({ params }: DemoPageProps): Promise<Metadata> {
  const slug = params.business as BusinessSlug;
  const business = businessMap[slug];

  if (!business) {
    return {
      title: "Демо не найдено"
    };
  }

  return {
    title: `${business.name} — Demo`,
    description: `${business.tagline}. ${business.demoIntro}`,
    openGraph: {
      title: `Creonix Demo: ${business.name}`,
      description: business.demoIntro,
      type: "website"
    }
  };
}

export default function DemoBusinessPage({ params }: DemoPageProps) {
  const slug = params.business as BusinessSlug;
  const business = businessMap[slug];

  if (!business) {
    notFound();
  }

  const demo = getDemoData(slug);
  const heroSurface = getHeroSurface(business.design);
  const isDarkHero =
    business.design.heroTone === "dispatch" ||
    business.design.heroTone === "field" ||
    business.design.heroTone === "service" ||
    business.design.heroTone === "industrial" ||
    business.design.heroTone === "commerce";
  const heroNotificationCardClass = cn(
    "p-4",
    isDarkHero
      ? "rounded-[20px] border border-white/15 bg-slate-950/30 text-white shadow-[inset_0_1px_0_rgba(255,255,255,0.04)]"
      : "rounded-[20px] border border-slate-200 bg-white/85 text-slate-900"
  );

  return (
    <BusinessStyleProvider design={business.design}>
      <ScrollProgressBar />
      <main id="main-content" className="px-4 py-6 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-[1600px]">
          {/* Breadcrumbs */}
          <nav aria-label="Навигация" className="mb-4 flex items-center gap-2 text-sm text-slate-500">
            <Link href="/" className="flex items-center gap-1.5 transition hover:text-slate-900">
              <Home className="h-3.5 w-3.5" />
              Demo Hub
            </Link>
            <ChevronRight className="h-3.5 w-3.5 text-slate-300" />
            <span className="font-medium text-slate-700">{business.name}</span>
          </nav>

          <div className="relative mb-6 flex flex-col gap-4 overflow-hidden rounded-[30px] px-6 py-6 shadow-soft lg:px-8"
               style={{ background: heroSurface.background, borderTop: heroSurface.borderTop }}>
            <div className={`absolute inset-x-0 top-0 h-1 bg-gradient-to-r ${business.palette.gradient}`} />
            <div className="flex flex-col gap-4 lg:flex-row lg:items-start lg:justify-between">
              <div className="space-y-3">
                <Badge className={cn("w-fit rounded-full", business.palette.badge)}>{heroModeLabels[slug]}</Badge>
                <div>
                  <h1 className={cn("font-display text-3xl sm:text-4xl", heroSurface.textClass, business.design.headingClass)}>{business.name}</h1>
                  <p className={cn("mt-2 max-w-3xl text-base leading-7", heroSurface.subtitleClass)}>{business.tagline}</p>
                </div>
              </div>

              <div className="flex flex-wrap gap-3">
                <Button asChild variant="secondary" className="rounded-2xl bg-white text-slate-950 hover:bg-white/90">
                  <Link href="/">
                    <ArrowLeft className="h-4 w-4" />
                    Вернуться к выбору бизнеса
                  </Link>
                </Button>
                <Button asChild variant="gradient" className="rounded-2xl">
                  <a href="#request-implementation">Запросить внедрение</a>
                </Button>
              </div>
            </div>

            <div className="grid gap-4 lg:grid-cols-[1.2fr,0.8fr]">
              <div className={cn("min-w-0 rounded-[24px] border p-5", heroSurface.panelClass)}>
                <div className="text-xs uppercase tracking-[0.16em] opacity-60">{business.design.designSystemName}</div>
                <p className="break-anywhere mt-3 text-sm leading-7 opacity-90">{heroNarratives[slug]}</p>
                <p className="break-anywhere mt-3 text-sm leading-7 opacity-80">{business.demoIntro}</p>
              </div>

              <div className={cn("min-w-0 grid gap-3 rounded-[24px] border p-5", heroSurface.panelClass)}>
                <div className="flex items-center gap-2 text-sm font-medium">
                  <Bell className="h-4 w-4 text-cyan-300" />
                  {notificationTitles[slug]}
                </div>
                <div className="grid gap-3">
                  {demo.notifications.slice(0, 3).map((notification) => (
                    <div key={notification.title} className={heroNotificationCardClass}>
                      <div className="flex items-start justify-between gap-3">
                        <div className="break-anywhere min-w-0 font-medium">{notification.title}</div>
                        <Badge variant={getToneBadge(notification.tone)}>{notification.time}</Badge>
                      </div>
                      <p className={cn("break-anywhere mt-2 text-sm leading-6", isDarkHero ? "text-slate-200" : "text-slate-600")}>{notification.text}</p>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>

          <div className="grid gap-6 lg:grid-cols-[320px,minmax(0,1fr)]">
            <Sidebar business={business} items={getSidebarItems(business)} />

            <div className="space-y-6">
              <ClientDashboard slug={slug} business={business} initialDemo={demo} />
            </div>
          </div>
        </div>
      </main>
    </BusinessStyleProvider>
  );
}
