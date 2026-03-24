import { prismaClient } from "../../prisma/index";

class ListWatchedService{
    async execute(user_id: string){
        if(!user_id){
            throw new Error("user_id inválido");
        }
        const series = prismaClient.userSerie.findMany({
            where: {
                user_id: user_id,
                assistido: true
            },
            select: {
                serie: {
                    select: {
                        ano: true,
                        nome: true,
                        sinopse: true,
                        imagem: true
                    }
                }
            }
        });
        return series;
    }
}

export {ListWatchedService}