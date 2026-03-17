import { prismaClient } from "../../prisma/index";

class ListAllSeriesService{
    async execute(){
        const listSerie = prismaClient.serie.findMany({
            select: {
                nome: true,
                ano: true,
                sinopse: true,
                genero_id: true,
                imagem: true
            },
        });
        return listSerie;
    }
}

export {ListAllSeriesService}