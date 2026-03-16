import { Request, Response } from "express";
import { ListUserService } from "../../Services/Users/ListUserService";

class ListUserController {
    async handle(req: Request, res: Response) {
        const user_id = req?.user_id;
        const listUserService = new ListUserService();
        const user = await listUserService.execute(user_id);
        return res.json(user);
    }
}

export { ListUserController }