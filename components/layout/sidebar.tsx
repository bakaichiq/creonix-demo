"use client";

import Image from "next/image";
import Link from "next/link";
import { ArrowLeft, ChevronRight, Layers3, Menu, WandSparkles, X } from "lucide-react";
import { useEffect, useState } from "react";

import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import type { BusinessProfile, SidebarItem } from "@/lib/types";
import { cn } from "@/lib/utils";

interface SidebarProps {
  business: BusinessProfile;
  items: SidebarItem[];
}

function SidebarContent({
  business,
  items,
  activeId,
  onClose
}: {
  business: BusinessProfile;
  items: SidebarItem[];
  activeId: string;
  onClose?: () => void;
}) {
  const d = business.design;
  return (
    <div className={cn("flex h-full flex-col gap-6 p-5 lg:p-6", d.sidebarBg)}>
      <div className="space-y-4">
        <div className="flex items-center justify-between gap-3">
          <div className="flex items-center gap-2.5">
            <Image src="/logo.png" alt="Creonix" width={32} height={32} className="rounded-lg" />
            <div>
              <div className="text-xs uppercase tracking-[0.18em] opacity-60">Creonix Demo</div>
              <div className="font-display text-xl font-semibold">{business.shortName}</div>
            </div>
          </div>
          <div className="flex items-center gap-2">
            <div className="flex items-center gap-1.5 rounded-2xl bg-emerald-500/15 px-3 py-2">
              <span className="h-1.5 w-1.5 rounded-full bg-emerald-400 animate-pulse-slow" />
              <span className="text-xs font-medium text-emerald-300">Онлайн</span>
            </div>
            {onClose && (
              <button
                type="button"
                onClick={onClose}
                className="rounded-xl p-1.5 opacity-60 transition hover:opacity-100 hover:bg-white/10 lg:hidden"
                aria-label="Закрыть меню"
              >
                <X className="h-5 w-5" />
              </button>
            )}
          </div>
        </div>

        <p className="text-sm leading-6 opacity-75">{business.demoIntro}</p>

        <div className="flex flex-wrap gap-2">
          {business.modules.slice(0, 3).map((module) => (
            <Badge key={module} variant="outline" className="border-current/20 bg-white/5 opacity-80">
              {module}
            </Badge>
          ))}
        </div>
      </div>

      <nav className="grid gap-1.5" role="navigation" aria-label="Разделы демо">
        {items.map((item) => {
          const isActive = activeId === item.id;

          return (
            <a
              key={item.id}
              href={`#${item.id}`}
              aria-current={isActive ? "page" : undefined}
              onClick={onClose}
              className={cn(
                "theme-nav-radius group relative flex items-center justify-between px-4 py-3 text-sm transition-all duration-200",
                isActive
                  ? cn(d.sidebarActiveBg, "font-medium")
                  : "opacity-70 hover:opacity-100 hover:bg-white/5"
              )}
            >
              {isActive && (
                <span className={cn("absolute left-0 top-1/2 h-5 w-1 -translate-y-1/2 rounded-r-full bg-gradient-to-b", d.sidebarActiveBar)} />
              )}
              <span>{item.label}</span>
              <ChevronRight
                className={cn(
                  "h-4 w-4 transition-all duration-200",
                  isActive
                    ? cn("translate-x-0.5 opacity-100", d.sidebarIconColor)
                    : "opacity-40 group-hover:translate-x-0.5 group-hover:opacity-100"
                )}
              />
            </a>
          );
        })}
      </nav>

      <div className="space-y-3 rounded-[24px] border border-white/10 bg-white/5 p-4">
        <div className="flex items-center gap-2 text-sm font-medium">
          <WandSparkles className={cn("h-4 w-4", d.sidebarIconColor)} />
          Что показывает демо
        </div>
        <div className="space-y-2 text-sm leading-6 opacity-70">
          <div className="flex items-start gap-2">
            <Layers3 className={cn("mt-1 h-4 w-4 shrink-0", d.sidebarIconColor)} />
            <span>Сквозной путь от лида до денег и операционного результата.</span>
          </div>
          <div className="flex items-start gap-2">
            <Layers3 className={cn("mt-1 h-4 w-4 shrink-0", d.sidebarIconColor)} />
            <span>Mock-data, но интерфейс кликабелен и похож на реальный продукт.</span>
          </div>
        </div>
      </div>

      <div className="mt-auto grid gap-3">
        <Button
          asChild
          variant="secondary"
          className="w-full rounded-2xl bg-white text-slate-950 hover:bg-white/90"
        >
          <Link href="/">
            <ArrowLeft className="h-4 w-4" />
            Вернуться к выбору бизнеса
          </Link>
        </Button>
        <Button asChild variant="gradient" className="w-full rounded-2xl">
          <a href="#request-implementation">Запросить внедрение</a>
        </Button>
      </div>
    </div>
  );
}

export function Sidebar({ business, items }: SidebarProps) {
  const [activeId, setActiveId] = useState(items[0]?.id ?? "");
  const [mobileOpen, setMobileOpen] = useState(false);

  // Scroll spy
  useEffect(() => {
    const sectionIds = items.map((item) => item.id);

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setActiveId(entry.target.id);
          }
        });
      },
      { rootMargin: "-20% 0px -60% 0px", threshold: 0 }
    );

    sectionIds.forEach((id) => {
      const el = document.getElementById(id);
      if (el) observer.observe(el);
    });

    return () => observer.disconnect();
  }, [items]);

  // Lock body scroll when mobile menu open
  useEffect(() => {
    if (mobileOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }
    return () => {
      document.body.style.overflow = "";
    };
  }, [mobileOpen]);

  useEffect(() => {
    if (!mobileOpen) return;

    const onKeyDown = (event: KeyboardEvent) => {
      if (event.key === "Escape") {
        setMobileOpen(false);
      }
    };

    window.addEventListener("keydown", onKeyDown);
    return () => window.removeEventListener("keydown", onKeyDown);
  }, [mobileOpen]);

  return (
    <>
      <div className="sticky top-4 z-40 mb-4 flex items-center justify-between rounded-[20px] border border-slate-200/80 bg-white/90 px-4 py-3 shadow-soft backdrop-blur lg:hidden">
        <div>
          <div className="text-[11px] uppercase tracking-[0.18em] text-slate-400">Sections</div>
          <div className="text-sm font-semibold text-slate-900">{business.shortName}</div>
        </div>
        <button
          type="button"
          onClick={() => setMobileOpen(true)}
          className="inline-flex items-center gap-2 rounded-2xl bg-slate-950 px-4 py-2 text-sm font-medium text-white transition hover:bg-slate-900"
          aria-label="Открыть меню навигации"
          aria-expanded={mobileOpen}
          aria-controls="demo-mobile-sidebar"
        >
          <Menu className="h-4 w-4" />
          Разделы
        </button>
      </div>

      {/* Mobile overlay */}
      {mobileOpen && (
        <div
          className="fixed inset-0 z-50 bg-slate-950/60 backdrop-blur-sm lg:hidden"
          onClick={() => setMobileOpen(false)}
          aria-hidden="true"
        />
      )}

      {/* Mobile sidebar drawer */}
      <div
        id="demo-mobile-sidebar"
        className={cn(
          "fixed bottom-0 left-0 right-0 z-50 max-h-[85vh] overflow-y-auto rounded-t-[32px] transition-transform duration-300 ease-out lg:hidden",
          mobileOpen ? "translate-y-0" : "translate-y-full"
        )}
        role="dialog"
        aria-modal="true"
        aria-label="Навигация по демо"
      >
        <SidebarContent
          business={business}
          items={items}
          activeId={activeId}
          onClose={() => setMobileOpen(false)}
        />
      </div>

      {/* Desktop sidebar */}
      <aside className="sticky top-6 hidden h-fit lg:block">
        <SidebarContent business={business} items={items} activeId={activeId} />
      </aside>
    </>
  );
}
