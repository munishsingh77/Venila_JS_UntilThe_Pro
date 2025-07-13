// Build a *"Greeting App"* — when you click a button, 
// it says “Hello Munish!”


const GreetingButton = document.querySelector(".greet-btn");
const GreetingText = document.querySelector(".greet-Text");

console.log(GreetingButton);
console.log(GreetingText);

GreetingButton.addEventListener('click', function () {
    
    GreetingText.textContent = "Hello Munish!";
})

GreetingButton.addEventListener('click', function () {
    
    alert("Hello Munish!");
})

