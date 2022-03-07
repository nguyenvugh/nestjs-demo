import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { EmailModule } from './email/email.module';
import { Email } from './email/entities/email.entity';

@Module({
  imports: [
    TypeOrmModule.forRoot({
      entities: [Email],
      synchronize: false,
    }),
    EmailModule,
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
