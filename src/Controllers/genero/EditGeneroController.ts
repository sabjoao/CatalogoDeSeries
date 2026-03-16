import { Request, Response } from "express";
import { EditGeneroRequest } from "../../Models/interfaces/Genero/EditGeneroRequest";
import { EditGeneroService } from "../../Services/Genero/EditGeneroService";

class EditGeneroController{
    async handle(req: Request, res: Response){
        const {descricao, nome}: EditGeneroRequest = req.body;
        const genero_id = req.query.genero_id as string
        const editGeneroService = new   EditGeneroService();
        const editGenero = await editGeneroService.execute({descricao, nome, genero_id});
        return res.json(editGenero);
    }
}

export {EditGeneroController}