import { NestFactory } from '@nestjs/core'
import { AppModule } from './app.module'
import { DocumentBuilder, SwaggerModule } from '@nestjs/swagger'
import { INestApplication } from '@nestjs/common'

function SwaggerApi(api: INestApplication) {
    const config = new DocumentBuilder()
        .setTitle('Shop API')
        .setDescription('The is Shop Api Description')
        .setVersion('1.0.0')
        .addTag('shop')
        .addTag('aaa')
        .build()

    const document = SwaggerModule.createDocument(api, config)
    SwaggerModule.setup('api', api, document)
}

async function bootstrap() {
    const app = await NestFactory.create(AppModule)

    SwaggerApi(app)

    await app.listen(3000)
}
bootstrap()
