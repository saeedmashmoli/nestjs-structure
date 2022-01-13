import { InputType, Int, Field } from '@nestjs/graphql';
import { IsAlpha } from 'class-validator';

@InputType()
export class CreateUserInput {

    @IsAlpha()
    @Field()
    name: string;

    @Field({nullable: true})
    username?: string;

    @Field(() => Int)
    roleId: number;

	@Field({nullable: true})
	mobile?: string;

    @Field()
    password: string;

}
