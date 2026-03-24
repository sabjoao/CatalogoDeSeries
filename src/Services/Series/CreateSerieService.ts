import { prismaClient } from "../../prisma/index";
import { CreateSerieRequest } from "../../Models/interfaces/Series/CreateSerieRequest";

class CreateSerieService {
    async execute({ ano, nome, sinopse, imagem, genero_id, user_id }: CreateSerieRequest) {
    console.log(`${ano},${nome},${sinopse}, ${imagem}, ${genero_id}, ${user_id} `)
        const serie = await prismaClient.serie.create({
            data: {
                ano: parseInt(ano),
                nome: nome,
                sinopse: sinopse,
                imagem: imagem,
                genero_id: genero_id,
                user_id: user_id
            },
            select: {
                ano: true,
                nome: true,
                sinopse: true,
                imagem: true,
            }
        });
        return serie;
    }
}

export { CreateSerieService }