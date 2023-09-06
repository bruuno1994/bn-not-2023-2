import { PrismaClient } from '@prisma/client'

const prisma = new PrismaClient()

export default prisma

// quem recebe é o routes, que manda para o controller, que aciona o prisma, que requisita ao MongoDB
// tudo passa pelo controller