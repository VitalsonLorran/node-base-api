import { Router } from 'express';
import * as EmailController from '../controllers/emailController'

import * as ApiController from '../controllers/apiController';

const router = Router();

router.get('/ping', ApiController.ping)

router.post('/contato', EmailController.contato)

export default router;