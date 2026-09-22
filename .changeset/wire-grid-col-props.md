---
"@recursica/adapter-mantine-v8": minor
---

`Grid.Col`'s type now intersects with `RecursicaGridColProps` from `adapter-common`, laying the groundwork for a formal cross-adapter contract. No behavior or prop changes yet — `span`, `order`, `visibleFrom`, and `hiddenFrom` all stay on Mantine's own native typing for now; the shared contract only carries `children` until `adapter-common` picks those back up (deferred to get this merged, not blocked on an open decision — `span` naming is already settled at `span`, just not wired).
