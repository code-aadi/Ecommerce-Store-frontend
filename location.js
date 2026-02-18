// yahan location wala logic likha jayega

let box = document.querySelector(".box")  // poora dabbla jo show hoga
let searchLocation = document.querySelector(".current-location") // location search karne wali button
let addressInput = document.querySelector(".location") // yahan address fill hoga
let confirmBtn = document.querySelector(".confirm") // confirm button
let suggestionUl = document.querySelector("#suggestions") // type karte wakt suggestion aana
let skipBtn = document.querySelector(".skip") // skip ke liye
let locationBtn = document.querySelector(".deliver") // upar top wala section jispe click karne se ye box open hoga
let closeBtn = document.querySelector(".remove-btn") // close button hai
let locationBtn2 = document.querySelector(".menu") // mobile width wali button

locationBtn.addEventListener("click",()=>{        // upar wale section pe click hote hi box show
   if(!box.classList.contains("show")){
    box.classList.add("show")
     document.body.style.overflowY = "hidden";
     document.querySelector("html").style.overflowY = "hidden"
   }
})
if(locationBtn2){
  locationBtn2.addEventListener("click",(e)=>{
if(e.target.closest(".dots")){
  return
}
if(e.target.closest(".man2") || e.target.closest(".arrow") || e.target.closest(".user-address")){
  if(!box.classList.contains("show")){
    box.classList.add("show")
    document.body.style.overflowY = "hidden";
     document.querySelector("html").style.overflowY = "hidden"
  }
}
  })
}
box.addEventListener("click",(e)=>{          
   if(e.target === box){
    closeLocationBox()
   }
})
closeBtn.addEventListener("click",closeLocationBox) // button pe click hote hi close

function closeLocationBox() {
  box.classList.remove("show");
  document.body.style.overflowY = "";
  document.querySelector("html").style.overflowY = ""
}
document.addEventListener("keydown",(e)=>{            // esc button ke liye
 if(e.key === "Escape" && box.classList.contains("show")){         
    closeLocationBox()
  }
})


// location nikalne wala kaam
searchLocation.addEventListener("click", getLocation);


// 1. Ek Helper function jo browser se coordinates laakar dega (Promise base)
function getPosition() {
    return new Promise((resolve, reject) => {
        navigator.geolocation.getCurrentPosition(resolve, reject, {
            enableHighAccuracy: true,
            timeout: 20000,
            maximumAge: 0
        });
    });
}

// 2. Aapka Main Function jo ab Async hoga
async function getLocation() {
    // Check if geolocation is supported
    if (!navigator.geolocation) {
        console.log("Geolocation is not supported");
        return;
    }

    try {
        // Button text change karne ka logic yahan daal sakte hain
        //detectBtn.innerText = "Finding...";
        document.querySelector(".btn-text").innerText = "Finding..."

        // WAIT karega jab tak browser coordinates na de de
        const position = await getPosition(); 
        
        const lat = position.coords.latitude;
        const lon = position.coords.longitude;

        console.log("Coordinates mil gaye:", lat, lon);

        // WAIT karega jab tak API address na de de
        await getAddressFromCoords(lat, lon);

        // Sab khatam hone ke baad button reset
       // detectBtn.innerText = "📍 Detect Location";
        document.querySelector(".btn-text").innerText = "Current Location"

    } catch (err) {
        // Error handling (Success ki jagah ab Error yahan handle hoga)
        console.log("Error code:", err.code);
        console.log("Error message:", err.message);
        alert("Location nahi mil saki. Please GPS on karein.");
       // detectBtn.innerText = "📍 Detect Location";
               document.querySelector(".btn-text").innerText = "Current Location"

    }
}


async function getAddressFromCoords(lat,lon){
try {
       let response = await fetch(`https://api.opencagedata.com/geocode/v1/json?key=418c71d73c01484a85d511ac1910f1bb&q=${lat},${lon}&pretty=1`)
       if (!response.ok) throw new Error("Server Error");
let data = await response.json()
console.log(data)
if (data.results && data.results.length > 0) {
// Components se data nikaalna
const components = data.results[0].components;

// Road ke liye if-else
let road = "";
if (components.road && components.road !== "unnamed road") {
    road = components.road;
}

const city = components.city || components.city_district || "";
const district = components.state_district || "";
const state = components.state || "";
const pincode = components.postcode || "";


const rawParts = [road, city, district, state, pincode];


const cleanAddress = rawParts.filter(Boolean).join(", ");

addressInput.value = cleanAddress;
        } else {
            alert("Location ki details nahi mil payi.");
        }
    } catch (error) {
        console.error("API Error:", error);
        alert("Server se connect nahi ho paye.");
    }

      
  }


  // confirm button logic
if(confirmBtn && addressInput){

  confirmBtn.addEventListener("click",()=>{
    let userLocation = addressInput.value.trim()
    if(userLocation){
      localStorage.setItem("userLocation",userLocation)
      document.querySelectorAll(".user-address").forEach(address => {
        address.textContent = userLocation
      });
    }
    closeLocationBox()
  })
}


// load pe location section me dikhane ke liye

function loadSavedLocation() {
  const savedLocation = localStorage.getItem("userLocation");
  const deliverSpan = document.querySelectorAll(".user-address");

  if (savedLocation) {
    deliverSpan.forEach(span => {
      span.textContent = savedLocation;
    });
  } else {
     deliverSpan.forEach(span => {
      span.textContent = "Select your location";
    });
    
  }
}

loadSavedLocation();

// skip button ke liye
skipBtn.addEventListener("click", closeLocationBox)


// search feature
let debounceTimer;
addressInput.addEventListener("input", () => {
  const query = addressInput.value.trim();

  if (query.length < 3) {
    suggestionUl.style.display = "none";
    return;
  }

  clearTimeout(debounceTimer);

  debounceTimer = setTimeout(() => {
    fetchSuggestions(query);
  }, 500); 
});



// suggestion function

async function fetchSuggestions(query){
 
  
  try {
    let response = await fetch(`https://api.opencagedata.com/geocode/v1/json?key=418c71d73c01484a85d511ac1910f1bb&q=${query}&pretty=1`)
    const data = await response.json()
    suggestionUl.innerHTML = ""
    if(data.results && data.results.length > 0){
      suggestionUl.style.display = "block";
      data.results.forEach(item => {
        const li = document.createElement("li")
        let addr = item.formatted
        li.textContent = addr.replace("unnamed road, ", "");
        li.onclick = () => {
          addressInput.value = li.textContent;
          suggestionUl.style.display = "none";
          suggestionUl.innerHTML = ""
        };
        suggestionUl.appendChild(li)
      });
    }
    else{
      suggestionUl.style.display = "none"
    }
  } catch (error) {
    console.log(error)
    suggestionUl.style.display = "none";
  }
}







