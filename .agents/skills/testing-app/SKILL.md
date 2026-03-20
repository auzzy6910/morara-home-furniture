# Testing Morara Home Furniture

## Overview
This is a Vite + React + TypeScript e-commerce site with Tailwind CSS, Convex backend, and Clerk authentication.

## Build

### Known Issues
- `npm run build` runs `tsc -b && vite build`. The `tsc -b` step fails with pre-existing errors related to `convex/react-clerk` module resolution. This is a known issue in the repo, not caused by feature changes.
- `npm run lint` requires `eslint.config.js` which does not exist in the repo. This is a pre-existing configuration gap.

### Working Build Command
```bash
# Skip tsc and build directly with Vite
npx vite build
```

### Environment Variables Required at Build Time
Vite inlines environment variables during build. These MUST be set before building:
```bash
VITE_CONVEX_URL="<convex-url>" VITE_CLERK_PUBLISHABLE_KEY="<clerk-key>" npx vite build
```
Without these, the built app will show a blank page with "Add your Convex URL" error.

For testing purposes when the actual Convex backend isn't needed, a placeholder URL works:
```bash
VITE_CONVEX_URL="https://placeholder-convex.convex.cloud" npx vite build
```

## Local Testing

### Running the Production Build Locally
```bash
npx vite preview --port 4173
```
This serves the `dist/` folder on http://localhost:4173.

### Testing Responsive Layouts
- Use Chrome DevTools device toolbar to set viewport widths
- Key breakpoints: 375px (1 col), 640px+ (2 col), 1024px+ (3 col), 1280px+ (4 col)
- Product grids are on: HomePage (`/`) in Flash Sales, Monthly Offers, Featured Products sections; ShopPage (`/shop`); ProductPage (`/product/:id`) related products
- The device toolbar width field may reset when navigating to new URLs - re-enter the width after navigation

### Testing Image Optimization
- Open Network tab in DevTools, filter by "Img" type
- Reload the page to capture fresh requests
- Unsplash images should show `webp` in the Type column
- Click on an image request to verify `&fm=webp` in the Request URL and `image/webp` in Content-Type response header
- Verify `loading="lazy"` and `loading="eager"` attributes via built JS: `rg 'loading:"lazy"' dist/assets/*.js`

## Netlify Deployment

### Known Issues
- Netlify deploy previews fail because the build step (`npm run build`) fails on `tsc -b` errors
- The `netlify deploy --prod --dir=dist` command may trigger Netlify's own build step, overriding the local dist
- Direct API deploys via `curl` to Netlify's deploy API can work around this

### Deployment via Netlify API
If the CLI deploy doesn't work, use the Netlify API to upload files directly:
```bash
# Create deploy with file hashes, then upload individual files
curl -X POST -H "Authorization: Bearer $NETLIFY_AUTH_TOKEN" ...
```

### Restoring a Specific Deploy
```bash
curl -X POST -H "Authorization: Bearer $NETLIFY_AUTH_TOKEN" \
  "https://api.netlify.com/api/v1/sites/<site-id>/deploys/<deploy-id>/restore"
```

## Routes
- `/` - HomePage (hero, Flash Sales, Monthly Offers, Featured Products, Shop by Category)
- `/shop` - ShopPage (all products with filters)
- `/product/:id` - ProductPage (product detail + related products)
- `/cart` - CartPage
- `/about` - AboutPage
- `/contact` - ContactPage

## Devin Secrets Needed
- `NETLIFY_AUTH_TOKEN` - For deploying to Netlify (org-level secret)
