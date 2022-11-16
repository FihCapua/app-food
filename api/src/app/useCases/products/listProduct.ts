import { Product } from '../../models/Product';
import { Request, Response } from 'express';

export async function listProduct(req: Request, res: Response) {
    try {
        const products = await Product.find();
    
        res.json(products);
    } catch (error) {
        console.log(error);
        res.sendStatus(500);        
    }
}