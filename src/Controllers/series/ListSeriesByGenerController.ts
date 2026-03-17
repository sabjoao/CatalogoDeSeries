import { Request, Response } from "express";
import { ListSerieByGenreService } from "../../Services/Series/ListSeriesByGener";

class ListSeriesByGenreController{
    async handle(req: Request, res: Response){
        const genero_id = req.query.genero_id as string;
        const listSeriesByGenreService = new ListSerieByGenreService();
        const list = await listSeriesByGenreService.execute({genero_id});
        return res.json(list);
    }
}

export {ListSeriesByGenreController}