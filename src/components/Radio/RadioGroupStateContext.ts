import { createContext } from "react";

/**
 * Mirrors the selection Mantine keeps inside its group context, which it does not export, so
 * `Radio` can set `data-recursica-selection-states` for grouped items.
 */
export const RadioGroupStateContext = createContext<{
  value: string | null | undefined;
  disabled: boolean;
} | null>(null);
