import {
  IsBoolean,
  IsNotEmpty,
  IsNumber,
  IsOptional,
  IsString,
} from 'class-validator'

export class ResultCreateDto {
  @IsString()
  @IsNotEmpty()
  resultType: string

  @IsString()
  @IsOptional()
  roundId?: string

  @IsString()
  @IsOptional()
  winnerPlayerId?: string

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

export class ResultUpdateDto {
  @IsString()
  @IsOptional()
  resultType?: string

  @IsString()
  @IsOptional()
  roundId?: string

  @IsString()
  @IsOptional()
  winnerPlayerId?: string

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
