"use client";

import { motion } from "motion/react";
import { useEffect } from "react";
import { cn } from "cn";
import { useHoverPlay } from "@/hooks/use-hover-play";
import { entryOf, type Data } from "@/lib/icon-data";
import { IconView } from "../icon-kit";
import { SPOTLIGHT_MS } from "./constants";

const RADIUS = 6;
const HANDLES = [
  "-left-[3px] -top-[3px]",
  "-right-[3px] -top-[3px]",
  "-bottom-[3px] -left-[3px]",
  "-bottom-[3px] -right-[3px]",
] as const;

interface CanvasFrameProps {
  name: string;
  data: Data;
  /** shared-element id of the frame background */
  id: string;
  hidden: boolean;
  /** this frame holds the spotlight: blue, and playing its motion */
  active: boolean;
  className?: string;
  onPick: (name: string) => void;
  onOpen: (name: string, id: string) => void;
}

/** One frame on the hero canvas, like a selected layer: name above, corner handles, blue when it has the spotlight. */
export function CanvasFrame({ name, data, id, hidden, active, className, onPick, onOpen }: CanvasFrameProps) {
  const [rig, nodes] = entryOf(data, name);
  const { ref, handlers } = useHoverPlay(() => onPick(name));

  // the spotlight plays the icon, then lets it rest before the next one
  useEffect(() => {
    if (!active) return;
    const icon = ref.current;
    const start = setTimeout(() => icon?.startAnimation(), 120);
    const stop = setTimeout(() => icon?.stopAnimation(), SPOTLIGHT_MS - 300);
    return () => {
      clearTimeout(start);
      clearTimeout(stop);
      icon?.stopAnimation();
    };
  }, [active, ref]);

  return (
    <div className={cn("relative", className)}>
      <span
        className={cn(
          "pointer-events-none absolute -top-5 left-0 text-[11px] leading-none transition-colors",
          active ? "text-brand" : "text-muted-foreground",
          hidden && "opacity-0",
        )}
      >
        {name}
      </span>
      <button
        className="group relative flex size-[72px] items-center justify-center outline-none focus-visible:ring-3 focus-visible:ring-ring/50 sm:size-24"
        style={{ borderRadius: RADIUS }}
        aria-label={`Preview ${name}`}
        onClick={() => onOpen(name, id)}
        {...handlers}
      >
        {!hidden && (
          <motion.span
            layoutId={id}
            style={{ borderRadius: RADIUS }}
            className={cn(
              "absolute inset-0 border bg-card/40 transition-colors group-hover:bg-muted/50",
              active ? "border-brand" : "border-foreground/15",
            )}
          />
        )}
        {!hidden &&
          HANDLES.map((position) => (
            <span
              key={position}
              aria-hidden
              className={cn(
                "pointer-events-none absolute size-[7px] border bg-background transition-colors",
                position,
                active ? "border-brand" : "border-foreground/25",
              )}
            />
          ))}
        <span
          className={cn(
            "relative flex transition-colors",
            active ? "text-brand" : "text-foreground",
            hidden && "opacity-0",
          )}
        >
          <IconView ref={ref} name={name} nodes={nodes} rig={rig} size={44} />
        </span>
      </button>
    </div>
  );
}
