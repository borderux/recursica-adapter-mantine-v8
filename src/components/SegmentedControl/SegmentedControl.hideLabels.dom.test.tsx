import React from "react";
import { describe, it, expect, afterEach } from "vitest";
import { userEvent } from "@vitest/browser/context";
import { createRoot, type Root } from "react-dom/client";
import { flushSync } from "react-dom";
import { MantineProvider } from "@mantine/core";
import { SegmentedControl } from "./SegmentedControl";

const roots: Root[] = [];
afterEach(() => {
  roots.splice(0).forEach((r) => flushSync(() => r.unmount()));
  document.body.innerHTML = "";
});

function render(node: React.ReactElement): HTMLElement {
  const container = document.createElement("div");
  document.body.appendChild(container);
  let error: unknown;
  const root = createRoot(container, {
    onUncaughtError: (e) => {
      error = e;
    },
  });
  roots.push(root);
  flushSync(() => root.render(<MantineProvider>{node}</MantineProvider>));
  if (error) throw error;
  return container;
}

const Icon = () => <svg data-testid="icon" />;
const data = [
  { value: "light", label: "Light theme", icon: <Icon /> },
  { value: "dark", label: "Dark theme", icon: <Icon /> },
];

const tooltipText = () =>
  Array.from(document.querySelectorAll('[role="tooltip"]')).map(
    (t) => t.textContent,
  );

const nextFrame = () => new Promise((r) => setTimeout(r, 400));

describe("SegmentedControl hideLabels", () => {
  it("names each radio input with its label while showing only the icon", () => {
    const c = render(<SegmentedControl hideLabels data={data} />);
    const inputs = Array.from(c.querySelectorAll("input"));
    // The <label for> text is the input's accessible name.
    const names = inputs.map(
      (i) => c.querySelector(`label[for="${i.id}"]`)!.textContent,
    );
    expect(names).toEqual(["Light theme", "Dark theme"]);
    const hidden = c.querySelector(
      `label[for="${inputs[0].id}"] svg`,
    )!.parentElement!;
    expect(hidden.getAttribute("aria-hidden")).toBe("true");
  });

  it("shows the label as a tooltip on hover", async () => {
    const c = render(<SegmentedControl hideLabels data={data} />);
    await userEvent.hover(c.querySelectorAll("label")[1]);
    await nextFrame();
    expect(tooltipText()).toContain("Dark theme");
    await userEvent.unhover(c.querySelectorAll("label")[1]);
    await nextFrame();
    expect(tooltipText()).not.toContain("Dark theme");
  });

  it("shows the label as a tooltip on keyboard focus, not on click", async () => {
    const c = render(
      <SegmentedControl hideLabels data={data} defaultValue="light" />,
    );
    await userEvent.click(c.querySelectorAll("label")[0]);
    await userEvent.unhover(c.querySelectorAll("label")[0]);
    await nextFrame();
    expect(tooltipText()).not.toContain("Light theme");
    await userEvent.keyboard("{ArrowRight}");
    await nextFrame();
    expect(tooltipText()).toContain("Dark theme");
  });

  it("throws when an item has no icon", () => {
    expect(() =>
      render(
        <SegmentedControl
          hideLabels
          data={[...data, { value: "auto", label: "Auto" }]}
        />,
      ),
    ).toThrow(/"Auto" has no icon/);
  });

  it("throws on an empty label", () => {
    expect(() =>
      render(<SegmentedControl data={[{ value: "x", label: " " }]} />),
    ).toThrow(/non-empty label/);
  });
});
