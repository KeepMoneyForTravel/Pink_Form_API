import { Body, Controller, Delete, Get, HttpCode, HttpException, HttpStatus, Param, Patch, UseGuards } from '@nestjs/common';
import { ApiTags } from '@nestjs/swagger';
import { AnnounceService } from './announce.service';
import { Announce } from 'src/entity/announce.entity';
import { JwtAuthGuard } from 'src/auth/jwt-auth/jwt-auth.guard';

@UseGuards(JwtAuthGuard)
@ApiTags('Master File (Company Reference)')
@Controller('announce')
export class AnnounceController {
    constructor(private readonly announceService: AnnounceService) { }
    @Get('GetAnnounce')
    async IGetAccno() {
    try {
        const res = await this.announceService.GetAnnounce();
        return res;
      
    } catch (error) {
      console.error('Error Not Found', error);
      throw new HttpException('Error Not Found ' + error.message, HttpStatus.INTERNAL_SERVER_ERROR);
    }
    
  }
  @Patch('UpdateOrInsertAnnounce')
    async IUpdateOrInsertAnnounce(@Body() obj : Announce) {
        try {
            const foundAnnounce = await this.announceService.getAnnounceByOne(obj); 
            if(foundAnnounce != null){
              const res = await this.announceService.UpdateAnnounce(obj , foundAnnounce); 
              return res;
            }else{
              const res = await this.announceService.insertAnnounce(obj); 
              return res;
            }
        } catch (error) {
            console.error('Error Not Found', error);
            throw new HttpException('Error Not Found: ' + error.message, HttpStatus.INTERNAL_SERVER_ERROR);
        }
    }
    @Delete('Deleteannounce/:comcode')
    @HttpCode(HttpStatus.OK)
    async deleteAnnounce(
        @Param('desc1') desc1: string
    ): Promise<boolean> {
        return await this.announceService.deleteAnnounce(desc1);
    }
}

