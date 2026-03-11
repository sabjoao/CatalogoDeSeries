import { Request, Response } from "express";
import { AuthUserService } from "../../Services/Users/Auth/AuthRequestService";
import { AuthRequest } from "../../Models/interfaces/users/AuthUserRequest";

class AuthUserControler {
    async handle(req: Request, res: Response){
        const {email, senha}: AuthRequest = req.body;
        const authUserService = new AuthUserService();
        const auth = await authUserService.execute({email, senha});

        return res.json(auth);
    }
}

export {AuthUserControler}