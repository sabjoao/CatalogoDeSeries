import { prismaClient } from "../../prisma/index";

class ListFavoriteService {
    async execute(user_id: string) {
        if (!user_id) {
            throw new Error("Erro ao pegar o id");
        }
        const series = await prismaClient.userSerie.findMany({
            where: {
                user_id: user_id,
                favorito: true
            },
            select: {
                serie: {
                    select: {
                        ano: true,
                        nome: true,
                        sinopse: true,
                        imagem: true,
                        id: true,
                    }
                }
            }
        });
        return series;
    }
}

export { ListFavoriteService }