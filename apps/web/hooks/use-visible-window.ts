import { useCallback, useEffect, useRef, useState } from "react";

const PAGE_SIZE = 120;

/**
 * Infinite scroll: a window over a long list that grows as a sentinel nears the viewport.
 * The window shrinks back to one page whenever `resetKey` changes.
 */
export function useVisibleWindow(total: number, resetKey: string) {
  const [state, setState] = useState({ key: resetKey, limit: PAGE_SIZE });
  const limit = state.key === resetKey ? state.limit : PAGE_SIZE;
  const hasMore = limit < total;
  const sentinelRef = useRef<HTMLDivElement>(null);

  const grow = useCallback(
    () => setState((s) => ({ key: resetKey, limit: (s.key === resetKey ? s.limit : PAGE_SIZE) + PAGE_SIZE })),
    [resetKey],
  );

  /** Makes sure the item at `index` is rendered, with half a page of slack after it. */
  const reveal = useCallback(
    (index: number) =>
      setState((s) => ({
        key: resetKey,
        limit: Math.max(s.key === resetKey ? s.limit : PAGE_SIZE, index + PAGE_SIZE / 2),
      })),
    [resetKey],
  );

  useEffect(() => {
    const el = sentinelRef.current;
    if (!el || !hasMore) return;
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry?.isIntersecting) grow();
      },
      { rootMargin: "800px 0px" },
    );
    observer.observe(el);
    return () => observer.disconnect();
  }, [hasMore, limit, grow]);

  return { limit, hasMore, sentinelRef, reveal };
}
