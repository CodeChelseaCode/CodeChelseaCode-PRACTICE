function calculateBMI() {
    var weight = parseFloat(document.getElementById("weight").value);
    var height = parseFloat(document.getElementById("height").value) / 100; // convert height from cm to meters
  
    var bmi = weight / (height * height);
  
    var message = "Your BMI is: " + bmi.toFixed(2);
    alert(message);
  }
  