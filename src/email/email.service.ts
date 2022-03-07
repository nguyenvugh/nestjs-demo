import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { toLimitOffset, toListResponse } from 'src/utils/common.utils';
import { In, Like } from 'typeorm';
import { CreateEmailDto } from './dto/create-email.dto';
import { DeleteEmailDto } from './dto/delete-email.dto';
import { EmailQuery } from './email.interface';
import { EmailRepository } from './email.repository';
import { Email } from './entities/email.entity';

@Injectable()
export class EmailService {
  constructor(
    @InjectRepository(EmailRepository)
    private readonly emailRepository: EmailRepository,
  ) {}

  create(createEmailDto: CreateEmailDto) {
    const newEmail = new Email();
    newEmail.email = createEmailDto.email;
    return this.emailRepository.save(newEmail);
  }

  async findAll({ email, page, size }: EmailQuery) {
    const { limit, offset } = toLimitOffset(page, size);
    const [data, total] = await this.emailRepository.findAndCount({
      where: {
        email: email ? Like(`%${email}%`) : Like(`%`),
      },
      skip: offset || 0,
      take: limit || 10,
      order: {
        id: 'DESC',
      },
    });

    return toListResponse(data, total);
  }

  remove(deleteEmailDto: DeleteEmailDto) {
    return this.emailRepository.delete({
      id: In(deleteEmailDto.ids),
    });
  }
}
