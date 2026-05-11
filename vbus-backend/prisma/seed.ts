import "dotenv/config";

import { PrismaClient } from "../generated/prisma/client";
import { PrismaBetterSqlite3 } from "@prisma/adapter-better-sqlite3";

import * as bcrypt from "bcrypt";

const adapter = new PrismaBetterSqlite3({
  url: process.env.DATABASE_URL!,
});

const prisma = new PrismaClient({
  adapter,
});
async function main() {
  const adminPassword = await bcrypt.hash("admin123", 10);

  const admin = await prisma.user.upsert({
    where: { email: "admin@vbus.com" },
    update: {},
    create: {
      email: "admin@vbus.com",
      fullName: "VBUS Administrator",
      password: adminPassword,
      role: "ADMIN",
      status: "ACTIVE",
      phone: "0901112222",
    },
  });

  console.log(admin);
}

main()
  .catch((e) => {
    console.error(e);
    process.exit(1);
  })
  .finally(async () => {
    await prisma.$disconnect();
  });
