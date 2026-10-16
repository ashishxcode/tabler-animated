"use client";

import { forwardRef, useEffect, useMemo, useRef, useState, type RefObject } from "react";
import { useHoverPlay } from "@/hooks/use-hover-play";
import { entryOf, similarTo, type Data } from "@/lib/icon-data";
import { IconView } from "../icon-kit";

function SimilarCard({ name, data, onPick }: { name: string; data: Data; onPick: (name: string) => void }) {
  const [rig, nodes] = entryOf(data, name);
  const { ref, handlers } = useHoverPlay();
  return (
    <button
      onClick={() => onPick(name)}
      className="group flex flex-col items-center gap-2.5 rounded-xl border bg-card/50 px-2 py-4 outline-none transition-colors hover:bg-card focus-visible:ring-2 focus-visible:ring-ring"
      {...handlers}
    >
      <span className="text-foreground transition-colors group-hover:text-brand group-focus-visible:text-brand">
        <IconView ref={ref} name={name} nodes={nodes} rig={rig} size={28} />
      </span>
      <span className="w-full truncate text-xs text-muted-foreground">{name}</span>
    </button>
  );
}

interface SimilarIconsProps {
  name: string;
  data: Data;
  /** the scrolling container, so the grid loads when it scrolls into view inside it */
  scrollRef: RefObject<HTMLDivElement | null>;
  onPick: (name: string) => void;
}

/** A grid of icons like the open one. It computes and renders only after it first scrolls into view. */
export const SimilarIcons = forwardRef<HTMLElement, SimilarIconsProps>(function SimilarIcons(
  { name, data, scrollRef, onPick },
  ref,
) {
  const [visible, setVisible] = useState(false);
  const gridRef = useRef<HTMLDivElement>(null);
  const similar = useMemo(() => (visible ? similarTo(data, name) : []), [visible, data, name]);

  useEffect(() => {
    const el = gridRef.current;
    if (!el) return;
    const observer = new IntersectionObserver(([entry]) => entry?.isIntersecting && setVisible(true), {
      root: scrollRef.current,
    });
    observer.observe(el);
    return () => observer.disconnect();
  }, [scrollRef]);

  return (
    <section ref={ref} aria-label="Similar icons" className="w-full max-w-3xl shrink-0 pb-16 pt-6">
      <h3 className="mb-5 text-center text-sm font-medium">Similar to {name}</h3>
      <div ref={gridRef} className="grid grid-cols-3 gap-3 sm:grid-cols-4 md:grid-cols-6">
        {similar.map((n) => (
          <SimilarCard key={n} name={n} data={data} onPick={onPick} />
        ))}
        {!visible &&
          Array.from({ length: 6 }, (_, i) => (
            <div key={i} className="h-[88px] rounded-xl border bg-card/30" />
          ))}
      </div>
      {visible && similar.length === 0 && (
        <p className="text-center text-sm text-muted-foreground">No close matches.</p>
      )}
    </section>
  );
});
