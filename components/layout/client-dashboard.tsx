"use client";

import type { BusinessProfile, BusinessSlug, DemoBusinessData } from "@/lib/types";
import { GlassDashboard } from "./glass-dashboard";
import { EnterpriseDashboard } from "./enterprise-dashboard";
import { NeoDarkDashboard } from "./neo-dark-dashboard";

interface ClientDashboardProps {
  slug: BusinessSlug;
  business: BusinessProfile;
  initialDemo: DemoBusinessData;
}

export function ClientDashboard(props: ClientDashboardProps) {
  const { uiTheme } = props.business;

  if (uiTheme === "enterprise") {
    return <EnterpriseDashboard {...props} />;
  }

  if (uiTheme === "neo-dark") {
    return <NeoDarkDashboard {...props} />;
  }

  // Default is Glass SaaS
  return <GlassDashboard {...props} />;
}
