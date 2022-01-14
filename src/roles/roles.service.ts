import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Permission } from 'src/permissions/entities/permission.entity';
import { Repository } from 'typeorm';
import { CreateRoleInput } from './dto/create-role.input';
import { UpdateRoleInput } from './dto/update-role.input';
import { Role } from './entities/role.entity';

@Injectable()
export class RolesService {
  constructor(
    @InjectRepository(Role) private roleRepository: Repository<Role>,
    @InjectRepository(Role) private permissionReposity: Repository<Permission>
    ) {};

  create(createRoleInput: CreateRoleInput,permissionIds: any) {
    const newRole = this.roleRepository.create(createRoleInput);
    if(permissionIds.length > 0){
      permissionIds.forEach( async (permissionId) => {
        const permission = await this.permissionReposity.findOne(permissionId);
        if(permission){
          newRole.addPermission(permission)
        }
      })
    }
		return this.roleRepository.save(newRole);
  }

  async findAll() {
    return this.roleRepository.find();
  }

  findOne(id: number) {
    return this.roleRepository.findOneOrFail(id);
  }

  async update(id: number, updateRoleInput: UpdateRoleInput,permissionIds: any) {
    const role = await this.roleRepository.findOne(id);
    if(permissionIds.length > 0){
      permissionIds.forEach( async (permissionId) => {
        const permission = await this.permissionReposity.findOne(permissionId);
        if(permission){
          role.addPermission(permission)
        }
      })
    }
    return this.roleRepository.update(id,updateRoleInput);
  }

  remove(id: number) {
    return this.roleRepository.delete(id);
  }
}
