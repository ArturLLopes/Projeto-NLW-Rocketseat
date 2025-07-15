import { desc } from 'drizzle-orm'
import type { FastifyPluginCallbackZod } from 'fastify-type-provider-zod'
import { z } from 'zod'
import { db } from '../../db/connection.ts'
import { schema } from '../../db/schema/index.ts'

export const getRoomsRoute: FastifyPluginCallbackZod = (app) => {
  app.get(
    '/rooms',
    {
      schema: {
        response: {
          200: z.object({
            rooms: z.array(
              z.object({
                id: z.string().uuid(),
                name: z.string(),
                description: z.string().nullable(),
                createdAt: z.string().datetime(),
              }),
            ),
          }),
        },
      },
    },
    async (_request, reply) => {
      const rooms = await db.select().from(schema.rooms).orderBy(desc(schema.rooms.createdAt))

      return reply.send({ rooms })
    }
  )
}