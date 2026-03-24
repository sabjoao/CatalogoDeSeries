import { prismaClient } from "../../prisma/index";

class ListAllGenerosService{
    async execute(){
        const generos = await prismaClient.genero.findMany({
            select: {
                id: true,
                nome: true,
            },
        });
        return generos;
    }
}

export {ListAllGenerosService}