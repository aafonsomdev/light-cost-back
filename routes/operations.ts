import { Router } from 'express';
import { getCostFromApi, getDiaryCost } from '../controllers/operations';

const router: Router = Router();

router.post('/', getDiaryCost);
router.post('/getDynamicCost', getCostFromApi);

export default router;
