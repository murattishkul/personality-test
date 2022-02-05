import { Injectable } from '@nestjs/common';
import { QuestionDTO } from './dtos/question.dto';
import { data } from './constants/data';

@Injectable()
export class TestService {
  private readonly testBank: QuestionDTO[];
  constructor() {
    this.testBank = data;
  }

  getTest(): QuestionDTO[] {
    console.log('get this test bank!');
    return this.testBank;
  }
}
