import { InputType, Int, Field } from '@nestjs/graphql';
import { IsAlpha } from 'class-validator';

@InputType()
export class CreatePetInput {

	@IsAlpha()
	@Field()
	name: string;

	@Field({nullable: true})
	type?: string;

	@Field(() => Int)
	ownerId: number
}
