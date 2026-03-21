import { prismaClient } from "../../prisma/index";
import { UserSerieRequest } from "../../Models/interfaces/UserSerie/UserSerieRequest";

class UserSerieService {
    async execute({ assistido, favorito, nota, user_id, serie_id }: UserSerieRequest) {
        
        if (!user_id || !serie_id) {
            throw new Error("Digite um user_id e serie_id validos");
        }

        const userSerie = await prismaClient.userSerie.upsert({ //upsert faz a função de criar algo quando não existe, ou atualizar algo que já existe
            where: {
                user_id_serie_id: {
                    user_id: user_id,
                    serie_id: serie_id
                }
            },
            update: {
                ...(assistido !== undefined && { assistido }),
                ...(favorito !== undefined && { favorito }),
                ...(nota !== undefined && { nota }),
            },
            create: {
                user_id,
                serie_id,
                assistido: assistido, 
                favorito: favorito, 
                nota: nota 
            },
            select: {
                assistido: true,
                favorito: true,
                nota: true
            }
        });

        return userSerie;
    }
}

export { UserSerieService }