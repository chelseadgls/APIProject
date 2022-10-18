import { Router } from 'express';
import * as controllers from '../controllers/stats.js';

const router = Router()

router.get('/', controllers.getStats);
router.get('/:id', controllers.getStat);
router.post('/', controllers.createStat);
router.put('/:id', controllers.updateStat);
router.delete('/:id', controllers.deleteStat);

export default router;