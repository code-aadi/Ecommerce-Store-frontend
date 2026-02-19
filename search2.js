// ye search logic hai jo har page ke liye hai
window.addEventListener("load", () => {
    document.getElementById("loader").style.display = "none";
  });
let searchInput = document.querySelector("#search")
let searchBtn = document.querySelector(".search img")

searchBtn.addEventListener("click",()=>{
    let query = searchInput.value
    if(query){
        window.location.href = `search.html?q=${query}`
    }
})
searchInput.addEventListener("keypress", (e) => {
    if (e.key === "Enter") {
      e.preventDefault()
        let query = searchInput.value;
        if (query) {
            window.location.href = `search.html?q=${query}`;
        }
    }
});


window.addEventListener('pageshow', (event) => {
      if (searchInput) {
        searchInput.value = '';
    }
});













let dropDown = document.querySelector(".drop-down")
if(dropDown){
    dropDown.innerHTML = `<div class="category-box">
    <a class="cat" href="category.html?cat=aata-food">Aata & Food</a>
    <a class="cat" href="category.html?cat=cold-drinks">Cold Drinks</a>
    <a class="cat" href="category.html?cat=masala-spices">Masala & Spices</a>
    <a class="cat" href="category.html?cat=soyabean-oil">Pure Soyabean Oil</a>
    <a class="cat" href="category.html?cat=hair-care">Hair Care Products</a>
    <a class="cat" href="category.html?cat=chai-coffee">Chai & Coffee</a>
    <a class="cat" href="category.html?cat=salt-sugar">Salt & Sugar</a>
    <a class="cat" href="category.html?cat=instant-food">Instant Food</a>
    <a class="cat" href="category.html?cat=oral-care">Oral Care</a>
    <a class="cat" href="category.html?cat=dairy-products">Dairy Products</a>
    </div>`
}


// side bar logic jo upar three dots hai na uska
let sideBar = document.querySelector(".left-sidebar")
if(sideBar){

    sideBar.innerHTML = `<div class="sidebar">
    <div class="sidelogo"><img src="Images/adityalogo-removebg-preview.png" alt=""></div>
    <h4 class="sidetext side-cat"><span class="top-cat">Categories</span><img src="Images/chevron-direction-right-icon.svg" alt=""></h4>
    <div class="category-box2">
    <a class="cat2" href="category.html?cat=aata-food">Aata & Food</a>
    <a class="cat2" href="category.html?cat=cold-drinks">Cold Drinks</a>
    <a class="cat2" href="category.html?cat=masala-spices">Masala & Spices</a>
    <a class="cat2" href="category.html?cat=soyabean-oil">Pure Soyabean Oil</a>
    <a class="cat2" href="category.html?cat=hair-care">Hair Care Products</a>
    <a class="cat2" href="category.html?cat=chai-coffee">Chai & Coffee</a>
    <a class="cat2" href="category.html?cat=salt-sugar">Salt & Sugar</a>
    <a class="cat2" href="category.html?cat=instant-food">Instant Food</a>
    <a class="cat2" href="category.html?cat=oral-care">Oral Care</a>
    <a class="cat2" href="category.html?cat=dairy-products">Dairy Products</a>
    </div>
    <h4 class="sidetext sidetext2"><a href="index.html">Home</a></h4>  
    <h4 class="sidetext sidetext2"><a href="https://www.instagram.com/code_aadi">Contact</a></h4> 
    </div>`
    }

  let cate = document.querySelector(".category-box2")
    let extraText = document.querySelectorAll(".sidetext2")
    let button = document.querySelector(".side-cat")
    let arrow = document.querySelector(".sidetext img")
    let catText = document.querySelector(".top-cat")
    button.addEventListener("click",()=>{
  cate.classList.toggle("show-cat")
  extraText.forEach(text => {
    text.classList.toggle("hide-sidetext")
  });
if(cate.classList.contains("show-cat")){
    button.style.backgroundColor = "rgb(135, 171, 202)"
   arrow.style.transform = "rotate(90deg)"
    catText.textContent = "Back"
    
}
else{
    button.style.backgroundColor = "black"
          arrow.style.transform = "rotate(0)"
        catText.textContent = "Categories"

}
    })
   
let threeDots = document.querySelector(".menu img")
let overlay = document.querySelector(".overlay");

if(threeDots){
    threeDots.addEventListener("click",()=>{
  sideBar.classList.add("side-show-hide")
  overlay.classList.add("active");
    })
}
if(overlay){

overlay.addEventListener("click", () => {
  sideBar.classList.remove("side-show-hide");
  overlay.classList.remove("active");
});
}

