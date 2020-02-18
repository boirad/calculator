const numberBtn = document.querySelectorAll('[data-number]');
const operatorBtn = document.querySelectorAll('[data-operator]');
const decimalBtn = document.querySelector('[data-decimal]'); 
const equalsBtn = document.querySelector('[data-equals]');
const deleteBtn = document.querySelector('[data-delete]');
const clearBtn = document.querySelector('[data-clear]');
const resultDisplay = document.querySelector("#currentDisplay");
const storeDisplay = document.querySelector("#storeDisplay");

let firstValue;
let secondValue;
let result;
let evaluation = [];
let sum;
let sub;
let div;
let multi;

numberBtn.forEach(button => {
    button.addEventListener("click", () => {
        
        if(resultDisplay.textContent == 0 && button.value == ".") {
            resultDisplay.textContent = 0 + button.value;
            decimalBtn.disabled = false;
        } else if(resultDisplay.textContent.includes(".")){
            resultDisplay.append(button.textContent);
            decimalBtn.disabled = true;
        }  else if(resultDisplay.textContent == 0){
            resultDisplay.textContent = button.textContent;
            decimalBtn.disabled = false;
        } else {
            resultDisplay.append(button.textContent);
            decimalBtn.disabled = false;
        }
    })
})




operatorBtn.forEach(button => {
    button.addEventListener("click", () => {
        firstValue = resultDisplay.textContent;
        evaluation.push(firstValue)
        switch(button.value) {
            case("+"):
            if(sum){
                secondValue = resultDisplay.textContent;
                evaluation.push(secondValue);
                let currentResult = add(parseFloat(evaluation[0]), parseFloat(evaluation[1]));
                evaluation[0] = currentResult;
                evaluation.splice(1);
                    storeDisplay.textContent = currentResult + " + ";
                resultDisplay.textContent = "";
                } else if(sub){
                sub = false;
                sum = true;
                secondValue = resultDisplay.textContent;
                evaluation.push(secondValue);
                let currentResult =  subtract(parseFloat(evaluation[0]), parseFloat(evaluation[1]));
                evaluation[0] = currentResult;
                evaluation.splice(1);
                    storeDisplay.textContent = currentResult + " + ";
                resultDisplay.textContent = "";
                } else if(multi){
                multi = false;
                sum = true;
                secondValue = resultDisplay.textContent;
                evaluation.push(secondValue);
                let currentResult =  multiply(parseFloat(evaluation[0]), parseFloat(evaluation[1]));
                evaluation[0] = currentResult;
                evaluation.splice(1);
                    storeDisplay.textContent = currentResult + " + ";
                resultDisplay.textContent = "";
                } else if(div){
                div = false;
                sum = true;
                secondValue = resultDisplay.textContent;
                evaluation.push(secondValue);
                let currentResult =  divide(parseFloat(evaluation[0]), parseFloat(evaluation[1]));
                evaluation[0] = currentResult;
                evaluation.splice(1);
                    storeDisplay.textContent = currentResult + " + ";
                resultDisplay.textContent = "";
                }   else {
                resultDisplay.textContent = '';
                storeDisplay.textContent = firstValue + " + ";
                sum = true;
            }
            break

            case("-"):
            if(sum){
                sum = false;
                sub = true;
                secondValue = resultDisplay.textContent;
                evaluation.push(secondValue);
                let currentResult = add(parseFloat(evaluation[0]), parseFloat(evaluation[1]));
                evaluation[0] = currentResult;
                evaluation.splice(1);
                storeDisplay.textContent = currentResult + " - ";
                resultDisplay.textContent = "";
            } else if(sub){
                secondValue = resultDisplay.textContent;
                evaluation.push(secondValue);
                let currentResult =  subtract(parseFloat(evaluation[0]), parseFloat(evaluation[1]));
                evaluation[0] = currentResult;
                evaluation.splice(1);
                storeDisplay.textContent = currentResult + " - ";
                resultDisplay.textContent = "";
            } else if(multi){
                multi = false;
                sub = true;
                secondValue = resultDisplay.textContent;
                evaluation.push(secondValue);
                let currentResult =  multiply(parseFloat(evaluation[0]), parseFloat(evaluation[1]));
                evaluation[0] = currentResult;
                evaluation.splice(1);
                storeDisplay.textContent = currentResult + " - ";
                resultDisplay.textContent = "";
            } else if(div){
                div = false;
                sub = true;
                secondValue = resultDisplay.textContent;
                evaluation.push(secondValue);
                let currentResult =  divide(parseFloat(evaluation[0]), parseFloat(evaluation[1]));
                evaluation[0] = currentResult;
                evaluation.splice(1);
                storeDisplay.textContent = currentResult + " - ";
                resultDisplay.textContent = "";
            }   else {
                resultDisplay.textContent = '';
                storeDisplay.textContent = firstValue + " - ";
                sub = true;
             }
            break

            case("*"):
            if(sum){
                sum = false;
                multi = true;
                secondValue = resultDisplay.textContent;
                evaluation.push(secondValue);
                let currentResult = add(parseFloat(evaluation[0]), parseFloat(evaluation[1]));
                evaluation[0] = currentResult;
                evaluation.splice(1);
                storeDisplay.textContent = currentResult + " x ";
                resultDisplay.textContent = "";
            } else if(sub){
                sub = false;
                multi = true;
                secondValue = resultDisplay.textContent;
                evaluation.push(secondValue);
                let currentResult =  subtract(parseFloat(evaluation[0]), parseFloat(evaluation[1]));
                evaluation[0] = currentResult;
                evaluation.splice(1);
                storeDisplay.textContent = currentResult + " x ";
                resultDisplay.textContent = "";
            } else if(multi){
                secondValue = resultDisplay.textContent;
                evaluation.push(secondValue);
                let currentResult =  multiply(parseFloat(evaluation[0]), parseFloat(evaluation[1]));
                evaluation[0] = currentResult;
                evaluation.splice(1);
                storeDisplay.textContent = currentResult + " x ";
                resultDisplay.textContent = "";
            } else if(div){
                div = false;
                multi = true;
                secondValue = resultDisplay.textContent;
                evaluation.push(secondValue);
                let currentResult =  divide(parseFloat(evaluation[0]), parseFloat(evaluation[1]));
                evaluation[0] = currentResult;
                evaluation.splice(1);
                storeDisplay.textContent = currentResult + " x ";
                resultDisplay.textContent = "";
            } else {
                resultDisplay.textContent = '';
                storeDisplay.textContent = firstValue + " x ";
                multi = true;
            }
            break

            case("/"):
            if(sum){
                sum = false;
                div = true;
                secondValue = resultDisplay.textContent;
                evaluation.push(secondValue);
                let currentResult = add(parseFloat(evaluation[0]), parseFloat(evaluation[1]));
                evaluation[0] = currentResult;
                evaluation.splice(1);
                storeDisplay.textContent = currentResult + " / ";
                resultDisplay.textContent = "";
            } else if(sub){
                sub = false;
                div = true;
                secondValue = resultDisplay.textContent;
                evaluation.push(secondValue);
                let currentResult =  subtract(parseFloat(evaluation[0]), parseFloat(evaluation[1]));
                evaluation[0] = currentResult;
                evaluation.splice(1);
                storeDisplay.textContent = currentResult + " / ";
                resultDisplay.textContent = "";
            } else if(multi){
                multi = false;
                div = true;
                secondValue = resultDisplay.textContent;
                evaluation.push(secondValue);
                let currentResult =  multiply(parseFloat(evaluation[0]), parseFloat(evaluation[1]));
                evaluation[0] = currentResult;
                evaluation.splice(1);
                storeDisplay.textContent = currentResult + " / ";
                resultDisplay.textContent = "";
            } else if(div){
                secondValue = resultDisplay.textContent;
                evaluation.push(secondValue);
                let currentResult =  divide(parseFloat(evaluation[0]), parseFloat(evaluation[1]));
                evaluation[0] = currentResult;
                evaluation.splice(1);
                storeDisplay.textContent = currentResult + " / ";
                resultDisplay.textContent = "";
            } else {
                resultDisplay.textContent = '';
                storeDisplay.textContent = firstValue + " / ";
                div = true;
            }
            break
        }
     })
}) 

equalsBtn.addEventListener("click", () => {
    secondValue = resultDisplay.textContent;
        if (secondValue == "") {
            secondValue = firstValue;
        }
    evaluation.push(secondValue) 
    switch(true){
        case (sum):
            storeDisplay.textContent = evaluation[0] + " + " + evaluation[1] + " =";
            result = add(parseFloat(evaluation[0]), parseFloat(evaluation[1]));
                if(result.length >= 10){
                    Math.round(result)
                }
            resultDisplay.textContent = result;
            sum = false;
            evaluation.length = 0;
            firstValue = result;
            break

        case (sub):
            storeDisplay.textContent = evaluation[0] + " - " + evaluation[1] + " =";
            result = subtract(parseFloat(evaluation[0]), parseFloat(evaluation[1]));
                if(result.length >= 10){
                    Math.round(result)
                }
            resultDisplay.textContent = result;
            sub = false;
            evaluation.length = 0;
            firstValue = result;
            break
        
        case (multi):
            storeDisplay.textContent = evaluation[0] + " x " + evaluation[1] + " =";
            result = multiply(parseFloat(evaluation[0]), parseFloat(evaluation[1]));
                if(result.length >= 10){
                    Math.round(result)
                }
            resultDisplay.textContent = result;
            multi = false;
            evaluation.length = 0;
            firstValue = result;
            break
        
        case (div):
            storeDisplay.textContent = evaluation[0] + " / " + evaluation[1] + " =";
            result = divide(parseFloat(evaluation[0]), parseFloat(evaluation[1]));
                if(result.length >= 10){
                    Math.round(result)
                }
            resultDisplay.textContent = result;
            div = false;
            evaluation.length = 0;
            firstValue = result;
            break
        }
})


clearBtn.addEventListener("click", () => {
    storeDisplay.textContent = "";
    resultDisplay.textContent = "0";
    sum = false, sub = false, multi = false, div = false;
    evaluation.length = 0;
})


deleteBtn.addEventListener("click", () => {
    let resultString = resultDisplay.textContent.toString();
    if (resultString != "0") {
        let resultSlice = resultString.slice(-resultString.length, -1);
        resultDisplay.textContent = parseFloat(resultSlice);
    } 
   
})


function add (a, b){
	return a + b;
}

function subtract (a, b){
	return a - b;
}

function multiply(a, b){
    return a * b;
}

function divide(a, b){
    return a / b; 
}


