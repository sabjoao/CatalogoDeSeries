import { Router, Request, Response } from "express";
import multer from "multer";
import uploadConfig from "./config/multer";
import { CreateUserController } from "./Controllers/user/CreateUserController";
import { AuthUserControler } from "./Controllers/user/AuthUserController";
import { isAuthenticated } from "./middlewares/isAuthenticated";
import { RemoveUserController } from "./Controllers/user/RemoveUserController";
import { ListUserController } from "./Controllers/user/ListUserController";
import { CreateGeneroController } from "./Controllers/genero/CreateGeneroController";
import { EditGeneroController } from "./Controllers/genero/EditGeneroController";
import { RemoveGeneroController } from "./Controllers/genero/RemoveGeneroController";

const router = Router();
const upload = multer(uploadConfig.upload("./tmp"));

router.get("/test", (request: Request, response: Response) => {
    return response.json({ ok: true });
});

//User Routes
router.post('/user', upload.single("file"), new CreateUserController().handle);
router.post('/session', new AuthUserControler().handle);
router.delete("/user/remove", isAuthenticated, new RemoveUserController().handle);
router.get("/me", isAuthenticated, new ListUserController().handle);

//Genero Routes
router.post('/genero', isAuthenticated, new CreateGeneroController().handle);
router.put('/genero/edit', isAuthenticated, new EditGeneroController().handle);
router.delete('/genero/remove', isAuthenticated, new RemoveGeneroController().handle);

export { router };