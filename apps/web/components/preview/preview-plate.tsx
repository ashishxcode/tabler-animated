"use client";

import type { RefObject } from "react";
import { AnimatePresence, motion } from "motion/react";
import { ChevronLeft, ChevronRight } from "lucide-react";
import type { AnimatedIconHandle } from "@lib/animated-icon";
import { cn } from "cn";
import { Button } from "@/components/ui/button";
import { Tooltip, TooltipContent, TooltipTrigger } from "@/components/ui/tooltip";
import { entryOf, type Data } from "@/lib/icon-data";
import { IconView } from "../icon-kit";
import { EXPO, SPRING, slideVariants } from "./constants";
import type { IconSettings } from "./use-icon-settings";

const RADIUS = 28;
const KEYLINE_COLOR = "color-mix(in oklab, var(--brand) 35%, transparent)";

/** Corner marks like an artboard's crop marks: they frame the icon without decorating it. */
function CropMarks() {
  const mark = "pointer-events-none absolute size-3.5 border-foreground/25";
  return (
    <>
      <span aria-hidden className={cn(mark, "left-4 top-4 rounded-tl-sm border-l border-t")} />
      <span aria-hidden className={cn(mark, "right-4 top-4 rounded-tr-sm border-r border-t")} />
      <span aria-hidden className={cn(mark, "bottom-4 left-4 rounded-bl-sm border-b border-l")} />
      <span aria-hidden className={cn(mark, "bottom-4 right-4 rounded-br-sm border-b border-r")} />
    </>
  );
}

interface StepButtonProps {
  direction: -1 | 1;
  disabled: boolean;
  /** the plate grew out of a card, so the buttons wait for it */
  delayed: boolean;
  onStep: (direction: -1 | 1) => void;
}

function StepButton({ direction, disabled, delayed, onStep }: StepButtonProps) {
  const previous = direction < 0;
  return (
    <motion.div
      className={cn(
        "absolute top-1/2 z-10 -translate-y-1/2",
        previous ? "left-3 lg:-left-16" : "right-3 lg:-right-16",
      )}
      initial={{ opacity: 0, x: direction * -8 }}
      animate={{ opacity: 1, x: 0 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.25, delay: delayed ? 0.35 : 0.1 }}
    >
      <Tooltip>
        <TooltipTrigger
          render={
            <Button
              variant="ghost"
              size="icon-lg"
              className="size-11"
              onClick={() => onStep(direction)}
              disabled={disabled}
              aria-label={previous ? "Previous icon" : "Next icon"}
            />
          }
        >
          {previous ? <ChevronLeft className="size-5" /> : <ChevronRight className="size-5" />}
        </TooltipTrigger>
        <TooltipContent>{previous ? "Previous (left arrow)" : "Next (right arrow)"}</TooltipContent>
      </Tooltip>
    </motion.div>
  );
}

interface PreviewPlateProps {
  name: string;
  data: Data;
  settings: Pick<IconSettings, "size" | "stroke" | "keyline">;
  dir: number;
  /** shared-element id of the card this preview grew from; absent when stepping or entering fresh */
  layoutId: string | undefined;
  iconRef: RefObject<AnimatedIconHandle | null>;
  canStep: boolean;
  onStep: (direction: -1 | 1) => void;
}

export function PreviewPlate({
  name,
  data,
  settings,
  dir,
  layoutId,
  iconRef,
  canStep,
  onStep,
}: PreviewPlateProps) {
  const { size, stroke, keyline } = settings;
  const [rig, nodes] = entryOf(data, name);
  const fresh = !layoutId;

  return (
    <div className="relative h-[min(44vh,420px)] min-h-[240px] w-full max-w-3xl shrink-0">
      <motion.div
        layoutId={layoutId}
        layout={layoutId ? true : undefined}
        transition={SPRING}
        initial={fresh ? { opacity: 0, scale: 0.94, y: 16 } : undefined}
        animate={fresh ? { opacity: 1, scale: 1, y: 0 } : undefined}
        exit={{ opacity: 0, ...(fresh ? { scale: 0.96, y: 8 } : {}) }}
        style={{ borderRadius: RADIUS }}
        className="relative flex h-full w-full items-center justify-center overflow-hidden border bg-card shadow-sm"
      >
        <CropMarks />
        <AnimatePresence mode="popLayout" initial={false} custom={dir}>
          <motion.div
            key={name}
            custom={dir}
            variants={slideVariants}
            initial="enter"
            animate="center"
            exit="exit"
            transition={{
              duration: dir === 0 ? 0.22 : 0.45,
              delay: dir === 0 && layoutId ? 0.12 : 0,
              ease: EXPO,
            }}
            style={{ width: size, height: size, ["--cell" as string]: `${size / 24}px` }}
            className={cn(
              "flex shrink-0 items-center justify-center",
              keyline && "outline outline-1 outline-brand/60",
            )}
          >
            <div
              className="flex items-center justify-center text-brand"
              style={
                keyline
                  ? {
                      width: size,
                      height: size,
                      backgroundImage: `linear-gradient(to right, ${KEYLINE_COLOR} 1px, transparent 1px), linear-gradient(to bottom, ${KEYLINE_COLOR} 1px, transparent 1px)`,
                      backgroundSize: "var(--cell) var(--cell)",
                    }
                  : undefined
              }
            >
              <IconView
                key={name}
                // while sliding, the outgoing icon unmounts after the incoming one mounts; ignore its null so it cannot clear the live handle
                ref={(handle) => {
                  if (handle) iconRef.current = handle;
                }}
                name={name}
                nodes={nodes}
                rig={rig}
                size={size}
                strokeWidth={stroke}
              />
            </div>
          </motion.div>
        </AnimatePresence>
      </motion.div>

      <StepButton direction={-1} disabled={!canStep} delayed={!fresh} onStep={onStep} />
      <StepButton direction={1} disabled={!canStep} delayed={!fresh} onStep={onStep} />
    </div>
  );
}
