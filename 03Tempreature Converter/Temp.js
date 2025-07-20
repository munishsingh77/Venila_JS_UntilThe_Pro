
  const converterButton = document.getElementById("convert");

  converterButton.addEventListener("click", function (e) {
    // e.preventDefault(); // Prevents form submission

    const enteredTemp = parseFloat(document.getElementById("tempValue").value);
    const fromUnit = document.getElementById("fromUnit").value;
    const toUnit = document.getElementById("toUnit").value;

    let result;

    // Celsius to Fahrenheit
    if (fromUnit === "celsius" && toUnit === "fahrenheit") {
      result = (enteredTemp * 9/5) + 32;
    }

    // Celsius to Kelvin
    else if (fromUnit === "celsius" && toUnit === "kelvin") {
      result = enteredTemp + 273.15;
    }

    // Fahrenheit to Celsius
    else if (fromUnit === "fahrenheit" && toUnit === "celsius") {
      result = (enteredTemp - 32) * 5/9;
    }

    // Fahrenheit to Kelvin
    else if (fromUnit === "fahrenheit" && toUnit === "kelvin") {
      result = (enteredTemp - 32) * 5/9 + 273.15;
    }

    // Kelvin to Celsius
    else if (fromUnit === "kelvin" && toUnit === "celsius") {
      result = enteredTemp - 273.15;
    }

    // Kelvin to Fahrenheit
    else if (fromUnit === "kelvin" && toUnit === "fahrenheit") {
      result = (enteredTemp - 273.15) * 9/5 + 32;
    }

    // Same unit
    else {
      result = enteredTemp;
    }

    // Display result
    document.getElementById("result").textContent = `Result: ${result.toFixed(2)}° ${toUnit}`;
  });