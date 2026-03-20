import { Request, Response } from "express";
import { RemoveSerieService } from "../../Services/Series/RemoveSerieService";

class RemoveSerieController{
    async handle(req: Request, res: Response){
        const serie_id = req.query.serie_id as string;
        const removeSerieService = new RemoveSerieService();
        const serieRemoved = await removeSerieService.execute({serie_id});
        return res.json(serieRemoved);
    }
}

export {RemoveSerieController}