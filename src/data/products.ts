import type { Id } from '../../convex/_generated/dataModel';

export interface Product {
  _id: Id<"products">;
  _creationTime: number;
  name: string;
  category: string;
  price: number;
  originalPrice?: number;
  image: string;
  description: string;
  isMonthlyOffer?: boolean;
  isFlashSale?: boolean;
  discount?: number;
  rating: number;
  reviews: number;
}

export const categories = [
  'All',
  'Living Room',
  'Bedroom',
  'Dining Room',
  'Office',
  'Outdoor',
];

// Products are now fetched from Convex backend.
// Use useQuery(api.products.getAll) in components.

export function formatPrice(priceInCents: number): string {
  return `KSh ${(priceInCents / 100).toLocaleString('en-KE', { minimumFractionDigits: 0 })}`;
}
