import React, { forwardRef, useState } from "react";
import {
  DatePickerInput,
  type DatePickerInputProps,
  getFormattedDate,
} from "@mantine/dates";
import { type ReadOnlyControlProps } from "@recursica/adapter-common";
import {
  filterStylingProps,
  omitUnsupportedProps,
  withCallerOverride,
  mergeClassNames,
  type RecursicaOverStyled,
} from "../../utils/filterStylingProps";
import { type RecursicaFormControlWrapperProps } from "../FormControlWrapper/FormControlWrapper";
import { WithReadOnlyWrapper } from "../ReadOnlyField/WithReadOnlyWrapper";
import { CalendarIcon } from "./DatePicker.icons";
import styles from "./DatePicker.module.css";

import { type RecursicaDatePickerProps as BaseRecursicaDatePickerProps } from "@recursica/adapter-common";

export interface RecursicaDatePickerProps
  extends Omit<
      DatePickerInputProps,
      | "size"
      | "variant"
      | "radius"
      | "wrapperProps"
      | "label"
      | "error"
      | "required"
      | "withAsterisk"
      | "id"
      | "description"
    >,
    Pick<
      DatePickerInputProps,
      "label" | "error" | "required" | "withAsterisk" | "id"
    >,
    Omit<
      RecursicaFormControlWrapperProps,
      "controlMaxWidth" | "controlMinWidth"
    >,
    ReadOnlyControlProps,
    BaseRecursicaDatePickerProps {}

export type DatePickerProps = RecursicaOverStyled<RecursicaDatePickerProps>;

// Props this component intentionally doesn't support — deleted at runtime so they can't leak
// through even if a caller forces them via plain JavaScript, bypassing the `Omit<>` above.
const UNSUPPORTED_PROPS = [
  "size", // Recursica controls sizing via the `size` variant + design tokens, not raw dimensions.
  "variant", // Colors/variants are token-driven; the library's native palette isn't exposed.
  "radius", // Recursica does not expose the library's native corner-radius system.
  "description", // Managed by FormControlWrapper via assistiveText.
] as const satisfies readonly (keyof DatePickerInputProps)[];

// Recursica Button contract for the calendar's own buttons (nav arrows and month/year label via `attributes`, days via `getDayProps`).
const BUTTON_CONTRACT = {
  "data-recursica": "button",
  "data-recursica-sizes": "small",
} as const;

// A Mantine date value as a local "YYYY-MM-DD" key, the form `getDayProps` receives.
function toDayKey(value: unknown): string | null {
  if (value instanceof Date) {
    const month = String(value.getMonth() + 1).padStart(2, "0");
    const day = String(value.getDate()).padStart(2, "0");
    return `${value.getFullYear()}-${month}-${day}`;
  }
  return typeof value === "string" ? value.slice(0, 10) : null;
}

// Same rule as Mantine's own `selected` day flag: any value in a range/multiple array, or the single value.
function isSelectedDay(date: string, selection: unknown): boolean {
  const values = Array.isArray(selection) ? selection : [selection];
  return values.some((value) => toDayKey(value) === date);
}

export const DatePicker = forwardRef<HTMLButtonElement, DatePickerProps>(
  function DatePicker(props, ref) {
    const {
      overStyled = false,
      formLayout = "stacked",

      // Label & Wrapper Maps
      labelSize,
      labelAlignment,
      labelOptionalText,
      labelWithEditIcon,
      onLabelEditClick,

      label,
      assistiveText,
      assistiveWithIcon,
      error,
      required,
      withAsterisk,
      id,
      className,
      style,
      disabled,
      readOnly,
      readOnlyComponent,
      emptyValueComponent,
      value,
      defaultValue,
      onChange,
      getDayProps,
      attributes,
      highlightToday = true, // Default on so today is visually marked; consumers can still override.
      valueFormat = "MM/DD/YY", // Default display format; consumers can still override.
      placeholder = "MM / DD / YY", // Default placeholder; consumers can still override.
      leftSection, // Default leading icon computed below; consumers can still override.
      ...rest
    } = props;

    const sanitizedProps = omitUnsupportedProps(
      filterStylingProps(rest, overStyled) as Record<string, unknown>,
      UNSUPPORTED_PROPS,
    );
    const restRecord = sanitizedProps as Record<string, unknown>;

    // Mantine hides the selection from `getDayProps`, so it's mirrored here to give the selected
    // day the Button contract's solid style. Controlled `value` wins; otherwise track `onChange`.
    const [uncontrolledValue, setUncontrolledValue] = useState(defaultValue);
    const selection = value !== undefined ? value : uncontrolledValue;

    // Securely map core native blocks down ensuring nested CSS modules map precisely
    const mergedClassNames = mergeClassNames(
      {
        wrapper: styles.root, // The nested Input internal relative wrapper bounding box
        input: styles.input,
        section: styles.section,
        day: styles.day,
        weekday: styles.weekday,
        calendarHeader: styles.calendarHeader,
        calendarHeaderControl: styles.calendarHeaderControl,
        calendarHeaderLevel: styles.calendarHeaderLevel,
        calendarHeaderControlIcon: styles.calendarHeaderControlIcon,
      },
      restRecord.classNames as Partial<Record<string, string>> | undefined,
    );

    // The calendar popover surface (.dropdown) is styled by Mantine's underlying `Popover`
    // component, not `DatePickerInput` itself — it only accepts classNames via `popoverProps`,
    // not the top-level `classNames` map above (which only reaches the Input/Calendar parts).
    const popoverPropsInput = restRecord.popoverProps;
    const consumerPopoverProps =
      popoverPropsInput &&
      typeof popoverPropsInput === "object" &&
      !Array.isArray(popoverPropsInput)
        ? (popoverPropsInput as Record<string, unknown>)
        : undefined;
    const consumerPopoverClassNames =
      consumerPopoverProps?.classNames &&
      typeof consumerPopoverProps.classNames === "object" &&
      !Array.isArray(consumerPopoverProps.classNames)
        ? (consumerPopoverProps.classNames as Partial<Record<string, string>>)
        : undefined;
    delete restRecord["popoverProps"];
    const mergedPopoverProps = {
      ...consumerPopoverProps,
      classNames: mergeClassNames(
        { dropdown: styles.dropdown },
        consumerPopoverClassNames,
      ),
    };

    const wrapperClass = className
      ? `${styles.layoutOverride} ${className}`
      : styles.layoutOverride;

    // Contract attributes sit on the outer wrapper: the layout margin is read there and every
    // other property is inherited by the input and its sections.
    const contractAttrs = {
      "data-recursica": "date-picker",
      "data-recursica-layouts": formLayout,
      ...(error ? { "data-recursica-error": "" } : {}),
      ...(disabled ? { "data-recursica-disabled": "" } : {}),
    };

    return (
      <WithReadOnlyWrapper
        className={wrapperClass}
        style={style as React.CSSProperties}
        {...contractAttrs}
        controlMaxWidth={undefined}
        controlMinWidth={undefined}
        overStyled={overStyled as true}
        formLayout={formLayout}
        labelSize={labelSize}
        labelAlignment={labelAlignment}
        labelOptionalText={labelOptionalText}
        labelWithEditIcon={labelWithEditIcon}
        onLabelEditClick={onLabelEditClick}
        label={label}
        assistiveText={assistiveText}
        assistiveWithIcon={assistiveWithIcon}
        error={error}
        required={required}
        withAsterisk={withAsterisk}
        id={id}
        readOnly={readOnly}
        readOnlyComponent={readOnlyComponent}
        emptyValueComponent={emptyValueComponent}
        readOnlyType="text"
        readOnlyValue={(() => {
          const readOnlyDate = value !== undefined ? value : defaultValue;
          // `DatePickerInput` formats its own displayed value via `valueFormat` internally
          // (using this same `getFormattedDate` helper) — the read-only text swap-in bypassed
          // that entirely and rendered `String(date)` instead (a raw JS `Date.toString()`, e.g.
          // "Wed May 20 2026 17:00:00 GMT-0700 (Pacific Daylight Time)"), so a read-only
          // DatePicker never matched what the same value looks like while editable.
          return readOnlyDate
            ? getFormattedDate({
                type: "default",
                date: readOnlyDate,
                locale: "en",
                format: valueFormat,
                labelSeparator: "",
              })
            : undefined;
        })()}
        readOnlyNativeProps={props}
        activeComponent={
          /* Naked Input execution safely decoupled from Mantine's macro Input.Wrapper DOM hooks */
          <DatePickerInput
            ref={ref}
            {...(sanitizedProps as unknown as DatePickerInputProps)}
            classNames={mergedClassNames}
            disabled={disabled}
            value={value}
            defaultValue={defaultValue}
            onChange={(next) => {
              setUncontrolledValue(next);
              onChange?.(next);
            }}
            getDayProps={(date) => ({
              ...BUTTON_CONTRACT,
              "data-recursica-content": "label",
              "data-recursica-styles": isSelectedDay(date, selection)
                ? "solid"
                : "text",
              ...getDayProps?.(date),
            })}
            attributes={{
              ...attributes,
              calendarHeaderControl: {
                ...BUTTON_CONTRACT,
                "data-recursica-content": "icon-only",
                "data-recursica-styles": "text",
                ...attributes?.calendarHeaderControl,
              },
              calendarHeaderLevel: {
                ...BUTTON_CONTRACT,
                "data-recursica-content": "label",
                "data-recursica-styles": "text",
                ...attributes?.calendarHeaderLevel,
              },
            }}
            label={undefined} // Disable Mantine's native label
            description={undefined} // Disable Mantine's native description
            error={undefined} // Disable Mantine's native error text (handled by wrapper)
            withAsterisk={false} // Handled by wrapper
            highlightToday={highlightToday}
            valueFormat={valueFormat}
            placeholder={placeholder}
            leftSection={withCallerOverride<React.ReactNode>(
              <CalendarIcon />,
              leftSection,
            )}
            popoverProps={mergedPopoverProps}
          />
        }
      />
    );
  },
);

DatePicker.displayName = "DatePicker";
