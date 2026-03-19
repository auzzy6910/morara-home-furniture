import { query, mutation } from "./_generated/server";
import { v } from "convex/values";

/**
 * Get all orders for the current user.
 */
export const getMyOrders = query({
  args: {},
  handler: async (ctx) => {
    const identity = await ctx.auth.getUserIdentity();
    if (!identity) {
      return [];
    }
    return await ctx.db
      .query("orders")
      .withIndex("by_clerkId", (q) => q.eq("clerkId", identity.subject))
      .collect();
  },
});

/**
 * Create an order from the current cart.
 */
export const create = mutation({
  args: {
    items: v.array(
      v.object({
        productId: v.id("products"),
        quantity: v.number(),
        price: v.number(),
      })
    ),
    totalAmount: v.number(),
  },
  handler: async (ctx, args) => {
    const identity = await ctx.auth.getUserIdentity();
    if (!identity) {
      throw new Error("Unauthorized: You must be logged in to place an order.");
    }

    const orderId = await ctx.db.insert("orders", {
      clerkId: identity.subject,
      items: args.items,
      totalAmount: args.totalAmount,
      status: "pending",
      createdAt: Date.now(),
    });

    // Clear the user's cart after placing an order
    const cart = await ctx.db
      .query("carts")
      .withIndex("by_clerkId", (q) => q.eq("clerkId", identity.subject))
      .first();

    if (cart) {
      await ctx.db.patch(cart._id, { items: [] });
    }

    return orderId;
  },
});
