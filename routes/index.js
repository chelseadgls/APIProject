import { Router } from 'express';
import teamsRoutes from './teams.js';
import playersRoutes from './players.js';
import gamesRoutes from './games.js';
import statsRoutes from './stats.js';

const router = Router();

router.get('/', (req, res) => {
  res.send("This is the API root");
});

router.use('/teams', teamsRoutes);
router.use('/players', playersRoutes);
router.use('/games', gamesRoutes);
router.use('/stats', statsRoutes);

export default router;