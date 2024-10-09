import { Body, Controller, Get, HttpException, HttpStatus, Patch } from '@nestjs/common';
import { ApiTags } from '@nestjs/swagger';
import { AuthoService } from './autho.service';
import { Autho } from 'src/entity/autho.entity';

@ApiTags('Master File (Company Reference)')
@Controller('autho')
export class AuthoController {
    constructor(private readonly authoService: AuthoService) { }
    @Get('GetAutho')
    async IGetAutho() {
        try {
            const res = await this.authoService.GetAllAutho();
            return res;
          
        } catch (error) {
          console.error('Error Not Found', error);
          throw new HttpException('Error Not Found ' + error.message, HttpStatus.INTERNAL_SERVER_ERROR);
        }
      }
      @Patch('UpdateOrInsertAutho')
    async IUpdateOrInsertAutho(@Body() obj : Autho) {
        try {
            const foundAutho = await this.authoService.getAuthoByOne(obj); 
            if(foundAutho != null){
              const res = await this.authoService.UpdateAutho(obj , foundAutho); 
              return res;
            }else{
              const res = await this.authoService.insertAutho(obj); 
              return res;
            }
        } catch (error) {
            console.error('Error Not Found', error);
            throw new HttpException('Error Not Found: ' + error.message, HttpStatus.INTERNAL_SERVER_ERROR);
        }
    }
}
