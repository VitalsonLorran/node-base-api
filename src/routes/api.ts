import { Router } from 'express';
import { Auth } from '../middlewares/auth';
import * as ApiController from '../controllers/apiController';

const router = Router();

router.post('/register', ApiController.register);
router.post('/login', ApiController.login);

router.get('/list', Auth.private, ApiController.list); //tornando a rota privada com Auth.private

export default router;