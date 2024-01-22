const forme = document.getElementById('forme')
const namee = document.getElementById('name')
const price = document.getElementById('price')

forme.addEventListener('submit', (e) => {
    e.preventDefault()

    axios.post('https://655e356a9f1e1093c59ab81c.mockapi.io/Api3/Api4', {
        name: namee.value,
        price: price.value,
    })
    .then(res => {
        console.log(res.data);
        getProducts()
        forme.reset()

    })
})


const product = document.getElementById('addProducts')
const nameInput = document.getElementById('nameInput')
const formOfSearch = document.getElementById('formOfSearch')
const az = document.getElementById('az')
const za = document.getElementById('za')
const def = document.getElementById('def')





function getProducts() {
    product.innerHTML = ''
    axios.get('https://655e356a9f1e1093c59ab81c.mockapi.io/Api3/Api4')
.then(res => {
    db = res.data
    db.map(item => {
        const box = document.createElement('tr')
        box.className = 'box'
        box.innerHTML = `
<td><img src="${item.image}" alt=""></td>
<td><p>${item.name}</p></td>
<td><p>$ ${item.price}</p></td>
<td><button onclick="(remove(${item.id}))">Remove</button></td>
        `
        product.appendChild(box)
    })
})
}
getProducts()

function remove(id) {
    axios.delete(`https://655e356a9f1e1093c59ab81c.mockapi.io/Api3/Api4/${id}`)
    .then(res => {
        getProducts()
    })
}

function searchForm() {
    product.innerHTML = ''
    axios.get('https://655e356a9f1e1093c59ab81c.mockapi.io/Api3/Api4')
.then(res => {
    db = res.data
    const filteredData = db.filter(item => item.name.toLowerCase().includes(nameInput.value.toLowerCase()))
    filteredData.map(item => {
        const box = document.createElement('tr')
        box.className = 'box'
        box.innerHTML = `
<td><img src="${item.image}" alt=""></td>
<td><p>${item.name}</p></td>
<td><p>$ ${item.price}</p></td>
<td><button onclick="(remove(${item.id}))">Remove</button></td>
        `
        product.appendChild(box)
    })
})
}

formOfSearch.addEventListener('submit', (e) => {
    e.preventDefault()
    searchForm()
})

function getAZ() {
    product.innerHTML = ''
    axios.get('https://655e356a9f1e1093c59ab81c.mockapi.io/Api3/Api4')
.then(res => {
    db = res.data
    const sort = db.sort((a, b) => a.name.localeCompare(b.name))
    sort.map(item => {
        const box = document.createElement('tr')
        box.className = 'box'
        box.innerHTML = `
<td><img src="${item.image}" alt=""></td>
<td><p>${item.name}</p></td>
<td><p>$ ${item.price}</p></td>
<td><button onclick="(remove(${item.id}))">Remove</button></td>
        `
        product.appendChild(box)
    })
})
}

az.addEventListener('click', (e) => {
    e.preventDefault()
    getAZ()
})

function getZA() {
    product.innerHTML = ''
    axios.get('https://655e356a9f1e1093c59ab81c.mockapi.io/Api3/Api4')
.then(res => {
    db = res.data
    const sort = db.sort((a, b) => b.name.localeCompare(a.name))
    sort.map(item => {
        const box = document.createElement('tr')
        box.className = 'box'
        box.innerHTML = `
<td><img src="${item.image}" alt=""></td>
<td><p>${item.name}</p></td>
<td><p>$ ${item.price}</p></td>
<td><button onclick="(remove(${item.id}))">Remove</button></td>
        `
        product.appendChild(box)
    })
})
}

za.addEventListener('click', (e) => {
    e.preventDefault()
    getZA()
})

def.addEventListener('click', (e) => {
    e.preventDefault()
    getProducts()
})