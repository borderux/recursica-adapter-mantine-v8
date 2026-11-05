import { createContext } from "react";

// Mantine hands a group's disabled state to its switches through a private context; this mirrors it for the contract attribute.
export const SwitchGroupDisabledContext = createContext(false);
