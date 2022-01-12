import { InputType, Field } from '@nestjs/graphql';

@InputType()
export class CreatePermissionInput {

    @Field()
    title: string;

    @Field()
    label: string;
}
