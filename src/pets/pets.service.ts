import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Owner } from 'src/owners/entities/owner.entity';
import { OwnersService } from 'src/owners/owners.service';
import { Repository } from 'typeorm';
import { CreatePetInput } from './dto/create-pet.input';
import { UpdatePetInput } from './dto/update-pet.input';
import { Pet } from './entities/pet.entity';


@Injectable()
export class PetsService {
  constructor(@InjectRepository(Pet) private petsRepository: Repository<Pet>,@InjectRepository(Pet) private ownerService: OwnersService) {};
  getOwner(ownerId: number): Promise<Owner> {
    return this.ownerService.findOne(ownerId);
  }
  create(createPetInput: CreatePetInput) {
    const newPet = this.petsRepository.create(createPetInput);
		return this.petsRepository.save(newPet);
  }

  async findAll() {
    return this.petsRepository.find();
  }

  findOne(id: number) {
    return this.petsRepository.findOneOrFail(id);
  }

  update(id: number, updatePetInput: UpdatePetInput) {
    return this.petsRepository.update(id,updatePetInput);
  }

  remove(id: number) {
    return this.petsRepository.delete(id);
  }
}
