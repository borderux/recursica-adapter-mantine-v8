import React from "react";
import styles from "./Dropdown.module.css";

/**
 * Wraps an option's content in the menu-item contract root. Mantine can only set static
 * attributes on option elements, so the per-option selection state lives on this inner element.
 */
export function menuItemOption(
  content: React.ReactNode,
  checked: boolean | undefined,
  disabled?: boolean,
): React.ReactNode {
  return (
    <span
      className={styles.optionItem}
      data-recursica="menu-item"
      data-recursica-selection-states={checked ? "selected" : "unselected"}
      data-recursica-disabled={disabled ? "" : undefined}
    >
      {content}
    </span>
  );
}
