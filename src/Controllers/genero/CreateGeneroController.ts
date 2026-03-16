import { Request, Response } from "express";
import { RequestGenero } from "../../Models/interfaces/Genero/RequestGenero";
import { CreateGeneroService } from "../../Services/Genero/CreateGeneroService";

class CreateGeneroController{
    async handle(req: Request, res: Response){
        const user_id = req.user_id;
        const {descricao, nome}: RequestGenero = req.body;
        const createGeneroService = new CreateGeneroService();
        const genero = await createGeneroService.execute({descricao, nome, user_id});
        return res.json(genero);

    }
}

export {CreateGeneroController}
