import { ObjectType, Field, Int } from '@nestjs/graphql';
import { Owner } from 'src/owners/entities/owner.entity';
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

	@ManyToOne(() => Owner,owner => owner.pets)
	@Field(() => Owner,{nullable: true})
	owner?: Owner; 
}
