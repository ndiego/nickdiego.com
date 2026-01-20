# Design Patterns

Code patterns and conventions used in this project.

## Prefer Direct JSX Over Array Mapping

For static UI elements like navigation links, footer links, and other fixed content, render JSX directly instead of creating arrays and mapping over them.

### Don't do this:

```tsx
const navItems = [
  { href: "/about", label: "About" },
  { href: "/writing", label: "Writing" },
];

navItems.map((item) => <Link href={item.href}>{item.label}</Link>);
```

### Do this instead:

```tsx
<Link href="/about">About</Link>
<Link href="/writing">Writing</Link>
```

### Why

- Simpler and more readable
- Easier to customize individual items (e.g., different Tailwind classes per link)
- Better for tooling—grep, search, and AI agents can find and modify the code directly
- Avoids premature abstraction

### Exceptions

Use arrays/mapping when:

- Data is genuinely dynamic (from a database, CMS, or user input)
- You have many items (10+) that are truly uniform
