import { query, mutation } from "./_generated/server";
import { v } from "convex/values";

/**
 * Get the current user's cart.
 */
export const get = query({
  args: {},
  handler: async (ctx) => {
    const identity = await ctx.auth.getUserIdentity();
    if (!identity) {
      return null;
    }
    const cart = await ctx.db
      .query("carts")
      .withIndex("by_clerkId", (q) => q.eq("clerkId", identity.subject))
      .first();
    return cart;
  },
});

/**
 * Add a product to the cart or increase its quantity.
 */
export const addItem = mutation({
  args: { productId: v.id("products") },
  handler: async (ctx, args) => {
    const identity = await ctx.auth.getUserIdentity();
    if (!identity) {
      throw new Error("Unauthorized: You must be logged in to modify the cart.");
    }

    const cart = await ctx.db
      .query("carts")
      .withIndex("by_clerkId", (q) => q.eq("clerkId", identity.subject))
      .first();

    if (!cart) {
      await ctx.db.insert("carts", {
        clerkId: identity.subject,
        items: [{ productId: args.productId, quantity: 1 }],
      });
      return;
    }

    const existingItem = cart.items.find(
      (item) => item.productId === args.productId
    );

    if (existingItem) {
      const updatedItems = cart.items.map((item) =>
        item.productId === args.productId
          ? { ...item, quantity: item.quantity + 1 }
          : item
      );
      await ctx.db.patch(cart._id, { items: updatedItems });
    } else {
      await ctx.db.patch(cart._id, {
        items: [...cart.items, { productId: args.productId, quantity: 1 }],
      });
    }
  },
});

/**
 * Remove a product from the cart.
 */
export const removeItem = mutation({
  args: { productId: v.id("products") },
  handler: async (ctx, args) => {
    const identity = await ctx.auth.getUserIdentity();
    if (!identity) {
      throw new Error("Unauthorized: You must be logged in to modify the cart.");
    }

    const cart = await ctx.db
      .query("carts")
      .withIndex("by_clerkId", (q) => q.eq("clerkId", identity.subject))
      .first();

    if (!cart) return;

    const updatedItems = cart.items.filter(
      (item) => item.productId !== args.productId
    );
    await ctx.db.patch(cart._id, { items: updatedItems });
  },
});

/**
 * Update the quantity of a product in the cart.
 */
export const updateQuantity = mutation({
  args: {
    productId: v.id("products"),
    quantity: v.number(),
  },
  handler: async (ctx, args) => {
    const identity = await ctx.auth.getUserIdentity();
    if (!identity) {
      throw new Error("Unauthorized: You must be logged in to modify the cart.");
    }

    const cart = await ctx.db
      .query("carts")
      .withIndex("by_clerkId", (q) => q.eq("clerkId", identity.subject))
      .first();

    if (!cart) return;

    if (args.quantity <= 0) {
      const updatedItems = cart.items.filter(
        (item) => item.productId !== args.productId
      );
      await ctx.db.patch(cart._id, { items: updatedItems });
    } else {
      const updatedItems = cart.items.map((item) =>
        item.productId === args.productId
          ? { ...item, quantity: args.quantity }
          : item
      );
      await ctx.db.patch(cart._id, { items: updatedItems });
    }
  },
});

/**
 * Clear the entire cart.
 */
export const clear = mutation({
  args: {},
  handler: async (ctx) => {
    const identity = await ctx.auth.getUserIdentity();
    if (!identity) {
      throw new Error("Unauthorized: You must be logged in to modify the cart.");
    }

    const cart = await ctx.db
      .query("carts")
      .withIndex("by_clerkId", (q) => q.eq("clerkId", identity.subject))
      .first();

    if (!cart) return;
    await ctx.db.patch(cart._id, { items: [] });
  },
});
