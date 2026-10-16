import { useCallback, useMemo, useSyncExternalStore } from "react";

/** The shareable part of the gallery state, kept in the query string: `?q=arrow&cat=Arrows&icon=bell`. */
interface UrlState {
  query: string;
  category: string;
  selected: string | null;
}

const DEFAULT_CATEGORY = "all";
const listeners = new Set<() => void>();

function subscribe(listener: () => void) {
  listeners.add(listener);
  window.addEventListener("popstate", listener);
  return () => {
    listeners.delete(listener);
    window.removeEventListener("popstate", listener);
  };
}

const readSearch = () => location.search;
// the server never sees the URL, so it renders the defaults and the client picks the real values up after hydration
const readServerSearch = () => "";

function update(patch: Partial<Record<"q" | "cat" | "icon", string | null>>) {
  const params = new URLSearchParams(location.search);
  for (const [key, value] of Object.entries(patch)) {
    if (value && !(key === "cat" && value === DEFAULT_CATEGORY)) params.set(key, value);
    else params.delete(key);
  }
  const search = params.toString();
  history.replaceState(null, "", search ? `?${search}` : location.pathname);
  listeners.forEach((listener) => listener());
}

/** The URL is the source of truth for query, category and the open icon, so a shared link restores all three. */
export function useUrlState() {
  const search = useSyncExternalStore(subscribe, readSearch, readServerSearch);

  const state: UrlState = useMemo(() => {
    const params = new URLSearchParams(search);
    return {
      query: params.get("q") ?? "",
      category: params.get("cat") ?? DEFAULT_CATEGORY,
      selected: params.get("icon"),
    };
  }, [search]);

  const setQuery = useCallback((q: string) => update({ q }), []);
  const setCategory = useCallback((cat: string) => update({ cat }), []);
  const setSelected = useCallback((icon: string | null) => update({ icon }), []);

  return { ...state, setQuery, setCategory, setSelected };
}
