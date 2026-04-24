"use client";

import { useState } from "react";
import { Joyride, STATUS, Step, EventData } from "react-joyride";
import { Button } from "@/components/ui/button";
import { PlayCircle } from "lucide-react";
import { cn } from "@/lib/utils";
import type { BusinessProfile } from "@/lib/types";

export function GuidedTour({
  business,
  compact = false
}: {
  business: BusinessProfile;
  compact?: boolean;
}) {
  const [run, setRun] = useState(false);

  // Чтобы тур не ломался, если секция еще не отрендерилась, 
  // joyride работает с селекторами DOM:
  const steps: Step[] = [
    {
      target: "#timeframe-selector",
      content: "Переключайте периоды (Сегодня, Неделя, Месяц), чтобы увидеть, как система пересчитывает данные в реальном времени и масштабирует графики.",
      skipBeacon: true,
    },
    {
      target: "#dashboard",
      content: `Здесь собраны ключевые показатели: финансы, эффективность и проблемные зоны, специфичные для компании типа "${business.shortName}".`,
    },
    {
      target: "#assistant",
      content: "AI-помощник анализирует массивы данных и подсказывает управленческие решения до того, как проблема станет критичной.",
    },
    {
      target: "#crm",
      content: `Раздел "${business.vocabulary.crm}". Система не просто хранит контакты, а ведет процесс и подсказывает следующие шаги для пользователей.`,
    },
    {
      target: "#operations",
      content: `Блок "${business.operationLabel}". Контролируйте узкие места процесса и статусы выполнения задач.`,
    }
  ];

  const handleJoyrideCallback = (data: EventData) => {
    const { status } = data;
    const finishedStatuses: string[] = [STATUS.FINISHED, STATUS.SKIPPED];

    if (finishedStatuses.includes(status)) {
      setRun(false);
    }
  };

  return (
    <>
      <div
        className={cn(
          "mb-4 flex items-start justify-between gap-4 border border-white/70 bg-white/50 backdrop-blur-md shadow-sm",
          compact
            ? "rounded-[20px] p-3 sm:items-center"
            : "flex-col rounded-[24px] p-4 sm:flex-row sm:items-center"
        )}
      >
        <div>
          <h2 className={cn("font-display font-semibold text-slate-900", compact ? "text-base" : "text-xl")}>
            Интерактивный тур
          </h2>
          <p className="text-sm text-slate-500">Пройдите краткое обучение по интерфейсу системы</p>
        </div>
        <Button
          type="button"
          onClick={() => setRun(true)}
          className={cn(
            "bg-slate-950 text-white hover:bg-slate-800",
            compact ? "rounded-2xl px-4 py-2 text-sm" : "rounded-full shadow-lg"
          )}
        >
          <PlayCircle className={cn("text-cyan-400", compact ? "mr-2 h-4 w-4" : "mr-2 h-5 w-5")} />
          Включить Tour
        </Button>
      </div>

      {run && (
        <Joyride
          onEvent={handleJoyrideCallback}
          continuous
          scrollToFirstStep
          run={run}
          steps={steps}
          options={{
            zIndex: 10000,
            primaryColor: business.palette.chart[0] || "#0ea5e9", // fallback
            backgroundColor: "#ffffff",
            textColor: "#0f172a",
            showProgress: true,
            buttons: ["back", "close", "primary", "skip"],
          }}
          styles={{
            tooltip: {
              borderRadius: "20px",
              padding: "20px",
              boxShadow: "0 25px 50px -12px rgba(0, 0, 0, 0.25)"
            },
            buttonPrimary: {
              borderRadius: "16px",
              padding: "10px 20px",
              fontWeight: 600,
            },
            buttonBack: {
              marginRight: 10,
              color: "#64748b",
              fontWeight: 500,
            },
            buttonSkip: {
              color: "#64748b",
              fontWeight: 500,
            }
          }}
          locale={{
            back: 'Назад',
            close: 'Закрыть',
            last: 'Завершить',
            next: 'Далее',
            skip: 'Пропустить'
          }}
        />
      )}
    </>
  );
}
