import { mutation } from "./_generated/server";
import { v } from "convex/values";

/**
 * Toggle a product in the user's cart.
 * If the product is already in the cart, remove it.
 * If it's not in the cart, add it.
 */
export const toggleItem = mutation({
  args: {
    clerkId: v.string(),
    productId: v.id("products"),
  },
  handler: async (ctx, args) => {
    const identity = await ctx.auth.getUserIdentity();
    if (!identity) {
      throw new Error("Unauthorized: You must be logged in to modify the cart.");
    }

    // Find the user's existing cart
    const existingCart = await ctx.db
      .query("carts")
      .filter((q) => q.eq(q.field("clerkId"), args.clerkId))
      .first();

    if (!existingCart) {
      // No cart exists — create one with this product
      await ctx.db.insert("carts", {
        clerkId: args.clerkId,
        items: [args.productId],
      });
      return { action: "added" };
    }

    const index = existingCart.items.indexOf(args.productId);

    if (index === -1) {
      // Product not in cart — add it
      await ctx.db.patch(existingCart._id, {
        items: [...existingCart.items, args.productId],
      });
      return { action: "added" };
    } else {
      // Product already in cart — remove it
      const updatedItems = existingCart.items.filter(
        (id) => id !== args.productId
      );
      await ctx.db.patch(existingCart._id, {
        items: updatedItems,
      });
      return { action: "removed" };
    }
  },
});
