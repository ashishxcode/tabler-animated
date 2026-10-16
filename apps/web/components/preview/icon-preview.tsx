"use client";

import { motion } from "motion/react";
import { useEffect, useRef, useState } from "react";
import { ChevronDown } from "lucide-react";
import type { AnimatedIconHandle } from "@lib/animated-icon";
import { cn } from "cn";
import { Button } from "@/components/ui/button";
import { entryOf, pascal, type Data } from "@/lib/icon-data";
import { track } from "@/lib/analytics";
import { CopyButton } from "../copy-button";
import { CodePanel, type CodeLine } from "./code-panel";
import { LIBRARY_SIZE, LIBRARY_STROKE, FADE_RISE, TAG_LIMIT } from "./constants";
import { CustomizePanel } from "./customize-panel";
import { PreviewHeader } from "./preview-header";
import { PreviewPlate } from "./preview-plate";
import { SimilarIcons } from "./similar-icons";
import { useIconLoop } from "./use-icon-loop";
import { useIconSettings } from "./use-icon-settings";
import { useModal } from "./use-modal";

interface IconPreviewProps {
  name: string;
  data: Data;
  /** direction of the last step: -1 previous, 1 next, 0 when the preview was opened fresh */
  dir: number;
  /** shared-element id of the card this preview grew from; absent when stepping or entering fresh */
  layoutId?: string;
  position: string;
  canStep: boolean;
  installCommand: (name: string) => string;
  onClose: () => void;
  onStep: (direction: 1 | -1) => void;
  onTag: (tag: string) => void;
  onCategory: (category: string) => void;
  onPick: (name: string) => void;
}

export function IconPreview({
  name,
  data,
  dir,
  layoutId,
  position,
  canStep,
  installCommand,
  onClose,
  onStep,
  onTag,
  onCategory,
  onPick,
}: IconPreviewProps) {
  const settings = useIconSettings();
  const [customizing, setCustomizing] = useState(false);
  const { rootRef, initialFocusRef, trapFocus } = useModal();
  const iconRef = useRef<AnimatedIconHandle>(null);
  const scrollRef = useRef<HTMLDivElement>(null);
  const similarRef = useRef<HTMLElement>(null);
  useIconLoop(iconRef, name, dir, !!layoutId);

  const [, , category, tagStr] = entryOf(data, name);
  const tags = tagStr.split(" ").filter(Boolean).slice(0, TAG_LIMIT);

  // a newly picked icon starts at the top of the sheet
  useEffect(() => {
    scrollRef.current?.scrollTo({ top: 0, behavior: "smooth" });
  }, [name]);

  const component = `${pascal(name)}Icon`;
  const props = [
    settings.tuned.size && settings.size !== LIBRARY_SIZE && `size={${settings.size}}`,
    settings.tuned.stroke && settings.stroke !== LIBRARY_STROKE && `strokeWidth={${settings.stroke}}`,
  ]
    .filter(Boolean)
    .join(" ");
  const install = installCommand(name);
  const importLine = `import { ${component} } from "@/components/ui/animated-icons/${name}";`;
  const usageLine = `<${component}${props ? ` ${props}` : ""} />`;
  const lines: [CodeLine, ...CodeLine[]] = [
    { label: "Install", code: install, what: "Install command" },
    { label: "Import", code: importLine, what: "Import line" },
    { label: "Use", code: usageLine, what: "JSX" },
  ];

  return (
    <motion.div
      ref={rootRef}
      className="fixed inset-0 z-40 flex flex-col"
      role="dialog"
      aria-modal="true"
      aria-label={`${name} preview`}
      onKeyDown={trapFocus}
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.35, ease: "easeOut" }}
    >
      <div className="absolute inset-0 bg-background/90 backdrop-blur-3xl" onClick={onClose} aria-hidden />

      <PreviewHeader
        name={name}
        category={category}
        position={position}
        closeRef={initialFocusRef}
        onClose={onClose}
        onCategory={onCategory}
      />

      <div
        ref={scrollRef}
        className="relative flex min-h-0 flex-1 flex-col items-center overflow-y-auto px-4 sm:px-6"
      >
        <div className="flex min-h-full w-full shrink-0 flex-col items-center">
          <div className="my-auto flex w-full flex-col items-center gap-5 pt-2">
            <PreviewPlate
              name={name}
              data={data}
              settings={settings}
              dir={dir}
              layoutId={layoutId}
              iconRef={iconRef}
              canStep={canStep}
              onStep={onStep}
            />

            <motion.div
              className="flex w-full max-w-3xl flex-col gap-5"
              initial={{ y: 20, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              exit={{ y: 12, opacity: 0, transition: { duration: 0.18 } }}
              transition={{ type: "spring", stiffness: 220, damping: 28, delay: 0.2 }}
            >
              <motion.div key={name} className="flex flex-wrap justify-center gap-1.5" {...FADE_RISE}>
                {tags.map((tag) => (
                  <button
                    key={tag}
                    className="h-7 rounded-md bg-foreground/5 px-3 text-xs text-muted-foreground outline-none transition-colors hover:bg-foreground/10 hover:text-foreground focus-visible:ring-2 focus-visible:ring-ring"
                    onClick={() => onTag(tag)}
                  >
                    {tag}
                  </button>
                ))}
              </motion.div>

              <CodePanel
                iconName={name}
                lines={lines}
                customized={settings.tuned.size || settings.tuned.stroke}
              />

              <div className="flex items-center justify-between">
                <Button
                  variant="ghost"
                  size="lg"
                  aria-expanded={customizing}
                  onClick={() => {
                    track("customize_toggled", { open: !customizing });
                    setCustomizing((v) => !v);
                  }}
                >
                  Customize
                  <ChevronDown className={cn("transition-transform", customizing && "rotate-180")} />
                </Button>
                <div className="flex items-center">
                  <CopyButton
                    text={() => location.href}
                    what="Link"
                    label="Copy link"
                    icon="share"
                    variant="ghost"
                    size="lg"
                    onCopied={() => track("code_copied", { kind: "link", icon: name })}
                  >
                    Share
                  </CopyButton>
                  <CopyButton
                    text={`${install}\n\n${importLine}\n\n${usageLine}`}
                    what="Everything"
                    label="Copy everything"
                    variant="ghost"
                    size="lg"
                    onCopied={() => track("code_copied", { kind: "all", icon: name })}
                  >
                    Copy all
                  </CopyButton>
                </div>
              </div>

              <CustomizePanel settings={settings} open={customizing} />
            </motion.div>
          </div>

          <button
            onClick={() => {
              track("similar_opened", { icon: name });
              similarRef.current?.scrollIntoView({ behavior: "smooth", block: "start" });
            }}
            className="mb-5 mt-4 flex h-9 shrink-0 items-center gap-1.5 rounded-full px-4 text-sm text-muted-foreground outline-none transition-colors hover:bg-foreground/5 hover:text-foreground focus-visible:ring-2 focus-visible:ring-ring"
          >
            Similar icons
            <ChevronDown className="size-4" />
          </button>
        </div>

        <SimilarIcons ref={similarRef} name={name} data={data} scrollRef={scrollRef} onPick={onPick} />
      </div>
    </motion.div>
  );
}
