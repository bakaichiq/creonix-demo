"use client";

import { useEffect, useCallback } from "react";
import { toast } from "sonner";
import { Bell, CheckCircle2, TrendingUp, AlertTriangle } from "lucide-react";
import type { BusinessProfile, BusinessSlug } from "@/lib/types";

export function LiveSimulation({ slug, business }: { slug: BusinessSlug, business: BusinessProfile }) {
  const triggerEvent = useCallback(() => {
    // Генерация случайных сумм и времени для живости
    const randomAmount = Math.floor(Math.random() * 500) + 50;
    const currency = business.currency || "сом";
    const valueStr = `${(randomAmount * 1000).toLocaleString("ru-RU")} ${currency}`;

    const events = [
      {
        title: `Новый ${business.vocabulary.operationUnit}`,
        text: `Успешно создан и передан в работу.`,
        icon: <CheckCircle2 className="w-5 h-5 text-emerald-500" />,
      },
      {
        title: `Изменение статуса: ${business.vocabulary.crm}`,
        text: `Данные обновлены. Ожидается подтверждение.`,
        icon: <Bell className="w-5 h-5 text-sky-500" />
      },
      {
        title: `Оповещение: ${business.vocabulary.inventory}`,
        text: `Списание: ${valueStr}. Остатки перевычислены.`,
        icon: <AlertTriangle className="w-5 h-5 text-amber-500" />
      },
      {
        title: `Показатель улучшен: ${business.vocabulary.sales}`,
        text: `Зафиксирован рост операционных метрик.`,
        icon: <TrendingUp className="w-5 h-5 text-cyan-500" />
      }
    ];

    const randomEvent = events[Math.floor(Math.random() * events.length)];
    
    toast(randomEvent.title, {
      description: randomEvent.text,
      icon: randomEvent.icon,
      duration: 5000,
      className: "border border-white/10 bg-slate-900/90 text-white backdrop-blur-xl shadow-2xl rounded-2xl",
    });
  }, [business.currency, business.vocabulary]);

  useEffect(() => {
    // Ждем 10 секунд перед первым уведомлением, затем повторяем каждые 20 сек
    const timeout = setTimeout(() => {
      triggerEvent();
      const interval = setInterval(triggerEvent, 20000);
      return () => clearInterval(interval);
    }, 10000);
    
    return () => clearTimeout(timeout);
  }, [triggerEvent]);

  return null; // Невидимый компонент
}
