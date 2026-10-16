"use client";

import type { ReactNode } from "react";
import { cn } from "cn";
import { Button } from "@/components/ui/button";
import { Slider } from "@/components/ui/slider";
import { Toggle } from "@/components/ui/toggle";
import { UiIcon } from "../icon-kit";
import { SIZE_PRESETS } from "./constants";
import type { IconSettings } from "./use-icon-settings";

const toNumber = (value: number | readonly number[], fallback: number) =>
  typeof value === "number" ? value : (value[0] ?? fallback);

function Field({ label, value, children }: { label: string; value: string; children: ReactNode }) {
  return (
    <div className="space-y-3">
      <div className="flex items-baseline justify-between">
        <span className="text-sm font-medium">{label}</span>
        <span className="text-sm text-muted-foreground">{value}</span>
      </div>
      {children}
    </div>
  );
}

/** One-click sizes under the slider; the current one is highlighted. */
function SizePresets({ current, onPick }: { current: number; onPick: (size: number) => void }) {
  return (
    <div className="flex flex-wrap gap-1.5">
      {SIZE_PRESETS.map((size) => (
        <button
          key={size}
          aria-pressed={current === size}
          onClick={() => onPick(size)}
          className={cn(
            "h-7 min-w-9 rounded-md border px-2 text-xs outline-none transition-colors focus-visible:ring-2 focus-visible:ring-ring",
            current === size
              ? "border-brand bg-brand/10 text-brand"
              : "text-muted-foreground hover:bg-muted hover:text-foreground",
          )}
        >
          {size}
        </button>
      ))}
    </div>
  );
}

/**
 * Size and stroke sliders, size presets, keyline grid and reset. It stays mounted and opens by
 * transitioning its grid row from 0fr to 1fr, which needs no measured height. `inert` keeps it out of the
 * tab order while closed.
 */
export function CustomizePanel({ settings, open }: { settings: IconSettings; open: boolean }) {
  const { size, stroke, keyline, atDefaults, setSize, setStroke, setKeyline, reset } = settings;

  return (
    <section
      aria-label="Size and stroke"
      inert={!open || undefined}
      className={cn(
        "-mt-3 grid transition-[grid-template-rows,opacity] duration-300 ease-out motion-reduce:transition-none",
        open ? "grid-rows-[1fr] opacity-100" : "grid-rows-[0fr] opacity-0",
      )}
    >
      <div className="min-h-0 overflow-hidden">
        <div className="space-y-5 rounded-2xl border p-4">
          <div className="grid gap-6 sm:grid-cols-2">
            <Field label="Size" value={`${size}px`}>
              <Slider
                min={16}
                max={240}
                step={8}
                value={[size]}
                onValueChange={(v) => setSize(toNumber(v, size))}
                aria-label="Size"
              />
            </Field>
            <Field label="Stroke" value={String(stroke)}>
              <Slider
                min={1}
                max={3}
                step={0.25}
                value={[stroke]}
                onValueChange={(v) => setStroke(toNumber(v, stroke))}
                aria-label="Stroke width"
              />
            </Field>
          </div>
          <SizePresets current={size} onPick={setSize} />
          <div className="flex items-center justify-between">
            <Toggle variant="outline" size="sm" pressed={keyline} onPressedChange={setKeyline}>
              Keyline grid
            </Toggle>
            <Button variant="ghost" size="sm" className="gap-1.5" disabled={atDefaults} onClick={reset}>
              <UiIcon name="refresh" size={14} />
              Reset
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
}
