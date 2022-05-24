import { PrismaClient } from "@prisma/client";

export const prisma = new PrismaClient({ // this gives access to the database
	log: ["query"], // console logs any query that prisma does
});
