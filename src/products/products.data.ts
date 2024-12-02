import { IProduct } from "./products.types";

export let products: IProduct[] = [
    {
        id: 0,
        name: "Book",
        price: 19,
        description: "A fascinating book on programming concepts."
    },
    {
        id: 1,
        name: "Laptop",
        price: 999,
        description: "A powerful laptop with a sleek design and fast performance."
    },
    {
        id: 2,
        name: "Smartphone",
        price: 699,
        description: "A high-end smartphone with a large screen and great camera."
    },
    {
        id: 3,
        name: "Headphones",
        price: 89,
        description: "Noise-cancelling headphones for an immersive audio experience."
    },
    {
        id: 4,
        name: "Watch",
        price: 249,
        description: "A stylish smartwatch with fitness tracking features."
    },
    {
        id: 5,
        name: "Keyboard",
        price: 49,
        description: "A mechanical keyboard with customizable keys."
    },
    {
        id: 6,
        name: "Camera",
        price: 499,
        description: "A DSLR camera perfect for professional photography."
    },
    {
        id: 7,
        name: "Monitor",
        price: 199,
        description: "A 24-inch 1080p monitor with great color accuracy."
    },
    {
        id: 8,
        name: "Charger",
        price: 29,
        description: "A fast-charging USB-C charger for all your devices."
    },
    {
        id: 9,
        name: "Speaker",
        price: 129,
        description: "A portable Bluetooth speaker with excellent sound quality."
    }
];

export const removeProduct = (id: number) => {
    products = products.filter(product => product.id !== id)
    return products
}