

// ----------------- calculator by JasonRLH95 -----------------


// ----------------- setting the key down event listener for the changes displayed by key typing -----------------
document.body.addEventListener("keydown",(key)=>{calcByKeyboard(key)});

// ----------------- catching the displays from the document -----------------
const display = document.getElementById('display');
const subDisplay = document.getElementById('subDisplay');

// -----------------setting the display fint size by the length of the number -----------------
var initSize = 56;

// ----------------- variables to catch the values and operator to calulate -----------------
var firstValue = "";
var secondValue = "";
var operator = "";

// ----------------- check if there is result displayed already to prevent appending numbers to it before reset the display -----------------
var canCalculate = true;








// ----------------- append the numbers to the display -----------------
function appendNumber(number) {
    if(canCalculate){
        if(display.value.length >= 6){
            if(initSize > 20){
                initSize -= 3;
                console.log("length: "+display.value.length);
                console.log("font-size: "+initSize);
            }
            display.style.fontSize = `${initSize}px`;
        }
        if(display.value.length < 26){
            display.value += number;
        }
    }
}


// ----------------- setting the operator to calculate, subdisplay the first value and operator chosen -----------------
function appendOperation(operation) {
    // if(canCalculate){
        firstValue = display.value;
        operator = operation;
        appendSecondNumber();
        subDisplay.value += `${firstValue} ${operation} `;
    // }
}


// ----------------- clear the display for adding the second value -----------------
function appendSecondNumber(){
    if(canCalculate){
        display.value = "";
        initSize = 56;
        display.style.fontSize = `${initSize}px`;
    }
}


// ----------------- delete the last character by backspace key -----------------
function deleteLast(){
    display.value = display.value.substring(0,display.value.length-1);
}


// ----------------- clear the display for reset calculation -----------------
function clearDisplay() {
    subDisplay.value = "";
    display.value = "";
    operator = "";
    firstValue = "";
    secondValue = "";
    initSize = 56;
    display.style.fontSize = `${initSize}px`;
    canCalculate = true;
}


// ----------------- calculating by click on equal button -----------------
function calculate() {
    canCalculate = false;
    secondValue = display.value;
    try {
        display.value = eval(firstValue + operator + secondValue);
        subDisplay.value = "";
        console.log("final length: "+display.value.length);
        if(display.value.length < 10){
            display.style.fontSize = "56px"
        }
        else if(10 <= display.value.length && display.value.length <= 14){
            display.style.fontSize = "36px"
        }
        else if (14 < display.value.length){
            display.style.fontSize = "20px"
        }
    } catch {
        display.value = 'Error';
    }
}


// ----------------- body listening to keydown events to calculate -----------------
const calcByKeyboard = (key)=>{
    console.log(key.key)
    if(key.key == "+" || key.key == "-" || key.key == "*" || key.key == "/"){
        appendOperation(key.key)
    }
    else if(key.key == "0" || key.key == "1" || key.key == "2" || key.key == "3" || key.key == "4" || key.key == "5" || key.key == "6" || key.key == "7" || key.key == "8" || key.key == "9" || key.key == "."){
        appendNumber(key.key)
    }
    else if(key.key == "Enter"){
        calculate()
    }
    else if(key.key == "Escape"){
        clearDisplay()
    }
    else if(key.key == "Backspace"){
        deleteLast();
    }
}
