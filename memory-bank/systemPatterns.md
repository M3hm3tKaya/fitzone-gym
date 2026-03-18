# FitZone Gym - System Patterns

## Architecture
- Next.js App Router with `src/` directory
- Client components with "use client" for interactive pages
- Server-side layout with Navbar/Footer
- Centralized data in `src/data/site-data.ts`

## Component Patterns
- `SectionHeading` - Reusable section title with accent, title, subtitle, orange underline
- `ServiceCard` - Card with orange top border, icon, hover animation
- `TrainerCard` - Portrait card with badge overlay
- `MembershipCard` - Pricing card with feature checklist
- `TransformationCard` - Before/after comparison card
- `Navbar` - Fixed top, mobile hamburger with Framer Motion
- `Footer` - 4-column grid with brand, links, contact, hours

## Styling Conventions
- Tailwind CSS v4 with @theme inline for custom colors
- Font classes: `font-[family-name:var(--font-oswald)]` for headings
- All headings: UPPERCASE, tracked wider
- Orange accent color for CTAs, badges, borders
- Dark cards (#141414) on black (#0D0D0D) background

## Animation Patterns
- Framer Motion for scroll-triggered and page animations
- Duration: 0.3-0.5s (energetic, snappy)
- `whileInView` with `viewport: { once: true }` for scroll reveals
- Staggered delays: `index * 0.1` for grid items
