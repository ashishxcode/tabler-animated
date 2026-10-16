"use client";

import { cn } from "cn";
import { buttonVariants } from "@/components/ui/button";
import { track } from "@/lib/analytics";
import { site } from "@/lib/site";
import { GithubMark } from "../brand/github-mark";

/** A call to star the repository on GitHub. Opens the repo in a new tab. */
export function StarButton({ where }: { where: "header" | "footer" }) {
  const header = where === "header";
  return (
    <a
      href={site.repo}
      target="_blank"
      rel="noopener noreferrer"
      aria-label="Star on GitHub"
      onClick={() => track("star_clicked", { where })}
      className={cn(buttonVariants({ variant: header ? "ghost" : "outline", size: "lg" }), "gap-2 px-3")}
    >
      <GithubMark className="size-4" />
      <span className={cn(header && "hidden sm:inline")}>{header ? "Star" : "Star on GitHub"}</span>
    </a>
  );
}
