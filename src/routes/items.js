import models  from '../models';
import { Router } from 'express';
const router = Router();
const Item = models.Item;

/* GET users listing. */
router.get('/', (req, res, next) => {
  let xxx = models.Item;
  // let items = await models.Item.findAll();
  res.send([])
});

export default router;
