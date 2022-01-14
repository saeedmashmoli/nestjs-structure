import { Resolver, Query, Mutation, Args, Int } from '@nestjs/graphql';
import { RolesService } from './roles.service';
import { Role } from './entities/role.entity';
import { CreateRoleInput } from './dto/create-role.input';
import { UpdateRoleInput } from './dto/update-role.input';

@Resolver(() => Role)
export class RolesResolver {
  constructor(private readonly rolesService: RolesService) {}

  @Mutation(() => Role)
  async createRole(
    @Args('createRoleInput') createRoleInput: CreateRoleInput,
    @Args({name: 'permissionIds' , type: () => [Int]}) permissionIds: number[]
  ) {
    return await this.rolesService.create(createRoleInput,permissionIds);
  }

  @Query(() => [Role], { name: 'roles' })
  getRoles() {
    return this.rolesService.findAll();
  }

  @Query(() => Role, { name: 'role' })
  getRole(@Args('id', { type: () => Int }) id: number) {
    return this.rolesService.findOne(id);
  }

  @Mutation(() => Role)
  updateRole(
    @Args('updateRoleInput') updateRoleInput: UpdateRoleInput,
    @Args({name: 'permissionIds' , type: () => [Int]}) permissionIds: number[]
  ) {
    return this.rolesService.update(updateRoleInput.id, updateRoleInput,permissionIds);
  }

  @Mutation(() => Role)
  removeRole(@Args('id', { type: () => Int }) id: number) {
    return this.rolesService.remove(id);
  }
}
