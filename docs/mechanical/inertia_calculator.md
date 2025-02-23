---
sidebar_position: 2
---

# Inertia Calculator

Below is a calculator UI for calculating rotational inertia which is useful in finding rotational kinetic energy, summation of torque, etc...

```html title="InertiaCalc.html"
<html>
<head>
<link rel="stylesheet" href="InertiaCalcCSS.css">
<script src="inertiaJS.JS"></script>
</head>
<body>

<div class="InertiaCalc" >
  <input type="text" class="calculator-screen" value="" disabled />
  <p>Input all your necessary data in the base scientific units about your object to get the inertia. Click on object type to output data</p>
  
    <form>
      
      <label for="Mass">Mass</label>
      <input type="text" id="Mass" name="Mass"><br><br>
      
      <label for="Radius">Radius</label>
      <input type="text" id="Radius" name="Radius"><br><br>
      
      <label for="Length">Length</label>
      <input type="text" id="Length" name="Length"><br><br>
      
      <label for="CMInertia">Center of mass inertia</label>
      <input type="text" id="CMInertia" name="CMInertia"><br><br>
      <div class="InertiaType" >
        <input type="button" class = "objectType" value="Solid Cylinder" onclick="processInputs(); calculate('Solid Cylinder'); updateDisplay()">
        <input type="button" class = "objectType" value="Hoop" onclick="processInputs(); calculate('Hoop'); updateDisplay()">
        <input type="button" class = "objectType" value="Solid Sphere" onclick="processInputs(); calculate('Solid Sphere'); updateDisplay()">
        <input type="button" class = "objectType" value="Rod about center of mass" onclick="processInputs(); calculate('Rod about center of mass'); updateDisplay()">
        <input type="button" class = "objectType" value="Solid cylinder about central diameter" onclick="processInputs(); calculate('SolidCylinderAboutCentralDia'); updateDisplay()">
        <input type="button" class = "objectType" value="Hoop about diameter" onclick="processInputs(); calculate('HoopAboutDiameter'); updateDisplay()">
        <input type="button" class = "objectType" value="Thin spherical shell" onclick="processInputs(); calculate('ThinSphericalShell'); updateDisplay()">
        <input type="button" class = "objectType" value="Rod about end" onclick="processInputs(); calculate('RodAboutEnd'); updateDisplay()">
        <input type="button" class = "objectType" value="Parallel Axis Theorom" onclick="processInputs(); calculate('ParallelAxisTheorom');updateDisplay()">
        <input type="reset" class = "objectType" value="All clear" onclick="resetCalculator(); updateDisplay() ">
      </div>
    </form>
</div>
</body>
</html>
```


```css title="InertiaCalcCSS.css"
html {
  box-sizing: border-box;
  color: white;
}

*, *::before, *::after {
  margin: 0;
  padding: 0;
  box-sizing: inherit;
}

.InertiaCalc {
  border: 4px solid #ccc;
  border-color: black;
  border-radius: 5px;
  position: absolute;
  transform: translate(1%, 0%); /*this moves the interactive element down*/
  width: 960px;
  height: 570px;
}

.calculator-screen {
  width: 100%;
  font-size: 5rem;
  height: 80px;
  border: none;
  background-color: #252525;
  color: #fff;
  text-align: right;
  padding-right: 20px;
  padding-left: 10px;
}

.objectType{
  font-size: 80%;
  height: 40px;
  background-color: #22518D;
  border-radius: 3px;
  border: 3px solid #c4c4c4;
  font-size: 2rem;
  color: white;
}

.objectType:hover {
  background-color: 65A0EC;
}
.InertiaType {
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  grid-gap: 20px;
  padding: 10px;
}
```


```js title="inertiaJS.JS"
const calculator = {
  displayValue: '0',
  Mass: null,
  Radius: null,
  Length: null,
  CMInertia: null,};

function processInputs(){
  calculator.Mass = parseFloat(document.getElementById("Mass").value);
  calculator.Radius = parseFloat(document.getElementById("Radius").value);
  calculator.Length = parseFloat(document.getElementById("Length").value);
  calculator.CMInertia = parseFloat(document.getElementById("CMInertia").value);
}

function calculate(operator) {
  const mass = calculator.Mass;
  const radius = calculator.Radius;
  const Length = calculator.Length;
  const CMInertiaUse = calculator.CMInertia;
  if (operator === 'Solid Cylinder') {
    calculator.displayValue = 0.5*mass* Math.pow(radius,2);
  } else if (operator === 'Hoop') {
    calculator.displayValue = mass* Math.pow(radius,2);
  } else if (operator === 'Solid Sphere') {
    calculator.displayValue = (2/5)*mass* Math.pow(radius,2);
  }else if(operator === 'SolidCylinderAboutCentralDia'){
    calculator.displayValue = ((1/4)*mass*Math.pow(radius,2))+((1/12)*mass*Math.pow(Length,2));
  }else if(operator === 'HoopAboutDiameter'){
    calculator.displayValue = (1/2)*mass* Math.pow(radius,2);
  }else if(operator === 'Rod about center of mass'){
    calculator.displayValue = (1/2)*mass* Math.pow(radius,2);
  }else if(operator === 'ThinSphericalShell'){
    calculator.displayValue = (2/3)*mass*Math.pow(radius,2)
  }else if(operator === 'RodAboutEnd'){
    calculator.displayValue = (1/3)*mass*Math.pow(Length,2);
  }else if(operator === 'ParallelAxisTheorom'){
    calculator.displayValue = CMInertiaUse+(mass*Math.pow(Length,2));
  }else{
    calculator.displayValue=0;
  }
  updateDisplay();
}

function resetCalculator() {//clears memory
  Mass= null;
  Radius= null;
  Length= null;
  CMInertia= null;
  calculator.displayValue = '0';
  calculator.firstOperand = null;
  calculator.operator = null;
}

function updateDisplay() { //here how you can update the website based on an html element
  const display = document.querySelector('.calculator-screen');
  display.value = calculator.displayValue;
}

updateDisplay();
```

Made by Nicolas Arisi-Fernandez
