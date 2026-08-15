# XarKode - Design System

## 1. Core Philosophy
The design language of XarKode is **"Cinematic Dark Premium."** It relies on deep, moody backgrounds, vibrant gradient accents, and frosted glass elements (glassmorphism) to create depth and a high-end tech feel.

## 2. Color Palette
### Brand Gradients
- **Brand Teal:** `#2ee6c5` (Primary accent)
- **Brand Blue:** `#3b82f6` (Secondary accent)
- *Usage:* Text gradients, button backgrounds, border glows.

### Dark Surface Scale ("Ink")
- **Ink 900:** `#0d1117` (App background, darkest layer)
- **Ink 800:** `#131920` (Elevated cards, subtle differentiation)
- **Ink 700:** `#1a2230` (Hover states)
- **Ink 600:** `#252f40` (Borders, subtle dividers)
- **Ink 500:** `#3d4a5c` (Muted text, secondary icons)

### Paper Scale (Light Mode Exceptions)
- **Paper:** `#f5f7fa` (Used specifically for the Portfolio section to create high contrast)
- **Paper Line:** `#e2e8f0` (Borders within light sections)

## 3. Typography
- **Display Font:** `Plus Jakarta Sans` (Extrabold, tightly tracked. Used for massive headlines and numbers).
- **Body Font:** `Inter` (Clean, legible. Used for paragraphs, UI elements, and metadata).

## 4. UI Patterns & Effects
- **Glassmorphism (`.glass-card-strong`):**
  - High backdrop blur (16px to 24px).
  - Very low opacity white background (`rgba(255,255,255,0.04)`).
  - Subtle inner shadow to simulate light reflecting off glass edges.
- **Glow Borders (`.glow-border`):**
  - An animated conic gradient rotating beneath a mask to create a traveling neon border effect on hover.
- **Cinematic Overlays:**
  - Using `mix-blend-multiply` and `bg-gradient-to-t` over high-res images to create dark, text-friendly hero sections.
