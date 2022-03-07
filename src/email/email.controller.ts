import { Body, Controller, Delete, Get, Post, Query } from '@nestjs/common';
import { CreateEmailDto } from './dto/create-email.dto';
import { DeleteEmailDto } from './dto/delete-email.dto';
import { EmailQuery } from './email.interface';
import { EmailService } from './email.service';

@Controller('email')
export class EmailController {
  constructor(private readonly emailService: EmailService) {}

  @Post()
  create(@Body() createEmailDto: CreateEmailDto) {
    return this.emailService.create(createEmailDto);
  }

  @Get()
  findAll(@Query() query: EmailQuery) {
    return this.emailService.findAll(query);
  }

  @Delete()
  remove(@Body() body: DeleteEmailDto) {
    return this.emailService.remove(body);
  }
}
