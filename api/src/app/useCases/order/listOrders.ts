import { Request, Response } from 'express';
import { Order } from '../../models/Order';

export async function listOrders(req: Request, res: Response) {
    try {
        // popula pra aparecer no frontend as informações do produto completo
        const orders = await Order.find()
            // ordena a chegada dos pedidos do mais velho pra o mais novo (se fosse ao contrário seria -1)  
            .sort({ createdAt: 1 })
            .populate('products.product');
    
        res.json(orders);
    } catch(error) {
        console.log(error);
        res.sendStatus(500);        
    }
}