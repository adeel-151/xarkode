# XarKode - Project Memory & Context

This file serves as the active memory bank for the AI assistant and development context.

## Active Context
- **Project State:** The frontend has successfully transitioned to a multi-page React Router architecture. The Hero section utilizes a cinematic web image background.
- **Current Task Focus:** Documentation generation and ensuring the project structure is well documented for future handover.

## Key Decisions
1. **Routing over SPA:** Originally a hash-linked SPA. Shifted to React Router (`react-router-dom`) at the client's request ("har navlink ka apna alag page hona chahye").
2. **Cinematic Hero:** Shifted from an abstract canvas/SVG design to a photographic cinematic design. The grid layout was refactored into a centered flex layout to fix overlap issues with the fixed Navbar.
3. **Component Extraction:** Extracted the "Stats" (Clients Served, Projects, Satisfaction) out of the Hero into its own `Stats.jsx` component to improve Hero layout and allow the stats to overlap the section transition.

## Known Issues / Quirks
- The `Navbar` is fixed, requiring sections below it (like `Hero.jsx` and `About.jsx`) to have adequate top padding (`pt-40`) to prevent content from hiding beneath the navbar.
- The `Portfolio` section uses a "Paper" (light) theme, which intentionally contrasts sharply with the rest of the "Ink" (dark) website.

## Next Steps / Future Considerations
- Need to gather actual screenshots/images for the `Portfolio` section to replace placeholders.
- API integration for the `Contact` form needs backend implementation.
