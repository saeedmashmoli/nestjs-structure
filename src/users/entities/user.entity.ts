import { ObjectType, Field, Int } from '@nestjs/graphql';
import { Owner } from 'src/owners/entities/owner.entity';
import { Role } from 'src/roles/entities/role.entity';
import {  PrimaryGeneratedColumn,Column, ManyToOne, Entity } from 'typeorm';


@Entity()
@ObjectType()
export class User {

  	@PrimaryGeneratedColumn()
	@Field(() => Int)
	id: number;

	@Column()
	@Field()
	name: string;

    @Column()
	@Field({nullable: true})
	username?: string;

    @Column()
	@Field({nullable: true})
	mobile?: string;

    @Column()
    @Field()
    password: string;

	@Column()
	@Field(() => Int)
	roleId: number;

	@ManyToOne(() => Role,role => role.users)
	@Field(() => Role,{nullable: true})
	role?: Role; 
}
