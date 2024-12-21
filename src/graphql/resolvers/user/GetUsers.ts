import { Resolver, Query } from 'type-graphql'
import User from '../../models/User'

@Resolver()
export default class GetUsersResolver {
    @Query(() => User)
    async getUsers() {
        return {
            id: '1',
            name: 'John Doe',
        }
    }
}
