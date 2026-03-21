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
import { CreateSerieController } from "./Controllers/series/CreateSerieController";
import { EditSerieController } from "./Controllers/series/EditSerieController";
import { RemoveSerieController } from "./Controllers/series/RemoveSerieController";
import { ListAllSeriesController } from "./Controllers/series/ListAllSeriesController";
import { ListSeriesByGenreController } from "./Controllers/series/ListSeriesByGenerController";
import { UserSerieController } from "./Controllers/UserSerie/UserSerieController";
import { ListFavoriteController } from "./Controllers/UserSerie/ListFavoriteController";
import { ListAllGenerosController } from "./Controllers/genero/ListAllGenerosController";

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
router.get('/genero/all', isAuthenticated, new ListAllGenerosController().handle);

//Serie Routes
router.post('/serie', upload.single("file"), isAuthenticated, new CreateSerieController().handle);
router.put('/serie/edit', upload.single("file"), isAuthenticated, new EditSerieController().handle);
router.delete('/serie/remove', isAuthenticated, new RemoveSerieController().handle);
router.get('/serie/all', isAuthenticated, new ListAllSeriesController().handle);
router.get('/serie/genero', isAuthenticated, new ListSeriesByGenreController().handle);

//UserSerie Routes
router.patch('/userSerie', isAuthenticated, new UserSerieController().handle);
router.get("/userSerie/favoritos", isAuthenticated, new ListFavoriteController().handle);
router.get('/userSerie/assistidos', isAuthenticated, new ListFavoriteController().handle);

export { router };