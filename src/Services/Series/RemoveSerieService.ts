import { prismaClient } from "../../prisma/index";
import { RemoveSerieRequest } from "../../Models/interfaces/Series/RemoveSerieRequest";

class RemoveSerieService{
    async execute({serie_id}: RemoveSerieRequest){
        const serieRemoved = await prismaClient.serie.delete({
            where: {
                id: serie_id
            }
        });
        return serieRemoved
    }
}

export {RemoveSerieService}

