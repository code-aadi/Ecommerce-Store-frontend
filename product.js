// yaha logic likha jayega

const params = new URLSearchParams(window.location.search);
const productId = params.get("id");
const product = products.find(p => p.id == productId);


document.getElementById("productImg").src = product.image;
document.getElementById("productName").innerText = product.name;
document.getElementById("productQty").innerText = product.quantity;
document.getElementById("productPrice").innerText = `₹${product.price}`;
//document.getElementById("productDesc").innerText = product.description;
document.querySelector(".desc").innerText = `This is ${product.name} coming with very decent price ₹${product.price}. Must add it in your daily life`
document.querySelector(".disc").innerText = `This ${product.name} was made by their repected owners`
document.title = `${product.name} | Aditya Kirana Store`

document.querySelector(".add").addEventListener("click",()=>{
addToCart(product)
})

