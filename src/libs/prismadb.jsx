// const { PrismaClient } = require("@prisma/client");

// const client = new PrismaClient();
// if (process.env.NODE_ENV !== "production") global.prisma = client;

// module.exports = client;
const { PrismaClient } = require("@prisma/client");

global.prisma = global.prisma || new PrismaClient();

if (process.env.NODE_ENV !== "production") {
  global.prisma = global.prisma;
}

module.exports = global.prisma;


