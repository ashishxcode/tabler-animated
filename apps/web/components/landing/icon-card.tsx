"use client";

import { motion } from "motion/react";
import { cn } from "cn";
import { useHoverPlay } from "@/hooks/use-hover-play";
import { entryOf, type Data } from "@/lib/icon-data";
import { IconView } from "../icon-kit";

interface IconCardProps {
  name: string;
  data: Data;
  /** shared-element id: the card background grows into the preview and returns on close */
  id: string;
  hidden: boolean;
  iconSize: number;
  minHeight: number;
  onOpen: (name: string, id: string) => void;
}

const RADIUS = 14;

export function IconCard({ name, data, id, hidden, iconSize, minHeight, onOpen }: IconCardProps) {
  const [rig, nodes, category] = entryOf(data, name);
  const { ref, handlers } = useHoverPlay();

  return (
    <button
      className="cv-auto group relative flex flex-col items-center justify-center gap-3 p-2 pt-4 outline-none focus-visible:ring-3 focus-visible:ring-ring/50"
      style={{ minHeight, borderRadius: RADIUS }}
      aria-label={`${name}, ${category}`}
      title={`${name} · ${category}`}
      onClick={() => onOpen(name, id)}
      {...handlers}
    >
      {!hidden && (
        <motion.span
          layoutId={id}
          style={{ borderRadius: RADIUS }}
          className="absolute inset-0 border bg-card transition-colors group-hover:bg-muted/60"
        />
      )}
      <span className={cn("relative flex w-full flex-col items-center gap-3", hidden && "opacity-0")}>
        <span className="flex transition-colors group-hover:text-brand group-focus-visible:text-brand">
          <IconView ref={ref} name={name} nodes={nodes} rig={rig} size={iconSize} />
        </span>
        <span className="w-full truncate text-center text-xs text-muted-foreground">{name}</span>
      </span>
    </button>
  );
}
