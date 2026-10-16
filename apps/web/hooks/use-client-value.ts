import { useSyncExternalStore } from "react";

const subscribe = () => () => {};

/** A value only the browser knows. Returns `fallback` on the server and during hydration, then the real value. */
export function useClientValue<T>(read: () => T, fallback: T): T {
  return useSyncExternalStore(subscribe, read, () => fallback);
}

/** False on the server and during hydration, true afterwards. */
export const useMounted = () => useClientValue(() => true, false);
