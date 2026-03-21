import { Request, Response } from "express";
import { UserSerieService } from "../../Services/UserSerie/UserSerieService";
import { UserSerieRequest } from "../../Models/interfaces/UserSerie/UserSerieRequest";

class UserSerieController{
    async handle(req: Request, res: Response){
        const {assistido, favorito, nota} : UserSerieRequest = req.body;
        const user_id = req.user_id;
        const serie_id = req.query.serie_id as string;
        const userserieService = new UserSerieService();
        const userSerie = await userserieService.execute({assistido, favorito, nota, user_id, serie_id});
        return res.json(userSerie);
    }
}

export {UserSerieController}