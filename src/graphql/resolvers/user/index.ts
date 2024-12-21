import { ClassType, NonEmptyArray } from 'type-graphql'
import CreateUserResolver from './CreateUser'
import GetUsersResolver from './GetUsers'

const userResolvers: NonEmptyArray<ClassType> = [
    CreateUserResolver,
    GetUsersResolver,
]

export default userResolvers
