import { IOrder } from "./order.types";

export let orders: IOrder[] = [
    {
        id: 1,
        products: [
            { id: 0 },  // Book
            { id: 3 }   // Headphones
        ]
    },
    {
        id: 2,
        products: [
            { id: 1 },  // Laptop
            { id: 4 }   // Watch
        ]
    },
    {
        id: 3,
        products: [
            { id: 2 },  // Smartphone
            { id: 5 }   // Keyboard
        ]
    },
    {
        id: 4,
        products: [
            { id: 0 },  // Book
            { id: 1 },  // Laptop
            { id: 5 }   // Keyboard
        ]
    }
];

export const removeOrder = (index: number) => {
    orders = orders.filter(order => order.id !== index)
    return orders
}