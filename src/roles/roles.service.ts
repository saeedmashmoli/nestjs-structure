import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { CreateRoleInput } from './dto/create-role.input';
import { UpdateRoleInput } from './dto/update-role.input';
import { Role } from './entities/role.entity';

@Injectable()
export class RolesService {
  constructor(@InjectRepository(Role) private roleRepository: Repository<Role>) {};

  create(createRoleInput: CreateRoleInput) {
    const newPet = this.roleRepository.create(createRoleInput);
		return this.roleRepository.save(newPet);
  }

  async findAll() {
    return this.roleRepository.find();
  }

  findOne(id: number) {
    return this.roleRepository.findOneOrFail(id);
  }

  update(id: number, updateRoleInput: UpdateRoleInput) {
    return this.roleRepository.update(id,updateRoleInput);
  }

  remove(id: number) {
    return this.roleRepository.delete(id);
  }
}
