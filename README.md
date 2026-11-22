# Meridian

A warm, editorial design system for product dashboards. Paper-white surfaces,
a forest-green brand, serif display type, generous radii and soft shadows.

```tsx
import "@meridian/ui/styles.css";
import { Button, Card, Badge } from "@meridian/ui";
```

Wrap your application root in `className="mdn-root"` once. It sets the canvas
colour, body font and text colour.

## What is in here

| Layer | Where | Notes |
| --- | --- | --- |
| Tokens | `src/tokens.css` | Every colour, size, radius, shadow and duration is a CSS custom property. |
| Components | `src/components/*.tsx` | Typed props, variants as `data-*` attributes, styled by `src/styles.css`. |
| Stories | `src/stories/*.stories.tsx` | One CSF story per variant that matters. |
| Rules | `design-system.rules.json` | What the linter enforces. |

Components: `Button`, `Card` (+ `CardHeader`, `CardTitle`, `CardDescription`,
`CardFooter`), `Badge`, `Input`, `Label`, `Switch`, `Avatar`, `Separator`,
`Table` (+ parts), `StatCard`, `NavItem`.

## Principles

1. **Warm, not stark.** The page is `--color-canvas` (a warm off-white), never
   pure white or black. Cards are `--color-surface` and sit on it.
2. **One loud thing per view.** A single `primary` Button; everything else is
   `secondary` or `ghost`.
3. **Serif for moments, sans for work.** Page titles, card titles and big
   numbers use `--font-display`. Labels, table cells and body copy use
   `--font-sans`. Use the `.mdn-display` class for headings.
4. **Round everything friendly.** Buttons, badges and avatars are pills or
   circles. Cards use `--radius-lg`. Inputs use `--radius-md`.
5. **Colour carries meaning.** Green is brand and success, amber is the accent,
   red is destructive. A trend is `positive` or `negative` by whether it is
   good news, not by its sign.

## Using it well

- Use `StatCard` for any "label, big number, change" tile. Do not rebuild it
  from `Card`.
- Put tables inside `<Card padding="none">` so rows run edge to edge.
- Pair every form control with a `Label`.
- Navigation: a vertical stack of `NavItem`, with `active` on the current page.
- Charts take their series colours from `--color-chart-1` … `--color-chart-5`,
  in order.
- Icons are 16–20px, stroke 1.75, and inherit `currentColor`.

## Do not

- Do not write hex colours or Tailwind palette colours. Use a token.
- Do not recolour a `Button` or `Card` with `className`. Pick a variant.
- Do not put a `primary` and a `danger` Button side by side at equal weight.
- Do not use dark surfaces. Meridian is a light system.
