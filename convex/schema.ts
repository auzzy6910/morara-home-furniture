import { defineSchema, defineTable } from "convex/server";
import { v } from "convex/values";

export default defineSchema({
  products: defineTable({
    name: v.string(),
    description: v.string(),
    price: v.int64(),
    category: v.string(),
    dimensions: v.string(),
    imageUrls: v.array(v.string()),
  }).searchIndex("search_name", {
    searchField: "name",
  }),

  carts: defineTable({
    clerkId: v.string(),
    items: v.array(v.id("products")),
  }),

  orders: defineTable({
    clerkId: v.string(),
    totalAmount: v.int64(),
    status: v.string(),
    createdAt: v.number(),
  }),
});
