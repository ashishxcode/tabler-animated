"use client";

import { MotionConfig } from "motion/react";
import { ThemeProvider } from "next-themes";
import { TooltipProvider } from "@/components/ui/tooltip";
import { Toaster } from "@/components/ui/sonner";
import { AnalyticsProvider } from "@/components/analytics-provider";

export function Providers({ children }: { children: React.ReactNode }) {
  return (
    // reducedMotion="user" makes the preview springs and layout motion honor the OS setting too
    <MotionConfig reducedMotion="user">
      <ThemeProvider attribute="class" defaultTheme="system" enableSystem disableTransitionOnChange>
        <TooltipProvider>{children}</TooltipProvider>
        <Toaster />
        <AnalyticsProvider />
      </ThemeProvider>
    </MotionConfig>
  );
}
