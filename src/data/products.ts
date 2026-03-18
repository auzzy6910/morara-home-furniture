export interface Product {
  id: number;
  name: string;
  category: string;
  price: number;
  originalPrice?: number;
  image: string;
  description: string;
  isMonthlyOffer?: boolean;
  isFlashSale?: boolean;
  isNewArrival?: boolean;
  isBestSeller?: boolean;
  isTrending?: boolean;
  discount?: number;
  rating: number;
  reviews: number;
}

export interface CustomerReview {
  id: number;
  name: string;
  avatar: string;
  rating: number;
  date: string;
  comment: string;
  productId: number;
  verified: boolean;
}

export interface Testimonial {
  id: number;
  name: string;
  location: string;
  avatar: string;
  rating: number;
  comment: string;
}

export const categories = [
  'All',
  'Living Room',
  'Bedroom',
  'Dining Room',
  'Office',
  'Outdoor',
];

export const products: Product[] = [
  {
    id: 1,
    name: 'Luxe Velvet Sofa',
    category: 'Living Room',
    price: 89999,
    originalPrice: 119999,
    image: 'https://images.unsplash.com/photo-1555041469-a586c61ea9bc?w=600&h=400&fit=crop',
    description: 'Sink into luxury with our premium velvet sofa. Featuring deep cushioning, elegant rolled arms, and a sturdy hardwood frame. Perfect for modern living rooms.',
    isMonthlyOffer: true,
    isFlashSale: true,
    isBestSeller: true,
    discount: 25,
    rating: 4.8,
    reviews: 124,
  },
  {
    id: 2,
    name: 'Modern Coffee Table',
    category: 'Living Room',
    price: 34999,
    image: 'https://images.unsplash.com/photo-1532372576444-dda954194ad0?w=600&h=400&fit=crop',
    description: 'Sleek and contemporary coffee table with a tempered glass top and minimalist metal legs. A perfect centerpiece for any living room.',
    isTrending: true,
    rating: 4.5,
    reviews: 89,
  },
  {
    id: 3,
    name: 'King Size Bed Frame',
    category: 'Bedroom',
    price: 129999,
    originalPrice: 159999,
    image: 'https://images.unsplash.com/photo-1505693314120-0d443867891c?w=600&h=400&fit=crop',
    description: 'Elegant king size bed frame crafted from solid oak wood with an upholstered headboard. Timeless design that transforms your bedroom.',
    isMonthlyOffer: true,
    isBestSeller: true,
    discount: 19,
    rating: 4.9,
    reviews: 203,
  },
  {
    id: 4,
    name: 'Ergonomic Office Chair',
    category: 'Office',
    price: 54999,
    originalPrice: 69999,
    image: 'https://images.unsplash.com/photo-1592078615290-033ee584e267?w=600&h=400&fit=crop',
    description: 'Work in comfort with our ergonomic office chair featuring lumbar support, adjustable height, and breathable mesh back.',
    isMonthlyOffer: true,
    isFlashSale: true,
    discount: 21,
    rating: 4.7,
    reviews: 156,
  },
  {
    id: 5,
    name: 'Dining Table Set (6 Seater)',
    category: 'Dining Room',
    price: 149999,
    image: 'https://images.unsplash.com/photo-1617806118233-18e1de247200?w=600&h=400&fit=crop',
    description: 'Beautiful 6-seater dining table set made from premium mahogany wood. Includes 6 matching chairs with plush seat cushions.',
    isBestSeller: true,
    rating: 4.6,
    reviews: 78,
  },
  {
    id: 6,
    name: 'Bookshelf Cabinet',
    category: 'Living Room',
    price: 44999,
    image: 'https://images.unsplash.com/photo-1594620302200-9a762244a156?w=600&h=400&fit=crop',
    description: 'Stylish bookshelf with 5 tiers and closed cabinet storage at the bottom. Made from engineered wood with a walnut finish.',
    isNewArrival: true,
    rating: 4.4,
    reviews: 67,
  },
  {
    id: 7,
    name: 'Bedside Nightstand',
    category: 'Bedroom',
    price: 19999,
    originalPrice: 24999,
    image: 'https://images.unsplash.com/photo-1532323544230-7191fd51bc1b?w=600&h=400&fit=crop',
    description: 'Compact bedside nightstand with two drawers and an open shelf. Perfect for keeping your essentials within reach.',
    isMonthlyOffer: true,
    discount: 20,
    rating: 4.3,
    reviews: 92,
  },
  {
    id: 8,
    name: 'Outdoor Patio Set',
    category: 'Outdoor',
    price: 179999,
    originalPrice: 229999,
    image: 'https://images.unsplash.com/photo-1600210492486-724fe5c67fb0?w=600&h=400&fit=crop',
    description: 'Complete outdoor patio furniture set including a sofa, 2 armchairs, and a coffee table. Weather-resistant wicker with comfortable cushions.',
    isMonthlyOffer: true,
    isFlashSale: true,
    discount: 22,
    rating: 4.7,
    reviews: 45,
  },
  {
    id: 9,
    name: 'Executive Desk',
    category: 'Office',
    price: 79999,
    image: 'https://images.unsplash.com/photo-1518455027359-f3f8164ba6bd?w=600&h=400&fit=crop',
    description: 'Large executive desk with built-in cable management, 3 drawers, and a spacious work surface. Perfect for a home office.',
    isNewArrival: true,
    isTrending: true,
    rating: 4.6,
    reviews: 112,
  },
  {
    id: 10,
    name: 'Accent Armchair',
    category: 'Living Room',
    price: 49999,
    image: 'https://images.unsplash.com/photo-1586023492125-27b2c045efd7?w=600&h=400&fit=crop',
    description: 'Statement accent armchair upholstered in premium fabric with wooden legs. Adds a touch of elegance to any corner.',
    isTrending: true,
    rating: 4.5,
    reviews: 88,
  },
  {
    id: 11,
    name: 'Wardrobe Closet',
    category: 'Bedroom',
    price: 159999,
    image: 'https://images.unsplash.com/photo-1558997519-83ea9252edf8?w=600&h=400&fit=crop',
    description: 'Spacious 3-door wardrobe with mirror, shelving, and hanging space. Built with premium materials for long-lasting durability.',
    isNewArrival: true,
    rating: 4.8,
    reviews: 134,
  },
  {
    id: 12,
    name: 'Garden Swing Chair',
    category: 'Outdoor',
    price: 64999,
    originalPrice: 84999,
    image: 'https://images.unsplash.com/photo-1520038410233-7141be7e6f97?w=600&h=400&fit=crop',
    description: 'Relaxing garden swing chair with canopy and cushioned seating. Perfect for enjoying lazy afternoons in your garden.',
    isMonthlyOffer: true,
    isFlashSale: true,
    discount: 24,
    rating: 4.4,
    reviews: 56,
  },
];

export const customerReviews: CustomerReview[] = [
  {
    id: 1,
    name: 'James Mwangi',
    avatar: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=100&h=100&fit=crop&crop=face',
    rating: 5,
    date: '2026-03-10',
    comment: 'The Luxe Velvet Sofa exceeded my expectations! Delivery was prompt and the quality is outstanding. My living room looks amazing now.',
    productId: 1,
    verified: true,
  },
  {
    id: 2,
    name: 'Grace Wanjiku',
    avatar: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=100&h=100&fit=crop&crop=face',
    rating: 5,
    date: '2026-03-08',
    comment: 'Best furniture store in Nairobi! The King Size Bed Frame is solid and beautifully crafted. Worth every shilling.',
    productId: 3,
    verified: true,
  },
  {
    id: 3,
    name: 'David Ochieng',
    avatar: 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=100&h=100&fit=crop&crop=face',
    rating: 4,
    date: '2026-03-05',
    comment: 'Great office chair with excellent lumbar support. I work from home and this has been a game changer for my back.',
    productId: 4,
    verified: true,
  },
  {
    id: 4,
    name: 'Faith Njeri',
    avatar: 'https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=100&h=100&fit=crop&crop=face',
    rating: 5,
    date: '2026-02-28',
    comment: 'Ordered the dining table set for my new house. The mahogany finish is gorgeous and the chairs are very comfortable. Highly recommend!',
    productId: 5,
    verified: true,
  },
  {
    id: 5,
    name: 'Peter Kamau',
    avatar: 'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=100&h=100&fit=crop&crop=face',
    rating: 5,
    date: '2026-02-20',
    comment: 'The patio set transformed our outdoor space. Weather-resistant and looks premium. Neighbours keep asking where we got it!',
    productId: 8,
    verified: true,
  },
  {
    id: 6,
    name: 'Mary Akinyi',
    avatar: 'https://images.unsplash.com/photo-1544005313-94ddf0286df2?w=100&h=100&fit=crop&crop=face',
    rating: 4,
    date: '2026-02-15',
    comment: 'Beautiful bookshelf cabinet. Assembly was easy with the provided instructions. Perfect for my home library.',
    productId: 6,
    verified: true,
  },
];

export const testimonials: Testimonial[] = [
  {
    id: 1,
    name: 'Sarah Kimani',
    location: 'Nairobi, Kenya',
    avatar: 'https://images.unsplash.com/photo-1531123897727-8f129e1688ce?w=100&h=100&fit=crop&crop=face',
    rating: 5,
    comment: 'Morara Home Furniture transformed our entire home. The quality is unmatched and their customer service is exceptional. I have been a loyal customer for 3 years now.',
  },
  {
    id: 2,
    name: 'Michael Otieno',
    location: 'Mombasa, Kenya',
    avatar: 'https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?w=100&h=100&fit=crop&crop=face',
    rating: 5,
    comment: 'From ordering to delivery, everything was seamless. The furniture arrived in perfect condition and looks even better in person. Highly recommended!',
  },
  {
    id: 3,
    name: 'Agnes Wambui',
    location: 'Nakuru, Kenya',
    avatar: 'https://images.unsplash.com/photo-1489424731084-a5d8b219a5bb?w=100&h=100&fit=crop&crop=face',
    rating: 5,
    comment: 'Best furniture shopping experience! The monthly offers saved me so much. My living room is now the talk of our estate. Thank you Morara!',
  },
  {
    id: 4,
    name: 'John Njuguna',
    location: 'Kisumu, Kenya',
    avatar: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=100&h=100&fit=crop&crop=face',
    rating: 5,
    comment: 'Furnished my entire office with Morara furniture. Professional look, durable build, and the prices are very competitive. Will definitely order again.',
  },
];

export function formatPrice(priceInCents: number): string {
  return `KSh ${(priceInCents / 100).toLocaleString('en-KE', { minimumFractionDigits: 0 })}`;
}

export function getFlashSaleEndTime(): Date {
  const now = new Date();
  const end = new Date(now);
  end.setHours(23, 59, 59, 999);
  if (end.getTime() - now.getTime() < 3600000) {
    end.setDate(end.getDate() + 1);
  }
  return end;
}
