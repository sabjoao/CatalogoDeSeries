import { Request, Response } from "express";
import { EditSerieRequest } from "../../Models/interfaces/Series/EditSerieRequest";
import { EditSerieService } from "../../Services/Series/EditSerieService";

class EditSerieController {
    async handle(req: Request, res: Response) {
        if (!req.file) {
            throw new Error("Erro ao enviar a imagem");
        } else {
            const { originalname, filename: imagem } = req.file;
            const { ano, nome, sinopse }: EditSerieRequest = req.body;
            const serie_id = req.query.serie_id as string;
            const editSerieService = new EditSerieService();
            const serieEdited = await editSerieService.execute({ ano, nome, sinopse, imagem, serie_id });
            return res.json(serieEdited);
        }
    }
}

export { EditSerieController }