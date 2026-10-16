import { useCallback, useEffect, useState } from "react";
import type { Data } from "@/lib/icon-data";

const DATA_URL = "/icons-data.json";

export interface IconDataState {
  data: Data | null;
  error: boolean;
  reload: () => void;
}

/** Fetches the icon dataset once, and again whenever `reload` is called after a failure. */
export function useIconData(): IconDataState {
  const [data, setData] = useState<Data | null>(null);
  const [error, setError] = useState(false);
  const [attempt, setAttempt] = useState(0);

  useEffect(() => {
    const controller = new AbortController();
    fetch(DATA_URL, { signal: controller.signal })
      .then((res) => (res.ok ? (res.json() as Promise<Data>) : Promise.reject(new Error(res.statusText))))
      .then(setData)
      .catch((err: unknown) => {
        if (!controller.signal.aborted) setError(true);
        else if (err instanceof Error && err.name !== "AbortError") console.error(err);
      });
    return () => controller.abort();
  }, [attempt]);

  const reload = useCallback(() => {
    setError(false);
    setAttempt((n) => n + 1);
  }, []);

  return { data, error, reload };
}
