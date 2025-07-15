import { pgTable, text, timestamp, uuid } from 'drizzle-orm/pg-core'
import { rooms } from './rooms.ts'

export const questions = pgTable('questions', {
  id: uuid().primaryKey().defaultRandom(),
  roomId: uuid('room_id').notNull().references(() => rooms.id),
  question: text().notNull(),
  answer: text(),
  createdAt: timestamp().defaultNow().notNull(),
})
