import path from 'node:path';
import Router from 'express';
import multer from 'multer';
import { createCategory } from './app/useCases/categories/createCategory';
import { listCategory } from './app/useCases/categories/listCategory';
import { createProduct } from './app/useCases/products/createProduct';
import { listProduct } from './app/useCases/products/listProduct';
import { listProductByCategory } from './app/useCases/categories/listProductByCategory';
import { listOrders } from './app/useCases/order/listOrders';
import { createOrder } from './app/useCases/order/createOrder';
import { changeOrderStatus } from './app/useCases/order/changeOrderStatus';
import { deleteOrder } from './app/useCases/order/deleteOrder';

export const router = Router();


// Cuida da imagem que chega em uploads e manipula pra o db e pra o front depois no "controller/useCases"
const upload = multer({
    storage: multer.diskStorage({
        destination(req, file, callback) {
            callback(null, path.resolve(__dirname, '..', 'uploads'));
        },
        filename(req, file, callback) {
            callback(null, `${Date.now()}-${file.originalname}`);
        }
    })
});

// List category
router.get('/categories', listCategory);

// Create category
router.post('/categories', createCategory);

// List product
router.get('/products', listProduct);

// Create product
router.post('/products', upload.single('image'), createProduct);

// Get products by category
router.get('/categories/:categoryId/products', listProductByCategory);

// List orders
router.get('/orders', listOrders);

// Create orders
router.post('/orders', createOrder);

// Change order status
router.patch('/orders/:orderId', changeOrderStatus);

// Delete/cancel order
router.delete('/orders/:orderId', deleteOrder);