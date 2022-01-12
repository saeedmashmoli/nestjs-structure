import { ObjectType, Field, Int } from '@nestjs/graphql';
import { Owner } from 'src/owners/entities/owner.entity';
import {  PrimaryGeneratedColumn,Column, ManyToOne, Entity } from 'typeorm';


@Entity()
@ObjectType()
export class Pet {

  	@PrimaryGeneratedColumn()
	@Field(() => Int)
	id: number;

	@Column()
	@Field()
	name: string;

	@Column({nullable: true})
	@Field({nullable: true})
	type?: string;

	@Column()
	@Field(() => Int)
	ownerId

	@ManyToOne(() => Owner,owner => owner.pets)
	@Field(() => Owner,{nullable: true})
	owner?: Owner; 
}

