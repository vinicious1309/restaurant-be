import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

export const createContext = ({ req, res }: { req: any; res: any }) => ({
  req,
  res,
  prisma,
});
