# Styling

This project uses Tailwind CSS v4 with the shadcn/ui color system.

## Color System

Uses shadcn/ui semantic color variables for consistent theming:

- `bg-background` / `bg-foreground` - Primary background/text
- `bg-muted` / `text-muted-foreground` - Subdued backgrounds/text
- `bg-card` / `text-card-foreground` - Card surfaces
- `bg-primary` / `text-primary-foreground` - Primary actions
- `bg-secondary` / `text-secondary-foreground` - Secondary actions
- `bg-accent` / `text-accent-foreground` - Accent highlights
- `border-border` - Border color
- `ring-ring` - Focus ring color

## Dark Mode

Dark mode is configured via Tailwind v4 custom variant:

```css
@custom-variant dark (&:where(.dark, .dark *));
```

The `next-themes` package handles theme switching. CSS variables are defined in `src/app/globals.css` with separate values for light and dark modes.

## shadcn/ui Components

UI components from shadcn/ui are located in `src/components/ui/`. These are copied into the project (not installed as a package) and can be customized as needed.

To add new shadcn/ui components:

```bash
npx shadcn@latest add button
```
