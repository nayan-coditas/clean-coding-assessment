import { NextFunction, Request, Response, Router } from "express";
import productService from "./products.services";

const router = Router()

router.get('/', async (req: Request, res: Response, next: NextFunction) => {
    try {
        const products = productService.findAllProducts();
        res.send(products)
    } catch (error) {
        throw error
    }
})

router.post('/', async (req: Request, res: Response, next: NextFunction) => {
    try {
        const product = productService.addProduct(req.body)
        res.send(product)
    } catch (error) {
        throw error
    }
})

router.delete('/:id', async (req: Request, res: Response, next: NextFunction) => {
    try {
        const id = parseInt(req.params.id)
        const products = productService.removeProduct(id)
        res.send(products)
    } catch (error) {
        throw error
    }
})

export default router


