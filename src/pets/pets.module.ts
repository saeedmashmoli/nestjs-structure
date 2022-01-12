import { Module } from '@nestjs/common';
import { PetsService } from './pets.service';
import { PetsResolver } from './pets.resolver';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Pet } from './entities/pet.entity';
import { OwnersService } from '../owners/owners.service';

@Module({
  imports: [TypeOrmModule.forFeature([Pet])],
  providers: [PetsService,PetsResolver],
  // exports: []
})
export class PetsModule {}
