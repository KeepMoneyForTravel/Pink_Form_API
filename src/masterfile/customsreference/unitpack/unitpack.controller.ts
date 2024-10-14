import { Body, Controller, Get, HttpException, HttpStatus, Patch, UseGuards } from '@nestjs/common';
import { UnitpackService } from './unitpack.service';
import { ApiTags } from '@nestjs/swagger';
import { JwtAuthGuard } from 'src/auth/jwt-auth/jwt-auth.guard';
import { UnitPack } from 'src/entity/customsreference/unitpack.entity';

@UseGuards(JwtAuthGuard)
@ApiTags('Master File (Custom Reference)')
@Controller('unitpack')
export class UnitpackController {
    constructor(private readonly unitpackService: UnitpackService) { }
    @Get('GetUnitpack')
    async IGetUnitpack () {
    try {
        const res = await this.unitpackService.GetUnitPack();
        return res;
    } catch (error) {
      console.error('Error Not Found', error);
      throw new HttpException('Error Not Found ' + error.message, HttpStatus.INTERNAL_SERVER_ERROR);
    }
}
@Patch('UpdateOrInsertUnitpack')
async IUpdateOrInsertUnitpack(@Body() obj: UnitPack) {
  try {
    const foundUnitpack = await this.unitpackService.getUnitPackByOne(obj);
    if (foundUnitpack != null) {
      const res = await this.unitpackService.UpdateUnitPack(obj, foundUnitpack);
      return res;
    } else {
      const res = await this.unitpackService.insertUnitPack(obj);
      return res;
    }
  } catch (error) {
    console.error('Error Not Found', error);
    throw new HttpException('Error Not Found: ' + error.message, HttpStatus.INTERNAL_SERVER_ERROR);
  }
}
}
