"use client";

import { motion } from "motion/react";
import { useState } from "react";
import { cn } from "cn";
import { track } from "@/lib/analytics";
import { CopyButton } from "../copy-button";

export interface CodeLine {
  label: string;
  code: string;
  /** what the copy toast calls it */
  what: string;
}

/** Install, Import and Use snippets behind tabs, with one copy button for whichever is showing. */
export function CodePanel({
  iconName,
  lines,
  customized,
}: {
  iconName: string;
  lines: readonly [CodeLine, ...CodeLine[]];
  /** the visitor changed size or stroke before copying */
  customized: boolean;
}) {
  const [tab, setTab] = useState(0);
  const line = lines[tab] ?? lines[0];

  return (
    <section aria-label="Code" className="rounded-2xl border bg-card/60 p-1.5">
      <div className="flex items-center gap-1 pb-1.5" role="tablist" aria-label="Snippet">
        {lines.map((l, i) => (
          <button
            key={l.label}
            role="tab"
            aria-selected={tab === i}
            onClick={() => {
              setTab(i);
              track("code_tab_changed", { tab: l.label.toLowerCase(), icon: iconName });
            }}
            className={cn(
              "h-8 rounded-lg px-3 text-sm outline-none transition-colors focus-visible:ring-2 focus-visible:ring-ring",
              tab === i
                ? "bg-foreground/8 font-medium text-foreground"
                : "text-muted-foreground hover:text-foreground",
            )}
          >
            {l.label}
          </button>
        ))}
      </div>
      <div className="flex items-center gap-2 rounded-xl bg-background/60 py-1.5 pl-4 pr-1.5">
        <motion.code
          key={`${iconName}-${tab}`}
          className="min-w-0 flex-1 py-1 font-mono text-[13px] leading-relaxed [overflow-wrap:anywhere]"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.3 }}
        >
          {line.code}
        </motion.code>
        <CopyButton
          key={line.label}
          text={line.code}
          what={line.what}
          label={`Copy ${line.label.toLowerCase()}`}
          variant="default"
          size="icon-lg"
          className="bg-brand text-brand-foreground hover:bg-brand/90"
          onCopied={() =>
            track("code_copied", {
              kind: line.label.toLowerCase() as "install" | "import" | "use",
              icon: iconName,
              customized,
            })
          }
        />
      </div>
    </section>
  );
}
