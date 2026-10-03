import React, { createContext, forwardRef, useContext } from "react";
import { usePagination } from "@mantine/hooks";
import {
  useRecursicaManifest,
  type RecursicaPaginationProps,
} from "@recursica/adapter-common";
import {
  filterStylingProps,
  type RecursicaOverStyled,
} from "../../utils/filterStylingProps";
import { Button, type ButtonProps } from "../Button/Button";
import styles from "./Pagination.module.css";
import { PaginationIcon } from "./Pagination.icons";

type PaginationRole = "active-pages" | "inactive-pages" | "navigation-controls";
type NavControl = "first" | "previous" | "next" | "last";

interface RoleVariant {
  variant: NonNullable<ButtonProps["variant"]>;
  size: NonNullable<ButtonProps["size"]>;
}

/** Reads which Button style and size the manifest selects for a Pagination role. */
function usePaginationRole(role: PaginationRole): RoleVariant {
  const manifest = useRecursicaManifest();
  const selected = (
    manifest as {
      "ui-kit"?: {
        components?: {
          pagination?: {
            properties?: Record<
              string,
              {
                $extensions?: {
                  "recursica.component"?: {
                    "selected-variants"?: Record<string, unknown>;
                  };
                };
              }
            >;
          };
        };
      };
    }
  )["ui-kit"]?.components?.pagination?.properties?.[role]?.$extensions?.[
    "recursica.component"
  ]?.["selected-variants"];
  if (!selected) {
    throw new Error(
      `Pagination: manifest has no ui-kit.components.pagination.properties.${role} selected-variants`,
    );
  }
  return {
    variant: selected.style as RoleVariant["variant"],
    size: selected.size as RoleVariant["size"],
  };
}

interface PaginationContextValue {
  total: number;
  active: number;
  range: (number | "dots")[];
  disabled?: boolean;
  setPage: (page: number) => void;
  first: () => void;
  previous: () => void;
  next: () => void;
  last: () => void;
  getItemProps?: (page: number) => Record<string, unknown>;
  getControlProps?: (control: NavControl) => Record<string, unknown>;
  dotsIcon?: React.ReactNode;
}

const PaginationContext = createContext<PaginationContextValue | null>(null);

function usePaginationContext(): PaginationContextValue {
  const ctx = useContext(PaginationContext);
  if (!ctx) {
    throw new Error("Pagination parts must be rendered inside Pagination.Root");
  }
  return ctx;
}

interface PaginationBaseProps {
  /** Total number of pages */
  total: number;
  /** Active page (controlled) */
  value?: number;
  /** Initial active page (uncontrolled) */
  defaultValue?: number;
  /** Called when the active page changes */
  onChange?: (page: number) => void;
  /** Pages shown on each side of the active page */
  siblings?: number;
  /** Pages always shown at the start and end */
  boundaries?: number;
  disabled?: boolean;
  /** Extra props for each page button */
  getItemProps?: (page: number) => Record<string, unknown>;
  /** Extra props for each first/previous/next/last button */
  getControlProps?: (control: NavControl) => Record<string, unknown>;
  /** Replaces the dots between page ranges */
  dotsIcon?: React.ReactNode;
}

export type PaginationRootProps = RecursicaOverStyled<
  PaginationBaseProps &
    Omit<React.ComponentPropsWithoutRef<"nav">, "onChange" | "children"> & {
      children?: React.ReactNode;
    }
>;

const _PaginationRoot = forwardRef<HTMLElement, PaginationRootProps>(
  function PaginationRoot(
    {
      overStyled = false,
      total,
      value,
      defaultValue,
      onChange,
      siblings,
      boundaries,
      disabled,
      getItemProps,
      getControlProps,
      dotsIcon,
      children,
      ...rest
    },
    ref,
  ) {
    const pagination = usePagination({
      total,
      page: value,
      initialPage: defaultValue,
      onChange,
      siblings,
      boundaries,
    });
    const sanitizedProps = filterStylingProps(rest, overStyled);
    const classNameProp = (sanitizedProps as { className?: string }).className;

    return (
      <PaginationContext.Provider
        value={{
          total,
          active: pagination.active,
          range: pagination.range,
          disabled,
          setPage: pagination.setPage,
          first: pagination.first,
          previous: pagination.previous,
          next: pagination.next,
          last: pagination.last,
          getItemProps,
          getControlProps,
          dotsIcon,
        }}
      >
        <nav
          ref={ref}
          aria-label="Pagination"
          {...sanitizedProps}
          className={
            classNameProp ? `${styles.root} ${classNameProp}` : styles.root
          }
        >
          {children}
        </nav>
      </PaginationContext.Provider>
    );
  },
);
_PaginationRoot.displayName = "Pagination.Root";

type ButtonElementProps = Omit<
  React.ComponentPropsWithoutRef<"button">,
  "style" | "className"
> &
  Pick<ButtonProps, "overStyled">;

export type PaginationControlProps = RecursicaOverStyled<
  ButtonElementProps & {
    /** Whether this is the active page: uses the manifest's `active-pages` Button variant. */
    active?: boolean;
  }
>;

const _PaginationControl = forwardRef<
  HTMLButtonElement,
  PaginationControlProps
>(function PaginationControl({ active = false, disabled, ...rest }, ref) {
  const ctx = usePaginationContext();
  const activeRole = usePaginationRole("active-pages");
  const inactiveRole = usePaginationRole("inactive-pages");
  const role = active ? activeRole : inactiveRole;
  return (
    <Button
      ref={ref}
      variant={role.variant}
      size={role.size}
      disabled={disabled || ctx.disabled}
      aria-current={active ? "page" : undefined}
      {...(rest as ButtonProps)}
    />
  );
});
_PaginationControl.displayName = "Pagination.Control";

export type PaginationDotsProps = React.ComponentPropsWithoutRef<"div"> & {
  icon?: React.ReactNode;
};

const _PaginationDots = forwardRef<HTMLDivElement, PaginationDotsProps>(
  function PaginationDots({ icon, ...rest }, ref) {
    const { size } = usePaginationRole("inactive-pages");
    return (
      <div ref={ref} className={styles.dots} data-size={size} {...rest}>
        {icon ?? "…"}
      </div>
    );
  },
);
_PaginationDots.displayName = "Pagination.Dots";

function PaginationItems() {
  const ctx = usePaginationContext();
  return (
    <>
      {ctx.range.map((page, index) =>
        page === "dots" ? (
          <_PaginationDots key={index} icon={ctx.dotsIcon} />
        ) : (
          <_PaginationControl
            key={index}
            active={page === ctx.active}
            aria-label={`Page ${page}`}
            onClick={() => ctx.setPage(page)}
            {...ctx.getItemProps?.(page)}
          >
            {(ctx.getItemProps?.(page)?.children as React.ReactNode) ?? page}
          </_PaginationControl>
        ),
      )}
    </>
  );
}
PaginationItems.displayName = "Pagination.Items";

export type PaginationEdgeProps = RecursicaOverStyled<
  Omit<ButtonElementProps, "children" | "rightSection"> & {
    /** If set to true, displays text labels alongside the icon. */
    withLabel?: boolean;
    icon?: React.ReactNode;
  }
>;

const NAV_ARIA_LABEL: Record<NavControl, string> = {
  first: "First page",
  previous: "Previous page",
  next: "Next page",
  last: "Last page",
};

const NAV_LABEL: Record<NavControl, string> = {
  first: "First",
  previous: "Prev",
  next: "Next",
  last: "Last",
};

function createNavControl(
  control: NavControl,
  iconType: "first" | "prev" | "next" | "last",
  iconAfterLabel: boolean,
  displayName: string,
) {
  const Component = forwardRef<HTMLButtonElement, PaginationEdgeProps>(
    function PaginationNav({ withLabel, icon, disabled, ...rest }, ref) {
      const ctx = usePaginationContext();
      const role = usePaginationRole("navigation-controls");
      const atStart = ctx.active === 1;
      const atEnd = ctx.active === ctx.total;
      const isDisabled =
        disabled ||
        ctx.disabled ||
        ((control === "first" || control === "previous") && atStart) ||
        ((control === "next" || control === "last") && atEnd);
      const iconElement = icon ?? <PaginationIcon type={iconType} />;
      const sections = withLabel
        ? iconAfterLabel
          ? {
              rightSection: (
                <span className={styles.rightIcon}>{iconElement}</span>
              ),
            }
          : { icon: iconElement }
        : { icon: iconElement };
      return (
        <Button
          ref={ref}
          variant={role.variant}
          size={role.size}
          aria-label={NAV_ARIA_LABEL[control]}
          disabled={isDisabled}
          onClick={ctx[control]}
          {...({
            ...sections,
            ...ctx.getControlProps?.(control),
            ...rest,
          } as ButtonProps)}
        >
          {withLabel ? NAV_LABEL[control] : undefined}
        </Button>
      );
    },
  );
  Component.displayName = displayName;
  return Component;
}

const _PaginationFirst = createNavControl(
  "first",
  "first",
  false,
  "Pagination.First",
);
const _PaginationPrevious = createNavControl(
  "previous",
  "prev",
  false,
  "Pagination.Previous",
);
const _PaginationNext = createNavControl(
  "next",
  "next",
  true,
  "Pagination.Next",
);
const _PaginationLast = createNavControl(
  "last",
  "last",
  true,
  "Pagination.Last",
);

export type PaginationProps = RecursicaOverStyled<
  RecursicaPaginationProps &
    PaginationBaseProps &
    Omit<React.ComponentPropsWithoutRef<"nav">, "onChange" | "children">
>;

const _Pagination = forwardRef<HTMLElement, PaginationProps>(
  function Pagination(
    { withEdges, withControls = true, withLabels, ...rest },
    ref,
  ) {
    return (
      <_PaginationRoot ref={ref} {...(rest as PaginationRootProps)}>
        {withEdges && <_PaginationFirst withLabel={withLabels} />}
        {withControls && <_PaginationPrevious withLabel={withLabels} />}
        <PaginationItems />
        {withControls && <_PaginationNext withLabel={withLabels} />}
        {withEdges && <_PaginationLast withLabel={withLabels} />}
      </_PaginationRoot>
    );
  },
);
_Pagination.displayName = "Pagination";

/**
 * Recursica Pagination. Its page and navigation buttons are Recursica `Button`s whose style and
 * size come from the manifest's `ui-kit.components.pagination` selected variants. Requires the
 * `manifest` prop on `RecursicaThemeProvider`.
 */
export const Pagination = _Pagination as typeof _Pagination & {
  Root: typeof _PaginationRoot;
  Items: typeof PaginationItems;
  Control: typeof _PaginationControl;
  Dots: typeof _PaginationDots;
  Next: typeof _PaginationNext;
  Previous: typeof _PaginationPrevious;
  First: typeof _PaginationFirst;
  Last: typeof _PaginationLast;
  Icon: typeof PaginationIcon;
};

Pagination.Root = _PaginationRoot;
Pagination.Items = PaginationItems;
Pagination.Control = _PaginationControl;
Pagination.Dots = _PaginationDots;
Pagination.Next = _PaginationNext;
Pagination.Previous = _PaginationPrevious;
Pagination.First = _PaginationFirst;
Pagination.Last = _PaginationLast;
Pagination.Icon = PaginationIcon;
