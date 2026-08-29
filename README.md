# Alma Balcánica

Next.js foundation for a boutique travel brand serving Spanish-speaking travelers who want to discover Serbia and the Balkans.

## Stack

- Next.js 16 App Router
- TypeScript strict mode
- Tailwind CSS v4
- ESLint
- Server Components by default
- `lucide-react` for icons

## Scripts

```bash
npm run dev
npm run lint
npm run build
```

## Structure

- Spanish default routes live under `src/app/(es)` and render at `/`.
- English routes live under `src/app/en` and render at `/en`.
- Shared copy is in `src/messages`.
- Brand, tour, operator, destination, article, navigation, and media records are in `src/data`.
- Route translations and SEO helpers are in `src/lib`.
- Reusable UI, layout, travel, destination, experience, contact, and page sections are in `src/components`.

## Notes

Known operator information currently used in public trust components:

- Victor Tours
- Tour operator license OTP 22/2025
- Category A

Prices, departure dates, hotels, reviews, payment processors, insurance details, refund deadlines, guarantee amounts, WhatsApp number, and public email are intentionally placeholders until verified.
