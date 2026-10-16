"use client";

import { useEffect } from "react";
import { initAnalytics } from "@/lib/analytics";

/** Starts analytics once on the client. Renders nothing. */
export function AnalyticsProvider() {
  useEffect(initAnalytics, []);
  return null;
}
