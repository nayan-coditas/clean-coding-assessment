import { products } from "../products/products.data";
import { IProduct } from "../products/products.types";

const findAllProducts = () => {
    console.log("Product List:", products);
    return products;
}

const addProduct = (newProduct: IProduct) => {
    if (products.find(product => product.id === newProduct.id)) {
        console.log("Product with this ID already exists.");
        return;
    }
    products.push(newProduct);
    console.log("Product added successfully!");
    return products;
}

const removeProduct = (productId: number): any => {
    const index = products.findIndex(product => product.id === productId);
    if (index === -1) {
        console.log("Product not found.");
        return;
    }
    console.log("Product removed successfully!");
    return removeProduct(index);
}

export default {
    findAllProducts,
    addProduct,
    removeProduct,
}