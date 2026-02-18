window.addEventListener("load", () => {
  const loader = document.getElementById("loader-main");
  loader.style.display = "none";
});



// ELEMENTS SELECT KAR RAHE HAIN
    const mobileStep = document.getElementById('mobile-step');
    const otpStep = document.getElementById('otp-step');

    const mobileInput = document.getElementById('mobile-input');
    const otpInput = document.getElementById('otp-input');

    const proceedBtn = document.getElementById('proceed');
    const verifyBtn = document.getElementById('verify-btn');
    const resendOtp = document.querySelector(".resend")
        const locationPage = document.querySelector(".page")

   let currentStep = "mobile"

    function getOtp() {
        let otp = "";

        // first digit (1–9)
        otp += Math.floor(Math.random() * 9) + 1;

        // remaining digits
        for (let i = 1; i < 4; i++) {
            otp += Math.floor(Math.random() * 10);
        }

        return otp;
    }


    let generatedOtp = ""; 


    proceedBtn.addEventListener("click", () => {

        if (mobileInput.value.length === 10) {


            proceedBtn.innerText = "Sending OTP...";
         

            setTimeout(() => {

                generatedOtp = getOtp();

                alert(`Your Aditya Kirana Store OTP is: ${generatedOtp}`);

          
                mobileStep.style.display = "none";
                otpStep.style.display = "block";
                  currentStep = "otp"
          updateBackButton()
                proceedBtn.innerText = "Proceed";


            }, 1500);
        


        } else {
            alert("Please enter a valid 10-digit mobile number.");
        }
    });

     resendOtp.addEventListener("click",()=>{
        verifyBtn.textContent = "Sending..."
        setTimeout(() => {
             generatedOtp = getOtp();

                alert(`Your Aditya Kirana Store OTP is: ${generatedOtp}`);
                 verifyBtn.textContent = "Verify OTP"

        }, 1500);
    })


    verifyBtn.addEventListener("click", () => {
        verifyBtn.textContent = `Verifying...`
        setTimeout(() => {
            if (otpInput.value == generatedOtp) {
            setTimeout(() => {
                
            }, 2000);
           
        loginSuccess()
        otpStep.style.display = "none"
        locationPage.style.display = "none"
        

        } else {
            alert("Incorrect OTP! Please try again.");
            verifyBtn.textContent = `Verify OTP`
        }
        }, 2000);
        
    });
    

    // ab yaha se location form suru
    const placeOrderBtn = document.querySelector(".placeOrderBtn")
    const userName = document.querySelector(".userName")
    const userNumber = document.querySelector(".userMobileNumber")
    const pincode = document.querySelector(".userPincode")
    const city = document.querySelector(".userCity")
    const state = document.querySelector("#state-select")
    const houseBuilding = document.querySelector(".userhouseBuilding")
    const areaStreet = document.querySelector(".userArea")
    const landMark = document.querySelector(".userLandmark")
    // location wala form page
    const select = document.getElementById('state-select');
states.forEach(state => {
        const option = document.createElement('option');
        option.value = state;          
        option.textContent = state;    
        select.appendChild(option);
    });
    

   placeOrderBtn.addEventListener("click",()=>{
   if(userName.value === ""){
    alert("Please Enter Your Full Name")
    return
   }
   if(userNumber.value.length !== 10){
    alert("Please Enter a Valid Mobile Number")
    return
   }
   if(pincode.value.length !== 6){
    alert("Please Enter a Valid Pin Code")
    return
   }
   if(state.value === ""){
       alert("please Select the State")
    return
   }
   if(city.value === ""){
    alert("please Enter Your City")
    return
   }
   if(houseBuilding.value === ""){
    alert("Please Enter House Number or Building Name")
    return
   }
   if(areaStreet.value === ""){
    alert("please Enter Your Area, Street or Sector")
    return
   }
   const selectedPayment = document.querySelector('input[name="payment-mode"]:checked');

    if (!selectedPayment) {
        alert("Please Select the Payment Mode");
        return;
    }

    // Agar select hai, to value nikalo
    const paymentMethod= selectedPayment.value;
    if(paymentMethod === "cod"){
       
        cleanup()
    }
else if(paymentMethod === "online"){
    openPayment()
}
   })
  function cleanup(){
    const nameToSave = document.querySelector(".userName").value; 
    localStorage.setItem("customerName", nameToSave);
localStorage.removeItem("cartTotal");
sessionStorage.setItem("orderDone", "true");
window.location.href = "thankyou.html?type=confirmed";


  }

  function openPayment(){ 
let cartTotal = localStorage.getItem("cartTotal") || 0;
document.querySelector(".amount").textContent = `Pay ₹${cartTotal}`;
  document.getElementById('paymentOverlay').style.display='flex';

}

function closePayment(){
  document.getElementById('paymentOverlay').style.display='none';
}

function processPayment(){
  document.querySelector('.pay-btn').style.display='none';
  document.getElementById('loader').style.display='block';
  setTimeout(()=>{
    const isSuccess = Math.random() > 0.2;
    if(isSuccess){

        cleanup()
    }
    else{
      alert("Payment Failed! Please try again.");
      document.getElementById('loader').style.display = 'none'; 
    document.querySelector('.pay-btn').style.display = 'block';
    }
  },2500);
}

function loginSuccess(){
    document.body.classList.add("body")
    document.querySelector(".success-card").style.display = "block"
    document.querySelector("#logo").style.display = "none"
     document.querySelector(".back-btn").style.display = "none"
}

function addressPage(){
   
    locationPage.style.display = "block"
    document.body.classList.remove("body")
        document.querySelector(".success-card").style.display = "none"

}
let backBtn = document.querySelector(".back-btn")
let backBtnText = document.querySelector(".back-btn span")
function updateBackButton(){
    if(currentStep === "mobile"){
   backBtnText.textContent = "Home"
   backBtn.onclick = ()=>{
    window.location.href = "index.html"
   }
   
    }
    else if(currentStep === "otp"){
    backBtnText.textContent = mobileInput.value
    backBtn.onclick = ()=>{
        otpStep.style.display = "none"
        mobileStep.style.display = "block"
        currentStep = "mobile"
        updateBackButton()
    }
   }
}
updateBackButton()