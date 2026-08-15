# XarKode - Development Rules & Guidelines

## 1. Code Style
- **Formatting:** Use Prettier for consistent code formatting.
- **Linting:** Follow standard ESLint rules for React.
- **Imports:** Group imports logically: React/Third-party libraries first, local components second, data/utils last.

## 2. Component Guidelines
- **Functional Components:** Always use functional components and React Hooks.
- **Modularity:** Break down large components into smaller, reusable pieces (e.g., `ServiceCard` within `Services.jsx`).
- **Props Validation:** While TypeScript is not currently used, use default props and ensure safe access to nested object properties.

## 3. Styling Rules
- **Tailwind First:** Always attempt to build UI using Tailwind utility classes before writing custom CSS.
- **Design Tokens:** Use the predefined CSS variables from `index.css` (e.g., `bg-ink-900`, `text-brand-teal`) rather than hardcoding hex values.
- **Glassmorphism:** Use the utility classes `.glass-card` and `.glass-card-strong` for consistent frosted glass effects rather than recreating the backdrop-filter inline.

## 4. Animation Guidelines
- **Framer Motion:** Use Framer Motion for enter/exit animations and scroll reveals. Keep variants consistent (e.g., `container` and `item` variants).
- **Performance:** For continuous background animations, prefer CSS keyframes or Canvas-based rendering over Framer Motion to maintain 60fps and reduce React render cycles.
- **Reduced Motion:** Always respect `prefers-reduced-motion` for complex animations (handled via Framer Motion's `useReducedMotion` hook).

## 5. Routing & Links
- **Internal Links:** Always use `<Link to="...">` from `react-router-dom` for internal navigation. Never use native `<a href="...">` for internal routes.
- **External Links:** Use `<a href="..." target="_blank" rel="noreferrer">` for all external links.
