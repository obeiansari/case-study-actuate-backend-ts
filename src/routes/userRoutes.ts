import { Router } from 'express'
import { getUserByID } from '../controllers/userController'

const router = Router();

router.get('/:id', getUserByID);

export default router