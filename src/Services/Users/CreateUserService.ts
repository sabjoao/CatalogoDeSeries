import { prismaClient } from "../../prisma/index"
import { hash } from "bcryptjs";
import { UserRequest } from "../../Models/interfaces/users/UserRequest";

class CreateUserService {
    async execute({ nome, email, senha, imagem }: UserRequest) {
        if (!email) {
            throw new Error("Email incoretto");
        }

        const userAlreadyExists = await prismaClient.user.findFirst({
            where: {
                email: email
            }
        })
        if (userAlreadyExists) {
            throw new Error("Email já cadastrado");
        }

        const senhaHash = await hash(senha, 8);

        const user = prismaClient.user.create({
            data: {
                nome: nome,
                email: email,
                senha: senhaHash,
                imagem: imagem
            },
            select: {
                id: true,
                nome: true,
                email: true
            }
        })
        return user;
    }
}

export { CreateUserService }