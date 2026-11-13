import React from "react";
import { describe, it, expect, vi, afterEach } from "vitest";
import { createRoot, type Root } from "react-dom/client";
import { flushSync } from "react-dom";
import { MantineProvider } from "@mantine/core";
import { Modal } from "./Modal";
import { Panel } from "../Panel/Panel";
import { Dropdown } from "../Dropdown/Dropdown";

// One Escape must close only the topmost overlay (Panel or Modal), and never one whose
// Escape was already consumed by an open list inside it.
let root: Root | undefined;

function render(node: React.ReactElement) {
  const container = document.createElement("div");
  document.body.appendChild(container);
  root = createRoot(container);
  flushSync(() => root!.render(<MantineProvider>{node}</MantineProvider>));
}

function pressEscape(target: Element) {
  flushSync(() => {
    target.dispatchEvent(
      new KeyboardEvent("keydown", {
        key: "Escape",
        bubbles: true,
        cancelable: true,
      }),
    );
  });
}

const noTransition = { transitionProps: { duration: 0 } };

afterEach(() => {
  flushSync(() => root?.unmount());
  root = undefined;
  document.body.innerHTML = "";
});

describe("overlay Escape", () => {
  it("closes a Modal over a Panel without closing the Panel", () => {
    const panelClose = vi.fn();
    const modalClose = vi.fn();
    render(
      <>
        <Panel opened onClose={panelClose} title="Panel" {...noTransition}>
          panel
        </Panel>
        <Modal opened onClose={modalClose} title="Modal" {...noTransition}>
          <button>inside</button>
        </Modal>
      </>,
    );
    pressEscape(document.body);
    expect(modalClose).toHaveBeenCalledTimes(1);
    expect(panelClose).not.toHaveBeenCalled();
  });

  it("closes only the top Modal when two are stacked", () => {
    const bottomClose = vi.fn();
    const topClose = vi.fn();
    render(
      <>
        <Modal opened onClose={bottomClose} title="Bottom" {...noTransition}>
          bottom
        </Modal>
        <Modal opened onClose={topClose} title="Top" {...noTransition}>
          top
        </Modal>
      </>,
    );
    pressEscape(document.body);
    expect(topClose).toHaveBeenCalledTimes(1);
    expect(bottomClose).not.toHaveBeenCalled();
  });

  it("hands Escape to the Panel once the Modal is closed", () => {
    const panelClose = vi.fn();
    render(
      <>
        <Panel opened onClose={panelClose} title="Panel" {...noTransition}>
          panel
        </Panel>
        <Modal opened={false} onClose={vi.fn()} title="Modal" {...noTransition}>
          modal
        </Modal>
      </>,
    );
    pressEscape(document.body);
    expect(panelClose).toHaveBeenCalledTimes(1);
  });

  it("leaves a Modal open when Escape closes a Dropdown list inside it", () => {
    const modalClose = vi.fn();
    const dropdownClose = vi.fn();
    render(
      <Modal opened onClose={modalClose} title="Modal" {...noTransition}>
        <Dropdown
          label="Colour"
          data={["Red", "Blue"]}
          dropdownOpened
          onDropdownClose={dropdownClose}
          comboboxProps={{ transitionProps: { duration: 0 } }}
        />
      </Modal>,
    );
    const input = document.querySelector<HTMLInputElement>(
      "input[aria-haspopup='listbox']",
    )!;
    input.focus();
    pressEscape(input);
    expect(dropdownClose).toHaveBeenCalled();
    expect(modalClose).not.toHaveBeenCalled();
  });

  it("keeps Escape from a Modal with closeOnEscape off from reaching the Panel", () => {
    const panelClose = vi.fn();
    const modalClose = vi.fn();
    render(
      <>
        <Panel opened onClose={panelClose} title="Panel" {...noTransition}>
          panel
        </Panel>
        <Modal
          opened
          onClose={modalClose}
          closeOnEscape={false}
          title="Modal"
          {...noTransition}
        >
          modal
        </Modal>
      </>,
    );
    pressEscape(document.body);
    expect(modalClose).not.toHaveBeenCalled();
    expect(panelClose).not.toHaveBeenCalled();
  });

  it("does not announce Panel as a modal dialog", () => {
    render(
      <Panel opened onClose={vi.fn()} title="Panel" {...noTransition}>
        panel
      </Panel>,
    );
    const dialog = document.querySelector("[role='dialog']")!;
    expect(dialog).not.toBeNull();
    expect(dialog.hasAttribute("aria-modal")).toBe(false);
  });

  it("still announces Modal as a modal dialog", () => {
    render(
      <Modal opened onClose={vi.fn()} title="Modal" {...noTransition}>
        modal
      </Modal>,
    );
    expect(
      document.querySelector("[role='dialog']")!.getAttribute("aria-modal"),
    ).toBe("true");
  });
});
