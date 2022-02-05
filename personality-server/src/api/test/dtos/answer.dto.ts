import {
  IsDefined,
  IsNotEmpty,
  IsOptional,
  IsString,
  IsNumber,
  IsUUID,
  ValidateNested,
} from 'class-validator';

export class AnswerDTO {
  @IsDefined()
  @IsString()
  readonly answer: string;

  @IsDefined()
  @IsNumber()
  readonly point: number;
}
