import { forwardRef } from "react";
import {
  Text as MantineText,
  type TextProps as MantineTextProps,
  createPolymorphicComponent,
} from "@mantine/core";
import {
  filterStylingProps,
  type RecursicaOverStyled,
} from "../../utils/filterStylingProps";

import { type RecursicaTextProps } from "@recursica/adapter-common";
import styles from "./Text.module.css";

export type TextProps = RecursicaOverStyled<
  Omit<MantineTextProps, "variant" | "color"> & RecursicaTextProps,
  "color"
>;

const _Text = forwardRef<HTMLDivElement, TextProps>(function Text(
  {
    overStyled = false,
    variant = "body",
    emphasis = "high",
    color = "default",
    ...rest
  },
  ref,
) {
  const sanitizedProps = filterStylingProps(rest, overStyled);
  const classNameProp = (sanitizedProps as Record<string, unknown>)
    .className as string | undefined;

  const typographyClass = `recursica_brand_typography_${variant}`;
  const mergedClassName = [typographyClass, styles.root, classNameProp]
    .filter(Boolean)
    .join(" ");

  // `color` and `emphasis` are Recursica semantic tokens, not Mantine's native `color`. They're
  // surfaced as data attributes so the CSS module can bind them to layer/opacity design tokens
  // (see Text.module.css) instead of leaking through to Mantine's inline-style color handling.
  return (
    <MantineText
      ref={ref}
      {...(sanitizedProps as unknown as MantineTextProps)}
      data-color={color}
      data-emphasis={emphasis}
      className={mergedClassName}
    />
  );
});
_Text.displayName = "Text";

/**
 * A generalized typographical wrapper limiting text properties to bounded Recursica UI-kit tokens inherently.
 * Do not use for semantic headings; use the explicit `<Heading>` component for `<h1>` - `<h6>`.
 *
 * Supports polymorphism via the `component` prop or `renderRoot` for custom element rendering.
 * @example
 * ```tsx
 * <Text component="span">Inline text</Text>
 * <Text component="label" htmlFor="input-id">Label text</Text>
 * ```
 */
export const Text = createPolymorphicComponent<"p", TextProps>(_Text);
