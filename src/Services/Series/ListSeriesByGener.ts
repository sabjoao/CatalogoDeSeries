import { prismaClient } from "../../prisma/index";

interface ListSeriesByGenerRequest{
    genero_id: string;
}

class ListSerieByGenreService{
    async execute({genero_id}: ListSeriesByGenerRequest){
        const findSeriesByGenre = await prismaClient.serie.findMany({
            where: {
                genero_id: genero_id
            },
        });
        return findSeriesByGenre;
    }
}

export {ListSerieByGenreService}

