let container = document.querySelector("#products")
let searchResult = document.querySelector(".search-result")
let clearResult = document.querySelector(".clear-result")
const params = new URLSearchParams(window.location.search)
const query = params.get('q')

searchResult.textContent = `search results for "${query}"`
document.title = `Search: ${query} | Aditya Kirana Store`;


const filteredProducts = products.filter(
    p => p.name.toLowerCase().includes (query.toLowerCase())
)
if(filteredProducts.length > 0){

    filteredProducts.forEach(p=> {
     container.innerHTML += `
    <div class="product-card" data-id="${p.id}">
  <a href="product.html?id=${p.id}" class="product-link">
    <img src="${p.image}" alt="${p.name}">
    <h4 class = "category-h4">${p.name}</h4>
    <p class="qty">${p.quantity}</p>
    <p class="price"><del>₹${p.mrp}</del>&nbsp; ₹${p.price}</p>
  </a>
  <button class="add-to-cart">Add to Cart</button>
</div>
  `;
    });
}
else{
    searchResult.textContent = `No products found for "${query}" 😢`
}

clearResult.addEventListener("click",()=>{
    window.location.href = "index.html"
})


container.addEventListener("click",(e)=>{
if(!e.target.classList.contains("add-to-cart")) return
e.preventDefault()
e.stopPropagation()
const card = e.target.closest(".product-card")
const id = card.dataset.id
const product = products.find(p=> p.id == id)
addToCart(product)
})