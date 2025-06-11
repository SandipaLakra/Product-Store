import express from 'express';
import { createProduct, deleteProduct, getAllProducts, getAProduct, modifyProduct } from '../controller/product.controller.js';

const router = express.Router();

router.post("/", createProduct)
router.delete("/:id", deleteProduct)
router.get("/:id", getAProduct)
router.get("/", getAllProducts)
router.put("/:id", modifyProduct)

export default router;
