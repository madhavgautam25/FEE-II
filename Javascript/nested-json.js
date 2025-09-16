let orders = `{
"orderId": 101,
"customer": "Rohit",
"items": [
{"name": "Shoes", "price": 2000, "qty": 2},
{"name": "T-shirt", "price": 800, "qty": 3}
]
}`;

let obj = JSON.parse(orders);

let totalBill = 0;
for(let i in obj.items){
    totalBill += obj[i].price;
}
console.log(totalBill);