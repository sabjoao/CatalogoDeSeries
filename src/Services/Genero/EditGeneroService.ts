import { prismaClient } from "../../prisma/index";
import { EditGeneroRequest } from "../../Models/interfaces/Genero/EditGeneroRequest";

class EditGeneroService{
    async execute({descricao, nome, genero_id}: EditGeneroRequest){
        if(!nome || !genero_id|| !descricao){
            throw new Error("nome, id ou descrição faltando");
        }

        const editGenero = await prismaClient.genero.update({
            where: {
                id: genero_id
            },
            data: {
                nome: nome,
                descricao: descricao
            },
            select: {
                nome: true,
                descricao: true
            }
        })
        return editGenero;
    }
}

export {EditGeneroService}