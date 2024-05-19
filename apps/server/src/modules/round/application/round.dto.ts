import {
  IsBoolean,
  IsNotEmpty,
  IsNumber,
  IsOptional,
  IsString,
} from 'class-validator'

export class RoundCreateDto {
  @IsNumber()
  @IsNotEmpty()
  roundNumber: number

  @IsString()
  @IsOptional()
  gameId?: string

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

export class RoundUpdateDto {
  @IsNumber()
  @IsOptional()
  roundNumber?: number

  @IsString()
  @IsOptional()
  gameId?: string

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
