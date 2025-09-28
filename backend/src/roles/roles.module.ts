import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { RolesService } from './roles.service';
import { RolesController } from './roles.controller';
import { Rol } from './roles.entity';

@Module({
  imports: [TypeOrmModule.forFeature([Rol])],
  providers: [RolesService],
  controllers: [RolesController],
})
export class RolesModule {}
