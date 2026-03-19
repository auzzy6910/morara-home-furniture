# Testing Morara Home Furniture Frontend

## Setup

1. Install dependencies: `npm install`
2. Start dev server: `npx vite --host 0.0.0.0` (runs on port 5173 by default, will auto-increment if port is in use)
3. Open browser to the URL shown in terminal output (e.g. `http://localhost:5173/`)

## Tech Stack

- React 18 + TypeScript
- Vite 6 (dev server & build)
- Tailwind CSS 3
- React Router v6 (client-side routing)
- Lucide React (icons)
- No backend / no auth required

## Key Pages & Routes

| Route | Page | Key Features |
|-------|------|--------------|
| `/` | HomePage | Hero, features strip, monthly offers, flash sale countdown, featured products, best sellers, trending, categories, testimonials, trust badges, newsletter |
| `/shop` | ShopPage | Category filters, sort, offers toggle |
| `/product/:id` | ProductPage | Product details, quantity selector, customer reviews, related products |
| `/cart` | CartPage | Cart items, order summary, checkout button |
| `/about` | AboutPage | Company story, stats, values |
| `/contact` | ContactPage | Contact form, business info |

## Testing Checklist

### Homepage Sections (scroll top to bottom)
- Announcement bar (dark, flash sale text with lightning icons)
- Header: Flash Sales nav link (red), search bar placeholder
- Hero section with store image
- Features strip (Free Delivery, Quality Guarantee, etc.)
- Monthly Offers with promo banner
- Flash Sale section with countdown timer (verify seconds actively decrement)
- Featured Products (4 cards)
- Best Sellers (3 cards with amber badges)
- Trending Now (3 cards with purple badges)
- Shop by Category (4 category cards)
- Customer Testimonials (4 cards + trust stats bar)
- Trust Badges (payment methods + security indicators)
- Newsletter subscription
- Footer (social media icons, payment method badges)

### Product Badges on Cards
- FLASH SALE: yellow, animated pulse (top-right)
- MONTHLY OFFER: white with red border (top-right, when not flash sale)
- BEST SELLER: amber (bottom-left)
- NEW: green with sparkle icon (bottom-left)
- TRENDING: purple (bottom-left)
- Discount: red "-X% OFF" (top-left)

### Product Page Reviews
- Products with reviews (IDs 1, 3, 4, 5, 6, 8): Show reviewer name, avatar, stars, date, "Verified Purchase" badge
- Products without reviews: Show empty state message

### WhatsApp Button
- Green floating button at bottom-right on all pages
- Tooltip "Chat with us on WhatsApp" on hover

## Build & Lint

- Build: `npm run build` (runs `tsc -b && vite build`)
- Lint: `npm run lint` — NOTE: the repo may be missing `eslint.config.js` (pre-existing issue). If lint fails due to missing config, this is not related to your changes.

## Notes

- Flash sale countdown resets daily (counts down to end of current day)
- All product data is hardcoded in `src/data/products.ts`
- No backend, no database, no auth
- Phone numbers, social media URLs, and WhatsApp link use placeholder values
- Product/testimonial images use Unsplash URLs
