"use client";

import { useState, type FormEvent } from "react";
import { cn } from "cn";
import { Button } from "@/components/ui/button";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { track } from "@/lib/analytics";
import { UiIcon } from "../icon-kit";

const FORMSPREE_ID = process.env.NEXT_PUBLIC_FORMSPREE_ID;
const TYPES = ["Idea", "Bug", "Icon motion", "Other"] as const;
type FeedbackType = (typeof TYPES)[number];
type Status = "idle" | "sending" | "sent" | "error";

/** Sends feedback to Formspree as JSON. A hidden `_gotcha` field catches simple bots. */
async function send(fields: Record<string, string>) {
  if (!FORMSPREE_ID) throw new Error("Feedback is not configured");
  const res = await fetch(`https://formspree.io/f/${FORMSPREE_ID}`, {
    method: "POST",
    headers: { "Content-Type": "application/json", Accept: "application/json" },
    body: JSON.stringify(fields),
  });
  if (!res.ok) throw new Error(`Feedback failed: ${res.status}`);
}

export function FeedbackDialog() {
  const [open, setOpen] = useState(false);
  const [type, setType] = useState<FeedbackType>("Idea");
  const [message, setMessage] = useState("");
  const [email, setEmail] = useState("");
  const [status, setStatus] = useState<Status>("idle");

  const reset = () => {
    setType("Idea");
    setMessage("");
    setEmail("");
    setStatus("idle");
  };

  const onOpenChange = (next: boolean) => {
    setOpen(next);
    if (next) track("feedback_opened");
    else if (status === "sent") reset();
  };

  const onSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const honeypot = new FormData(e.currentTarget).get("_gotcha");
    if (honeypot || message.trim().length < 3) return;
    setStatus("sending");
    try {
      await send({
        type,
        message: message.trim(),
        // an empty email field makes Formspree treat the message as less trustworthy, so only send it when given
        ...(email.trim() && { email: email.trim() }),
        page: location.href,
        _subject: `Tabler Animated feedback: ${type}`,
      });
      setStatus("sent");
      track("feedback_submitted", { type, ok: true });
    } catch (err) {
      console.error(err);
      setStatus("error");
      track("feedback_submitted", { type, ok: false });
    }
  };

  return (
    <Dialog open={open} onOpenChange={onOpenChange}>
      <DialogTrigger render={<Button variant="ghost" size="lg" className="gap-2 px-3" />}>
        <UiIcon name="message" size={16} />
        <span className="hidden sm:inline">Feedback</span>
      </DialogTrigger>
      <DialogContent className="sm:max-w-md">
        {status === "sent" ? (
          <div className="flex flex-col items-center gap-3 py-6 text-center">
            <span className="flex size-10 items-center justify-center rounded-full bg-emerald-500/10 text-emerald-600 dark:text-emerald-400">
              <UiIcon name="check" size={20} play />
            </span>
            <DialogTitle>Thanks for the feedback</DialogTitle>
            <DialogDescription>It goes straight to the maintainer.</DialogDescription>
            <Button variant="outline" size="lg" onClick={() => onOpenChange(false)}>
              Close
            </Button>
          </div>
        ) : (
          <form onSubmit={onSubmit} className="space-y-4">
            <DialogHeader>
              <DialogTitle>Send feedback</DialogTitle>
              <DialogDescription>An idea, a bug, or an icon that should move differently.</DialogDescription>
            </DialogHeader>

            <div role="radiogroup" aria-label="Feedback type" className="flex flex-wrap gap-1.5">
              {TYPES.map((t) => (
                <button
                  key={t}
                  type="button"
                  role="radio"
                  aria-checked={type === t}
                  onClick={() => setType(t)}
                  className={cn(
                    "h-8 rounded-md border px-3 text-sm outline-none transition-colors focus-visible:ring-2 focus-visible:ring-ring",
                    type === t
                      ? "border-brand bg-brand/10 text-brand"
                      : "text-muted-foreground hover:bg-muted hover:text-foreground",
                  )}
                >
                  {t}
                </button>
              ))}
            </div>

            <label className="block space-y-1.5 text-sm font-medium">
              Message
              <Textarea
                value={message}
                onChange={(e) => setMessage(e.target.value)}
                placeholder="What would make this better?"
                required
                minLength={3}
                maxLength={2000}
                className="min-h-28 font-normal"
              />
            </label>

            <label className="block space-y-1.5 text-sm font-medium">
              Email <span className="font-normal text-muted-foreground">(optional, if you want a reply)</span>
              <Input
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="you@example.com"
                className="font-normal"
              />
            </label>

            <input
              type="text"
              name="_gotcha"
              tabIndex={-1}
              autoComplete="off"
              aria-hidden
              className="hidden"
            />

            {status === "error" && (
              <p role="alert" className="text-sm text-destructive">
                {FORMSPREE_ID ? "Could not send. Try again in a moment." : "Feedback is not set up yet."}
              </p>
            )}

            <DialogFooter>
              <Button
                type="submit"
                size="lg"
                disabled={status === "sending" || message.trim().length < 3}
                className="bg-brand text-brand-foreground hover:bg-brand/90"
              >
                {status === "sending" ? "Sending..." : "Send feedback"}
              </Button>
            </DialogFooter>
          </form>
        )}
      </DialogContent>
    </Dialog>
  );
}
