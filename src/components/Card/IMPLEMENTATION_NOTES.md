# Card Implementation Notes

## Architecture Overrides

Because Mantine natively constructs `Card` bounding boxes with generic inner `<Card.Section>` elements that depend on explicit user styling (and lack implicit native designations for "Header" vs "Footer"), we implemented an explicit component wrapper departure:

- `<Card.Header>` explicitly hooks `--recursica_ui-kit_components_card_properties_header-background` and corresponding padding variables.
- `<Card.Footer>` explicitly hooks `--recursica_ui-kit_components_card_properties_footer-background` and corresponding padding variables.

Mantine's generic `<Card.Section>` calculates negative margins implicitly. Because of this, it is crucial that our local CSS module declares `--card-padding: var(--recursica_ui-kit_components_card_properties_padding)` directly on `.root` so that all generic or explicit section wrappers natively stretch across the bounding box properly.

## Layout Alignment Exceptions

To allow Cards to fit cleanly inside dynamic/flex layouts (like dashboard panels, grid tracks, or sidebar layout segments), the Card wrapper implements a custom gatekeeper bypass for outer styling properties:

- Exposes a safe subset of flexbox/dimensions styling properties (`flex`, `flexGrow`, `flexShrink`, `flexBasis`, `grow`, `h`, `height`) on the root `<Card>` component to allow proper sizing alongside layout siblings.
- Sets `<Card.Content>` to `flex-grow: 1;` by default via CSS modules. Since the root `<Card>` has `display: flex; flex-direction: column;`, this makes the content area expand to fill all vertical space, pushing `<Card.Footer>` to align at the absolute bottom of the bounding box.
