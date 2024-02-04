import { Router } from 'express';
import { getDiaryCost } from '../controllers/operations';

const router: Router = Router();

router.post('/', getDiaryCost);

export default router;
