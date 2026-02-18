const toggleBtn = document.getElementById("toggleBtn");
const extraItems = document.querySelectorAll(".extra-categories");
const buttonText = document.querySelector(".more-less")
const arrowIcon = document.querySelector(".arrow-up-down")

toggleBtn.addEventListener("click", () => {
  extraItems.forEach(item => {
    item.classList.toggle("show");
  });
arrowIcon.classList.toggle("less-arrow")

  buttonText.innerText =
    extraItems[0].classList.contains("show")
      ? "Show Less"
      : "Show More";
});



// home page pe jo items hai unme add to cart karne ke liye
let secondContainer = document.querySelector(".quench")

secondContainer.addEventListener("click",(e)=>{
if(!e.target.classList.contains("cart")) return
e.preventDefault()
e.stopPropagation()
const card = e.target.closest(".pahla")
const id = card.dataset.id
const product = products.find(p=> p.id == id)
addToCart(product)
})

// niche wale products ke liye
let thirdContainer = document.querySelector(".dairy")

thirdContainer.addEventListener("click",(e)=>{
if(!e.target.classList.contains("cart")) return
e.preventDefault()
e.stopPropagation()
const card = e.target.closest(".pahla")
const id = card.dataset.id
const product = products.find(p=> p.id == id)
addToCart(product)
})



// niche wale cards scroller ka logic



const allSections = document.querySelectorAll('.product-section');

allSections.forEach((section) => {
    
   
    const container = section.querySelector('.saaman'); 
    const btnRight = section.querySelector('.right');
    const btnLeft = section.querySelector('.left');
 
    if(!container || !btnRight || !btnLeft) return; 

 
    btnRight.addEventListener('click', () => {
        const maxScroll = container.scrollWidth - container.clientWidth;
        
      
        if (Math.ceil(container.scrollLeft) >= maxScroll - 10) {
            container.scrollTo({ left: 0, behavior: 'smooth' });
        } else {
            container.scrollBy({ left: container.clientWidth, behavior: 'smooth' });
        }
    });

    
    btnLeft.addEventListener("click", () => {
       
        if (container.scrollLeft <= 20) {
            container.scrollTo({ left: container.scrollWidth, behavior: 'smooth' });
        } else {
            container.scrollBy({ left: -container.clientWidth, behavior: 'smooth' });
        }
    });

});


