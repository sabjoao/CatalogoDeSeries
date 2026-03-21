import { Request, Response } from "express";
import { ListFavoriteService } from "../../Services/UserSerie/ListFavoriteService";

class ListFavoriteController{
    async handle(req: Request, res: Response){
        const user_id = req.user_id;
        const listFavoriteService = new ListFavoriteService();
        const favoritos = await listFavoriteService.execute(user_id);
        return res.json(favoritos);
    }

}

export {ListFavoriteController}