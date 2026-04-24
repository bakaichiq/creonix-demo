"use client";

import Image from "next/image";
import Link from "next/link";
import {
  ArrowRight,
  BadgeCheck,
  BrainCircuit,
  Building,
  ExternalLink,
  Layers3,
  Mail,
  MessageCircle,
  Phone,
  Sparkles,
  Star,
  Target,
  TimerReset
} from "lucide-react";
import { motion, useScroll, useTransform } from "framer-motion";
import { useEffect, useState } from "react";

import { BusinessCard } from "@/components/business-card";
import { AnimatedCounter } from "@/components/ui/animated-counter";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { businesses, comparisonReasons, coreModules } from "@/data/businesses";

const moduleIcons: Record<number, React.ElementType> = {
  0: BrainCircuit,
  1: Star,
  2: Building,
  3: Target,
  4: Layers3,
  5: Sparkles,
  6: BadgeCheck,
  7: TimerReset
};

const heroHighlights = [
  {
    icon: TimerReset,
    title: "Запуск за 30 дней",
    description:
      "Показываем, как выглядит управляемая ERP+CRM под ваш процесс, а не абстрактный конструктор."
  },
  {
    icon: Layers3,
    title: "ERP + CRM + BI + AI",
    description:
      "Продажи, склад, производство, финансы и рекомендации системы в одном пользовательском опыте."
  },
  {
    icon: Target,
    title: "Упор на боли бизнеса",
    description:
      "Каждое демо говорит на языке отрасли: акты, техкарты, маршруты, партии, возвраты и маржа."
  }
];

const heroPreviewSteps = [
  "CRM фиксирует лид и владельца",
  "ERP ведет заказ в операции и финконтур",
  "AI подсказывает следующее действие"
];

function StickyNav() {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 60);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <div
      className={`mx-auto flex max-w-7xl items-center justify-between rounded-full border px-5 py-3 transition-all duration-300 ${
        scrolled
          ? "border-white/70 bg-white/90 shadow-soft backdrop-blur-xl"
          : "border-white/70 bg-white/80 shadow-soft backdrop-blur-xl"
      }`}
    >
      <div className="flex items-center gap-3">
        <Image src="/logo.png" alt="Creonix" width={40} height={40} className="rounded-2xl" />
        <div>
          <div className="font-display text-base font-semibold text-slate-950">Creonix Demo Hub</div>
          <div className="text-xs text-slate-500">ERP+CRM под конкретные отрасли</div>
        </div>
      </div>

      <nav className="hidden items-center gap-1 md:flex">
        <a
          href="#businesses"
          className="rounded-full px-4 py-2 text-sm font-medium text-slate-600 transition hover:bg-slate-100 hover:text-slate-950"
        >
          Направления
        </a>
        <a
          href="#modules"
          className="rounded-full px-4 py-2 text-sm font-medium text-slate-600 transition hover:bg-slate-100 hover:text-slate-950"
        >
          Модули
        </a>
        <a
          href="#why-creonix"
          className="rounded-full px-4 py-2 text-sm font-medium text-slate-600 transition hover:bg-slate-100 hover:text-slate-950"
        >
          Почему не Bitrix24
        </a>
      </nav>

      <Button asChild variant="secondary" className="hidden rounded-full sm:inline-flex">
        <a href="#request-demo">Запросить демонстрацию</a>
      </Button>
    </div>
  );
}

export default function HomePage() {
  const { scrollYProgress } = useScroll();
  const y = useTransform(scrollYProgress, [0, 0.3], [0, -30]);

  return (
    <main id="main-content" className="relative overflow-hidden">
      <div className="pointer-events-none absolute inset-0 grid-pattern opacity-50" />

      {/* Hero Section */}
      <section className="relative px-4 pb-14 pt-6 sm:px-6 lg:px-8">
        <div className="sticky top-4 z-40">
          <StickyNav />
        </div>

        <motion.div
          style={{ y }}
          className="mx-auto mt-8 grid max-w-7xl gap-8 lg:grid-cols-[1.25fr,0.75fr] lg:items-stretch"
        >
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.55 }}
            className="surface-dark relative overflow-hidden p-8 lg:p-10"
          >
            <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_left,rgba(56,189,248,0.2),transparent_34%),radial-gradient(circle_at_80%_20%,rgba(16,185,129,0.18),transparent_26%)]" />

            <div className="relative space-y-8">
              <div className="space-y-4">
                <Badge className="w-fit rounded-full bg-white/10 text-white/90">
                  Интерактивная demo-платформа
                </Badge>
                <div className="max-w-3xl space-y-4">
                  <h1 className="font-display text-4xl font-semibold leading-tight text-white sm:text-5xl lg:text-6xl">
                    ERP+CRM под ваш бизнес за 30 дней
                  </h1>
                  <p className="max-w-2xl text-lg leading-8 text-slate-300">
                    Выберите направление и посмотрите, как Creonix превращает хаос в управляемую систему:
                    продажи, склад, производство, финансы, BI и AI-подсказки в одном дорогом интерфейсе.
                  </p>
                </div>
              </div>

              <div className="flex flex-wrap gap-3">
                <Button asChild variant="gradient" size="lg" className="rounded-full">
                  <a href="#businesses">
                    Выбрать бизнес
                    <ArrowRight className="h-4 w-4" />
                  </a>
                </Button>
                <Button
                  asChild
                  variant="secondary"
                  size="lg"
                  className="rounded-full bg-white/10 text-white ring-white/20 hover:bg-white/15"
                >
                  <a href="#why-creonix">Почему не Bitrix24</a>
                </Button>
              </div>

              <div className="grid gap-4 md:grid-cols-3">
                {heroHighlights.map((item) => {
                  const Icon = item.icon;

                  return (
                    <div key={item.title} className="rounded-[24px] border border-white/10 bg-white/5 p-4 transition-colors duration-200 hover:bg-white/10">
                      <Icon className="mb-3 h-5 w-5 text-cyan-300" />
                      <div className="font-medium text-white">{item.title}</div>
                      <p className="mt-2 text-sm leading-6 text-slate-300">{item.description}</p>
                    </div>
                  );
                })}
              </div>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.55, delay: 0.1 }}
            className="grid gap-4"
          >
            <Card className="overflow-hidden border-white/70 bg-white/80">
              <CardHeader>
                <Badge className="w-fit rounded-full bg-sky-500/10 text-sky-700">Что внутри демо</Badge>
                <CardTitle className="text-2xl">Один сильный first screen вместо перегруженной презентации</CardTitle>
              </CardHeader>
              <CardContent className="grid gap-4">
                <div className="rounded-[28px] border border-slate-200 bg-slate-950 p-4 text-white shadow-[0_24px_60px_-28px_rgba(15,23,42,0.5)]">
                  <div className="flex items-start justify-between gap-4">
                    <div>
                      <div className="text-xs uppercase tracking-[0.18em] text-slate-400">Предпросмотр продукта</div>
                      <div className="mt-2 font-display text-xl font-semibold">Как выглядит демо внутри</div>
                    </div>
                    <Badge className="rounded-full bg-emerald-500/15 text-emerald-300">ИИ онлайн</Badge>
                  </div>

                  <div className="mt-4 grid gap-3">
                    <div className="grid grid-cols-3 gap-3">
                      {[
                        { label: "Выручка", value: "14.8 млн" },
                        { label: "Отклонения", value: "3 критичных" },
                        { label: "План", value: "91%" }
                      ].map((stat) => (
                        <div key={stat.label} className="rounded-[18px] border border-white/10 bg-white/5 p-3">
                          <div className="text-[11px] uppercase tracking-[0.14em] text-slate-400">{stat.label}</div>
                          <div className="mt-2 font-display text-lg font-semibold text-white">{stat.value}</div>
                        </div>
                      ))}
                    </div>

                    <div className="rounded-[22px] border border-cyan-500/20 bg-cyan-500/10 p-4">
                      <div className="flex items-center gap-2 text-sm font-medium text-cyan-100">
                        <BrainCircuit className="h-4 w-4 text-cyan-300" />
                        AI-подсказка
                      </div>
                      <p className="mt-2 text-sm leading-6 text-slate-200">
                        Система обнаружила риск: остаток муки закончится через 3 дня. Рекомендуется создать заявку
                        поставщику на 500 кг.
                      </p>
                    </div>
                  </div>
                </div>

                <div className="grid gap-3 sm:grid-cols-2">
                  <div className="rounded-[24px] border border-slate-200 p-4">
                    <div className="text-sm text-slate-500">Бизнес-направлений</div>
                    <div className="mt-2 font-display text-4xl font-semibold text-slate-950">
                      <AnimatedCounter to={10} />
                    </div>
                  </div>
                  <div className="rounded-[24px] border border-slate-200 p-4">
                    <div className="text-sm text-slate-500">Модулей в каждой демо</div>
                    <div className="mt-2 font-display text-4xl font-semibold text-slate-950">
                      <AnimatedCounter to={10} />
                    </div>
                  </div>
                </div>

                <div className="rounded-[24px] border border-slate-200 bg-gradient-to-br from-slate-50 to-sky-50 p-4">
                  <div className="text-xs font-semibold uppercase tracking-[0.16em] text-slate-400">Поток demo</div>
                  <div className="mt-3 grid gap-3">
                    {heroPreviewSteps.map((step, index) => (
                      <div key={step} className="flex items-start gap-3 rounded-[18px] bg-white/85 px-4 py-3">
                        <div className="flex h-7 w-7 shrink-0 items-center justify-center rounded-full bg-slate-950 text-xs font-semibold text-white">
                          {index + 1}
                        </div>
                        <div className="text-sm leading-6 text-slate-700">{step}</div>
                      </div>
                    ))}
                  </div>
                </div>

                <div className="grid gap-3 sm:grid-cols-2">
                  {[
                    {
                      icon: BrainCircuit,
                      title: "AI поверх данных",
                      text: "Система пишет рекомендации человеческим языком, а не только рисует графики."
                    },
                    {
                      icon: BadgeCheck,
                      title: "10 отраслевых сценариев",
                      text: "Стройка, пекарня и дистрибуция говорят на своем языке и живут в разных темах."
                    }
                  ].map((item) => {
                    const Icon = item.icon;

                    return (
                      <div key={item.title} className="rounded-[24px] border border-slate-200 bg-slate-50 p-4">
                        <div className="flex items-center gap-3">
                          <div className="rounded-2xl bg-slate-950 p-2 text-white">
                            <Icon className="h-4 w-4" />
                          </div>
                          <div className="font-medium text-slate-950">{item.title}</div>
                        </div>
                        <p className="mt-3 text-sm leading-6 text-slate-600">{item.text}</p>
                      </div>
                    );
                  })}
                </div>
              </CardContent>
            </Card>
          </motion.div>
        </motion.div>
      </section>

      {/* Businesses Section */}
      <section id="businesses" className="relative px-4 py-14 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-7xl space-y-8">
          <div className="flex flex-col gap-4 md:flex-row md:items-end md:justify-between">
            <div className="space-y-3">
              <Badge className="w-fit rounded-full bg-slate-950 text-white">Выберите направление</Badge>
              <h2 className="font-display text-3xl font-semibold text-slate-950 sm:text-4xl">
                <span className="gradient-text">10</span> демо-направлений для продажи ERP+CRM через конкретный результат
              </h2>
              <p className="max-w-3xl text-base leading-7 text-slate-600">
                Каждая карточка ведет в отдельную кликабельную демо-версию с адаптированными KPI, CRM,
                складом, операциями, финансами и AI-подсказками.
              </p>
            </div>
            <div className="shrink-0 rounded-full border border-slate-200 bg-white/80 px-4 py-2 text-sm text-slate-600 shadow-soft">
              1 платформа → 10 отраслевых сценариев → 1 понятный путь к внедрению
            </div>
          </div>

          <div className="grid gap-5 md:grid-cols-2 xl:grid-cols-3">
            {businesses.map((business, index) => (
              <BusinessCard key={business.slug} business={business} index={index} />
            ))}
          </div>
        </div>
      </section>

      {/* Before / After Section */}
      <section className="px-4 py-14 sm:px-6 lg:px-8">
        <div className="mx-auto grid max-w-7xl gap-6 lg:grid-cols-2">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            <Card className="h-full overflow-hidden border-rose-100 bg-rose-50/80">
              <CardHeader>
                <Badge className="w-fit rounded-full bg-rose-500/10 text-rose-700">До внедрения</Badge>
                <CardTitle className="text-3xl">Хаос в Excel, чатах и ручных отчетах</CardTitle>
              </CardHeader>
              <CardContent className="grid gap-3">
                {[
                  "Продажи не связаны со складом и производством.",
                  "Руководитель узнает о проблеме слишком поздно.",
                  "Финансы считаются постфактум, маржа плавает.",
                  "Менеджеры и операционный блок смотрят на разные данные."
                ].map((item) => (
                  <div
                    key={item}
                    className="rounded-[20px] border border-rose-100 bg-white/80 p-4 text-sm leading-6 text-slate-700 transition-colors hover:border-rose-200 hover:bg-white"
                  >
                    {item}
                  </div>
                ))}
              </CardContent>
            </Card>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.1 }}
          >
            <Card className="h-full overflow-hidden border-emerald-100 bg-emerald-50/80">
              <CardHeader>
                <Badge className="w-fit rounded-full bg-emerald-500/10 text-emerald-700">
                  После внедрения
                </Badge>
                <CardTitle className="text-3xl">
                  Одна система, где видно деньги, процессы и узкие места
                </CardTitle>
              </CardHeader>
              <CardContent className="grid gap-3">
                {[
                  "Руководитель видит KPI, отклонения и риски в одном окне.",
                  "CRM доводит лид до сделки, а ERP доводит сделку до результата.",
                  "Склад, производство и финансы работают по единому сценарию.",
                  "AI подсказывает конкретные управленческие действия по mock-data."
                ].map((item) => (
                  <div
                    key={item}
                    className="rounded-[20px] border border-emerald-100 bg-white/80 p-4 text-sm leading-6 text-slate-700 transition-colors hover:border-emerald-200 hover:bg-white"
                  >
                    {item}
                  </div>
                ))}
              </CardContent>
            </Card>
          </motion.div>
        </div>
      </section>

      <section className="px-4 py-10 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-7xl">
          <div className="grid gap-6 rounded-[32px] border border-white/70 bg-white/80 p-6 shadow-soft backdrop-blur-xl lg:grid-cols-[0.9fr,1.1fr] lg:p-8">
            <div className="space-y-3">
              <Badge className="w-fit rounded-full bg-slate-950 text-white">Что видит клиент</Badge>
              <h2 className="font-display text-3xl font-semibold text-slate-950">
                Demo быстро переводит разговор от красивого UI к конкретному сценарию внедрения
              </h2>
              <p className="text-base leading-7 text-slate-600">
                На презентации клиент сразу видит first screen, затем реестры, операции, документы и AI-действия.
                Это снимает абстракцию и ускоряет переход к предметному разговору о запуске.
              </p>
            </div>

            <div className="grid gap-4 md:grid-cols-3">
              {[
                {
                  title: "Понятный first screen",
                  text: "Сразу видно KPI, риски и контекст периода."
                },
                {
                  title: "Отраслевая конкретика",
                  text: "Объекты, партии, техкарты и маршруты вместо абстрактных сущностей."
                },
                {
                  title: "Следующее действие",
                  text: "AI рекомендует управленческий шаг, а не только показывает график."
                }
              ].map((item) => (
                <div key={item.title} className="rounded-[24px] border border-slate-200 bg-slate-50 p-5">
                  <div className="font-medium text-slate-950">{item.title}</div>
                  <p className="mt-2 text-sm leading-6 text-slate-600">{item.text}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Modules Section */}
      <section id="modules" className="px-4 py-14 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-7xl space-y-8">
          <div className="space-y-3">
            <Badge className="w-fit rounded-full bg-slate-950 text-white">Какие модули входят</Badge>
            <h2 className="font-display text-3xl font-semibold text-slate-950 sm:text-4xl">
              Сквозной набор модулей, который адаптируется под отрасль
            </h2>
          </div>

          <div className="grid gap-4 sm:grid-cols-2 xl:grid-cols-4">
            {coreModules.map((module, index) => {
              const Icon = moduleIcons[index] ?? Building;

              return (
                <motion.div
                  key={module}
                  initial={{ opacity: 0, y: 16 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, margin: "-30px" }}
                  transition={{ duration: 0.4, delay: index * 0.07 }}
                >
                  <Card className="group h-full border-white/70 bg-white/80 transition-all duration-300 hover:-translate-y-1 hover:shadow-soft">
                    <CardContent className="flex min-h-[148px] flex-col justify-between p-5">
                      <div className="flex h-11 w-11 items-center justify-center rounded-2xl bg-slate-950 text-white transition-transform duration-300 group-hover:scale-110">
                        <Icon className="h-5 w-5" />
                      </div>
                      <div className="mt-6 text-lg font-medium leading-7 text-slate-900">{module}</div>
                    </CardContent>
                  </Card>
                </motion.div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Why Not Bitrix Section */}
      <section id="why-creonix" className="px-4 py-14 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-7xl space-y-8">
          <div className="space-y-3">
            <Badge className="w-fit rounded-full bg-amber-500/10 text-amber-700">
              Почему не Bitrix24 / не шаблонная CRM
            </Badge>
            <h2 className="font-display text-3xl font-semibold text-slate-950 sm:text-4xl">
              Потому что бизнесу нужен не конструктор карточек, а управляемая операционная система
            </h2>
          </div>

          <div className="grid gap-5 lg:grid-cols-3">
            {comparisonReasons.map((item, index) => (
              <motion.div
                key={item.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.45, delay: index * 0.1 }}
              >
                <Card className="group h-full border-white/70 bg-white/80 transition-all duration-300 hover:-translate-y-1 hover:shadow-soft">
                  <CardContent className="p-6">
                    <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-2xl bg-gradient-to-br from-amber-400 to-orange-300 text-white transition-transform duration-300 group-hover:scale-110">
                      <Sparkles className="h-5 w-5" />
                    </div>
                    <div className="font-display text-2xl font-semibold text-slate-950">{item.title}</div>
                    <p className="mt-3 text-sm leading-7 text-slate-600">{item.description}</p>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>

          <div className="grid gap-4 rounded-[28px] border border-slate-200 bg-slate-50/80 p-5 md:grid-cols-3">
            {[
              "Не начинается с настройки воронки без контекста операций.",
              "Не разрывает CRM, склад, финансы и документы по разным системам.",
              "Не оставляет руководителя один на один с сырыми отчетами."
            ].map((item) => (
              <div key={item} className="rounded-[20px] border border-slate-200 bg-white p-4 text-sm leading-6 text-slate-700">
                {item}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section id="request-demo" className="px-4 pb-12 pt-14 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-7xl">
          <motion.div
            initial={{ opacity: 0, y: 18 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.45 }}
            className="surface-dark overflow-hidden p-8 lg:p-10"
          >
            <div className="grid gap-8 lg:grid-cols-[1.2fr,0.8fr] lg:items-center">
              <div className="space-y-4">
                <Badge className="w-fit rounded-full bg-white/10 text-white/90">CTA</Badge>
                <h2 className="font-display text-3xl font-semibold text-white sm:text-4xl">
                  Запросить демонстрацию и собрать ERP+CRM под ваш сценарий бизнеса
                </h2>
                <p className="max-w-2xl text-base leading-7 text-slate-300">
                  Покажем отраслевую демо-версию, разложим текущие боли по модулям и зафиксируем
                  реалистичный план запуска на 30 дней: что внедряем первым, какие данные нужны и где
                  будет ROI.
                </p>
              </div>

              <div className="grid gap-3 rounded-[28px] border border-white/10 bg-white/5 p-5">
                <div className="rounded-[22px] border border-white/10 bg-white/5 p-4 text-sm text-slate-200">
                  1. Выбираем отраслевой сценарий и боли бизнеса
                </div>
                <div className="rounded-[22px] border border-white/10 bg-white/5 p-4 text-sm text-slate-200">
                  2. Показываем demo-поток: лид → заказ → склад/операции → деньги → BI → AI
                </div>
                <div className="rounded-[22px] border border-white/10 bg-white/5 p-4 text-sm text-slate-200">
                  3. Формируем дорожную карту внедрения без воды и лишних модулей
                </div>
                <Button asChild variant="gradient" size="lg" className="mt-2 rounded-2xl">
                  <Link href="/demo/construction">
                    Открыть первую демо-версию
                    <ArrowRight className="h-4 w-4" />
                  </Link>
                </Button>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Footer */}
      <footer className="border-t border-slate-200/70 px-4 py-12 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-7xl">
          <div className="grid gap-10 md:grid-cols-[1fr,auto,auto]">
            {/* Brand */}
            <div className="space-y-4">
              <div className="flex items-center gap-3">
                <div className="flex h-10 w-10 items-center justify-center rounded-2xl bg-slate-950 text-white">
                  <Sparkles className="h-5 w-5" />
                </div>
                <div>
                  <div className="font-display text-base font-semibold text-slate-950">
                    Creonix Demo Hub
                  </div>
                  <div className="text-xs text-slate-500">ERP+CRM под конкретные отрасли</div>
                </div>
              </div>
              <p className="max-w-xs text-sm leading-6 text-slate-500">
                Интерактивная платформа для демонстрации ERP+CRM. 10 отраслей, 10 сценариев, старт за 30
                дней.
              </p>
              <div className="flex gap-4 text-slate-400">
                <a
                  href="mailto:demo@creonix.ru"
                  className="flex items-center gap-2 text-sm transition hover:text-slate-900"
                >
                  <Mail className="h-4 w-4" />
                  demo@creonix.ru
                </a>
              </div>
            </div>

            {/* Demos */}
            <div className="space-y-4">
              <div className="text-xs font-semibold uppercase tracking-[0.16em] text-slate-400">
                Демо-версии
              </div>
              <ul className="space-y-2.5 text-sm text-slate-600">
                {[
                  { slug: "construction", name: "Строительство" },
                  { slug: "grocery", name: "Продуктовый ритейл" },
                  { slug: "restaurant", name: "Ресторан / кафе" },
                  { slug: "logistics", name: "Логистика" },
                  { slug: "bakery", name: "Пекарня" }
                ].map((item) => (
                  <li key={item.slug}>
                    <Link
                      href={`/demo/${item.slug}`}
                      className="flex items-center gap-1.5 transition hover:text-slate-950"
                    >
                      <ExternalLink className="h-3.5 w-3.5 opacity-50" />
                      {item.name}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>

            {/* Contacts */}
            <div className="space-y-4">
              <div className="text-xs font-semibold uppercase tracking-[0.16em] text-slate-400">
                Контакты
              </div>
              <ul className="space-y-3 text-sm text-slate-600">
                <li>
                  <a
                    href="tel:+79001234567"
                    className="flex items-center gap-2 transition hover:text-slate-950"
                  >
                    <Phone className="h-4 w-4 text-slate-400" />
                    +7 900 123-45-67
                  </a>
                </li>
                <li>
                  <a
                    href="mailto:demo@creonix.ru"
                    className="flex items-center gap-2 transition hover:text-slate-950"
                  >
                    <Mail className="h-4 w-4 text-slate-400" />
                    demo@creonix.ru
                  </a>
                </li>
                <li>
                  <a
                    href="#request-demo"
                    className="flex items-center gap-2 transition hover:text-slate-950"
                  >
                    <MessageCircle className="h-4 w-4 text-slate-400" />
                    Написать в чат
                  </a>
                </li>
              </ul>
            </div>
          </div>

          <div className="mt-10 flex flex-col items-center justify-between gap-4 border-t border-slate-200/70 pt-6 sm:flex-row">
            <p className="text-xs text-slate-400">
              © {new Date().getFullYear()} Creonix. Все права защищены.
            </p>
            <p className="text-xs text-slate-400">Платформа для демонстрации ERP+CRM-решений</p>
          </div>
        </div>
      </footer>
    </main>
  );
}
