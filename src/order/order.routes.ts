import { NextFunction, Request, Response, Router } from "express";
import orderService from "./order.services";

const router = Router()

router.get('/', async (req: Request, res: Response, next: NextFunction) => {
    try {
        const orders = orderService.findAllOrders();
        res.send(orders)
    } catch (error) {
        throw error
    }
})

router.post('/', async (req: Request, res: Response, next: NextFunction) => {
    try {
        const products = req.body.products
        const order = orderService.placeOrder(products)
        res.send(order)
    } catch (error) {
        throw error
    }
})

router.delete('/:id', async (req: Request, res: Response, next: NextFunction) => {
    try {
        const id = parseInt(req.params.id)
        const orders = orderService.cancelOrder(id)
        res.send(orders)
    } catch (error) {
        throw error
    }
})

export default router


