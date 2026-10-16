"use client";

import { useCallback, useState } from "react";
import { AnimatePresence } from "motion/react";
import { useClientValue } from "@/hooks/use-client-value";
import { useGalleryHotkeys } from "@/hooks/use-gallery-hotkeys";
import { useIconCatalog } from "@/hooks/use-icon-catalog";
import { useIconData } from "@/hooks/use-icon-data";
import { useUrlState } from "@/hooks/use-url-state";
import { track } from "@/lib/analytics";
import { useVisibleWindow } from "@/hooks/use-visible-window";
import { fmt } from "@/lib/icon-data";
import { IconPreview } from "../preview/icon-preview";
import { SearchPalette } from "../search-palette";
import type { Density } from "./constants";
import { Hero } from "./hero";
import { IconGrid } from "./icon-grid";
import { SiteHeader } from "./site-header";
import { StarButton } from "./star-button";
import { Toolbar } from "./toolbar";

const scrollToIcons = () => setTimeout(() => document.getElementById("icons")?.scrollIntoView(), 50);

export function Landing() {
  const { data, error, reload } = useIconData();
  const { query, category, selected, setQuery, setCategory, setSelected } = useUrlState();
  const [density, setDensity] = useState<Density>("m");
  /** the card the preview grew from, so closing can shrink back into it */
  const [opened, setOpened] = useState<{ name: string; id: string } | null>(null);
  /** direction of the last step: -1 previous, 1 next, 0 when the preview was opened fresh */
  const [dir, setDir] = useState(0);
  const [paletteOpen, setPaletteOpen] = useState(false);

  const origin = useClientValue(() => location.origin, "");
  const modifierKey = useClientValue(
    () => (/Mac|iPhone|iPad/.test(navigator.platform) ? "⌘" : "Ctrl"),
    "Ctrl",
  );

  const { categories, popular, pool, names } = useIconCatalog(data, query, category);
  const { limit, hasMore, sentinelRef, reveal } = useVisibleWindow(names.length, `${query}|${category}`);

  const open = useCallback(
    (name: string, id: string) => {
      track("icon_opened", {
        icon: name,
        category: data?.[name]?.[2],
        source: id.startsWith("stage-") ? "hero" : "grid",
      });
      setDir(0);
      setOpened({ name, id });
      setSelected(name);
    },
    [data, setSelected],
  );
  const closePreview = useCallback(() => setSelected(null), [setSelected]);

  const selectedIndex = selected ? names.indexOf(selected) : -1;
  const step = useCallback(
    (direction: 1 | -1, via: "button" | "keyboard" = "button") => {
      if (selectedIndex < 0 || !names.length) return;
      const nextIndex = (selectedIndex + direction + names.length) % names.length;
      const next = names[nextIndex];
      if (!next) return;
      track("icon_stepped", { icon: next, direction: direction > 0 ? "next" : "previous", via });
      setDir(direction);
      setSelected(next);
      reveal(nextIndex);
    },
    [selectedIndex, names, reveal, setSelected],
  );

  useGalleryHotkeys({
    previewOpen: selected !== null,
    paletteOpen,
    togglePalette: useCallback(() => {
      // analytics stays out of the state updater, which React may run twice in development
      if (!paletteOpen) track("search_opened", { via: "shortcut" });
      setPaletteOpen(!paletteOpen);
    }, [paletteOpen]),
    openPalette: useCallback(() => {
      track("search_opened", { via: "slash" });
      setPaletteOpen(true);
    }, []),
    closePreview,
    step: useCallback((direction: 1 | -1) => step(direction, "keyboard"), [step]),
  });

  const previewOpen = !!(selected && data?.[selected]);
  const openedId = selected && opened?.name === selected ? opened.id : null;
  const sectioned = !query && category === "all";
  const clearFilters = () => {
    track("filters_cleared");
    setQuery("");
    setCategory("all");
  };

  return (
    <>
      <a
        href="#icons"
        className="sr-only focus:not-sr-only focus:fixed focus:left-4 focus:top-3 focus:z-50 focus:rounded-md focus:bg-background focus:px-3 focus:py-2 focus:text-sm focus:shadow-md focus:ring-2 focus:ring-ring"
      >
        Skip to icons
      </a>

      <SiteHeader inert={previewOpen} />

      <main id="top" className="mx-auto max-w-6xl px-4 sm:px-6" inert={previewOpen || undefined}>
        <Hero data={data} previewOpen={previewOpen} openedId={openedId} onOpen={open} />

        <section id="icons" aria-label="Icons">
          <h2 className="sr-only">Find your icon</h2>
          <Toolbar
            modifierKey={modifierKey}
            query={query}
            category={category}
            categories={categories}
            density={density}
            resultCount={data ? names.length : null}
            onSearch={() => {
              track("search_opened", { via: "button" });
              setPaletteOpen(true);
            }}
            onQuery={setQuery}
            onCategory={(c, via) => {
              track("category_selected", { category: c, via });
              setCategory(c);
            }}
            onDensity={(d) => {
              track("density_changed", { density: d });
              setDensity(d);
            }}
            onClear={clearFilters}
          />
          <IconGrid
            data={data}
            error={error}
            names={names.slice(0, limit)}
            popularCount={sectioned ? popular.length : null}
            density={density}
            query={query}
            category={category}
            openedId={openedId}
            hasMore={hasMore}
            sentinelRef={sentinelRef}
            onOpen={open}
            onRetry={reload}
            onClearFilters={clearFilters}
          />
        </section>

        <footer className="mt-16 flex flex-wrap items-center justify-between gap-3 border-t py-6 text-[13px] text-muted-foreground">
          <span>Icons by Tabler, MIT licensed.</span>
          <StarButton where="footer" />
        </footer>
      </main>

      <SearchPalette
        open={paletteOpen}
        onOpenChange={setPaletteOpen}
        data={data}
        pool={pool}
        categories={categories.map(([c]) => c)}
        onCategory={(c) => {
          track("search_category_picked", { category: c });
          setPaletteOpen(false);
          setSelected(null);
          setQuery("");
          setCategory(c);
          scrollToIcons();
        }}
        onPick={(name, query) => {
          track("search_result_picked", { query, icon: name });
          track("icon_opened", { icon: name, category: data?.[name]?.[2], source: "palette" });
          setPaletteOpen(false);
          setOpened(null);
          setDir(0);
          setSelected(name);
        }}
        onShowAll={(q) => {
          track("search_results_expanded", { query: q.trim() });
          setPaletteOpen(false);
          setSelected(null);
          setCategory("all");
          setQuery(q.trim());
          scrollToIcons();
        }}
      />

      <AnimatePresence>
        {selected && data?.[selected] && (
          <IconPreview
            key="preview"
            name={selected}
            data={data}
            layoutId={openedId ?? undefined}
            dir={dir}
            position={selectedIndex >= 0 ? `${fmt(selectedIndex + 1)} of ${fmt(names.length)}` : ""}
            canStep={selectedIndex >= 0}
            installCommand={(name) => `npx shadcn@latest add ${origin || "<site>"}/r/${name}.json`}
            onClose={closePreview}
            onStep={step}
            onTag={(tag) => {
              track("tag_clicked", { tag });
              closePreview();
              setCategory("all");
              setQuery(tag);
            }}
            onCategory={(c) => {
              track("category_selected", { category: c, via: "preview" });
              closePreview();
              setQuery("");
              setCategory(c);
            }}
            onPick={(name) => {
              track("similar_picked", { from: selected, to: name });
              track("icon_opened", { icon: name, category: data[name]?.[2], source: "similar" });
              setDir(0);
              setSelected(name);
            }}
          />
        )}
      </AnimatePresence>
    </>
  );
}
