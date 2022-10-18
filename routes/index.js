import { Router } from 'express';
import teamsRoutes from './teams.js';
import playersRoutes from './players.js';

const router = Router();

router.get('/', (req, res) => {
  res.send("This is the API root");
});

router.use('/teams', teamsRoutes);
router.use('/players', playersRoutes);

export default router;