import express from "express";
import { getProperty } from "../controllers/propertyController";

const router = express.Router();

router.get('/property', getProperty);
 
router.get('/', (req, res) => {
  res.send('Welcome to the homepage');
});


export default router;