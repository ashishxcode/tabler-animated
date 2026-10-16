import posthog from "posthog-js";

/**
 * Every event the site sends, and the properties each one carries. Add an event here before using it.
 *
 * Naming: `<thing>_<past tense verb>`, snake_case, so events sort by subject and read as facts.
 * Properties: `icon` is the icon name, `category` its Tabler category, `source` or `via` where the action started.
 * The conversion to watch is `code_copied` with `kind: "install"`: someone took the install command.
 */
interface AnalyticsEvents {
  // discovery
  icon_opened: { icon: string; category?: string; source: "grid" | "hero" | "palette" | "similar" };
  icon_stepped: { icon: string; direction: "next" | "previous"; via: "button" | "keyboard" };
  search_opened: { via: "button" | "shortcut" | "slash" };
  search_result_picked: { query: string; icon: string };
  search_no_results: { query: string };
  search_category_picked: { category: string };
  search_results_expanded: { query: string };
  category_selected: { category: string; via: "pill" | "menu" | "preview" };
  filters_cleared: Record<string, never>;
  density_changed: { density: string };
  tag_clicked: { tag: string };
  similar_opened: { icon: string };
  similar_picked: { from: string; to: string };

  // adoption: what people take away
  code_tab_changed: { tab: string; icon: string };
  code_copied: { kind: "install" | "import" | "use" | "all" | "link"; icon: string; customized?: boolean };
  customize_toggled: { open: boolean };
  customize_changed: { setting: "size" | "stroke" | "keyline" | "reset"; value?: number | boolean };

  // community
  star_clicked: { where: "header" | "footer" };
  feedback_opened: Record<string, never>;
  feedback_submitted: { type: string; ok: boolean };

  // preferences
  theme_toggled: { theme: "light" | "dark"; where: "header" | "preview" };
}

export type AnalyticsEvent = keyof AnalyticsEvents;

const KEY = process.env.NEXT_PUBLIC_POSTHOG_KEY;
const HOST = process.env.NEXT_PUBLIC_POSTHOG_HOST ?? "https://us.i.posthog.com";
let started = false;

/** Starts PostHog once, in the browser. No-op without a key. Cookieless: state lives in memory only, so no consent banner is needed. */
export function initAnalytics() {
  if (started || typeof window === "undefined" || !KEY) return;
  started = true;
  posthog.init(KEY, {
    api_host: HOST,
    persistence: "memory",
    person_profiles: "identified_only",
    capture_pageview: true,
    capture_pageleave: true,
    autocapture: true,
    respect_dnt: true,
    disable_session_recording: true,
  });
  // attached to every event, so any chart can be split by these
  posthog.register({
    site: "tabler-animated",
    viewport: window.innerWidth < 640 ? "phone" : window.innerWidth < 1024 ? "tablet" : "desktop",
    touch: window.matchMedia("(pointer: coarse)").matches,
  });
}

/** Sends one typed event. In development without a key it is logged instead, so the events can be checked. */
export function track<E extends AnalyticsEvent>(
  event: E,
  ...[props]: AnalyticsEvents[E] extends Record<string, never> ? [] : [AnalyticsEvents[E]]
) {
  if (typeof window === "undefined") return;
  if (started) posthog.capture(event, props);
  else if (process.env.NODE_ENV === "development") console.warn("[analytics]", event, props ?? {});
}
