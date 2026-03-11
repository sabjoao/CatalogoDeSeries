import { Response,Request,NextFunction } from "express";
import { Payload } from "../Models/interfaces/users/Payload";
import { verify } from "jsonwebtoken";

export function isAuthenticated(
    req: Request,
    res: Response,
    next: NextFunction
) {
    const authToken = req.headers.authorization;

    if(!authToken){
        return res.json(401).end();
    }

    const [, token] = authToken.split(" ");

    try {

        //validar o token
        const {sub} = verify(token, process.env.JWT_SECRET) as Payload
        req.user_id = sub;
        return next(); 
    } catch (error){
        
    }
}