"use client";

import { motion } from "motion/react";
import type { Ref } from "react";
import { useTheme } from "next-themes";
import { Button } from "@/components/ui/button";
import { Tooltip, TooltipContent, TooltipTrigger } from "@/components/ui/tooltip";
import { useMounted } from "@/hooks/use-client-value";
import { track } from "@/lib/analytics";
import { UiIcon } from "../icon-kit";
import { FADE_RISE } from "./constants";

interface PreviewHeaderProps {
  name: string;
  category: string;
  position: string;
  closeRef: Ref<HTMLButtonElement>;
  onClose: () => void;
  onCategory: (category: string) => void;
}

export function PreviewHeader({
  name,
  category,
  position,
  closeRef,
  onClose,
  onCategory,
}: PreviewHeaderProps) {
  const { resolvedTheme, setTheme } = useTheme();
  const dark = useMounted() && resolvedTheme === "dark";

  return (
    <motion.header
      className="relative flex h-14 shrink-0 items-center gap-3 px-4 sm:px-6"
      initial={{ y: -12, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      exit={{ y: -8, opacity: 0, transition: { duration: 0.18 } }}
      transition={{ type: "spring", stiffness: 220, damping: 28, delay: 0.12 }}
    >
      <motion.div key={name} className="min-w-0 flex-1" {...FADE_RISE}>
        <h2 className="truncate text-sm font-semibold">{name}</h2>
        <p className="truncate text-xs text-muted-foreground">
          <button className="hover:text-foreground hover:underline" onClick={() => onCategory(category)}>
            {category}
          </button>
          {position && <> &middot; {position}</>}
        </p>
      </motion.div>

      <Tooltip>
        <TooltipTrigger
          render={
            <Button
              variant="ghost"
              size="icon-lg"
              onClick={() => {
                const next = dark ? "light" : "dark";
                track("theme_toggled", { theme: next, where: "preview" });
                setTheme(next);
              }}
              aria-label="Toggle theme"
            />
          }
        >
          <UiIcon name={dark ? "sun" : "moon"} />
        </TooltipTrigger>
        <TooltipContent>Toggle theme</TooltipContent>
      </Tooltip>
      <Tooltip>
        <TooltipTrigger
          render={
            <Button
              ref={closeRef}
              variant="ghost"
              size="icon-lg"
              onClick={onClose}
              aria-label="Close preview"
            />
          }
        >
          <UiIcon name="x" />
        </TooltipTrigger>
        <TooltipContent>Close (Esc)</TooltipContent>
      </Tooltip>
    </motion.header>
  );
}
