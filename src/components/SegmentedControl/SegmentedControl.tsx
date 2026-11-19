import { forwardRef, useState, type FocusEvent, type MouseEvent } from "react";
import {
  SegmentedControl as MantineSegmentedControl,
  VisuallyHidden,
  type SegmentedControlProps as MantineSegmentedControlProps,
} from "@mantine/core";
import { Tooltip } from "../Tooltip/Tooltip";
import {
  filterStylingProps,
  mergeClassNames,
  type RecursicaOverStyled,
} from "../../utils/filterStylingProps";
import styles from "./SegmentedControl.module.css";

import { type RecursicaSegmentedControlProps } from "@recursica/adapter-common";

export type SegmentedControlProps = RecursicaOverStyled<
  Omit<
    MantineSegmentedControlProps,
    | "variant"
    | "size"
    | "radius"
    | "color"
    | "classNames"
    | "className"
    | "data"
  > & {
    className?: string;
    classNames?: Partial<Record<string, string>>;
  } & RecursicaSegmentedControlProps
>;

function useSegmentedControlClassNames(restRecord: Record<string, unknown>): {
  className: string;
  classNames: Partial<Record<string, string>>;
} {
  const mergedClassNames = mergeClassNames(
    {
      root: styles.root,
      control: styles.control,
      label: styles.label,
      indicator: styles.indicator,
    },
    restRecord.classNames as Partial<Record<string, string>> | undefined,
  );

  const classNameProp = restRecord.className as string | undefined;
  const finalClass = classNameProp
    ? `${styles.root} ${classNameProp}`
    : styles.root;

  return { className: finalClass, classNames: mergedClassNames };
}

type DataItem = NonNullable<RecursicaSegmentedControlProps["data"]>[number];

function validateData(data: DataItem[], hideLabels: boolean) {
  for (const item of data) {
    const label = typeof item === "string" ? item : item.label;
    if (label.trim() === "") {
      throw new Error(
        "SegmentedControl: every item needs a non-empty label; it is the item's accessible name.",
      );
    }
    if (hideLabels && (typeof item === "string" || !item.icon)) {
      throw new Error(
        `SegmentedControl: item "${label}" has no icon, so it would render empty with hideLabels.`,
      );
    }
  }
}

// The value of the item whose control contains the event target, or null outside any control.
function itemValueAt(target: EventTarget | null): string | null {
  const control =
    target instanceof Element ? target.closest(`.${styles.control}`) : null;
  return control?.querySelector("input")?.value ?? null;
}

// Each control holds a native radio input, so the export's `:has(input:checked)` match resolves
// the item's selection state with no attribute. The indicator holds no input, so it names the
// selected state explicitly.
const CONTRACT = "segmented-control-item";

const _SegmentedControl = forwardRef<HTMLDivElement, SegmentedControlProps>(
  function SegmentedControl(
    {
      overStyled = false,
      orientation = "horizontal",
      fullWidth,
      data = [],
      hideLabels = false,
      onFocus,
      onBlur,
      onMouseOver,
      onMouseLeave,
      ...rest
    },
    ref,
  ) {
    validateData(data, hideLabels);

    // hideLabels tooltips are controlled: Mantine's Tooltip only sees events on its own target,
    // but keyboard focus lands on the sibling radio input, and hover should cover the whole label.
    const [hoveredValue, setHoveredValue] = useState<string | null>(null);
    const [focusedValue, setFocusedValue] = useState<string | null>(null);
    const tooltipValue = hoveredValue ?? focusedValue;

    const sanitizedProps = filterStylingProps(rest, overStyled) as Partial<
      typeof rest
    >;
    const restRecord = sanitizedProps as Record<string, unknown>;

    const stylingParams = useSegmentedControlClassNames(restRecord);

    // Mantine's own data item has no icon slot; compose one into `label` (already a ReactNode)
    // so Mantine's native innerLabel wrapper lays it out using the icon-size/gap tokens already
    // wired in SegmentedControl.module.css.
    // With hideLabels, the label stays inside Mantine's <label> as visually hidden text, so it
    // names the radio input, and drives the tooltip.
    const mappedData = data.map((item) => {
      if (typeof item === "string" || !item.icon) return item;
      if (!hideLabels) {
        return {
          ...item,
          label: (
            <>
              {item.icon}
              {item.label}
            </>
          ),
        };
      }
      return {
        ...item,
        label: (
          <Tooltip label={item.label} opened={tooltipValue === item.value}>
            <span className={styles.iconOnly}>
              <span aria-hidden="true" className={styles.iconOnly}>
                {item.icon}
              </span>
              <VisuallyHidden>{item.label}</VisuallyHidden>
            </span>
          </Tooltip>
        ),
      };
    });

    const hoverHandlers = hideLabels
      ? {
          onMouseOver: (event: MouseEvent<HTMLDivElement>) => {
            setHoveredValue(itemValueAt(event.target));
            onMouseOver?.(event);
          },
          onMouseLeave: (event: MouseEvent<HTMLDivElement>) => {
            setHoveredValue(null);
            onMouseLeave?.(event);
          },
          onFocus: (event: FocusEvent<HTMLDivElement>) => {
            // Keyboard focus only: a click also focuses the input, which must not pin the tooltip.
            const target = event.target as Element;
            setFocusedValue(
              target.matches(":focus-visible") ? itemValueAt(target) : null,
            );
            onFocus?.(event);
          },
          onBlur: (event: FocusEvent<HTMLDivElement>) => {
            setFocusedValue(null);
            onBlur?.(event);
          },
        }
      : { onMouseOver, onMouseLeave, onFocus, onBlur };

    return (
      <MantineSegmentedControl
        ref={ref}
        {...(sanitizedProps as Omit<
          MantineSegmentedControlProps,
          "variant" | "size"
        >)}
        className={stylingParams.className}
        classNames={stylingParams.classNames}
        orientation={orientation}
        fullWidth={fullWidth}
        attributes={{
          control: { "data-recursica": CONTRACT },
          indicator: {
            "data-recursica": CONTRACT,
            "data-recursica-selection-states": "selected",
          },
          ...(restRecord.attributes as object | undefined),
        }}
        {...hoverHandlers}
        data-orientation={orientation}
        data={mappedData}
      />
    );
  },
);
_SegmentedControl.displayName = "SegmentedControl";

/**
 * Recursica SegmentedControl component wrapping Mantine's SegmentedControl.
 */
export const SegmentedControl = _SegmentedControl;
