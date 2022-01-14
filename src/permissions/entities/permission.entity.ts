import { ObjectType, Field, Int } from '@nestjs/graphql';
import { Role } from 'src/roles/entities/role.entity';
import { Column, Entity, JoinTable, ManyToMany, PrimaryGeneratedColumn } from 'typeorm';

@Entity()
@ObjectType()
export class Permission {

  	@PrimaryGeneratedColumn()
	@Field(() => Int)
	id: number;

	@Column()
	@Field()
	title: string;

	@Column()
	@Field()
	label: string;

	@ManyToMany(() => Role, role => role.permissions, { lazy: true })
    @JoinTable({
        name: "permission_role", 
        joinColumn: {
            name: "roleId",
            referencedColumnName: "id"
        },
        inverseJoinColumn: {
            name: "permissionId",
            referencedColumnName: "id"
        }
    })
    @Field(() => [Role])
    roles: Promise<Role[]>;
}
