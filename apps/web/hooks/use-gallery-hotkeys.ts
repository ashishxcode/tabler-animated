import { useEffect } from "react";

interface Hotkeys {
  /** an icon preview is open */
  previewOpen: boolean;
  paletteOpen: boolean;
  togglePalette: () => void;
  openPalette: () => void;
  closePreview: () => void;
  step: (direction: 1 | -1) => void;
}

const isTyping = (el: Element | null) => el instanceof HTMLInputElement || el instanceof HTMLTextAreaElement;

/** Cmd/Ctrl K and "/" open search, Escape closes the preview, the arrow keys step through icons. */
export function useGalleryHotkeys({
  previewOpen,
  paletteOpen,
  togglePalette,
  openPalette,
  closePreview,
  step,
}: Hotkeys) {
  useEffect(() => {
    const onKey = (e: KeyboardEvent) => {
      const typing = isTyping(document.activeElement);
      // let an open select or menu consume Escape and the arrows first
      const popupOpen = !!document.querySelector('[role="listbox"], [role="menu"]');
      const free = !typing && !popupOpen && !paletteOpen;

      if ((e.metaKey || e.ctrlKey) && e.key.toLowerCase() === "k") {
        e.preventDefault();
        togglePalette();
      } else if (e.key === "/" && !typing && !paletteOpen) {
        e.preventDefault();
        openPalette();
      } else if (e.key === "Escape" && previewOpen && !popupOpen && !paletteOpen) {
        closePreview();
      } else if (previewOpen && free && (e.key === "ArrowRight" || e.key === "ArrowLeft")) {
        e.preventDefault();
        step(e.key === "ArrowRight" ? 1 : -1);
      }
    };
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, [previewOpen, paletteOpen, togglePalette, openPalette, closePreview, step]);
}
