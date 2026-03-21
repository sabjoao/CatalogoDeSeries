import { Request, Response } from "express";
import { ListAllGeneroService } from "../../Services/Genero/ListAllGeneroService";

class ListAllGeneroController{
    async handle(req: Request, res: Response){
        const listAllGeneroController = new ListAllGeneroService();
        const genero = await listAllGeneroController.execute();
        return res.json(genero);
    }
}

export {ListAllGeneroController}
