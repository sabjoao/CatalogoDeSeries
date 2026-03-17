import { Request, Response } from "express";
import { CreateSerieRequest } from "../../Models/interfaces/Series/CreateSerieRequest";
import { CreateSerieService } from "../../Services/Series/CreateSerieService";

class CreateSerieController{
    async handle(req: Request, res: Response){
        const {ano, nome, sinopse, imagem, genero_id, user_id}: CreateSerieRequest = req.body;
        const createSerieService = new CreateSerieService();
        if(!req.file){
            throw new Error("Erro ao enviar a imagem");
        } else {
            const {originalname, filename: imagem} = req.file;
            const serie = await createSerieService.execute({
                ano,
                nome,
                sinopse,
                imagem,
                genero_id,
                user_id
            });
            return res.json(serie);
        }
    }
}

export {CreateSerieController}