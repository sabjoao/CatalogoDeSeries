import { Request, Response } from "express";
import { EditUserRequest } from "../../Models/interfaces/users/EditUserRequest";
import { EditUserService } from "../../Services/Users/EditUserService";

class EditUserController {
    async handle(req: Request, res: Response) {
        const { nome, email, senha }: EditUserRequest = req.body;
        const user_id = req.user_id;
        const imagem = req.file?.filename;

        const editUserService = new EditUserService();
        const user = await editUserService.execute({ nome, email, senha, imagem, user_id });
        return res.json(user);
    }
}

export { EditUserController }