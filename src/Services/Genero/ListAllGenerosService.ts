import { prismaClient } from "../../prisma/index";

class ListAllGenerosService{
    async execute(){
        const generos = await prismaClient.genero.findMany({
            select: {
                nome: true
            },
        });
        return generos;
    }
}

export {ListAllGenerosService}