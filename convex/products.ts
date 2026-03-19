import { query, mutation } from "./_generated/server";
import { v } from "convex/values";

/**
 * Fetch all products.
 */
export const getAll = query({
  args: {},
  handler: async (ctx) => {
    return await ctx.db.query("products").collect();
  },
});

/**
 * Fetch products by category.
 */
export const getByCategory = query({
  args: { category: v.string() },
  handler: async (ctx, args) => {
    return await ctx.db
      .query("products")
      .withIndex("by_category", (q) => q.eq("category", args.category))
      .collect();
  },
});

/**
 * Fetch a single product by ID.
 */
export const getById = query({
  args: { id: v.id("products") },
  handler: async (ctx, args) => {
    return await ctx.db.get(args.id);
  },
});

/**
 * Search products by name.
 */
export const search = query({
  args: { searchTerm: v.string() },
  handler: async (ctx, args) => {
    return await ctx.db
      .query("products")
      .withSearchIndex("search_name", (q) => q.search("name", args.searchTerm))
      .collect();
  },
});

/**
 * Add a new product (requires authentication).
 */
export const add = mutation({
  args: {
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
  },
  handler: async (ctx, args) => {
    const identity = await ctx.auth.getUserIdentity();
    if (!identity) {
      throw new Error("Unauthorized: You must be logged in to add products.");
    }
    return await ctx.db.insert("products", args);
  },
});
