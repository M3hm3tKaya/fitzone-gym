# FitZone Gym - Tech Context

## Dependencies
- next: latest (App Router)
- react / react-dom: latest
- typescript: latest
- tailwindcss: v4 (@tailwindcss/postcss)
- framer-motion: animations
- gsap + @gsap/react: advanced animations (available)
- lenis: smooth scrolling (available)
- clsx: conditional class names

## Project Structure
```
src/
  app/
    layout.tsx          # Root layout (Oswald + Inter fonts, Navbar, Footer)
    page.tsx            # Home page
    globals.css         # Tailwind v4 + custom styles
    uyelik/page.tsx     # Membership page
    antrenorler/page.tsx # Trainers page
    program/page.tsx    # Schedule page
    galeri/page.tsx     # Gallery page
    iletisim/page.tsx   # Contact page
  components/
    Navbar.tsx
    Footer.tsx
    SectionHeading.tsx
    ServiceCard.tsx
    StatsSection.tsx
    TrainerCard.tsx
    MembershipCard.tsx
    TransformationCard.tsx
  data/
    site-data.ts        # All site content/data
```

## Build Requirements
- No build errors
- TypeScript strict mode
- ESLint compliance
