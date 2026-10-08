import React from "react";
import { describe, it, expect, vi } from "vitest";
import { createRoot } from "react-dom/client";
import { flushSync } from "react-dom";
import { MantineProvider } from "@mantine/core";
import { Text } from "./Text";

class Boundary extends React.Component<
  { children: React.ReactNode },
  { message: string | null }
> {
  state = { message: null as string | null };
  static getDerivedStateFromError(error: Error) {
    return { message: error.message };
  }
  render() {
    return this.state.message ?? this.props.children;
  }
}

function render(component: string): HTMLElement {
  const container = document.createElement("div");
  document.body.appendChild(container);
  const props = { component } as Record<string, unknown>;
  flushSync(() =>
    createRoot(container).render(
      <MantineProvider>
        <Boundary>
          <Text {...(props as object)}>Content</Text>
        </Boundary>
      </MantineProvider>,
    ),
  );
  return container;
}

describe("Text heading elements", () => {
  it.each(["h1", "h2", "h3", "h4", "h5", "h6"])(
    "throws when component is %s",
    (component) => {
      vi.spyOn(console, "error").mockImplementation(() => {});
      expect(render(component).textContent).toContain(
        `Text cannot render <${component}>. Use <Heading> for semantic h1-h6.`,
      );
    },
  );

  it.each(["p", "span", "label"])("renders component=%s", (component) => {
    expect(render(component).querySelector(component)).not.toBeNull();
  });
});
