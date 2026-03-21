import { prismaClient } from "../../prisma/index";

class ListAllGeneroService{
    async execute(){
        const listGenero = prismaClient.genero.findMany();
        return listGenero;
    }
}

export {ListAllGeneroService}