import { ObjectType, Field, Int } from '@nestjs/graphql';
import { User } from 'src/users/entities/user.entity';
import { Column, Entity, ManyToOne, OneToMany, PrimaryGeneratedColumn } from 'typeorm';

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
	

}
