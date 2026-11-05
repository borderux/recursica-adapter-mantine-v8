import { forwardRef } from "react";
import {
  Checkbox as MantineCheckbox,
  type CheckboxProps as MantineCheckboxProps,
  useCheckboxGroupContext,
} from "@mantine/core";
import { type ReadOnlyControlProps } from "@recursica/adapter-common";
import { CheckboxGroup } from "./CheckboxGroup";
import {
  filterStylingProps,
  omitUnsupportedProps,
  mergeClassNames,
  type RecursicaOverStyled,
} from "../../utils/filterStylingProps";
import {
  type RequireAccessibleLabel,
  type RecursicaCheckboxProps,
} from "@recursica/adapter-common";
import {
  FormControlLayout,
  type FormControlLayoutProps,
} from "../FormControlLayout/FormControlLayout";

import styles from "./Checkbox.module.css";

export type CheckboxWrapperProps = Omit<
  MantineCheckboxProps,
  "size" | "color" | "radius" | "iconColor" | "variant"
> &
  RecursicaCheckboxProps &
  ReadOnlyControlProps &
  Pick<
    FormControlLayoutProps,
    "formLayout" | "labelSize" | "controlMaxWidth" | "controlMinWidth"
  >;

export type RecursicaCheckboxPropsAlias =
  RequireAccessibleLabel<CheckboxWrapperProps>;

export type CheckboxProps = RecursicaOverStyled<RecursicaCheckboxPropsAlias>;

type CheckboxComponent = React.ForwardRefExoticComponent<
  CheckboxProps & React.RefAttributes<HTMLInputElement>
> & {
  Group: typeof CheckboxGroup;
};

export const Checkbox = forwardRef<HTMLInputElement, CheckboxProps>(
  function Checkbox(props, ref) {
    const groupState = useCheckboxGroupContext();
    const {
      overStyled = false,
      readOnly,
      readOnlyComponent,
      disabled,
      formLayout,
      labelSize,
      controlMaxWidth,
      controlMinWidth,
      ...rest
    } = props;
    // Checkbox doesn't use Label onLabelEditClick natively since it isn't mapped inside FormControlWrapper intrinsically.
    // Props this component intentionally doesn't support — deleted at runtime so they can't leak
    // through even if a caller forces them via plain JavaScript, bypassing the `Omit<>` above.
    const UNSUPPORTED_PROPS = [
      "size", // Recursica controls sizing via Checkbox.module.css variables, not Mantine's native size scale.
      "color", // Colors are token-driven via Checkbox.module.css; Mantine's native palette isn't exposed.
      "radius", // Corner radius is fixed by Recursica tokens in Checkbox.module.css, not caller-configurable.
      "variant", // Checkbox has a single Recursica-defined visual treatment; Mantine's variant isn't exposed.
      "iconColor", // Icon color is token-driven via Checkbox.module.css, not a native Mantine override.
    ] as const satisfies readonly (keyof MantineCheckboxProps)[];

    const sanitizedProps = omitUnsupportedProps(
      filterStylingProps(rest, overStyled) as Record<string, unknown>,
      UNSUPPORTED_PROPS,
    ) as Partial<typeof rest>;
    const restRecord = sanitizedProps as Record<string, unknown>;

    const mergedClassNames = mergeClassNames(
      {
        root: styles.root,
        body: styles.body,
        inner: styles.inner,
        input: styles.input,
        icon: styles.icon,
        labelWrapper: styles.labelWrapper,
        label: styles.label,
      },
      restRecord.classNames as Partial<Record<string, string>> | undefined,
    );

    const classNameProp = restRecord.className as string | undefined;
    const finalClass = classNameProp
      ? `${styles.root} ${classNameProp}`
      : styles.root;

    const isDisabled = !!(readOnly || disabled || groupState?.disabled);
    const disabledAttr = isDisabled ? "" : undefined;

    if (readOnly && !!readOnlyComponent) {
      const ReadOnlyComp = readOnlyComponent;
      const roNode = (
        <ReadOnlyComp
          {...props}
          checked={!!(restRecord.checked ?? restRecord.defaultChecked)}
          label={restRecord.label as React.ReactNode}
        />
      );

      if (formLayout) {
        return (
          <FormControlLayout
            formLayout={formLayout}
            labelSize={labelSize}
            controlMaxWidth={controlMaxWidth}
            controlMinWidth={controlMinWidth}
          >
            {roNode}
          </FormControlLayout>
        );
      }

      return <>{roNode}</>;
    }

    // We omit Mantine's sizing/coloring so we rely strictly on variables from Checkbox.module.css
    const checkboxNode = (
      <MantineCheckbox
        ref={ref}
        {...(sanitizedProps as unknown as MantineCheckboxProps)}
        className={finalClass}
        classNames={mergedClassNames}
        disabled={readOnly || disabled}
        // The root is the item (label); the inner box holds the input and icon, so it is the checkbox.
        attributes={{
          root: {
            "data-recursica": "checkbox-item",
            "data-recursica-disabled": disabledAttr,
          },
          inner: {
            "data-recursica": "checkbox",
            "data-recursica-disabled": disabledAttr,
          },
        }}
      />
    );

    if (formLayout) {
      return (
        <FormControlLayout
          formLayout={formLayout}
          labelSize={labelSize}
          controlMaxWidth={controlMaxWidth}
          controlMinWidth={controlMinWidth}
        >
          {checkboxNode}
        </FormControlLayout>
      );
    }

    return checkboxNode;
  },
) as CheckboxComponent;

Checkbox.displayName = "Checkbox";
Checkbox.Group = CheckboxGroup;
