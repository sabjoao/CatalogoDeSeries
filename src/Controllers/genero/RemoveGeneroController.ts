import { Request, Response } from "express";
import { RemoveGeneroService } from "../../Services/Genero/RemoveGeneroService";

class RemoveGeneroController{
    async handle(req: Request, res: Response){
        const genero_id = req.query.genero_id as string;
        const removeGeneroService = new RemoveGeneroService();
        const generoRemoved = await removeGeneroService.execute({genero_id});
        return res.json({message: "gênero deletado com sucesso"});
    }
}

export {RemoveGeneroController}