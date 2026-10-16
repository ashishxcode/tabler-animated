"use client";

import { useTheme } from "next-themes";
import { Button } from "@/components/ui/button";
import { Tooltip, TooltipContent, TooltipTrigger } from "@/components/ui/tooltip";
import { useMounted } from "@/hooks/use-client-value";
import { track } from "@/lib/analytics";
import { LogoMark } from "../brand/logo-mark";
import { FeedbackDialog } from "../feedback/feedback-dialog";
import { UiIcon } from "../icon-kit";
import { StarButton } from "./star-button";

export function SiteHeader({ inert }: { inert: boolean }) {
  const { resolvedTheme, setTheme } = useTheme();
  const dark = useMounted() && resolvedTheme === "dark";

  return (
    <header className="sticky top-0 z-30 border-b bg-background" inert={inert || undefined}>
      <div className="mx-auto flex h-14 max-w-6xl items-center justify-between px-4 sm:px-6">
        <a href="#top" className="flex items-center gap-2.5 font-semibold tracking-tight">
          <LogoMark />
          Tabler Animated
        </a>
        <nav className="flex items-center gap-1" aria-label="Primary">
          <StarButton where="header" />
          <FeedbackDialog />
          <Tooltip>
            <TooltipTrigger
              render={
                <Button
                  variant="ghost"
                  size="icon-lg"
                  onClick={() => {
                    const next = dark ? "light" : "dark";
                    track("theme_toggled", { theme: next, where: "header" });
                    setTheme(next);
                  }}
                  aria-label={dark ? "Switch to light theme" : "Switch to dark theme"}
                />
              }
            >
              <UiIcon name={dark ? "sun" : "moon"} size={18} />
            </TooltipTrigger>
            <TooltipContent>{dark ? "Light theme" : "Dark theme"}</TooltipContent>
          </Tooltip>
        </nav>
      </div>
    </header>
  );
}
