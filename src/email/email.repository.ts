import { Injectable } from '@nestjs/common';
import { EntityRepository, Repository } from 'typeorm';
import { Email } from './entities/email.entity';

@Injectable()
@EntityRepository(Email)
export class EmailRepository extends Repository<Email> {}
