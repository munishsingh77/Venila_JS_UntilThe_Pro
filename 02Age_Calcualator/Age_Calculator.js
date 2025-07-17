// ### 2. *Age Calculator*

// > 👉 Ask user for Date of birth → calculate current age
//   👉 So i have to subtract the date of birth from current date




// I have the Button
const calculateAge =  document.querySelector("#Calculate-Age");
 
function toGetcurrentAge() {
    const dateOfbirth = document.querySelector("#Birth-Date").value;
    const userDate = new Date(dateOfbirth);
    const year = userDate.getMilliseconds();
    
    
    const today = new Date();
    const day = today.getMilliseconds();
    
     currentAge = day - year ;
    console.log(currentAge);

   const exactAge = document.querySelector("label");
     exactAge.textContent = "My Age is : " + currentAge;
} 

calculateAge.addEventListener("click", toGetcurrentAge);



// Subtraction function
