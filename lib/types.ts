export type BusinessSlug =
  | "construction"
  | "grocery"
  | "sewing"
  | "boutique"
  | "agro"
  | "bakery"
  | "restaurant"
  | "logistics"
  | "manufacturing"
  | "distribution";

export type IconKey =
  | "Building2"
  | "Store"
  | "Shirt"
  | "Sparkles"
  | "Tractor"
  | "Croissant"
  | "UtensilsCrossed"
  | "Truck"
  | "Factory"
  | "Boxes";

export type TrendTone = "up" | "down" | "neutral";
export type PriorityTone = "low" | "medium" | "high";
export type InsightTone = "positive" | "warning" | "critical";
export type DesignSurfaceStyle = "solid" | "glass" | "editorial" | "terminal" | "warm" | "field";
export type DesignDensity = "compact" | "balanced" | "airy";
export type DesignNavStyle = "pill" | "rail" | "minimal" | "signal";
export type DesignButtonStyle = "soft" | "rounded" | "sharp" | "editorial";
export type DesignHeroTone = "command" | "fresh" | "atelier" | "luxury" | "field" | "warm" | "service" | "dispatch" | "industrial" | "commerce";
export type DesignMotionStyle = "calm" | "smooth" | "snappy" | "precise" | "editorial";

export interface BusinessVocabulary {
  crm: string;          // "Клиенты" | "Арендаторы" | "Гости" | "Партнёры"
  inventory: string;    // "Склад" | "Кладовая" | "Склад сырья"
  operations: string;   // "Производство" | "Кухня" | "Цех" | "Смены"
  sales: string;        // "Заказы" | "Бронирования" | "Рейсы"
  documents: string;    // "Документы" | "Акты" | "Техкарты"
  operationUnit: string; // "объект" | "блюдо" | "партия" | "рейс"
}

export interface ThemePalette {
  gradient: string;
  glow: string;
  soft: string;
  border: string;
  badge: string;
  chart: [string, string, string];
}

/** Per-business visual DNA — applied via CSS variables on the page wrapper */
export interface BusinessDesignConfig {
  designSystemName: string;
  // Page-level background
  pageBg: string;           // Tailwind bg classes or gradient string
  pageAccentGlow: string;   // Radial glow color (hex)
  // Sidebar
  sidebarBg: string;        // bg + text Tailwind classes
  sidebarActiveBg: string;  // active nav item bg
  sidebarActiveBar: string; // left accent bar gradient
  sidebarIconColor: string; // Tailwind text class for icons
  // Section headings
  headingClass: string;     // font weight/style Tailwind classes
  badgeBg: string;          // section label badge bg class
  badgeText: string;        // section label badge text class
  // Cards
  cardRadius: string;       // e.g. 'rounded-[24px]' or 'rounded-sm'
  cardBg: string;           // e.g. 'bg-white/80' or 'bg-white'
  cardBorder: string;       // e.g. 'border-white/70' or 'border-slate-200'
  // Primary action color
  primary: string;          // hex for CSS variable --color-primary
  primaryMuted: string;     // hex for --color-primary-muted (10% opacity)
  // KPI card visual variant
  kpiVariant: "classic" | "spark" | "progress" | "luxury" | "threshold" | "system";
  surfaceStyle: DesignSurfaceStyle;
  density: DesignDensity;
  navStyle: DesignNavStyle;
  buttonStyle: DesignButtonStyle;
  heroTone: DesignHeroTone;
  motionStyle: DesignMotionStyle;
}

export interface BusinessProfile {
  slug: BusinessSlug;
  name: string;
  shortName: string;
  tagline: string;
  description: string;
  pains: string[];
  outcomes: string[];
  icon: IconKey;
  demoMetric: string;
  modules: string[];
  operationLabel: string;
  operationSubtitle: string;
  demoIntro: string;
  implementationPromise: string;
  uiTheme: "glass" | "enterprise" | "neo-dark";
  design: BusinessDesignConfig;
  beforeAfter: {
    before: string[];
    after: string[];
  };
  palette: ThemePalette;
  vocabulary: BusinessVocabulary;
  currency: string;
}

export interface KpiMetric {
  label: string;
  value: string;
  delta: string;
  trend: TrendTone;
  hint: string;
  /** 0-100 progress value for progress variant */
  progress?: number;
  /** Status label for threshold/ops variants */
  statusLabel?: string;
}

export interface RevenuePoint {
  name: string;
  revenue: number;
  expenses: number;
  profit: number;
}

export interface PlanFactPoint {
  name: string;
  plan: number;
  fact: number;
}

export interface OperationLogItem {
  id: string;
  title: string;
  meta: string;
  owner: string;
  amount: string;
  status: string;
  date: string;
}

export interface RiskItem {
  title: string;
  description: string;
  impact: string;
  severity: PriorityTone;
}

export interface AIInsight {
  title: string;
  description: string;
  recommendation: string;
  tone: InsightTone;
}

export interface LeadRow {
  company: string;
  contact: string;
  deal: string;
  manager: string;
  status: string;
  nextStep: string;
  lastContact: string;
}

export interface ClientInteraction {
  date: string;
  type: string;
  title: string;
  author: string;
}

export interface ClientTask {
  title: string;
  due: string;
  owner: string;
  status: string;
}

export interface FeaturedClient {
  company: string;
  segment: string;
  ltv: string;
  lastInvoice: string;
  manager: string;
  tags: string[];
  history: ClientInteraction[];
  tasks: ClientTask[];
}

export interface SalesOrder {
  number: string;
  customer: string;
  amount: string;
  payment: string;
  debt: string;
  status: string;
  due: string;
  channel: string;
}

export interface InventoryItem {
  name: string;
  sku: string;
  stock: string;
  reserve: string;
  turnover: string;
  alert: string;
}

export interface OperationItem {
  item: string;
  stage: string;
  status: string;
  owner: string;
  due: string;
  progress: number;
  value: string;
}

export interface FinanceRow {
  category: string;
  fact: string;
  plan: string;
  delta: string;
  margin: string;
}

export interface ForecastPoint {
  name: string;
  current: number;
  previous: number;
  forecast: number;
}

export interface TopEntity {
  label: string;
  value: string;
  share: number;
  growth: string;
}

export interface DocumentItem {
  name: string;
  type: string;
  date: string;
  status: string;
  owner: string;
}

export interface NotificationItem {
  title: string;
  text: string;
  time: string;
  tone: InsightTone;
}

export interface AssistantMessage {
  title: string;
  summary: string;
  metric: string;
  recommendation: string;
}

export interface DemoBusinessData {
  kpis: KpiMetric[];
  revenueTrend: RevenuePoint[];
  planFact: PlanFactPoint[];
  operations: OperationLogItem[];
  risks: RiskItem[];
  aiInsights: AIInsight[];
  crm: {
    leads: LeadRow[];
    featuredClient: FeaturedClient;
  };
  sales: {
    orders: SalesOrder[];
    summary: Array<{
      label: string;
      value: string;
      tone: TrendTone;
    }>;
  };
  inventory: {
    items: InventoryItem[];
    alerts: string[];
  };
  operationsCenter: {
    items: OperationItem[];
    pipeline: Array<{
      label: string;
      value: number;
    }>;
  };
  finance: {
    rows: FinanceRow[];
    cashflow: Array<{
      name: string;
      income: number;
      expense: number;
      net: number;
    }>;
  };
  bi: {
    trend: ForecastPoint[];
    topEntities: TopEntity[];
    deviations: string[];
    forecast: string;
  };
  documents: DocumentItem[];
  notifications: NotificationItem[];
  assistant: {
    headline: string;
    bullets: string[];
    messages: AssistantMessage[];
  };
}

export interface SidebarItem {
  id: string;
  label: string;
  shortLabel: string;
}
