import { Request, Response } from 'express'
import User from '../graphql/models/User'

export interface GraphQLContext {
    request: Request
    response: Response
    user: User
}
