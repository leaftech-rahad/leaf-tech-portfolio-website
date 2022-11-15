import { PrismaClient } from "@prisma/client";

let prisma;

if (process.env.NODE_ENV === "production") {
  prisma = new PrismaClient({
    datasources: {
      db: {
        url: "postgresql://leafTechPortfolio_roadchosen:96ef70eab40093984a1d8401dd790fbab2df9421@l2i.h.filess.io:5432/leafTechPortfolio_roadchosen",
      },
    },
  });
} else {
  if (!global.prisma) {
    global.prisma = new PrismaClient({
      datasources: {
        db: {
          url: "postgresql://leafTechPortfolio_roadchosen:96ef70eab40093984a1d8401dd790fbab2df9421@l2i.h.filess.io:5432/leafTechPortfolio_roadchosen",
        },
      },
    });
  }
  prisma = global.prisma;
}

export default prisma;
