const inputBox = document.querySelector("input");
const btn = document.querySelectorAll(".btn");
const numBtn = document.querySelectorAll(".num-btn");
const actionBtn = document.querySelectorAll(".action-Btn");
const numList = [1,2,3,4,5,6,7,8,9,0]
const equalBtn = document.querySelector(".equal-btn");

inputBox.addEventListener("input", function () {
    this.value = this.value.replace(/[^0-9.]/g, '');
});
btn.forEach(function(button){
    
    button.addEventListener('click',function(e){
        clickedBtn = e.target.innerText;

        if(clickedBtn == "AC"){
            inputBox.value = "";
        }
        else if(clickedBtn in numList){
            inputBox.value += parseFloat(clickedBtn);
        }
        else if(clickedBtn === "."){
            if (!inputBox.value.includes(".")) {
                inputBox.value += ".";
            } else {
                //
            }
            
        }
        
        else if(button.classList[1] == "action-Btn"){
            if(button.innerText == "÷" || button.innerText == "+" || button.innerText == "-" || button.innerText == "×" || button.innerText == "%"){
            input1 = parseFloat(inputBox.value);
            inputBox.value = "";
            operation = button.innerText;
        }

        else if(button.innerText == "+/-"){
            inputBox.value = - parseFloat(inputBox.value);
            
        }
        }
    })
})

equalBtn.addEventListener('click',function calculateValue (){
    input2 = parseFloat(inputBox.value);
    if(operation === "+"){
        sum = input1 + input2;
    }
    else if(operation === "-"){
        sum = input1 - input2;
    }
    else if(operation === "÷"){
        sum = input1 / input2;
    }
    else if(operation === "×"){
        sum = input1 * input2;
    }
    else if(operation === "%"){
        sum = input1 + input2;
    }
    inputBox.value = sum;
})
