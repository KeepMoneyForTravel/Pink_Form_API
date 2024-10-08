import { Module } from '@nestjs/common';
import { AuthoService } from './autho.service';
import { Autho } from 'src/entity/autho.entity';
import { TypeOrmModule } from '@nestjs/typeorm';
import { AuthoController } from './autho.controller';

@Module({
    imports: [TypeOrmModule.forFeature([Autho])], 
    controllers: [AuthoController],
    providers: [AuthoService],
    exports: [AuthoService],
})
export class AuthoModule {}
