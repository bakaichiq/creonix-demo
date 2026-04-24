import Link from "next/link";
import type { Metadata } from "next";
import { ArrowLeft, ArrowRight, Compass } from "lucide-react";

import { Button } from "@/components/ui/button";
import { businesses } from "@/data/businesses";

export const metadata: Metadata = {
  title: "Демо не найдено — 404"
};

const suggested = businesses.slice(0, 3);

export default function NotFound() {
  return (
    <main className="relative flex min-h-screen flex-col items-center justify-center overflow-hidden px-4 py-12">
      <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_50%_30%,rgba(59,130,246,0.1),transparent_50%),radial-gradient(circle_at_80%_80%,rgba(20,184,166,0.08),transparent_40%)]" />

      <div className="relative w-full max-w-2xl space-y-10 text-center">
        {/* Icon */}
        <div className="mx-auto flex h-20 w-20 items-center justify-center rounded-3xl border border-slate-200 bg-white/80 shadow-soft backdrop-blur-xl">
          <Compass className="h-9 w-9 text-slate-400" />
        </div>

        {/* Heading */}
        <div className="space-y-3">
          <div className="font-display text-7xl font-semibold text-slate-200">404</div>
          <h1 className="font-display text-3xl font-semibold text-slate-950">Демо не найдено</h1>
          <p className="mx-auto max-w-md text-base leading-7 text-slate-500">
            Такой отраслевой сценарий не существует или ссылка была изменена. Вернитесь в хаб и откройте
            нужное направление из списка ниже.
          </p>
        </div>

        {/* Suggested demos */}
        <div className="rounded-[28px] border border-white/70 bg-white/80 p-6 shadow-soft backdrop-blur-xl">
          <div className="mb-4 text-xs font-semibold uppercase tracking-[0.18em] text-slate-400">
            Доступные демо-версии
          </div>
          <div className="grid gap-3">
            {suggested.map((b) => (
              <Link
                key={b.slug}
                href={`/demo/${b.slug}`}
                className="group flex items-center justify-between rounded-2xl border border-slate-200 bg-white/80 px-5 py-4 text-sm transition-all hover:-translate-y-0.5 hover:border-slate-300 hover:shadow-soft"
              >
                <div className="text-left">
                  <div className="font-medium text-slate-900">{b.name}</div>
                  <div className="mt-0.5 text-slate-500">{b.tagline}</div>
                </div>
                <ArrowRight className="h-4 w-4 text-slate-400 transition-transform group-hover:translate-x-1" />
              </Link>
            ))}
          </div>
        </div>

        {/* Back button */}
        <Button asChild size="lg" className="rounded-2xl px-6">
          <Link href="/">
            <ArrowLeft className="h-4 w-4" />
            Вернуться в Creonix Demo Hub
          </Link>
        </Button>
      </div>
    </main>
  );
}
