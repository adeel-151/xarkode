# XarKode - System Architecture

## 1. Technology Stack
- **Framework:** React 18
- **Build Tool:** Vite
- **Routing:** React Router DOM (v6)
- **Styling:** Tailwind CSS v4, Custom CSS (Glassmorphism, Animations)
- **State Management:** Zustand
- **Animations:** Framer Motion
- **Icons:** Lucide React, React Icons

## 2. Application Architecture
The application follows a modular, component-based architecture designed for a multi-page setup.

### 2.1 Directory Structure
```
frontend/
├── src/
│   ├── components/      # Reusable UI building blocks (Navbar, Footer, Buttons, specific sections)
│   ├── data/            # Static content source of truth (content.js)
│   ├── lib/             # Utility functions and API clients (api.js)
│   ├── pages/           # Route-level components mapping to URLs (Home, About, etc.)
│   ├── store/           # Zustand stores for global state management
│   ├── App.jsx          # Root component, routing definitions (BrowserRouter)
│   └── index.css        # Global styles, Tailwind theme variables, custom utilities
```

### 2.2 Routing Strategy
The application uses `<BrowserRouter>` from `react-router-dom` defined in `App.jsx`.
- Each navigation link corresponds to a distinct React component in the `src/pages/` directory.
- A custom `<ScrollToTop />` component ensures the viewport resets to the top on every route change.

### 2.3 State Management
**Zustand** is used for lightweight global state.
- `useUIStore.js`: Manages global UI states, such as the toast notification system queue and mobile menu visibility.

### 2.4 Styling Approach
- **Utility-First:** Tailwind CSS handles 90% of layout, spacing, and typography.
- **Custom CSS (`index.css`):** Used for complex visual effects that are difficult to achieve with pure Tailwind utilities, such as:
  - `@property` based animated conic-gradients.
  - Custom glassmorphism classes (`.glass-card`, `.glass-card-strong`).
  - Marquee keyframe animations.
  - Global theme variables (`--color-ink-900`, `--color-brand-teal`).
