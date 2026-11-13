import { useEffect, useRef } from "react";

// Open Panels and Modals in the order they opened; only the last one handles Escape.
const openOverlays: object[] = [];

/**
 * Closes an open Panel or Modal on Escape only while it is the topmost one, replacing Mantine's
 * own handler (which every open Modal/Drawer runs on `window`, so one Escape closed them all).
 * A topmost overlay with `closeOnEscape` false still swallows Escape for the ones beneath it.
 */
export function useTopmostEscape(
  opened: boolean,
  onClose: () => void,
  closeOnEscape: boolean,
) {
  const latest = useRef({ onClose, closeOnEscape });
  latest.current = { onClose, closeOnEscape };

  useEffect(() => {
    if (!opened) return;
    const token = {};
    openOverlays.push(token);

    const onKeyDown = (event: KeyboardEvent) => {
      if (event.key !== "Escape" || event.isComposing || event.defaultPrevented)
        return;
      if (openOverlays[openOverlays.length - 1] !== token) return;
      // Mantine marks a target whose Escape belongs to it (an open Combobox, a Menu item).
      const target = event.target as Element | null;
      if (target?.getAttribute?.("data-mantine-stop-propagation") === "true")
        return;
      if (latest.current.closeOnEscape) latest.current.onClose();
    };

    window.addEventListener("keydown", onKeyDown, { capture: true });
    return () => {
      window.removeEventListener("keydown", onKeyDown, { capture: true });
      openOverlays.splice(openOverlays.indexOf(token), 1);
    };
  }, [opened]);
}
