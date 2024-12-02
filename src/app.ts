import express from "express"
import cors from "cors"
import productRouter from "./products/products.routes"
import orderRouter from "./order/order.routes"

export const startServer = () => {
    try {
        const app = express();

        app.use(cors())
        app.use(express.json())

        app.use('/product', productRouter)
        app.use('/order', orderRouter)

        const PORT = process.env.PORT
        app.listen(PORT, () => {
            console.log(`🚀server started listening on PORT ${PORT}, \n⚡http://localhost:${PORT}`)
        })
    } catch (error) {
        console.log(error);
        process.exit(1)
    }
}