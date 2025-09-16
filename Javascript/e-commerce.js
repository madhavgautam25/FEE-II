//3. E-Commerce Product Catalog
let products = [
{ id: 1, name: "Laptop", price: 45000, stock: 10 },
{ id: 2, name: "Phone", price: 20000, stock: 5 },
{ id: 3, name: "Tablet", price: 25000, stock: 0 }
];

for(let i in products){
    if(products[i].stock != 0){
        console.log(products[i].name);
    }
}

let expensiveProduct = -1;
let productName = null;
for(let i in products){
    if(products[i].price > expensiveProduct){
        expensiveProduct = products[i].price;
        productName = products[i].name;
    }
}
console.log("Expensive Product is:",productName);

let str = JSON.stringify(products);