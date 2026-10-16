import { useMemo } from "react";
import { POPULAR } from "@/components/overrides-map";
import { categoriesOf, searchIcons, type Data } from "@/lib/icon-data";

/** Everything the gallery derives from the dataset and the current filters. */
export function useIconCatalog(data: Data | null, query: string, category: string) {
  const categories = useMemo(() => (data ? categoriesOf(data) : []), [data]);

  // everyday icons first, then the rest
  const popular = useMemo(() => (data ? POPULAR.filter((name) => data[name]) : []), [data]);
  const pool = useMemo(() => {
    if (!data) return [];
    const inPopular = new Set(popular);
    return [...popular, ...Object.keys(data).filter((name) => !inPopular.has(name))];
  }, [data, popular]);

  const names = useMemo(() => {
    if (!data) return [];
    const inCategory = pool.filter((name) => category === "all" || data[name]?.[2] === category);
    return searchIcons(data, inCategory, query);
  }, [data, pool, query, category]);

  return { categories, popular, pool, names };
}
