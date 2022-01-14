import { ObjectType, Field, Int } from '@nestjs/graphql';
import { Permission } from 'src/permissions/entities/permission.entity';
import { PermissionsService } from 'src/permissions/permissions.service';
import { User } from 'src/users/entities/user.entity';
import { Column, Entity, JoinTable, ManyToMany, ManyToOne, OneToMany, PrimaryGeneratedColumn } from 'typeorm';

@Entity()
@ObjectType()
export class Role {
  
  @PrimaryGeneratedColumn()
	@Field(() => Int)
	id: number;

	@Column()
	@Field()
	title: string;

	@Column()
	@Field()
	label: string;
	
	@OneToMany(() => User, user => user.role)
	@Field(() => [User],{nullable: true})
	users?: User[]; 

	@ManyToMany(() => Permission, permission => permission.roles, { lazy: true })
    @JoinTable({
        name: "permission_role", 
        joinColumn: {
            name: "permissionId",
            referencedColumnName: "id"
        },
        inverseJoinColumn: {
            name: "roleId",
            referencedColumnName: "id"
        }
    })
    permissions: Permission[];
	
    addPermission(permission: Permission){
        if(this.permissions == null){
            this.permissions = new Array<Permission>();
        }
        this.permissions.push(permission)
    }

}
