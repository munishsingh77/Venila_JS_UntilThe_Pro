  // Simple Interest Calculator

const calculateInt = document.getElementById("calculateBtn")
calculateInt.addEventListener("click", function () {
    const priceAmount = document.querySelector("#principal").value
    const rateOfint = document.querySelector("#rate").value
    const timePeriod = document.querySelector("#time").value

    const Result = (priceAmount * rateOfint * timePeriod) /100;
    document.getElementById("result").textContent = `interest rate is : ${Result}`;
})
    // Clear
document.getElementById("clearBtn").addEventListener("click", function () {
        document.querySelector("#principal").value = ""
        document.querySelector("#rate").value = ""
        document.querySelector("#time").value = ""
        document.querySelector("#result").textContent = "--"
});