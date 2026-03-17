import { Request, Response } from "express";
import { ListAllSeriesService } from "../../Services/Series/ListAllSeriesService";

class ListAllSeriesController{
    async handle(req: Request, res: Response){
        const listAllSeriesService = new ListAllSeriesService();
        const list = await listAllSeriesService.execute();
        return res.json(list);
    }

}

export {ListAllSeriesController}