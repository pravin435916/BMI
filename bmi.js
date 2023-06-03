
function calculate() {
    let kg = document.getElementById("kg");
    let cm = document.getElementById("cm");
    let h2 = document.getElementById("h2");
    let h21 = document.getElementById("h21");
    var weight = parseFloat(kg.value);
    var height = parseFloat(cm.value);
    var bmi = parseFloat(weight /((height*height)  * Math.pow(10,-4)));
    bmi = bmi.toFixed(2);
    var category = '';

    if (bmi < 18.5) {
      category = 'Underweight';
    } else if (bmi >= 18.5 && bmi < 25) {
      category = 'Normal weight';
    } else if (bmi >= 25 && bmi < 30) {
      category = 'Overweight';
    } else {
      category = 'Obese';
    }
    if (isNaN(weight) || isNaN(height)) {
        h2.textContent = 'Please enter valid values for weight and height.';
        return;
    }
    // h2.textContent = `<div>
    //                  <h2>"your BMI is "`+(bmi)+`</h2>
    //                  <h2></h2>
    //                  </div>`;
    h2.textContent = 'Your Bmi is ' +bmi;
    h21.textContent =  'you are ' +  category;
}