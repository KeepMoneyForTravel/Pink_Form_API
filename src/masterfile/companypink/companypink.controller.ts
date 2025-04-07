import { Body, Controller, Delete, Get, HttpCode, HttpException, HttpStatus, Param, Patch } from '@nestjs/common';
import { CompanypinkService } from './companypink.service';
import { ApiTags } from '@nestjs/swagger';
import { CompanyPink } from 'src/entity/companypink.entity';

@ApiTags('Master File (Company Reference)')
@Controller('Companypink')
export class CompanypinkController {
     constructor(private readonly companypinkService: CompanypinkService) { }
        @Get('GetCompanypink')
        async IGetCompanypink() {
            try {
                const Company = await this.companypinkService.GetCompanyPink();
                return Company;
            } catch (error) {
                console.error('Error Not Found', error);
                throw new HttpException('Error Not Found: ' + error.message, HttpStatus.INTERNAL_SERVER_ERROR);
            }
        }
    
        @Patch('UpdateOrInsertCompanypink')
        async IUpdateOrInsertCompanypink(@Body() obj: CompanyPink) {
            try {
                const foundCompanypink = await this.companypinkService.getCompanyPinkByOne(obj);
                if (foundCompanypink != null) {
                    const res = await this.companypinkService.UpdateCompanyPink(obj, foundCompanypink);
                    return res;
                } else {
                    const res = await this.companypinkService.insertCompanyPink(obj);
                    return res;
                }
            } catch (error) {
                console.error('Error Not Found', error);
                throw new HttpException('Error Not Found: ' + error.message, HttpStatus.INTERNAL_SERVER_ERROR);
            }
        }
    
        @Delete('DeleteCompanypink/:comcode')
        @HttpCode(HttpStatus.OK)
        async deleteCompanypink(
            @Param('comcode') comcode: string
        ): Promise<boolean> {
            return await this.companypinkService.deleteCompanyPink(comcode);
        }
}
