import { Body, Controller, Get, HttpException, HttpStatus, Patch } from '@nestjs/common';
import { ApiTags } from '@nestjs/swagger';
import { AnnounceService } from './announce.service';
import { Announce } from 'src/entity/announce.entity';

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
}

