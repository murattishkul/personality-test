import {
  IsDefined,
  IsNotEmpty,
  IsOptional,
  IsString,
  IsNumber,
  ValidateNested,
} from 'class-validator';
import { AnswerDTO } from './answer.dto';

export class QuestionDTO {
  @IsDefined()
  @IsString()
  readonly question: string;

  @IsDefined()
  readonly answers: AnswerDTO[];
}
