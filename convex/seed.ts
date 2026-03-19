import { mutation } from "./_generated/server";

const seedProducts = [
  {
    name: "Luxe Velvet Sofa",
    category: "Living Room",
    price: 89999,
    originalPrice: 119999,
    image: "https://images.unsplash.com/photo-1555041469-a586c61ea9bc?w=600&h=400&fit=crop",
    description: "Sink into luxury with our premium velvet sofa. Featuring deep cushioning, elegant rolled arms, and a sturdy hardwood frame. Perfect for modern living rooms.",
    isMonthlyOffer: true,
    discount: 25,
    rating: 4.8,
    reviews: 124,
  },
  {
    name: "Modern Coffee Table",
    category: "Living Room",
    price: 17499,
    originalPrice: 34999,
    image: "https://images.unsplash.com/photo-1532372576444-dda954194ad0?w=600&h=400&fit=crop",
    description: "Sleek and contemporary coffee table with a tempered glass top and minimalist metal legs. A perfect centerpiece for any living room.",
    isFlashSale: true,
    discount: 50,
    rating: 4.5,
    reviews: 89,
  },
  {
    name: "King Size Bed Frame",
    category: "Bedroom",
    price: 129999,
    originalPrice: 159999,
    image: "https://images.unsplash.com/photo-1505693314120-0d443867891c?w=600&h=400&fit=crop",
    description: "Elegant king size bed frame crafted from solid oak wood with an upholstered headboard. Timeless design that transforms your bedroom.",
    isMonthlyOffer: true,
    discount: 19,
    rating: 4.9,
    reviews: 203,
  },
  {
    name: "Ergonomic Office Chair",
    category: "Office",
    price: 54999,
    originalPrice: 69999,
    image: "https://images.unsplash.com/photo-1592078615290-033ee584e267?w=600&h=400&fit=crop",
    description: "Work in comfort with our ergonomic office chair featuring lumbar support, adjustable height, and breathable mesh back.",
    isMonthlyOffer: true,
    discount: 21,
    rating: 4.7,
    reviews: 156,
  },
  {
    name: "Dining Table Set (6 Seater)",
    category: "Dining Room",
    price: 89999,
    originalPrice: 149999,
    image: "https://images.unsplash.com/photo-1617806118233-18e1de247200?w=600&h=400&fit=crop",
    description: "Beautiful 6-seater dining table set made from premium mahogany wood. Includes 6 matching chairs with plush seat cushions.",
    isFlashSale: true,
    discount: 40,
    rating: 4.6,
    reviews: 78,
  },
  {
    name: "Bookshelf Cabinet",
    category: "Living Room",
    price: 44999,
    image: "https://images.unsplash.com/photo-1594620302200-9a762244a156?w=600&h=400&fit=crop",
    description: "Stylish bookshelf with 5 tiers and closed cabinet storage at the bottom. Made from engineered wood with a walnut finish.",
    rating: 4.4,
    reviews: 67,
  },
  {
    name: "Bedside Nightstand",
    category: "Bedroom",
    price: 19999,
    originalPrice: 24999,
    image: "https://images.unsplash.com/photo-1532323544230-7191fd51bc1b?w=600&h=400&fit=crop",
    description: "Compact bedside nightstand with two drawers and an open shelf. Perfect for keeping your essentials within reach.",
    isMonthlyOffer: true,
    discount: 20,
    rating: 4.3,
    reviews: 92,
  },
  {
    name: "Outdoor Patio Set",
    category: "Outdoor",
    price: 179999,
    originalPrice: 229999,
    image: "https://images.unsplash.com/photo-1600210492486-724fe5c67fb0?w=600&h=400&fit=crop",
    description: "Complete outdoor patio furniture set including a sofa, 2 armchairs, and a coffee table. Weather-resistant wicker with comfortable cushions.",
    isMonthlyOffer: true,
    discount: 22,
    rating: 4.7,
    reviews: 45,
  },
  {
    name: "Executive Desk",
    category: "Office",
    price: 39999,
    originalPrice: 79999,
    image: "https://images.unsplash.com/photo-1518455027359-f3f8164ba6bd?w=600&h=400&fit=crop",
    description: "Large executive desk with built-in cable management, 3 drawers, and a spacious work surface. Perfect for a home office.",
    isFlashSale: true,
    discount: 50,
    rating: 4.6,
    reviews: 112,
  },
  {
    name: "Accent Armchair",
    category: "Living Room",
    price: 29999,
    originalPrice: 49999,
    image: "https://images.unsplash.com/photo-1586023492125-27b2c045efd7?w=600&h=400&fit=crop",
    description: "Statement accent armchair upholstered in premium fabric with wooden legs. Adds a touch of elegance to any corner.",
    isFlashSale: true,
    discount: 40,
    rating: 4.5,
    reviews: 88,
  },
  {
    name: "Wardrobe Closet",
    category: "Bedroom",
    price: 159999,
    image: "https://images.unsplash.com/photo-1558997519-83ea9252edf8?w=600&h=400&fit=crop",
    description: "Spacious 3-door wardrobe with mirror, shelving, and hanging space. Built with premium materials for long-lasting durability.",
    rating: 4.8,
    reviews: 134,
  },
  {
    name: "Garden Swing Chair",
    category: "Outdoor",
    price: 64999,
    originalPrice: 84999,
    image: "https://images.unsplash.com/photo-1520038410233-7141be7e6f97?w=600&h=400&fit=crop",
    description: "Relaxing garden swing chair with canopy and cushioned seating. Perfect for enjoying lazy afternoons in your garden.",
    isMonthlyOffer: true,
    discount: 24,
    rating: 4.4,
    reviews: 56,
  },
];

/**
 * Seed the products table with initial data.
 * Run this once via the Convex dashboard or CLI.
 */
export const seedProducts_ = mutation({
  args: {},
  handler: async (ctx) => {
    const existing = await ctx.db.query("products").first();
    if (existing) {
      return "Products table already has data. Skipping seed.";
    }

    for (const product of seedProducts) {
      await ctx.db.insert("products", product);
    }

    return `Seeded ${seedProducts.length} products.`;
  },
});
