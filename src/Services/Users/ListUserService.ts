import {prismaClient} from "../../prisma/index";

class ListUserService{
    async execute(user_id: string){
        const user = await prismaClient.user.findFirst({
            where: {
                id: user_id
            },
            select: {
                id:true,
                nome: true,
                email: true,
                imagem: true,
            }
        })
        return user;
    }
}

export {ListUserService}