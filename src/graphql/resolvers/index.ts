import { ClassType, NonEmptyArray } from 'type-graphql'
import userResolvers from './user'

const resolvers: NonEmptyArray<ClassType> = [...userResolvers]

export default resolvers
