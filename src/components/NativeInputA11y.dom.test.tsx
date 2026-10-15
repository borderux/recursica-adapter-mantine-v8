import React from "react";
import { describe, it, expect } from "vitest";
import { createRoot } from "react-dom/client";
import { flushSync } from "react-dom";
import { Checkbox } from "./Checkbox/Checkbox";
import { Radio } from "./Radio/Radio";
import { Switch } from "./Switch/Switch";
import { MantineProvider } from "@mantine/core";
const wrap = (n: React.ReactElement) => <MantineProvider>{n}</MantineProvider>;

// Where the naming attributes land matters, not just that they render: a screen reader reads
// the native <input>, so aria-* on a wrapper leaves the control unnamed.
function render(node: React.ReactElement): HTMLElement {
  const container = document.createElement("div");
  document.body.appendChild(container);
  flushSync(() => createRoot(container).render(wrap(node)));
  return container;
}

const controls = [
  ["Checkbox", Checkbox],
  ["Radio", Radio],
  ["Switch", Switch],
] as const;

describe.each(controls)("%s accessible name", (_name, Control) => {
  // The union type under test is already enforced at compile time; cast to exercise each branch.
  const C = Control as unknown as React.ComponentType<Record<string, unknown>>;

  it("puts aria-label on the native input only", () => {
    const c = render(<C aria-label="Select all" />);
    expect(c.querySelector("input")!.getAttribute("aria-label")).toBe(
      "Select all",
    );
    expect(c.querySelectorAll("[aria-label]")).toHaveLength(1);
  });

  it("puts aria-labelledby and aria-describedby on the native input only", () => {
    const c = render(<C aria-labelledby="a" aria-describedby="b" />);
    const input = c.querySelector("input")!;
    expect(input.getAttribute("aria-labelledby")).toBe("a");
    expect(input.getAttribute("aria-describedby")).toBe("b");
    expect(c.querySelectorAll("[aria-labelledby]")).toHaveLength(1);
    expect(c.querySelectorAll("[aria-describedby]")).toHaveLength(1);
  });

  it("links a visible label to the input without a caller-supplied id", () => {
    const c = render(<C label="Hello" />);
    const input = c.querySelector("input")!;
    const label = c.querySelector("label")!;
    expect(input.id).not.toBe("");
    expect(label.getAttribute("for")).toBe(input.id);
  });

  it("keeps a caller-supplied id", () => {
    const c = render(<C label="Hello" id="mine" />);
    expect(c.querySelector("input")!.id).toBe("mine");
    expect(c.querySelector("label")!.getAttribute("for")).toBe("mine");
  });
});
