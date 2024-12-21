import { GraphQLContext } from '../types/GraphQLContext'
import { AuthChecker } from 'type-graphql'
// import { Request } from 'express'

const AuthenticationChecker: AuthChecker<GraphQLContext> = async (
    { context: { user, request } },
    roles
) => {
    console.log(user)
    console.log(request.headers)
    console.log(roles)
    if (!user) return false
    if (roles.length === 0) return true
    if (user.role && roles.includes(user.role)) return true
    return false
}
export default AuthenticationChecker

export const getAuthData = async () => {
    // const token = request.headers.authorization || '';
    const user = {
        id: '1',
        name: 'John Doe',
        role: 'ADMIN',
    }
    // user = await getUserFromToken(token)
    return user
}
