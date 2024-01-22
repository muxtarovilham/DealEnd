const product = document.getElementById('product')

function getProducts() {
    const wishlist = JSON.parse(localStorage.getItem('wishlist')) || []
product.innerHTML = ''
wishlist.map((item, index) => {
        const box = document.createElement('div')
        box.className = 'box col-12 col-sm-4 col-lg-2'
        box.innerHTML = `
        <div class="boxes">
<img src="${item.image}" alt="">
<p>${item.name}</p>
<p>$ ${item.price}</p>
<div class="buttons">
    <button onclick="(remove(${index}))">Remove</button>
</div>
</div>
        `
        product.appendChild(box)
    })
}
function remove(index) {
    const wishlist = JSON.parse(localStorage.getItem('wishlist')) || []
    wishlist.splice(index, 1)
    localStorage.setItem('wishlist', JSON.stringify(wishlist))
    getProducts()
}
getProducts()