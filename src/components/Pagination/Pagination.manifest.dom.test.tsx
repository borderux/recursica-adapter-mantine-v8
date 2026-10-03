import React from "react";
import { describe, it, expect } from "vitest";
import { createRoot } from "react-dom/client";
import { flushSync } from "react-dom";
import { MantineProvider } from "@mantine/core";
import { RecursicaManifestContext } from "@recursica/adapter-common";
import { Pagination } from "./Pagination";

const role = (style: string, size: string) => ({
  $extensions: {
    "recursica.component": { "selected-variants": { style, size } },
  },
});
const manifest = (props: Record<string, unknown>) => ({
  "ui-kit": { components: { pagination: { properties: props } } },
});
const full = manifest({
  "active-pages": role("solid", "small"),
  "inactive-pages": role("outline", "small"),
  "navigation-controls": role("text", "small"),
});

class Catch extends React.Component<
  { children: React.ReactNode },
  { error?: Error }
> {
  state: { error?: Error } = {};
  static getDerivedStateFromError(error: Error) {
    return { error };
  }
  render() {
    return this.state.error ? (
      <span data-error>{this.state.error.message}</span>
    ) : (
      this.props.children
    );
  }
}

function mount(m: Record<string, unknown> | undefined) {
  const container = document.createElement("div");
  document.body.appendChild(container);
  const root = createRoot(container);
  flushSync(() =>
    root.render(
      <MantineProvider>
        <Catch>
          <RecursicaManifestContext.Provider value={m}>
            <Pagination total={5} defaultValue={2} />
          </RecursicaManifestContext.Provider>
        </Catch>
      </MantineProvider>,
    ),
  );
  return {
    container,
    error: container.querySelector("[data-error]")?.textContent,
    done: () => {
      root.unmount();
      container.remove();
    },
  };
}

describe("Pagination manifest variants", () => {
  it("renders Buttons with the style and size the manifest selects per role", () => {
    const { container, error, done } = mount(full);
    expect(error).toBeUndefined();
    const active = container.querySelector('[aria-current="page"]');
    expect(active?.getAttribute("data-variant")).toBe("solid");
    expect(active?.getAttribute("data-size")).toBe("small");
    const inactive = [...container.querySelectorAll("button")].find(
      (b) => b.textContent === "3",
    );
    expect(inactive?.getAttribute("data-variant")).toBe("outline");
    const next = container.querySelector('[aria-label="Next page"]');
    expect(next?.getAttribute("data-variant")).toBe("text");
    expect(next?.getAttribute("data-content")).toBe("icon-only");
    done();
  });

  it("renders a labelled nav with a labelled button per page", () => {
    const { container, error, done } = mount(full);
    expect(error).toBeUndefined();
    expect(container.querySelector("nav")?.getAttribute("aria-label")).toBe(
      "Pagination",
    );
    const three = [...container.querySelectorAll("button")].find(
      (b) => b.textContent === "3",
    );
    expect(three?.getAttribute("aria-label")).toBe("Page 3");
    done();
  });

  it("throws without a manifest", () => {
    const { error, done } = mount(undefined);
    expect(error).toMatch(/Recursica manifest/);
    done();
  });

  it("throws when a role has no selected variants", () => {
    const { error, done } = mount(
      manifest({ "active-pages": role("solid", "small") }),
    );
    expect(error).toMatch(/navigation-controls selected-variants/);
    done();
  });
});
