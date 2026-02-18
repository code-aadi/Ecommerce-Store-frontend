

const params = new URLSearchParams(window.location.search);
const category = params.get("cat");

const container = document.getElementById("products");

const filteredProducts = products.filter(
  p => p.category === category
);

filteredProducts.forEach(p => {
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

const categoryNames = {
  "aata-food": "Aata & Food",
  "cold-drinks": "Cold Drinks",
  "masala-spices": "Masala & Spices",
  "soyabean-oil": "Pure Soyabean Oil",
  "hair-care": "Hair Care Products",
  "chai-coffee": "Chai & Coffee",
  "salt-sugar": "Salt & Sugar",
  "instant-food": "Instant Food",
  "oral-care": "Oral Care",
  "dairy-products": "Dairy Products"
};

const title = categoryNames[category];
document.getElementById("category-title").innerText = title
document.title = `${title} | Aditya kirana Store`


container.addEventListener("click",(e)=>{
if(!e.target.classList.contains("add-to-cart")) return
e.preventDefault()
e.stopPropagation()
const card = e.target.closest(".product-card")
const id = card.dataset.id
const product = products.find(p=> p.id == id)
addToCart(product)
})


