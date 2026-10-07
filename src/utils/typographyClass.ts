const found = new Set<string>();
const reported = new Set<string>();

function ruleListDefines(rules: CSSRuleList, selector: string): boolean {
  return Array.from(rules).some((rule) => {
    if (rule instanceof CSSStyleRule) {
      return rule.selectorText.split(",").some((s) => s.trim() === selector);
    }
    const nested = (rule as CSSGroupingRule).cssRules;
    return nested ? ruleListDefines(nested, selector) : false;
  });
}

/**
 * Dev-only: whether a `.recursica_brand_typography_<name>` rule exists in any readable stylesheet.
 * Logs a console error once per missing name. Cross-origin stylesheets can't be read and are
 * skipped, so they never count as defining the class.
 */
export function isTypographyStyleDefined(name: string): boolean {
  const selector = `.recursica_brand_typography_${name}`;
  if (found.has(selector)) return true;
  const defined = Array.from(document.styleSheets).some((sheet) => {
    try {
      return ruleListDefines(sheet.cssRules, selector);
    } catch {
      return false;
    }
  });
  if (defined) {
    found.add(selector);
  } else if (!reported.has(selector)) {
    reported.add(selector);
    console.error(
      `Text: no "${selector}" rule found. "${name}" is not defined under brand.typography in the exported Recursica CSS, so the text is hidden.`,
    );
  }
  return defined;
}
