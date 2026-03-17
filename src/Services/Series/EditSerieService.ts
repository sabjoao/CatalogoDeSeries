import { EditSerieRequest } from "../../Models/interfaces/Series/EditSerieRequest";
import { prismaClient } from "../../prisma/index";

class EditSerieService{
    async execute({ano, nome, sinopse, imagem, serie_id}: EditSerieRequest){
        const serieEdited = await prismaClient.serie.update({
            where: {
                id: serie_id
            },
            data: {
                ano: +ano,
                nome: nome,
                sinopse: sinopse,
                imagem: imagem
            }
        });
        return serieEdited;
    }

}

export {EditSerieService}