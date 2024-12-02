# clean-coding-assessment

- Add a new product
   ```
    POST http://localhost:3000/product
    req.body = {
    name: string,
    price: number,
    description: string
   }
   ```
 - Remove a product
   ```
    DELETE http://localhost:3000/product/:id
   ```
 - Place an order
   ```
   POST http://localhost:3000/product
   req.body = {products : [array of product ids]}
   ```
 - Cancel an order
   ```
    http://localhost:3000/product/:id
   ```
 - List all products :
   ```
    GET http://localhost:3000/product
   ```
 - List all orders
   ```
    GET http://localhost:3000/order
   ```
