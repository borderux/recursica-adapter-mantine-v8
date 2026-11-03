import React from "react";
import {
  TimelineItem as MantineTimelineItem,
  type TimelineItemProps as MantineTimelineItemProps,
} from "@mantine/core";
import {
  filterStylingProps,
  mergeClassNames,
  type RecursicaOverStyled,
} from "../../utils/filterStylingProps";
import styles from "./Timeline.module.css";

import { type RecursicaTimelineItemProps } from "@recursica/adapter-common";

export type TimelineItemProps = RecursicaOverStyled<
  Omit<MantineTimelineItemProps, "radius" | "color" | "lineVariant"> &
    RecursicaTimelineItemProps
>;

/**
 * The individual item component for the Timeline.
 *
 * **Recursica Abstract:**
 * The `Timeline.Item` has been extended to support a `timestamp` string natively,
 * rendering it below the body content. It also accepts a `bulletVariant` to morph
 * the structural dimensions of the node circle automatically.
 */
export const TimelineItem = React.forwardRef<HTMLDivElement, TimelineItemProps>(
  function TimelineItem(
    {
      overStyled = false,
      timestamp,
      bulletVariant = "default",
      children,
      __active,
      ...rest
    },
    ref,
  ) {
    const selectionState = __active ? "active" : "inactive";

    const sanitizedProps = filterStylingProps(rest, overStyled);
    const restRecord = sanitizedProps as Record<string, unknown>;

    const mergedClassNames = mergeClassNames(
      {
        item: styles.item,
        itemBody: styles.itemBody,
        itemContent: styles.itemContent,
        itemBullet: styles.itemBullet,
        itemTitle: styles.itemTitle,
      },
      restRecord.classNames as Partial<Record<string, string>> | undefined,
    );

    // Embed timestamp inside children if provided, wrapped in a specific class
    const content = timestamp ? (
      <>
        {children && <div className={styles.description}>{children}</div>}
        <div className={styles.timestamp}>{timestamp}</div>
      </>
    ) : (
      children
    );

    return (
      <MantineTimelineItem
        ref={ref}
        __active={__active}
        {...(sanitizedProps as unknown as Omit<
          MantineTimelineItemProps,
          "radius" | "color" | "lineVariant"
        >)}
        classNames={mergedClassNames}
        data-variant={bulletVariant}
        data-recursica="timeline"
        data-recursica-selection-states={selectionState}
        // Mantine's own bullet element takes no per-item attributes, so it stays an invisible
        // shell and this face, which carries the timeline-bullet contract, paints the bullet.
        bullet={
          <span
            className={styles.bulletFace}
            data-recursica="timeline-bullet"
            data-recursica-types={bulletVariant}
            data-recursica-selection-states={selectionState}
          >
            {restRecord.bullet as React.ReactNode}
          </span>
        }
      >
        {content}
      </MantineTimelineItem>
    );
  },
);

TimelineItem.displayName = "TimelineItem";
