import { compare } from "bcryptjs";
import { sign } from "jsonwebtoken";
import { prismaClient } from "../../../prisma/index";
import { AuthRequest } from "../../../Models/interfaces/users/AuthUserRequest";

class AuthUserService{
    async execute({email, senha}: AuthRequest){
        
        if(!email){
            throw new Error("Digíte um email");
        }

        if(!senha){
            throw new Error("Digíte uma senha");
        }

        const user = await prismaClient.user.findFirst({
            where: {
                email: email
            }
        });


        if(!user){
            throw new Error("Nome de usuário ou senha incorretos");
        }

        const senhaMatch = await compare(senha, user?.senha)

        if (!senhaMatch){
            throw new Error("Senha errada, tente novamente");
        }

        const token = sign(
            {
                name: user?.nome,
                email: user?.email
            },
            process.env.JWT_SECRET as string,
            {
                subject: user?.id,
                expiresIn: "30d"
            }
        );

        return{
            id: user?.id,
            name: user?.email,
            token: token
        }
    }
}

export {AuthUserService}