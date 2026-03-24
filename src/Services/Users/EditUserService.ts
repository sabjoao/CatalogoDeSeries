import { prismaClient } from "../../prisma/index";
import { EditUserRequest } from "../../Models/interfaces/users/EditUserRequest";
import { hash } from "bcryptjs";

class EditUserService {
    async execute({ nome, email, senha, imagem, user_id }: EditUserRequest) {
        if (!user_id) throw new Error("Usuário não encontrado");

        const data: any = { nome, email };

        if (senha) {
            data.senha = await hash(senha, 8);
        }
        if (imagem) {
            data.imagem = imagem;
        }

        const user = await prismaClient.user.update({
            where: { id: user_id },
            data,
            select: { id: true, nome: true, email: true, imagem: true }
        });

        return user;
    }
}

export { EditUserService }