"use client";

import { cn } from "cn";
import { Skeleton } from "@/components/ui/skeleton";
import { useHeroSpotlight } from "@/hooks/use-hero-spotlight";
import type { Data } from "@/lib/icon-data";
import { CanvasFrame } from "./canvas-frame";
import { SPOTLIGHT_MS, STAGE, STAGE_ID, STAGGER } from "./constants";

interface HeroProps {
  data: Data | null;
  /** the preview is open, so the spotlight pauses */
  previewOpen: boolean;
  /** id of the shared element currently grown into the preview, if any */
  openedId: string | null;
  onOpen: (name: string, id: string) => void;
}

export function Hero({ data, previewOpen, openedId, onOpen }: HeroProps) {
  const { spot, pick, heroRef, interactionProps } = useHeroSpotlight(
    STAGE,
    SPOTLIGHT_MS,
    !!data && !previewOpen,
  );

  return (
    <section
      ref={heroRef}
      className="flex min-h-[calc(100svh-3.5rem-5rem)] flex-col justify-center py-14 text-center sm:py-20"
    >
      <div
        className="mx-auto flex max-w-4xl flex-wrap items-start justify-center gap-x-3 gap-y-9 pt-5 sm:gap-x-8"
        role="group"
        aria-label="Try an icon"
        {...interactionProps}
      >
        {STAGE.map((name, i) =>
          data ? (
            <CanvasFrame
              key={name}
              name={name}
              data={data}
              id={STAGE_ID(name)}
              hidden={openedId === STAGE_ID(name)}
              active={spot === name}
              className={STAGGER[i]}
              onPick={pick}
              onOpen={onOpen}
            />
          ) : (
            <Skeleton key={name} className={cn("size-[72px] rounded-md sm:size-24", STAGGER[i])} />
          ),
        )}
      </div>

      <h1 className="mx-auto mt-14 text-balance text-5xl font-semibold leading-[1.02] tracking-[-0.035em] sm:text-6xl lg:text-7xl">
        Tabler Animated
      </h1>
      <p className="mx-auto mt-4 max-w-[46ch] text-pretty text-lg leading-relaxed text-muted-foreground">
        Every Tabler icon, animated to match what it shows. Hover to watch it move, open one to copy the
        install command.
      </p>
      <p className="mx-auto mt-6 max-w-[64ch] text-balance text-[13px] leading-relaxed text-muted-foreground">
        Icons by Tabler, MIT licensed. Each install adds a single component that depends only on motion.
      </p>
    </section>
  );
}
