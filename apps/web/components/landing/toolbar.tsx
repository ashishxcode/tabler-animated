"use client";

import { ChevronDown, Grid2x2, Grid3x3, Square } from "lucide-react";
import { cn } from "cn";
import { Button } from "@/components/ui/button";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { ToggleGroup, ToggleGroupItem } from "@/components/ui/toggle-group";
import { fmt } from "@/lib/icon-data";
import { UiIcon } from "../icon-kit";
import { TOP_CATEGORIES, type Density } from "./constants";

interface ToolbarProps {
  /** "⌘" or "Ctrl", for the search shortcut hint */
  modifierKey: string;
  query: string;
  category: string;
  categories: [category: string, count: number][];
  density: Density;
  /** how many icons match the current filters, or null while loading */
  resultCount: number | null;
  onSearch: () => void;
  onQuery: (q: string) => void;
  onCategory: (c: string, via: "pill" | "menu") => void;
  onDensity: (d: Density) => void;
  onClear: () => void;
}

const DENSITY_OPTIONS = [
  { value: "s", label: "Compact", Icon: Grid3x3 },
  { value: "m", label: "Comfortable", Icon: Grid2x2 },
  { value: "l", label: "Large", Icon: Square },
] as const;

export function Toolbar({
  modifierKey,
  query,
  category,
  categories,
  density,
  resultCount,
  onSearch,
  onQuery,
  onCategory,
  onDensity,
  onClear,
}: ToolbarProps) {
  const filtered = !!query || category !== "all";

  const pills: [id: string, label: string][] = [
    ["all", "All"],
    ...categories.slice(0, TOP_CATEGORIES).map(([c]): [string, string] => [c, c]),
  ];
  // an active category from the overflow menu stays visible as a pill
  if (category !== "all" && !pills.some(([id]) => id === category)) pills.push([category, category]);

  return (
    <div className="sticky top-14 z-20 border-b bg-background pb-3 pt-3">
      <div className="flex items-center gap-2">
        <button
          onClick={onSearch}
          aria-label="Search icons"
          className="flex h-10 min-w-0 flex-1 items-center gap-2.5 rounded-lg border bg-background px-3 text-left text-sm text-muted-foreground outline-none transition-colors hover:bg-muted/40 focus-visible:ring-3 focus-visible:ring-ring/50 sm:max-w-sm"
        >
          <UiIcon name="search" size={16} />
          <span className="flex-1 truncate">Search icons</span>
          <kbd className="hidden rounded border bg-muted px-1.5 font-mono text-xs sm:inline">
            {modifierKey} K
          </kbd>
        </button>

        <div className="ml-auto flex items-center gap-3">
          <span className="hidden text-[13px] text-muted-foreground sm:block" aria-live="polite">
            {resultCount !== null && filtered
              ? `${fmt(resultCount)} ${resultCount === 1 ? "icon" : "icons"}`
              : ""}
          </span>
          {filtered && (
            <Button variant="ghost" size="lg" className="hidden sm:inline-flex" onClick={onClear}>
              Clear
            </Button>
          )}
          <ToggleGroup
            variant="outline"
            value={[density]}
            onValueChange={(v) => {
              const next = DENSITY_OPTIONS.find((o) => o.value === v[0]);
              if (next) onDensity(next.value);
            }}
            aria-label="Grid density"
            className="shrink-0"
          >
            {DENSITY_OPTIONS.map(({ value, label, Icon }) => (
              <ToggleGroupItem
                key={value}
                value={value}
                aria-label={`${label} grid`}
                title={label}
                className="size-10"
              >
                <Icon />
              </ToggleGroupItem>
            ))}
          </ToggleGroup>
        </div>
      </div>

      <div role="group" aria-label="Categories" className="mt-3 flex items-center gap-2">
        <div className="no-scrollbar flex min-w-0 flex-1 items-center gap-1.5 overflow-x-auto max-sm:[mask-image:linear-gradient(to_right,#000_calc(100%-2rem),transparent)] sm:h-10 sm:flex-wrap sm:content-start sm:overflow-hidden">
          {query && (
            <Button
              variant="secondary"
              size="lg"
              className="shrink-0"
              onClick={() => onQuery("")}
              aria-label={`Clear search ${query}`}
            >
              &ldquo;{query}&rdquo;
              <UiIcon name="x" size={14} />
            </Button>
          )}
          {pills.map(([id, label]) => (
            <Button
              key={id}
              variant={category === id ? "default" : "outline"}
              size="lg"
              className={cn(
                "shrink-0",
                category === id && "border-brand bg-brand text-brand-foreground hover:bg-brand/90",
              )}
              aria-pressed={category === id}
              onClick={() => onCategory(id, "pill")}
            >
              {label}
            </Button>
          ))}
        </div>
        {categories.length > TOP_CATEGORIES && (
          <DropdownMenu>
            <DropdownMenuTrigger render={<Button variant="ghost" size="lg" className="shrink-0" />}>
              All categories
              <ChevronDown />
            </DropdownMenuTrigger>
            <DropdownMenuContent align="end" sideOffset={8} className="w-[min(30rem,calc(100vw-2rem))] p-2">
              <div className="grid grid-cols-2 gap-1 sm:grid-cols-3">
                {[["all", "All"] as const, ...categories.map(([c]) => [c, c] as const)].map(([id, label]) => (
                  <DropdownMenuItem
                    key={id}
                    onClick={() => onCategory(id, "menu")}
                    className={cn("h-9 justify-between", category === id && "bg-muted font-medium")}
                  >
                    {label}
                    {category === id && <UiIcon name="check" size={14} />}
                  </DropdownMenuItem>
                ))}
              </div>
            </DropdownMenuContent>
          </DropdownMenu>
        )}
      </div>
    </div>
  );
}
