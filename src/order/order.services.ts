import { products } from "../products/products.data";
import { IOrder } from "./order.types";
import { orders, removeOrder } from "./order.data";

const placeOrder = (productIds: number[]) => {
    const unavailableProducts = productIds.filter(id => !products.find(product => product.id === id));
    if (unavailableProducts.length > 0) {
        console.log(`Product(s) with ID(s) ${unavailableProducts.join(", ")} not found.`);
        return;
    }
    const newOrder: IOrder = {
        id: orders.length > 0 ? orders[orders.length - 1].id + 1 : 1,
        products: productIds.map(id => ({ id })),
    };
    orders.push(newOrder);
    console.log("Order placed successfully!", newOrder);
    return orders
}

const cancelOrder = (orderId: number) => {
    const index = orders.findIndex(order => order.id === orderId);
    if (index === -1) {
        console.log("Order not found.");
        return;
    }
    console.log("Order cancelled successfully!");
    return removeOrder(index);
}

const findAllOrders = () => {
    console.log("Order List:", orders);
    const ordersList = orders.map(order => {
        return {
            orderId: order.id, products: order.products.map(product => products.find(prod => prod.id === product.id))
        }
    })
    return ordersList;
}

export default {
    findAllOrders,
    cancelOrder,
    placeOrder
}