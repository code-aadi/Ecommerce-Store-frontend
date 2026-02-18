// cart wala logic

window.addEventListener("load", () => {
    document.getElementById("loader").style.display = "none";
  });

function addToCart(product){
      const cartItem = {
    id : product.id,
    name : product.name,
    price : product.price,
    quantity : product.quantity,
    image: product.image,
    amount : 1
  }
  const cart = JSON.parse(localStorage.getItem('cart')) || [];
  const existingProduct = cart.find(item => item.id === cartItem.id && item.quantity === cartItem.quantity);

if (existingProduct) {
    existingProduct.amount += 1;   
} else {
    cart.push(cartItem);
}
localStorage.setItem('cart', JSON.stringify(cart));
updateCartCount()
 // updateProductCount()
}


// page load ke liye hai



function updateCartCount() {
  const cart = JSON.parse(localStorage.getItem("cart")) || [];

  const totalItems = cart.reduce((sum, item) => {
    return sum + item.amount;
  }, 0);

 let badge = document.querySelector(".cart-amount");
 if(badge){
  if(totalItems==0){
      badge.style.display = "none"
   
}
else{
  badge.style.display = "inline-block"
 badge.innerText = totalItems
}

 }

}

updateCartCount();

// cart wale page pe data show karne ke liye 


function displayCart(){
  let cart = JSON.parse(localStorage.getItem("cart")) || []
  const emptyCart = document.querySelector(".empty-cart")
  const total = document.querySelector(".total")
  if(emptyCart){
  if(cart.length===0){
    emptyCart.classList.add("show-empty-cart")
    total.style.display = "none"
    document.querySelector(".product").innerHTML = ""
    return
  }
  }
  if(total){
 total.style.display = "flex"
  emptyCart.classList.remove("show-empty-cart")
  }
  

  const grandTotal = cart.reduce((total, item)=>{
    return total + (item.price * item.amount)
  },0)

  const itemsHTML = cart.map((item)=>{
    const itemTotal = item.price * item.amount

    return `<div class="product-details" data-id="${item.id}">
      <div class="img-name"> <img src="${item.image}" alt=""><p class="product-name">${item.name}</p></div>
      <div class="product-price">₹${item.price}</div>
      <div class="product-amount"><button class="decrease">-</button><span class="amount">${item.amount}</span><button class="increase">+</button></div>
      <div class="prouduct-total-price">₹${itemTotal}</div>
      <div class="product-quantity">${item.quantity}</div>
    </div>`
  })
  let totalAmount = cart.reduce((total,item)=>total+item.amount,0) // saare items ka amount nikalne ke liye
  if(total){
total.innerHTML = ` <h5>Total</h5>
    <p class="total-amount">${grandTotal}</p>
    <p class="item-quan">${totalAmount} item</p>
    <button class="checkout" onclick="checkOut()">Check Out</button>
    <button class="whatsapp-btn" onclick="orderOnWhatsapp()">
  <img src="https://upload.wikimedia.org/wikipedia/commons/6/6b/WhatsApp.svg" alt="WhatsApp Logo">
  <span>Send via WhatsApp</span>
</button>`
  document.querySelector(".product").innerHTML = itemsHTML.join('')
 updateProductCount()
 localStorage.setItem("cartTotal", grandTotal)

}
  }
 
  
window.addEventListener("load",displayCart)

let clearBtn = document.querySelector(".clear")

if(clearBtn){

  clearBtn.addEventListener("click",()=>{
    localStorage.removeItem("cart")
    displayCart()
    updateProductCount()
    
  })
}

let productCart = document.querySelector(".product")
if(productCart){

productCart.addEventListener("click", (e) => {
  

  if (
    !e.target.classList.contains("increase") &&
    !e.target.classList.contains("decrease")
  ) return

  const productDiv = e.target.closest(".product-details")
  if (!productDiv) return  

  const id = productDiv.dataset.id
  let cart = JSON.parse(localStorage.getItem("cart"))
  const item = cart.find(p => p.id == id)

  if (e.target.classList.contains("increase")) {
    item.amount+=1
  }

  if (e.target.classList.contains("decrease")) {
    if(item.amount>1){

      item.amount-=1
    }
    else{
      cart = cart.filter(p=> p.id != id)
    }

  }
  localStorage.setItem("cart", JSON.stringify(cart))
displayCart()
updateProductCount()
})
}
// upar wale line me cart() me value dalne ke liye function

function updateProductCount(){
  const cart = JSON.parse(localStorage.getItem("cart")) || []
  const productCount = cart.length
  const cartText = document.querySelector(".cart-text")
  if(cartText){
    cartText.textContent = `cart (${productCount})`
  }
 
}
function checkOut (){
  window.location.href = "checkout.html"
}

updateProductCount()



 function orderOnWhatsapp() {

  let cart = JSON.parse(localStorage.getItem("cart")) || [];

  if (cart.length === 0) {
    alert("Cart empty hai 😅");
    return;
  }

  let message = `Aur bhai Aditya!
chal ye saaman nikal:\n\n`;

  cart.forEach((product, i) => {
    const subtotal = product.amount * product.price;

    message += `${i + 1}) *${product.name}*\n`;
    message += `   ${product.amount} × ₹${product.price} = ₹${subtotal}\n\n`;
  });

  const grandTotal = cart.reduce((total, item) => {
    return total + item.price * item.amount;
  }, 0);

  message += `────────────\n`;
  message += `*TOTAL: ₹${grandTotal}*\n`;
  message += `────────────\n\n`;
  message += `Reply *YES* to confirm`;

  const phoneNumber = "917828053425";
  const encodedMessage = encodeURIComponent(message);

  const whatsappUrl = `https://wa.me/${phoneNumber}?text=${encodedMessage}`;
  window.open(whatsappUrl, "_blank");
   sessionStorage.setItem("orderDone", "true");
   setTimeout(() => {
    
     window.location.href = "thankyou.html?type=whatsapp"
   }, 1000);
}
