import { NestFactory } from '@nestjs/core'
import { AppModule } from './app.module'

import {
  FastifyAdapter,
  NestFastifyApplication,
} from '@nestjs/platform-fastify'

async function bootstrap() {
  // eslint-disable-next-line prettier/prettier
  const app = await NestFactory.create<NestFastifyApplication>(AppModule, new FastifyAdapter());
  await app.listen(3000, '0.0.0.0')
}
bootstrap()
