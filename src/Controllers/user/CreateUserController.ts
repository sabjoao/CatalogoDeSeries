import { Request, Response } from "express";
import { CreateUserService } from "../../Services/Users/CreateUserService";
import { UserRequest } from "../../Models/interfaces/users/UserRequest";

class CreateUserController {
  async handle(req: Request, res: Response) {
    const { nome, email, senha, imagem }: UserRequest = req.body;
    const createUserService = new CreateUserService();
    const user = await createUserService.execute({
      nome,
      email,
      senha,
      imagem,
    });
    return res.json(user);
  }
}

export { CreateUserController };

