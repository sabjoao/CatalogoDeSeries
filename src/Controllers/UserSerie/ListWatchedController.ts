import { Request, Response } from "express";
import { ListWatchedService } from "../../Services/UserSerie/ListWatchedService";

class ListWatchedController{
    async handle(req: Request, res: Response){
        const user_id = req.user_id;
        const listWatchedService = new ListWatchedService();
        const watched = await listWatchedService.execute(user_id);
        return res.json(watched);
    }
}

export {ListWatchedController}