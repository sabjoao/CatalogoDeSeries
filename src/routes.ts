import {Router,Request,Response} from "express";
import multer from "multer";
import uploadConfig from "./config/multer";
import { CreateUserController } from "./Controllers/user/CreateUserController";
import { AuthUserControler } from "./Controllers/user/AuthUserController";
import { isAuthenticated } from "./middlewares/isAuthenticated";
import { RemoveUserController } from "./Controllers/user/RemoveUserController";

const router = Router();
const upload = multer(uploadConfig.upload("./tmp"));

router.get("/test", (request: Request, response: Response) => {
    return response.json({ ok: true });
});

//User Routes
router.post('/user', upload.single("file"), new CreateUserController().handle);
router.post('/session', new AuthUserControler().handle);
router.delete("/user/remove", new RemoveUserController().handle);

export { router };