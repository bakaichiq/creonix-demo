import type { BusinessProfile, BusinessSlug, SidebarItem } from "@/lib/types";

export function getSidebarItems(business: BusinessProfile): SidebarItem[] {
  return [
    { id: "dashboard", label: "Дашборд", shortLabel: "Дашборд" },
    { id: "crm", label: business.vocabulary.crm, shortLabel: "CRM" },
    { id: "sales", label: business.vocabulary.sales, shortLabel: "Продажи" },
    { id: "inventory", label: business.vocabulary.inventory, shortLabel: "Склад" },
    { id: "operations", label: business.vocabulary.operations, shortLabel: "Операции" },
    { id: "finance", label: "Финансы", shortLabel: "Финансы" },
    { id: "bi", label: "BI аналитика", shortLabel: "BI" },
    { id: "assistant", label: "AI помощник", shortLabel: "AI" },
    { id: "documents", label: business.vocabulary.documents, shortLabel: "Документы" },
    { id: "settings", label: "Настройки", shortLabel: "Настройки" }
  ];
}

export const coreModules = [
  "CRM и воронка продаж",
  "Заказы, счета и оплаты",
  "Склад и резервы",
  "Производство и операционный контроль",
  "Финансы и план-факт",
  "BI-аналитика в одном окне",
  "AI-подсказки по отклонениям",
  "Документы и контроль исполнителей"
];

export const comparisonReasons = [
  {
    title: "Не шаблонная CRM",
    description:
      "Creonix собирается под конкретную логику бизнеса: этапы, документы, техкарты, списания, отгрузки и реальные операционные роли."
  },
  {
    title: "ERP + CRM в одной системе",
    description:
      "Продажи, склад, производство, финансы и BI не живут в разных Excel и чатах. Руководитель видит операционную картину в одном интерфейсе."
  },
  {
    title: "Данные превращаются в действия",
    description:
      "Система не только показывает отчеты, но и подсвечивает риски: кассовый разрыв, дефицит сырья, падение маржи, отставание по графику."
  }
];

export const businesses: BusinessProfile[] = [
  {
    slug: "construction",
    uiTheme: "enterprise",
    design: {
      designSystemName: "Project Command Center",
      pageBg: "bg-slate-100",
      pageAccentGlow: "#0ea5e9",
      sidebarBg: "bg-slate-800 text-slate-100",
      sidebarActiveBg: "bg-slate-700",
      sidebarActiveBar: "from-sky-400 to-cyan-300",
      sidebarIconColor: "text-sky-400",
      headingClass: "font-bold tracking-tight uppercase text-slate-800",
      badgeBg: "bg-sky-100",
      badgeText: "text-sky-800",
      cardRadius: "rounded-sm",
      cardBg: "bg-white",
      cardBorder: "border-slate-200",
      primary: "#0ea5e9",
      primaryMuted: "#0ea5e914",
      kpiVariant: "progress",
      surfaceStyle: "solid",
      density: "compact",
      navStyle: "rail",
      buttonStyle: "sharp",
      heroTone: "command",
      motionStyle: "precise",
    },
    name: "Строительная компания",
    shortName: "Стройка",
    tagline: "Объекты, графики работ, акты и деньги в одном контуре",
    description:
      "Контроль объектов, этапов, снабжения и кассовых разрывов без Excel, WhatsApp и ручных сводок.",
    pains: ["Отставание по этапам", "Непрозрачные закупки", "Кассовые разрывы"],
    outcomes: ["План-факт по объектам", "Контроль заявок и актов", "Маржа по каждому объекту"],
    icon: "Building2",
    demoMetric: "16 объектов под контролем",
    modules: ["Объекты", "Этапы", "Заявки", "Акты", "Подрядчики", "Платёжный календарь"],
    operationLabel: "Объекты и этапы работ",
    operationSubtitle: "Монолит, инженерия, отделка, снабжение и контроль подрядчиков",
    demoIntro:
      "Демо показывает, как руководитель стройки видит статус объекта, снабжение и деньги без ручных прозвонов.",
    implementationPromise: "Старт за 30 дней с пилотом на 1-2 объектах",
    beforeAfter: {
      before: ["Сроки съезжают незаметно", "Заявки теряются в чатах", "Рентабельность объекта считается постфактум"],
      after: ["Отставания видны по этапам", "Снабжение идет через прозрачный процесс", "Маржа по объекту обновляется ежедневно"]
    },
    palette: {
      gradient: "from-sky-500 via-cyan-400 to-emerald-300",
      glow: "shadow-[0_24px_90px_-40px_rgba(14,165,233,0.7)]",
      soft: "bg-sky-500/10",
      border: "border-sky-200/70",
      badge: "bg-sky-500/12 text-sky-700",
      chart: ["#0ea5e9", "#06b6d4", "#34d399"]
    },
    vocabulary: {
      crm: "Подрядчики / Клиенты",
      inventory: "Снабжение и материалы",
      operations: "Объекты и этапы",
      sales: "Заказы и акты",
      documents: "Акты и договоры",
      operationUnit: "объект"
    },
    currency: "сом"
  },
  {
    slug: "grocery",
    uiTheme: "glass",
    design: {
      designSystemName: "Fresh Shelf Intelligence",
      pageBg: "bg-gradient-to-br from-emerald-50 via-white to-lime-50",
      pageAccentGlow: "#22c55e",
      sidebarBg: "bg-emerald-900 text-emerald-50",
      sidebarActiveBg: "bg-emerald-800",
      sidebarActiveBar: "from-emerald-400 to-lime-300",
      sidebarIconColor: "text-emerald-300",
      headingClass: "font-semibold text-emerald-900",
      badgeBg: "bg-emerald-100",
      badgeText: "text-emerald-800",
      cardRadius: "rounded-[20px]",
      cardBg: "bg-white/90",
      cardBorder: "border-emerald-100",
      primary: "#22c55e",
      primaryMuted: "#22c55e14",
      kpiVariant: "spark",
      surfaceStyle: "glass",
      density: "balanced",
      navStyle: "pill",
      buttonStyle: "soft",
      heroTone: "fresh",
      motionStyle: "smooth",
    },
    name: "Продуктовый магазин",
    shortName: "Ритейл",
    tagline: "Остатки, продажи и списания по магазинам без пересортицы",
    description:
      "Система для продуктового ритейла с акцентом на закупки, оборачиваемость, сроки годности и кассовую дисциплину.",
    pains: ["Пересорт и недостача", "Списания по срокам", "Нет картины по марже"],
    outcomes: ["Оборачиваемость по SKU", "Предупреждения по срокам", "Маржинальность по категориям"],
    icon: "Store",
    demoMetric: "2 430 SKU и 4 точки",
    modules: ["Закупки", "Сроки годности", "Списания", "Промо", "Касса", "Аналитика категорий"],
    operationLabel: "Закупки и срок годности",
    operationSubtitle: "Поставки, остатки, списания и кассовая дисциплина по магазинам",
    demoIntro:
      "Демо показывает, как управляющий магазина видит дефицит, излишки и просадку маржи до того, как это ударит по прибыли.",
    implementationPromise: "Быстрый запуск на одной точке и масштабирование на сеть",
    beforeAfter: {
      before: ["Товары заканчиваются в пиковый день", "Просрочка обнаруживается слишком поздно", "Маржа теряется на пересорте и скидках"],
      after: ["Пополнение строится по спросу", "Просрочка и медленные позиции под контролем", "Маржинальность по отделам видна каждый день"]
    },
    palette: {
      gradient: "from-emerald-500 via-lime-400 to-amber-300",
      glow: "shadow-[0_24px_90px_-40px_rgba(34,197,94,0.75)]",
      soft: "bg-emerald-500/10",
      border: "border-emerald-200/70",
      badge: "bg-emerald-500/12 text-emerald-700",
      chart: ["#22c55e", "#84cc16", "#f59e0b"]
    },
    vocabulary: {
      crm: "Поставщики",
      inventory: "Склад и SKU",
      operations: "Закупки и поставки",
      sales: "Продажи по категориям",
      documents: "Накладные и акты",
      operationUnit: "SKU"
    },
    currency: "сом"
  },
  {
    slug: "sewing",
    uiTheme: "glass",
    design: {
      designSystemName: "Atelier Flow Board",
      pageBg: "bg-gradient-to-br from-fuchsia-50 via-rose-50 to-orange-50",
      pageAccentGlow: "#d946ef",
      sidebarBg: "bg-fuchsia-900 text-fuchsia-50",
      sidebarActiveBg: "bg-fuchsia-800",
      sidebarActiveBar: "from-fuchsia-400 to-rose-300",
      sidebarIconColor: "text-fuchsia-300",
      headingClass: "font-semibold italic text-fuchsia-900",
      badgeBg: "bg-fuchsia-100",
      badgeText: "text-fuchsia-800",
      cardRadius: "rounded-[28px]",
      cardBg: "bg-white/85 backdrop-blur",
      cardBorder: "border-fuchsia-100",
      primary: "#d946ef",
      primaryMuted: "#d946ef14",
      kpiVariant: "progress",
      surfaceStyle: "glass",
      density: "balanced",
      navStyle: "pill",
      buttonStyle: "soft",
      heroTone: "atelier",
      motionStyle: "smooth",
    },
    name: "Швейный цех",
    shortName: "Швейный цех",
    tagline: "Заказы, раскрой, пошив и ОТК по партиям и сменам",
    description:
      "Управление загрузкой цеха, партиями, бригадами и качеством по каждому заказу.",
    pains: ["Срывы сроков пошива", "Нет прозрачности по партиям", "Брак выявляется поздно"],
    outcomes: ["Загрузка линий по дням", "Статус партии в реальном времени", "Снижение брака и простоев"],
    icon: "Shirt",
    demoMetric: "38 активных партий",
    modules: ["Раскрой", "Пошив", "ОТК", "Смены", "Материалы", "Партии"],
    operationLabel: "Раскрой, пошив и ОТК",
    operationSubtitle: "Партии, линии, качество и производительность по бригадам",
    demoIntro:
      "Демо показывает, как владелец цеха видит загрузку, статус партии и узкие места между раскроем и ОТК.",
    implementationPromise: "Пилот на одной линии и запуск сквозного контроля партий",
    beforeAfter: {
      before: ["Менеджер не понимает, где завис заказ", "Материал уходит без контроля нормы", "ОТК тушит проблему на финальном этапе"],
      after: ["Партии отслеживаются по этапам", "Отклонения расхода видны сразу", "Качество контролируется до упаковки"]
    },
    palette: {
      gradient: "from-fuchsia-500 via-rose-400 to-orange-300",
      glow: "shadow-[0_24px_90px_-40px_rgba(217,70,239,0.75)]",
      soft: "bg-fuchsia-500/10",
      border: "border-fuchsia-200/70",
      badge: "bg-fuchsia-500/12 text-fuchsia-700",
      chart: ["#d946ef", "#fb7185", "#fb923c"]
    },
    vocabulary: {
      crm: "Клиенты / Бренды",
      inventory: "Ткани и фурнитура",
      operations: "Цех и партии",
      sales: "Заказы на пошив",
      documents: "Техзадания и акты",
      operationUnit: "партия"
    },
    currency: "сом"
  },
  {
    slug: "boutique",
    uiTheme: "glass",
    design: {
      designSystemName: "Editorial Luxury Ledger",
      pageBg: "bg-gradient-to-br from-stone-50 via-amber-50 to-violet-50",
      pageAccentGlow: "#8b5cf6",
      sidebarBg: "bg-stone-950 text-stone-100",
      sidebarActiveBg: "bg-stone-800",
      sidebarActiveBar: "from-violet-400 to-amber-300",
      sidebarIconColor: "text-amber-300",
      headingClass: "font-light tracking-widest uppercase text-stone-800",
      badgeBg: "bg-stone-100",
      badgeText: "text-stone-700",
      cardRadius: "rounded-[4px]",
      cardBg: "bg-white",
      cardBorder: "border-stone-200",
      primary: "#8b5cf6",
      primaryMuted: "#8b5cf614",
      kpiVariant: "luxury",
      surfaceStyle: "editorial",
      density: "airy",
      navStyle: "minimal",
      buttonStyle: "editorial",
      heroTone: "luxury",
      motionStyle: "editorial",
    },
    name: "Бутик / магазин одежды",
    shortName: "Бутик",
    tagline: "Коллекции, размеры, возвраты и продажи по стилям",
    description:
      "ERP+CRM для fashion-ритейла: матрица размеров, сезонность, возвраты и персональная работа с клиентом.",
    pains: ["Нет размерной матрицы", "Возвраты съедают прибыль", "Нет данных по лояльным клиентам"],
    outcomes: ["Контроль остатков по размерам", "Аналитика возвратов", "CRM по клиентским сегментам"],
    icon: "Sparkles",
    demoMetric: "12 коллекций в сезоне",
    modules: ["Коллекции", "Размеры", "Возвраты", "Стилист", "LTV", "Промо"],
    operationLabel: "Коллекции, размеры и возвраты",
    operationSubtitle: "Сезонность, размерная матрица и персональные продажи",
    demoIntro:
      "Демо показывает, как бутик управляет коллекциями и возвратами, не теряя премиальный клиентский опыт.",
    implementationPromise: "Настройка витрины и CRM под продажи в зале и онлайн",
    beforeAfter: {
      before: ["Популярные размеры исчезают первыми", "Возвраты анализируются вручную", "Лучшие клиенты не выделены"],
      after: ["Матрица размеров видна по каждой коллекции", "Причины возвратов сегментированы", "Персональные предложения идут по LTV"]
    },
    palette: {
      gradient: "from-violet-500 via-pink-400 to-amber-200",
      glow: "shadow-[0_24px_90px_-40px_rgba(139,92,246,0.75)]",
      soft: "bg-violet-500/10",
      border: "border-violet-200/70",
      badge: "bg-violet-500/12 text-violet-700",
      chart: ["#8b5cf6", "#ec4899", "#fbbf24"]
    },
    vocabulary: {
      crm: "Клиенты / LTV",
      inventory: "Коллекции и размеры",
      operations: "Примерки и стилист",
      sales: "Продажи по коллекциям",
      documents: "Накладные и возвраты",
      operationUnit: "позиция"
    },
    currency: "сом"
  },
  {
    slug: "agro",
    uiTheme: "neo-dark",
    design: {
      designSystemName: "Field Operations Grid",
      pageBg: "bg-gradient-to-br from-stone-950 via-green-950 to-slate-900",
      pageAccentGlow: "#84cc16",
      sidebarBg: "bg-green-950 text-green-100",
      sidebarActiveBg: "bg-green-900",
      sidebarActiveBar: "from-lime-400 to-emerald-300",
      sidebarIconColor: "text-lime-400",
      headingClass: "font-semibold tracking-wide text-lime-300",
      badgeBg: "bg-green-900",
      badgeText: "text-lime-300",
      cardRadius: "rounded-none",
      cardBg: "bg-green-950/70 backdrop-blur",
      cardBorder: "border-green-800/60",
      primary: "#84cc16",
      primaryMuted: "#84cc1614",
      kpiVariant: "system",
      surfaceStyle: "field",
      density: "balanced",
      navStyle: "signal",
      buttonStyle: "sharp",
      heroTone: "field",
      motionStyle: "calm",
    },
    name: "Агро компания",
    shortName: "Агро",
    tagline: "Поля, партии, корм, урожай и экономика цикла",
    description:
      "Учет партий, полей, техники, удобрений и прогноза урожайности для агро-бизнеса.",
    pains: ["Нет факта по полю и партии", "Расход удобрений не контролируется", "План урожая расходится с реальностью"],
    outcomes: ["План-факт по полям", "Экономика культуры", "Прогноз урожайности и риска"],
    icon: "Tractor",
    demoMetric: "8 полей и 22 партии",
    modules: ["Поля", "Партии", "Техника", "Корм/удобрения", "Урожай", "Сезонный план"],
    operationLabel: "Поля, партии и сезонный цикл",
    operationSubtitle: "Питание, техника, урожай и экономика по участкам",
    demoIntro:
      "Демо показывает, как агро-компания видит экономику сезона: от внесения удобрений до прогноза урожая и выручки.",
    implementationPromise: "Пилот на одной культуре или направлении и расширение на сезон",
    beforeAfter: {
      before: ["Данные по полям разрознены", "Перерасход списывают на сезонность", "Урожайность сложно прогнозировать"],
      after: ["Каждое поле считается как P&L", "Нормы расхода видны по операциям", "Риски по урожайности подсвечиваются заранее"]
    },
    palette: {
      gradient: "from-lime-500 via-emerald-400 to-cyan-300",
      glow: "shadow-[0_24px_90px_-40px_rgba(132,204,22,0.75)]",
      soft: "bg-lime-500/10",
      border: "border-lime-200/70",
      badge: "bg-lime-500/12 text-lime-700",
      chart: ["#84cc16", "#10b981", "#06b6d4"]
    },
    vocabulary: {
      crm: "Покупатели и контракты",
      inventory: "Сырьё и зернохранилище",
      operations: "Поля и сезон",
      sales: "Продажи урожая",
      documents: "Контракты и сертификаты",
      operationUnit: "поле"
    },
    currency: "сом"
  },
  {
    slug: "bakery",
    uiTheme: "glass",
    design: {
      designSystemName: "Warm Shift Dashboard",
      pageBg: "bg-gradient-to-br from-[#fffaf1] via-[#f9efdc] to-[#f6e1c3]",
      pageAccentGlow: "#c2410c",
      sidebarBg: "bg-[#4a2f1d] text-[#fff7ed]",
      sidebarActiveBg: "bg-[#6b3f1f]",
      sidebarActiveBar: "from-[#f59e0b] to-[#fb923c]",
      sidebarIconColor: "text-[#fdba74]",
      headingClass: "font-bold text-[#4a2f1d]",
      badgeBg: "bg-[#fff1dd]",
      badgeText: "text-[#9a3412]",
      cardRadius: "rounded-[16px]",
      cardBg: "bg-[#fffaf3]/94 backdrop-blur",
      cardBorder: "border-[#e8c9a4]",
      primary: "#c2410c",
      primaryMuted: "#c2410c14",
      kpiVariant: "spark",
      surfaceStyle: "warm",
      density: "balanced",
      navStyle: "pill",
      buttonStyle: "soft",
      heroTone: "warm",
      motionStyle: "smooth",
    },
    name: "Пекарня / пищевое производство",
    shortName: "Пекарня",
    tagline: "Автоплан, выпуск, возвраты и дефицит сырья под контролем",
    description:
      "Операционная система для пищевого производства с выпуском, возвратами, техкартами и автопланом.",
    pains: ["Перепроизводство и возвраты", "Сырье заканчивается внезапно", "Нет план-факта по выпуску"],
    outcomes: ["Автоплан по точкам", "Снижение возвратов", "Управление рецептурой и маржей"],
    icon: "Croissant",
    demoMetric: "420 позиций в ассортименте",
    modules: ["Автоплан", "Выпуск", "Техкарты", "Возвраты", "Отгрузка", "Сырье"],
    operationLabel: "Выпуск и автоплан",
    operationSubtitle: "Рецептуры, смены, возвраты и отгрузка по магазинам",
    demoIntro:
      "Демо показывает, как пекарня балансирует спрос, выпуск и возвраты, чтобы не терять прибыль на списаниях.",
    implementationPromise: "Запуск на производстве и 3-5 торговых точках за 30 дней",
    beforeAfter: {
      before: ["Выпуск строится на интуиции", "Возвраты растут без объяснения", "Мука и дрожжи заканчиваются в самый пик"],
      after: ["План строится по факту продаж", "Возвраты контролируются по магазинам", "Закупка сырья прогнозируется заранее"]
    },
    palette: {
      gradient: "from-[#d97706] via-[#c2410c] to-[#7c2d12]",
      glow: "shadow-[0_24px_90px_-40px_rgba(194,65,12,0.42)]",
      soft: "bg-orange-500/8",
      border: "border-[#e8c9a4]",
      badge: "bg-[#fff1dd] text-[#9a3412]",
      chart: ["#c2410c", "#d97706", "#7c2d12"]
    },
    vocabulary: {
      crm: "Торговые точки",
      inventory: "Сырьё и рецептуры",
      operations: "Выпуск и смены",
      sales: "Отгрузки и возвраты",
      documents: "Техкарты и накладные",
      operationUnit: "позиция"
    },
    currency: "сом"
  },
  {
    slug: "restaurant",
    uiTheme: "glass",
    design: {
      designSystemName: "Service Rush Monitor",
      pageBg: "bg-gradient-to-br from-stone-950 via-zinc-900 to-orange-950",
      pageAccentGlow: "#ea580c",
      sidebarBg: "bg-stone-950 text-stone-100",
      sidebarActiveBg: "bg-orange-950",
      sidebarActiveBar: "from-orange-400 to-amber-300",
      sidebarIconColor: "text-amber-300",
      headingClass: "font-semibold text-orange-50",
      badgeBg: "bg-orange-950/80",
      badgeText: "text-amber-100",
      cardRadius: "rounded-[20px]",
      cardBg: "bg-stone-950/72 backdrop-blur",
      cardBorder: "border-orange-900/45",
      primary: "#ea580c",
      primaryMuted: "#ea580c14",
      kpiVariant: "threshold",
      surfaceStyle: "glass",
      density: "compact",
      navStyle: "pill",
      buttonStyle: "soft",
      heroTone: "service",
      motionStyle: "snappy",
    },
    name: "Ресторан / кафе",
    shortName: "Ресторан",
    tagline: "Техкарты, кухня, закупки и food cost по каждой позиции",
    description:
      "Контроль кухни, техкарт, списаний, закупок и выручки по сменам и категориям меню.",
    pains: ["Перерасход по техкартам", "Списания без причин", "Нет прозрачности по food cost"],
    outcomes: ["Отклонения рецептур видны сразу", "Управление сменой и закупками", "Прибыль по меню и локациям"],
    icon: "UtensilsCrossed",
    demoMetric: "3 кухни и 86 блюд",
    modules: ["Техкарты", "Кухня", "Списания", "Смены", "Закупки", "Food cost"],
    operationLabel: "Кухня и техкарты",
    operationSubtitle: "Смена, рецептуры, списания и прибыль по меню",
    demoIntro:
      "Демо показывает, как ресторан видит food cost, дефицит и отклонения по техкартам в течение смены, а не после закрытия месяца.",
    implementationPromise: "Пилот на одной кухне с фокусом на food cost и списания",
    beforeAfter: {
      before: ["Кухня работает в отрыве от аналитики", "Списания объясняются устно", "Маржинальность блюд никто не обновляет"],
      after: ["Техкарты связаны с закупкой и расходом", "Отклонения ловятся в день смены", "Меню управляется по прибыли, а не по ощущениям"]
    },
    palette: {
      gradient: "from-orange-500 via-amber-400 to-yellow-300",
      glow: "shadow-[0_24px_90px_-40px_rgba(234,88,12,0.62)]",
      soft: "bg-orange-500/10",
      border: "border-orange-200/70",
      badge: "bg-orange-500/12 text-orange-700",
      chart: ["#ea580c", "#f59e0b", "#facc15"]
    },
    vocabulary: {
      crm: "Гости и брони",
      inventory: "Кладовая",
      operations: "Кухня и смены",
      sales: "Продажи по меню",
      documents: "Техкарты",
      operationUnit: "блюдо"
    },
    currency: "сом"
  },
  {
    slug: "logistics",
    uiTheme: "enterprise",
    design: {
      designSystemName: "Dispatch Console",
      pageBg: "bg-slate-50",
      pageAccentGlow: "#f97316",
      sidebarBg: "bg-orange-950 text-orange-50",
      sidebarActiveBg: "bg-orange-900",
      sidebarActiveBar: "from-orange-400 to-yellow-300",
      sidebarIconColor: "text-orange-300",
      headingClass: "font-semibold tracking-tight text-slate-900",
      badgeBg: "bg-orange-100",
      badgeText: "text-orange-800",
      cardRadius: "rounded-sm",
      cardBg: "bg-white",
      cardBorder: "border-slate-200",
      primary: "#f97316",
      primaryMuted: "#f9731614",
      kpiVariant: "threshold",
      surfaceStyle: "solid",
      density: "compact",
      navStyle: "signal",
      buttonStyle: "sharp",
      heroTone: "dispatch",
      motionStyle: "snappy",
    },
    name: "Логистика / доставка",
    shortName: "Логистика",
    tagline: "Заказы, маршруты, курьеры и SLA на одной панели",
    description:
      "Управление доставкой, курьерами, маршрутизацией и SLA по клиентам и регионам.",
    pains: ["Опоздания и хаос в рейсах", "Нет контроля SLA", "Менеджеры не видят статус доставки"],
    outcomes: ["Маршруты и загрузка в реальном времени", "SLA по клиентам", "Экономика рейса и курьера"],
    icon: "Truck",
    demoMetric: "94 заказа в доставке",
    modules: ["Маршруты", "Курьеры", "Рейсы", "SLA", "Контроль топлива", "Точки доставки"],
    operationLabel: "Заказы, курьеры и маршруты",
    operationSubtitle: "Рейсы, SLA, точки доставки и себестоимость маршрута",
    demoIntro:
      "Демо показывает, как диспетчер управляет доставкой в одном окне: статус заказа, маршрут, загрузка и риски просрочки.",
    implementationPromise: "Запуск на одном регионе и масштабирование по филиалам",
    beforeAfter: {
      before: ["Диспетчер собирает статусы по звонкам", "Рейсы формируются вручную", "SLA нарушается без ранних сигналов"],
      after: ["Заказы и курьеры видны в одном контуре", "Маршруты собираются по логике загрузки", "Риски просрочки подсвечиваются заранее"]
    },
    palette: {
      gradient: "from-cyan-500 via-sky-400 to-indigo-300",
      glow: "shadow-[0_24px_90px_-40px_rgba(6,182,212,0.78)]",
      soft: "bg-cyan-500/10",
      border: "border-cyan-200/70",
      badge: "bg-cyan-500/12 text-cyan-700",
      chart: ["#06b6d4", "#38bdf8", "#818cf8"]
    },
    vocabulary: {
      crm: "Клиенты / SLA",
      inventory: "Склад",
      operations: "Маршруты и рейсы",
      sales: "Заказы на доставку",
      documents: "Накладные и ТТН",
      operationUnit: "рейс"
    },
    currency: "сом"
  },
  {
    slug: "manufacturing",
    uiTheme: "enterprise",
    design: {
      designSystemName: "Industrial Performance Board",
      pageBg: "bg-gradient-to-br from-slate-100 via-indigo-50 to-slate-100",
      pageAccentGlow: "#334155",
      sidebarBg: "bg-indigo-950 text-indigo-100",
      sidebarActiveBg: "bg-indigo-900",
      sidebarActiveBar: "from-indigo-400 to-sky-300",
      sidebarIconColor: "text-indigo-300",
      headingClass: "font-bold tracking-tight text-indigo-950",
      badgeBg: "bg-indigo-100",
      badgeText: "text-indigo-800",
      cardRadius: "rounded-none",
      cardBg: "bg-white",
      cardBorder: "border-indigo-100",
      primary: "#4338ca",
      primaryMuted: "#4338ca14",
      kpiVariant: "progress",
      surfaceStyle: "solid",
      density: "compact",
      navStyle: "rail",
      buttonStyle: "sharp",
      heroTone: "industrial",
      motionStyle: "precise",
    },
    name: "Производственная компания",
    shortName: "Производство",
    tagline: "Смены, линии, брак, простои и экономика выпуска",
    description:
      "ERP для производств с линиями, сменами, браком, нормами и отклонениями по выпуску.",
    pains: ["Простои не оцифрованы", "Брак разбирают постфактум", "Себестоимость плавает"],
    outcomes: ["OEE и план-факт по линиям", "Причины брака и простоев", "Себестоимость по заказу и изделию"],
    icon: "Factory",
    demoMetric: "6 линий и 128 SKU",
    modules: ["Смены", "Линии", "Брак", "Простои", "Нормы", "Выпуск"],
    operationLabel: "Смены, линии и выпуск",
    operationSubtitle: "Производительность, брак и отклонения по оборудованию",
    demoIntro:
      "Демо показывает, как производственная компания видит брак, простои и план выпуска по каждой линии без ручных отчетов мастеров.",
    implementationPromise: "Пилот на одном участке и запуск управленческой аналитики по сменам",
    beforeAfter: {
      before: ["Начальник смены собирает факты вручную", "Причины брака теряются", "План по линии расходится с фактом"],
      after: ["Смена фиксируется как поток событий", "Брак и простой имеют причину и владельца", "План-факт виден по линии и заказу"]
    },
    palette: {
      gradient: "from-slate-700 via-slate-500 to-sky-400",
      glow: "shadow-[0_24px_90px_-40px_rgba(51,65,85,0.82)]",
      soft: "bg-slate-500/10",
      border: "border-slate-300/70",
      badge: "bg-slate-700/12 text-slate-700",
      chart: ["#334155", "#64748b", "#38bdf8"]
    },
    vocabulary: {
      crm: "Заказчики",
      inventory: "Сырьё и компоненты",
      operations: "Смены и линии",
      sales: "Отгрузки",
      documents: "Планы и акты",
      operationUnit: "линия"
    },
    currency: "сом"
  },
  {
    slug: "distribution",
    uiTheme: "neo-dark",
    design: {
      designSystemName: "Commercial Risk Terminal",
      pageBg: "bg-slate-950",
      pageAccentGlow: "#4f46e5",
      sidebarBg: "bg-slate-950 text-slate-100",
      sidebarActiveBg: "bg-indigo-950",
      sidebarActiveBar: "from-indigo-400 to-cyan-400",
      sidebarIconColor: "text-cyan-400",
      headingClass: "font-light tracking-[0.2em] uppercase text-indigo-200",
      badgeBg: "bg-indigo-900/60",
      badgeText: "text-indigo-200",
      cardRadius: "rounded-none",
      cardBg: "bg-slate-900/80 backdrop-blur",
      cardBorder: "border-indigo-900/60",
      primary: "#4f46e5",
      primaryMuted: "#4f46e514",
      kpiVariant: "system",
      surfaceStyle: "terminal",
      density: "compact",
      navStyle: "signal",
      buttonStyle: "sharp",
      heroTone: "commerce",
      motionStyle: "snappy",
    },
    name: "Дистрибуция / оптовая торговля",
    shortName: "Дистрибуция",
    tagline: "Маршруты, торговые точки, отгрузки и дебиторка под контролем",
    description:
      "Система для опта и дистрибуции: маршруты, торговые точки, заказы, отгрузки и дебиторская задолженность.",
    pains: ["Дебиторка растет", "Экспедиторы и торговые точки живут отдельно", "Нет прогноза по отгрузкам"],
    outcomes: ["Маршруты и отгрузки синхронизированы", "Контроль дебиторки", "Маржинальность по клиентским сегментам"],
    icon: "Boxes",
    demoMetric: "312 активных клиентов",
    modules: ["Торговые точки", "Маршруты", "Отгрузки", "Дебиторка", "Промо", "Мерчендайзинг"],
    operationLabel: "Маршруты, точки и отгрузки",
    operationSubtitle: "Экспедиторы, торговые точки и дебиторка по региону",
    demoIntro:
      "Демо показывает, как дистрибьютор видит маршрут, отгрузку и дебиторку по каждой торговой точке в одной системе.",
    implementationPromise: "Пилот на одном канале продаж и одном регионе",
    beforeAfter: {
      before: ["Дебиторка всплывает слишком поздно", "Маршруты и отгрузки не связаны", "Точки без приоритета обслуживаются одинаково"],
      after: ["Риски по оплатам видны до отгрузки", "Маршруты собираются под коммерческие приоритеты", "Точки сегментируются по потенциалу и рентабельности"]
    },
    palette: {
      gradient: "from-indigo-500 via-blue-400 to-cyan-300",
      glow: "shadow-[0_24px_90px_-40px_rgba(79,70,229,0.78)]",
      soft: "bg-indigo-500/10",
      border: "border-indigo-200/70",
      badge: "bg-indigo-500/12 text-indigo-700",
      chart: ["#4f46e5", "#3b82f6", "#06b6d4"]
    },
    vocabulary: {
      crm: "Торговые точки",
      inventory: "Склад",
      operations: "Маршруты и отгрузки",
      sales: "Заказы и дебиторка",
      documents: "Накладные и сверки",
      operationUnit: "клиент"
    },
    currency: "сом"
  }
];

export const businessMap = businesses.reduce<Record<BusinessSlug, BusinessProfile>>((acc, item) => {
  acc[item.slug] = item;
  return acc;
}, {} as Record<BusinessSlug, BusinessProfile>);
