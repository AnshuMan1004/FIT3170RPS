import {
  IsBoolean,
  IsNotEmpty,
  IsNumber,
  IsOptional,
  IsString,
} from 'class-validator'

export class ChoiceCreateDto {
  @IsString()
  @IsNotEmpty()
  choice: string

  @IsString()
  @IsOptional()
  playerId?: string

  @IsString()
  @IsOptional()
  roundId?: string

  @IsString()
  @IsOptional()
  dateCreated?: string

  @IsString()
  @IsOptional()
  dateDeleted?: string

  @IsString()
  @IsOptional()
  dateUpdated?: string
}

export class ChoiceUpdateDto {
  @IsString()
  @IsOptional()
  choice?: string

  @IsString()
  @IsOptional()
  playerId?: string

  @IsString()
  @IsOptional()
  roundId?: string

  @IsString()
  @IsOptional()
  dateCreated?: string

  @IsString()
  @IsOptional()
  dateDeleted?: string

  @IsString()
  @IsOptional()
  dateUpdated?: string
}
