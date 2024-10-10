import { Controller, Get, HttpException, HttpStatus } from '@nestjs/common';
import { StatcodeService } from './statcode.service';
import { ApiTags } from '@nestjs/swagger';

@ApiTags('Master File (Custom Reference)')
@Controller('statcode')
export class StatcodeController {
    constructor(private readonly statcodeService: StatcodeService) { }
    @Get('GetStatcode')
    async IGetStatcode () {
    try {
        const res = await this.statcodeService.GetStatcode();
        return res;
    } catch (error) {
      console.error('Error Not Found', error);
      throw new HttpException('Error Not Found ' + error.message, HttpStatus.INTERNAL_SERVER_ERROR);
    }
}
}