"use client";

import { useDeferredValue, useEffect, useMemo, useState } from "react";
import {
  Command,
  CommandDialog,
  CommandEmpty,
  CommandGroup,
  CommandInput,
  CommandItem,
  CommandList,
} from "@/components/ui/command";
import { track } from "@/lib/analytics";
import { entryOf, fmt, searchIcons, type Data } from "@/lib/icon-data";
import { IconView } from "./icon-kit";

const RESULT_LIMIT = 40;

interface SearchPaletteProps {
  open: boolean;
  onOpenChange: (open: boolean) => void;
  data: Data | null;
  /** every icon name, popular ones first */
  pool: string[];
  /** every category name */
  categories: string[];
  onPick: (name: string, query: string) => void;
  onCategory: (category: string) => void;
  onShowAll: (query: string) => void;
}

type PaletteBodyProps = Omit<SearchPaletteProps, "open" | "onOpenChange">;

function CategoryGroup({ categories, onPick }: { categories: string[]; onPick: (category: string) => void }) {
  if (categories.length === 0) return null;
  return (
    <CommandGroup heading="Categories">
      <div className="flex flex-wrap gap-1.5 px-1 pb-1">
        {categories.map((category) => (
          <CommandItem
            key={`cat-${category}`}
            value={`cat-${category}`}
            onSelect={() => onPick(category)}
            className="h-8 w-auto flex-none gap-0 border px-3 text-sm in-data-[slot=dialog-content]:rounded-md! [&>svg:last-child]:hidden"
          >
            {category}
          </CommandItem>
        ))}
      </div>
    </CommandGroup>
  );
}

function ResultGroup({
  data,
  names,
  heading,
  onPick,
}: {
  data: Data;
  names: string[];
  heading: string;
  onPick: (name: string) => void;
}) {
  if (names.length === 0) return null;
  return (
    <CommandGroup heading={heading}>
      {names.map((name) => {
        const [rig, nodes, category] = entryOf(data, name);
        return (
          <CommandItem key={name} value={name} onSelect={() => onPick(name)}>
            <span className="flex size-7 shrink-0 items-center justify-center">
              <IconView name={name} nodes={nodes} rig={rig} size={20} />
            </span>
            <span className="truncate">{name}</span>
            <span className="min-w-0 flex-1 truncate text-right text-xs text-muted-foreground">
              {category}
            </span>
          </CommandItem>
        );
      })}
    </CommandGroup>
  );
}

interface PaletteResultsProps extends Omit<PaletteBodyProps, "data"> {
  data: Data;
  q: string;
}

/** The category chips, icon results and "show all" row for one search term. */
function PaletteResults({ data, q, pool, categories, onPick, onCategory, onShowAll }: PaletteResultsProps) {
  const deferred = useDeferredValue(q);
  const term = deferred.trim().toLowerCase();

  const results = useMemo(() => searchIcons(data, pool, deferred), [data, pool, deferred]);
  // every category when the box is empty; while typing, only the ones whose name matches
  const matchingCategories = term ? categories.filter((c) => c.toLowerCase().includes(term)) : categories;
  const nothingFound = results.length === 0 && matchingCategories.length === 0;

  // searches that find nothing are the clearest signal of a missing icon or a missing tag
  const reportable = nothingFound && term.length >= 2;
  useEffect(() => {
    if (!reportable) return;
    const timer = setTimeout(() => track("search_no_results", { query: term }), 800);
    return () => clearTimeout(timer);
  }, [reportable, term]);

  const heading = term ? `${fmt(results.length)} ${results.length === 1 ? "icon" : "icons"}` : "Popular";

  return (
    <>
      {nothingFound && <CommandEmpty>No icon matches &ldquo;{q}&rdquo;.</CommandEmpty>}
      <CategoryGroup categories={matchingCategories} onPick={onCategory} />
      <ResultGroup
        data={data}
        names={results.slice(0, RESULT_LIMIT)}
        heading={heading}
        onPick={(name) => onPick(name, q)}
      />
      {term && results.length > RESULT_LIMIT && (
        <CommandGroup>
          <CommandItem value="__show_all" onSelect={() => onShowAll(q)}>
            Show all {fmt(results.length)} results in the grid
          </CommandItem>
        </CommandGroup>
      )}
    </>
  );
}

/** Mounted only while the palette is open, so the search box starts empty every time. */
function PaletteBody({ data, ...rest }: PaletteBodyProps) {
  const [q, setQ] = useState("");
  return (
    // filtering is ours: rendering all 5,000+ items through cmdk's own filter would be slow
    <Command shouldFilter={false} loop>
      <CommandInput value={q} onValueChange={setQ} placeholder="Search name or tag: arrow, delete, chart" />
      <CommandList className="max-h-[22rem]">
        {data ? (
          <PaletteResults data={data} q={q} {...rest} />
        ) : (
          <div className="py-6 text-center text-sm text-muted-foreground">Loading icons...</div>
        )}
      </CommandList>
    </Command>
  );
}

export function SearchPalette({ open, onOpenChange, ...body }: SearchPaletteProps) {
  return (
    <CommandDialog
      open={open}
      onOpenChange={onOpenChange}
      title="Search icons"
      description="Search Tabler icons by name or tag, then press Enter to open one."
      className="sm:max-w-xl"
    >
      {open && <PaletteBody {...body} />}
    </CommandDialog>
  );
}
