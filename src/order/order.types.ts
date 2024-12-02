import { IProduct } from "../products/products.types";

export interface IOrder {
    id: number,
    products: Pick<IProduct, "id">[]
}