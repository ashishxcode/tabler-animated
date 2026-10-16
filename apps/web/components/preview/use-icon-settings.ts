import { useCallback, useRef, useState } from "react";
import { track } from "@/lib/analytics";
import { DEFAULT_SIZE, DEFAULT_STROKE } from "./constants";

const TRACK_DEBOUNCE_MS = 600;

/**
 * Size, stroke and keyline for the preview. The plate shows the icon large, so size and stroke only
 * enter the usage snippet once the visitor has changed them (`tuned`).
 */
export function useIconSettings() {
  const [size, setSizeValue] = useState(DEFAULT_SIZE);
  const [stroke, setStrokeValue] = useState(DEFAULT_STROKE);
  const [keyline, setKeylineValue] = useState(false);
  const [tuned, setTuned] = useState({ size: false, stroke: false });

  // a slider drag fires many values; report where it came to rest
  const pending = useRef<ReturnType<typeof setTimeout> | undefined>(undefined);
  const trackSetting = useCallback((setting: "size" | "stroke", value: number) => {
    clearTimeout(pending.current);
    pending.current = setTimeout(() => track("customize_changed", { setting, value }), TRACK_DEBOUNCE_MS);
  }, []);

  const setSize = useCallback(
    (value: number) => {
      trackSetting("size", value);
      setSizeValue(value);
      setTuned((t) => ({ ...t, size: true }));
    },
    [trackSetting],
  );
  const setStroke = useCallback(
    (value: number) => {
      trackSetting("stroke", value);
      setStrokeValue(value);
      setTuned((t) => ({ ...t, stroke: true }));
    },
    [trackSetting],
  );
  const reset = useCallback(() => {
    track("customize_changed", { setting: "reset" });
    setSizeValue(DEFAULT_SIZE);
    setStrokeValue(DEFAULT_STROKE);
    setKeylineValue(false);
    setTuned({ size: false, stroke: false });
  }, []);

  const setKeyline = useCallback((value: boolean) => {
    track("customize_changed", { setting: "keyline", value });
    setKeylineValue(value);
  }, []);

  const atDefaults = size === DEFAULT_SIZE && stroke === DEFAULT_STROKE && !keyline;
  return { size, stroke, keyline, tuned, atDefaults, setSize, setStroke, setKeyline, reset };
}

export type IconSettings = ReturnType<typeof useIconSettings>;
