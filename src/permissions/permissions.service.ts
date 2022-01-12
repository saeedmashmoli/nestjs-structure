import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Role } from 'src/roles/entities/role.entity';
import { RolesService } from 'src/roles/roles.service';
import { Repository } from 'typeorm';
import { CreatePermissionInput } from './dto/create-permission.input';
import { UpdatePermissionInput } from './dto/update-permission.input';
import { Permission } from './entities/permission.entity';

@Injectable()
export class PermissionsService {
  constructor(@InjectRepository(Permission) private permissionRepository: Repository<Permission>,@InjectRepository(Role) private roleService: RolesService) {};

  create(createPermissionInput: CreatePermissionInput) {
    const newPet = this.permissionRepository.create(createPermissionInput);
		return this.permissionRepository.save(newPet);
  }

  async findAll() {
    return this.permissionRepository.find();
  }

  findOne(id: number) {
    return this.permissionRepository.findOneOrFail(id);
  }

  update(id: number, updatePermissionInput: UpdatePermissionInput) {
    return this.permissionRepository.update(id,updatePermissionInput);
  }

  remove(id: number) {
    return this.permissionRepository.delete(id);
  }
}
