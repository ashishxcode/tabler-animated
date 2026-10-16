"use client";

import type { RefObject } from "react";
import { Button } from "@/components/ui/button";
import { Skeleton } from "@/components/ui/skeleton";
import type { Data } from "@/lib/icon-data";
import { DENSITY, GRID_ID, type Density } from "./constants";
import { IconCard } from "./icon-card";

interface IconGridProps {
  data: Data | null;
  error: boolean;
  /** names to render, already windowed */
  names: string[];
  /** index where the "All icons" heading goes, or null when the list is filtered */
  popularCount: number | null;
  density: Density;
  query: string;
  category: string;
  openedId: string | null;
  hasMore: boolean;
  sentinelRef: RefObject<HTMLDivElement | null>;
  onOpen: (name: string, id: string) => void;
  onRetry: () => void;
  onClearFilters: () => void;
}

export function IconGrid({
  data,
  error,
  names,
  popularCount,
  density,
  query,
  category,
  openedId,
  hasMore,
  sentinelRef,
  onOpen,
  onRetry,
  onClearFilters,
}: IconGridProps) {
  const { min, icon, height } = DENSITY[density];
  const columns = { gridTemplateColumns: `repeat(auto-fill, minmax(${min}px, 1fr))` };

  if (error) {
    return (
      <p className="mt-10 flex flex-wrap items-center gap-3 text-muted-foreground">
        Could not load the icon list.{" "}
        <Button variant="outline" onClick={onRetry}>
          Try again
        </Button>
      </p>
    );
  }

  if (!data) {
    return (
      <div className="mt-4 grid gap-2" style={columns} aria-busy="true" aria-label="Loading icons">
        {Array.from({ length: 24 }, (_, i) => (
          <Skeleton key={i} className="rounded-[14px]" style={{ height }} />
        ))}
      </div>
    );
  }

  if (names.length === 0) {
    return (
      <p className="mt-10 flex flex-wrap items-center gap-3 text-muted-foreground">
        No icon matches &ldquo;{query}&rdquo;{category !== "all" ? " in this category" : ""}.
        <Button variant="outline" onClick={onClearFilters}>
          Clear filters
        </Button>
      </p>
    );
  }

  return (
    <>
      <div className="mt-4 grid gap-2" style={columns}>
        {names.flatMap((name, i) => {
          const card = (
            <IconCard
              key={name}
              name={name}
              data={data}
              id={GRID_ID(name)}
              hidden={openedId === GRID_ID(name)}
              iconSize={icon}
              minHeight={height}
              onOpen={onOpen}
            />
          );
          if (popularCount !== null && i === 0) {
            return [
              <h2 key="h-popular" className="col-span-full pb-1 text-sm font-medium">
                Popular
              </h2>,
              card,
            ];
          }
          if (popularCount !== null && i === popularCount) {
            return [
              <h2 key="h-all" className="col-span-full mt-6 pb-1 text-sm font-medium">
                All icons
              </h2>,
              card,
            ];
          }
          return [card];
        })}
      </div>
      {hasMore && <div ref={sentinelRef} aria-hidden style={{ height: 1 }} />}
    </>
  );
}
