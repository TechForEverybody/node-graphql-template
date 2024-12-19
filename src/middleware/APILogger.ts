import { NextFunction, Request, Response } from "express";

export const API_Logger=(req:Request,res:Response,next:NextFunction)=>{
    console.log(req.url,req.method,req.body);
    next();
}