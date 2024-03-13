let products = null;
fetch('products.json')
.then(response => response.json())
.then((data) => {
    products = data;
    console.log(products);
    addDataToHTML();
    });

let listProduct = document.querySelector('.listProduct');
function addDataToHTML(){
    products.forEach(product => {
        let newProduct = document.createElement('a');
        newProduct.href = '/detail.html?id=' + product.id;
        newProduct.classList.add('item');
        newProduct.innerHTML = `
        <img src = "${product.image}">
        <h3>${product.name}</h3>
        <div class"price">${product.price}</div>
        `;
        listProduct.appendChild(newProduct);
    });
}