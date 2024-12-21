import { NextFunction, Request, Response } from 'express'

export const API_Logger = (_1: Request, _: Response, next: NextFunction) => {
    // console.log(req.url, req.method, req.body)
    next()
}
