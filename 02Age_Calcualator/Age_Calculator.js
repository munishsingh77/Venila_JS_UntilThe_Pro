// ### 2. *Age Calculator*

// > 👉 Ask user for Date of birth → calculate current age
//   👉 So i have to subtract the date of birth from current date




// I have the Button
const calculateAge =  document.querySelector("#Calculate-Age");
 
function toGetcurrentAge() {
    const dateOfbirth = document.querySelector("#Birth-Date").value;
    const birthDayYear = new Date(dateOfbirth);
    const today = new Date();
    
    let currentAge = today.getFullYear() - birthDayYear.getFullYear();
    
    const m = today.getMonth() - birthDayYear.getMonth();
   

  if (m < 0 || (m === 0 && today.getDate() < birthDayYear.getDate())) {
    currentAge--; 
  } 
    

    const exactAge = document.querySelector("label");
    exactAge.textContent = "My Age is : " + currentAge;

    alert("My Age is : " + currentAge);

  } 

calculateAge.addEventListener("click", toGetcurrentAge);



// Subtraction function
