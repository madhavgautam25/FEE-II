const API_URL = 'http://localhost:3000/products';

let pdt_list = document.getElementById('product-list');

// GET request
function getProducts(){
    fetch(API_URL)
    .then(res =>  res.json())
    .then((data)=>{
        pdt_list.innerHTML = " ";

        data.forEach((p) => {
            const li = document.createElement("li");
            li.innerHTML = `${p.title} (${p.category}) ------ $${p.price}
            <button onclick="updateProduct(${p.id})">Update</button>
            <button onclick="deleteProduct(${p.id})">Delete</button>
            `
            pdt_list.appendChild(li)
        });

    })
}

// POST

function addProduct(){
    
    const title = document.getElementById('title').value;
    const category = document.getElementById('category').value;
    const price = document.getElementById('price').value;

    fetch(API_URL, {
        method: "POST",
        headers: {"Content-Type": "application/json"},
        body: JSON.stringify({title, category, price}),
    })
    .then(res=>res.json())
    .then(() => getProducts());
}

// PUT

function updateProduct(id){
    const newTitle = prompt("Enter new title: ");

    fetch(`${API_URL}/${id}`, {
        method: "PUT",
        headers: {"Content-Type":"application/json"},
        body: JSON.stringify({id:id, title:newTitle, category:"updated", price:1999}),
    })
    .then((res) => res.json())
    .then(() => getProducts());
}

// DELETE

function deleteProduct(id){
    fetch(`${API_URL}/${id}`, {
        method: "DELETE"
    })
    .then(() => getProducts());
}

getProducts();