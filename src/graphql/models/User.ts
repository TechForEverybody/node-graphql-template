import { IsEmail } from 'class-validator'
import { ObjectType, Field, ID, InputType } from 'type-graphql'

@ObjectType('User')
export default class User {
    @Field(() => ID)
    id?: string

    @Field({ nullable: true })
    name?: string

    @Field({ nullable: true })
    email?: string

    @Field({ nullable: true })
    profilePic?: string

    @Field({ nullable: true })
    password?: string

    @Field({ nullable: true })
    firstName?: string

    @Field({ nullable: true })
    lastName?: string

    @Field({ nullable: true })
    phone?: string

    @Field({ nullable: true })
    googleId?: string

    @Field({ nullable: true })
    role?: string
}

@InputType('CreateUserInput')
export class CreateUserInput implements Partial<User> {
    @Field()
    @IsEmail()
    email?: string

    @Field()
    password?: string

    @Field()
    firstName?: string

    @Field()
    lastName?: string
}
