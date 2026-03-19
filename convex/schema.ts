import { defineSchema, defineTable } from "convex/server";
import { v } from "convex/values";

export default defineSchema({
  products: defineTable({
    name: v.string(),
    category: v.string(),
    price: v.number(),
    originalPrice: v.optional(v.number()),
    image: v.string(),
    description: v.string(),
    isMonthlyOffer: v.optional(v.boolean()),
    isFlashSale: v.optional(v.boolean()),
    discount: v.optional(v.number()),
    rating: v.number(),
    reviews: v.number(),
  })
    .index("by_category", ["category"])
    .searchIndex("search_name", { searchField: "name" }),

  carts: defineTable({
    clerkId: v.string(),
    items: v.array(
      v.object({
        productId: v.id("products"),
        quantity: v.number(),
      })
    ),
  }).index("by_clerkId", ["clerkId"]),

  orders: defineTable({
    clerkId: v.string(),
    items: v.array(
      v.object({
        productId: v.id("products"),
        quantity: v.number(),
        price: v.number(),
      })
    ),
    totalAmount: v.number(),
    status: v.string(),
    createdAt: v.number(),
  }).index("by_clerkId", ["clerkId"]),
});
