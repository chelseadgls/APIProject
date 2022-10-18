import { Router } from 'express';
import * as controllers from '../controllers/games.js';

const router = Router()

router.get('/', controllers.getGames);
router.get('/:id', controllers.getGame);
router.post('/', controllers.createGame);
router.put('/:id', controllers.updateGame);
router.delete('/:id', controllers.deleteGame);

export default router;