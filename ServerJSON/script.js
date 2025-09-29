// fetch("http://localhost:3000/products")
//   .then((res) => res.json())
//   .then((data) => console.log(data));


// fetch("http://localhost:3000/products", {
//   method: "POST",
//   headers: { "Content-Type": "application/json" },
//   body: JSON.stringify({
//     id: 11,
//     title: "products 11",
//     category: "furniture",
//     price: 7000,
//   }),
// })
//   .then((r) => r.json())
//   .then(console.log)
//   .catch(console.error);

fetch("http://localhost:3000/products/11", {
    method: "PUT",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({
        id: 11,
        title: "Updated Product 11",
        category: "furniture",
        price: 7500,
    }),
    })
    .then((r) => r.json())
    .then(console.log)
    .catch(console.error);

// fetch("http://localhost:3000/products/11", {
//   method: "PATCH",
//   headers: { "Content-Type": "application/json" },
//   body: JSON.stringify({
//     price: 8000,
//   }),
// })
//   .then((r) => r.json())
//   .then(console.log)
//   .catch(console.error);

// fetch("http://localhost:3000/products/11", {
//   method: "DELETE",
// })
//   .then((r) => r.json())
//   .then(console.log)
//   .catch(console.error);