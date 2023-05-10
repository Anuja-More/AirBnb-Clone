// const { PrismaClient } = require("@prisma/client");

// const client = new PrismaClient();
// if (process.env.NODE_ENV !== "production") global.prisma = client;

// module.exports = client;
// const { PrismaClient } = require("@prisma/client");

// global.prisma = global.prisma || new PrismaClient();

// if (process.env.NODE_ENV !== "production") {
//   global.prisma = global.prisma;
// }

// module.exports = global.prisma;
// lib/prisma.js

import { PrismaClient } from '@prisma/client';

let prisma;

if (process.env.NODE_ENV === 'production') {
  prisma = new PrismaClient();
} else {
  if (!global.prisma) {
    global.prisma = new PrismaClient();
  }
  prisma = global.prisma;
}

export default prisma;



