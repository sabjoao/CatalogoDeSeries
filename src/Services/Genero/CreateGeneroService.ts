import { RequestGenero } from "../../Models/interfaces/Genero/RequestGenero";
import { prismaClient } from "../../prisma/index";

class CreateGeneroService{
    async execute({descricao, nome, user_id}: RequestGenero){
        if(!nome){
            throw new Error("Nome invalido");
        }

        const genero = await prismaClient.genero.create({
            data: {
                descricao: descricao,
                nome: nome,
                user_id: user_id
            },
            select: {
                id: true,
                nome: true,
                descricao: true
            },
        })
        return genero;
    }
}

export {CreateGeneroService}