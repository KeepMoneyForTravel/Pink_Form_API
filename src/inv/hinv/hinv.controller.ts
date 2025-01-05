import { Controller } from '@nestjs/common';
import { ApiTags } from '@nestjs/swagger';

@ApiTags('INV')
@Controller('hinv')
export class HinvController {}
