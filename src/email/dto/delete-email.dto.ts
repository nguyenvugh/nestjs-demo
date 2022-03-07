import { ArrayNotEmpty, IsNotEmpty, IsNumber } from 'class-validator';

export class DeleteEmailDto {
  @IsNotEmpty()
  @IsNumber({}, { each: true })
  @ArrayNotEmpty()
  ids: number[];
}
