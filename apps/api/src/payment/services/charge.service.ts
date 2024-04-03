import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Charge } from '../models/charge.entity';
import { Repository } from 'typeorm';

@Injectable()
export class ChargeService {
  constructor(
    @InjectRepository(Charge) private chargeRepository: Repository<Charge>,
  ) {}
}
