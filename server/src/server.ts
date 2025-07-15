import { fastify } from 'fastify'
import { fastifyCors } from '@fastify/cors'
import { fastifyMultipart } from '@fastify/multipart'
import {
  serializerCompiler,
  validatorCompiler,
  type ZodTypeProvider,
} from 'fastify-type-provider-zod'
import 'dotenv/config'

import { env } from './env.ts'
import { createRoomRoute } from './http/routes/create-room.ts'
import { getRoomsRoute } from './http/routes/get-rooms.ts'
import { getRoomQuestions } from './http/routes/get-room-questions.ts'
import { createQuestionRoute } from './http/routes/create-question.ts'
import { uploadAudioRoute } from './http/routes/upload-audio.ts'

const app = fastify().withTypeProvider<ZodTypeProvider>()

app.register(fastifyCors, {
  origin: (origin, cb) => {
    const allowedOrigins = [process.env.CLIENT_URL, 'http://localhost:5173'].filter(Boolean)
    if (!origin || allowedOrigins.includes(origin)) {
      cb(null, true)
    } else {
      cb(new Error('Origin not allowed'), false)
    }
  },
})

app.register(fastifyMultipart)
app.setSerializerCompiler(serializerCompiler)
app.setValidatorCompiler(validatorCompiler)

app.get('/health', () => 'OK')

app.register(getRoomsRoute)
app.register(createRoomRoute)
app.register(getRoomQuestions)
app.register(createQuestionRoute)
app.register(uploadAudioRoute)

app.listen({
  port: env.PORT,
  host: '0.0.0.0',
}).then(() => {
  console.log(`✅ HTTP server running at http://localhost:${env.PORT}`)
})
