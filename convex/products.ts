import { query, mutation } from "./_generated/server";
import { v } from "convex/values";

/**
 * Fetch all furniture products.
 */
export const getAll = query({
  args: {},
  handler: async (ctx) => {
    return await ctx.db.query("products").collect();
  },
});

/**
 * Add a new product (Admin only).
 * Requires the caller to be authenticated.
 */
export const addProduct = mutation({
  args: {
    name: v.string(),
    description: v.string(),
    price: v.int64(),
    category: v.string(),
    dimensions: v.string(),
    imageUrls: v.array(v.string()),
  },
  handler: async (ctx, args) => {
    const identity = await ctx.auth.getUserIdentity();
    if (!identity) {
      throw new Error("Unauthorized: You must be logged in to add products.");
    }

    return await ctx.db.insert("products", {
      name: args.name,
      description: args.description,
      price: args.price,
      category: args.category,
      dimensions: args.dimensions,
      imageUrls: args.imageUrls,
    });
  },
});
