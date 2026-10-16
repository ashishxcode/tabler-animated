import { toast } from "sonner";

const CLIPBOARD_TIMEOUT_MS = 1500;

/** Copies text and reports the outcome with a toast. Resolves to whether the copy succeeded. */
export async function copyText(text: string, what: string): Promise<boolean> {
  try {
    // a pending permission prompt can leave writeText unresolved, so cap the wait
    await Promise.race([
      navigator.clipboard.writeText(text),
      new Promise((_, reject) =>
        setTimeout(() => reject(new Error("clipboard timeout")), CLIPBOARD_TIMEOUT_MS),
      ),
    ]);
    toast.success(`${what} copied`);
    return true;
  } catch {
    toast.error("Copy failed. Select the text and copy it manually.");
    return false;
  }
}
