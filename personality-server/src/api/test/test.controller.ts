import { Controller, Get } from '@nestjs/common';
import { TestService } from './test.service';
import { QuestionDTO } from './dtos/question.dto';

@Controller('test')
export class TestController {
  constructor(private readonly testService: TestService) {}

  @Get()
  getTest(): QuestionDTO[] {
    return this.testService.getTest();
  }
}
