import { Module } from '@nestjs/common';
import { EmailService } from './email.service';
import { EmailController } from './email.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Email } from './entities/email.entity';
import { EmailRepository } from './email.repository';

@Module({
  imports: [TypeOrmModule.forFeature([Email, EmailRepository])],
  controllers: [EmailController],
  providers: [EmailService],
})
export class EmailModule {}
