# Testing Frontend - Morara Home Furniture

## Local Development Setup

1. Install dependencies: `npm install`
2. Start dev server: `node_modules/.bin/vite --port 5173`
   - Note: You may need to `chmod +x node_modules/.bin/vite` and `chmod +x node_modules/.bin/tsc` first if permissions are not set
3. The app will be available at `http://localhost:5173/`

## Common Issues

- **Rollup native module error**: If you see `Cannot find module @rollup/rollup-linux-x64-gnu`, delete `node_modules` and `package-lock.json`, then run `npm install` again. This is a known npm bug with optional dependencies.
- **TypeScript permission denied**: Run `chmod +x node_modules/.bin/tsc` before running type checks.

## Build & Type Checking

- Type check: `node_modules/.bin/tsc -b`
- Full build: `npm run build` (runs tsc + vite build)
- There is no CI configured on this repo currently.

## Testing Frontend Changes

1. Run the dev server locally
2. Open `http://localhost:5173/` in the browser
3. For visual comparison tasks, open both the local app and the reference URL in separate tabs
4. Scroll through all sections and compare layout, colors, typography, spacing
5. Test interactive elements (carousels, navigation dots, hover effects, form inputs)
6. The app uses Clerk for authentication (`@clerk/clerk-react`) — you may see auth-related errors in the console if `VITE_CLERK_PUBLISHABLE_KEY` is not set in `.env.local`

## Project Structure

- `src/pages/` — Page components (HomePage, ShopPage, etc.)
- `src/components/` — Shared components (Header, Footer, ProductCard)
- `src/data/products.ts` — Product data and types
- `src/context/CartContext.tsx` — Cart state management
- Styling: Tailwind CSS with custom animations in `src/index.css`

## Key Technologies

- React 18 + TypeScript
- Vite 6
- Tailwind CSS 3
- React Router DOM 6
- Lucide React (icons)
- Clerk (authentication)
