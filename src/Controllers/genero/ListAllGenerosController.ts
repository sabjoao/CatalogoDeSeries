import { Request, Response } from "express";
import { ListAllGenerosService } from "../../Services/Genero/ListAllGenerosService";

class ListAllGenerosController{
    async handle(req: Request, res: Response){
        const listAllGenerosService = new ListAllGenerosService();
        const AllGeneros =  await listAllGenerosService.execute();
        return res.json(AllGeneros);
    }
}

export {ListAllGenerosController}