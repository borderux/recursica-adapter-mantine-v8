import { describe, it, expect } from "vitest";
import { breakpointsFromRecManifest } from "./breakpointsFromRecManifest";

const grid = (width: Record<string, number>) =>
  Object.fromEntries(Object.entries(width).map(([k, v]) => [k, { $value: v }]));

describe("breakpointsFromRecManifest", () => {
  it("starts each grid at its min-width and places default after the widest max-width", () => {
    const manifest = {
      brand: {
        "layout-grids": {
          default: {},
          mobile: grid({ "max-width": 480 }),
          tablet: grid({ "min-width": 481, "max-width": 780 }),
        },
      },
    };
    expect(breakpointsFromRecManifest(manifest)).toEqual({
      mobile: "0px",
      tablet: "481px",
      default: "781px",
    });
  });

  it("returns an empty object when default is the only grid", () => {
    expect(
      breakpointsFromRecManifest({
        brand: { "layout-grids": { default: {} } },
      }),
    ).toEqual({});
  });

  it("throws for a non-default grid with no width", () => {
    expect(() =>
      breakpointsFromRecManifest({
        brand: { "layout-grids": { default: {}, odd: {} } },
      }),
    ).toThrow(/neither min-width nor max-width/);
  });
});
