"use client";

import { useEffect, useRef, useState } from "react";
import { AnimatePresence, motion } from "motion/react";
import { Button } from "@/components/ui/button";
import { cn } from "cn";
import { copyText } from "@/lib/clipboard";
import { UiIcon } from "./icon-kit";

type CopyButtonProps = Omit<React.ComponentProps<typeof Button>, "onClick" | "children"> & {
  /** what to copy; a function is read at click time */
  text: string | (() => string);
  /** what the toast calls it, e.g. "Install command" */
  what: string;
  /** accessible name for icon-only buttons */
  label: string;
  /** icon shown before copying, from this library's own set */
  icon?: string;
  iconSize?: number;
  /** optional visible text; swaps to `copiedLabel` after a copy */
  children?: React.ReactNode;
  copiedLabel?: string;
  /** runs after a successful copy, e.g. to record an analytics event */
  onCopied?: () => void;
};

/**
 * A button that copies text and confirms it: the icon turns into a check that draws itself,
 * the label (if any) swaps to "Copied", then both settle back. Failed copies change nothing.
 */
export function CopyButton({
  text,
  what,
  label,
  icon = "copy",
  iconSize = 16,
  children,
  copiedLabel = "Copied",
  onCopied,
  className,
  ...props
}: CopyButtonProps) {
  const [copied, setCopied] = useState(false);
  const timer = useRef<ReturnType<typeof setTimeout> | undefined>(undefined);
  useEffect(() => () => clearTimeout(timer.current), []);

  const onClick = async () => {
    const ok = await copyText(typeof text === "function" ? text() : text, what);
    if (!ok) return;
    onCopied?.();
    setCopied(true);
    clearTimeout(timer.current);
    timer.current = setTimeout(() => setCopied(false), 1800);
  };

  return (
    <>
      <Button
        {...props}
        className={cn(
          "gap-2 transition-colors",
          className,
          // success is green: the filled button turns green so a white check stays readable, quiet ones tint icon and label
          copied &&
            (props.variant === "default"
              ? "bg-emerald-600 text-white hover:bg-emerald-600 dark:bg-emerald-500 dark:text-emerald-950 dark:hover:bg-emerald-500"
              : "text-emerald-600 dark:text-emerald-400"),
        )}
        aria-label={children ? undefined : label}
        onClick={onClick}
      >
        <span
          className="relative flex shrink-0 items-center justify-center"
          style={{ width: iconSize, height: iconSize }}
        >
          <AnimatePresence mode="popLayout" initial={false}>
            <motion.span
              key={copied ? "done" : "idle"}
              className="flex"
              initial={{ opacity: 0, scale: 0.4, rotate: -40 }}
              animate={{ opacity: 1, scale: 1, rotate: 0 }}
              exit={{ opacity: 0, scale: 0.4, rotate: 40 }}
              transition={{ type: "spring", stiffness: 420, damping: 26 }}
            >
              <UiIcon name={copied ? "check" : icon} size={iconSize} play={copied} />
            </motion.span>
          </AnimatePresence>
        </span>
        {children && (
          // both labels share one grid cell, so the button never changes width when the text swaps
          <span className="grid">
            <motion.span
              className="col-start-1 row-start-1"
              animate={{ opacity: copied ? 0 : 1, y: copied ? -6 : 0 }}
              transition={{ duration: 0.2 }}
            >
              {children}
            </motion.span>
            <motion.span
              className="col-start-1 row-start-1"
              aria-hidden
              animate={{ opacity: copied ? 1 : 0, y: copied ? 0 : 6 }}
              transition={{ duration: 0.2 }}
            >
              {copiedLabel}
            </motion.span>
          </span>
        )}
      </Button>
      <span className="sr-only" aria-live="polite">
        {copied ? `${what} copied` : ""}
      </span>
    </>
  );
}
