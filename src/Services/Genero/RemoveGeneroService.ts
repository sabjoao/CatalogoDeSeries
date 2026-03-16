import { prismaClient } from "../../prisma/index";
import { DeleteGeneroRequest } from "../../Models/interfaces/Genero/DeleteGeneroRequest ";

class RemoveGeneroService{
    async execute({genero_id}: DeleteGeneroRequest){
        if(genero_id){
           const genero = await prismaClient.genero.delete({
            where: {
                id: genero_id
            }
           });
           return genero;
        }
    }
}

export {RemoveGeneroService}