const product = document.getElementById('product')

function getProducts() {
    const cart = JSON.parse(localStorage.getItem('cart')) || []
product.innerHTML = ''
    cart.map((item, index) => {
        const box = document.createElement('div')
        box.className = 'box col-12 col-sm-4 col-lg-2'
        box.innerHTML = `
        <div class="boxes">
<img src="${item.image}" alt="">
<p>${item.name}</p>
<p>$ ${item.price}</p>
<p>Count: ${item.count}</p>
<div class="buttons">
    <button onclick="(remove(${index}))">Remove</button>
</div>
</div>
        `
        product.appendChild(box)
    })
}
function remove(index) {
    const cart = JSON.parse(localStorage.getItem('cart')) || []
    cart.splice(index, 1)
    localStorage.setItem('cart', JSON.stringify(cart))
    getProducts()
}
getProducts()