# Testing Morara Home Furniture Frontend

## Prerequisites

- Node.js 22+
- npm

## Environment Variables

The app requires two env vars in `.env.local`:
- `VITE_CLERK_PUBLISHABLE_KEY` — Clerk publishable key
- `VITE_CONVEX_URL` — Convex deployment URL

Without `VITE_CONVEX_URL`, the app will throw on startup. For frontend-only testing (e.g., layout, styling, static data components), you can use a placeholder Convex URL. The static product data in `src/data/products.ts` will still render.

## Devin Secrets Needed

- `VITE_CLERK_PUBLISHABLE_KEY` (already in `.env.local`)
- `VITE_CONVEX_URL` (needs a real Convex deployment for full backend testing)

## Running the Dev Server

```bash
npm run dev -- --host 0.0.0.0 --port 5173
```

The app will be available at `http://localhost:5173`.

## Build & Type Checks

```bash
# TypeScript type check
npm run build

# Note: eslint config (eslint.config.js) may not exist yet.
# npm run lint might fail due to missing config — this is a pre-existing issue.
```

If `tsc` or `vite` binaries fail with "Permission denied", run:
```bash
chmod +x node_modules/.bin/tsc node_modules/.bin/vite node_modules/.bin/eslint
```

## Testing Responsive Layouts

The app uses Tailwind CSS breakpoints:
- Mobile: `grid-cols-2` (< 1024px)
- Desktop: `lg:grid-cols-4` (>= 1024px)

To test responsive layouts:
1. Open Chrome DevTools (F12)
2. Click the device toolbar toggle icon
3. Set viewport width (e.g., 400px for mobile, 1024px+ for desktop)
4. Verify column counts and hover behaviors

## Key Pages

- `/` — Home page with hero, flash sales, monthly offers, featured products
- `/shop` — Shop page with filters, category sidebar, product grid
- `/product/:id` — Product detail page
- `/cart` — Cart page
- `/about` — About page
- `/contact` — Contact page

## Component Architecture

- `ProductCard.tsx` — Original product card (used in HomePage, ShopPage)
- `ProductGrid.tsx` — New responsive grid with hover Quick Add (may not be wired into pages yet)
- `CartContext.tsx` — React context for cart state management
- Static product data lives in `src/data/products.ts`

## Convex Backend Testing

Convex backend functions (`convex/products.ts`, `convex/cart.ts`) require a real Convex deployment. To test:
1. Run `npx convex dev` to provision a deployment and get a URL
2. Add the URL to `.env.local` as `VITE_CONVEX_URL`
3. The `convex/_generated/` directory is auto-created by `npx convex dev`

Without a real deployment, Convex functions can only be verified via TypeScript compilation (`npm run build`), not runtime testing.

## Known Issues

- The eslint config file (`eslint.config.js`) might not exist, causing `npm run lint` to fail. This is not a blocker for testing.
- Node binaries in `node_modules/.bin/` may lack execute permissions after `npm install`. Fix with `chmod +x`.
