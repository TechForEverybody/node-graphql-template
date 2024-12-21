import { Resolver, Mutation, Arg, Authorized } from 'type-graphql'
import User, { CreateUserInput } from '../../models/User'

@Resolver()
export default class CreateUserResolver {
    @Authorized('ADMIN')
    @Mutation(() => User)
    async createUser(@Arg('data') data: CreateUserInput) {
        console.log(data)
        return {
            id: '1',
            name: 'John Doe',
        }
    }
}
