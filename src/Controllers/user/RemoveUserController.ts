import { Request, Response } from "express";
import { RemoveUserService } from "../../Services/Users/RemoveUserService";
import { RemoveUserRequest } from "../../Models/interfaces/users/RemoveUserRequest";

class RemoveUserController{
    async handle(req: Request, res: Response){
        const user_id = req?.query.user_id as string;
        const removeUser = new RemoveUserService()
        const removedUser = removeUser.execute({user_id});
        return res.json(removedUser);
    }
}

export {RemoveUserController}