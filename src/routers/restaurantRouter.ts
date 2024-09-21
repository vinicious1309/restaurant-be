import { initTRPC } from "@trpc/server";
import { z } from "zod";
import prisma from "../prisma";

const t = initTRPC.create();

export const restaurantRouter = t.router({
  getRestaurants: t.procedure.query(async () => {
    return await prisma.restaurant.findMany();
  }),
  addFavorite: t.procedure
    .input(z.object({ restaurantId: z.string() }))
    .mutation(async ({ input }) => {
      return await prisma.restaurant.update({
        where: { id: input.restaurantId },
        data: { isFavorite: true },
      });
    }),
});

export type AppRouter = typeof restaurantRouter;
