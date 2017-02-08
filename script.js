var calc = {};

calc.init = function () {
    calc.opr = "",
    calc.firstNum = "",
    calc.secondNum = "",
    calc.input = "",
    calc.calculated = false,
    calc.first = true,
    calc.hasDecimal = false,
    calc.screen = document.getElementById("screen"),
    calc.screen.innerText = "0";
}
//Hier laat hij het je invullen.
calc.storeInput = function () {
    if (calc.input !== ""){
        if (calc.firstNum === "") {
            calc.firstNum = calc.input;
        }
        else calc.secondNum = calc.input;
    }
}

calc.clearInput = function () {
    calc.input = "";
    calc.hasDecimal = false;
}
//Hier rekent die het uit.

calc.calculate = function () {
    switch (calc.opr) {
        case "+":
            calc.firstNum = String(Number(calc.firstNum) + Number(calc.secondNum));
            break;
        case "-":
            calc.firstNum = String(Number(calc.firstNum) - Number(calc.secondNum));
            break;
        case "*":
            calc.firstNum = String(Number(calc.firstNum) * Number(calc.secondNum));
            break;
        case "/":
            calc.firstNum = String(Number(calc.firstNum) / Number(calc.secondNum));
            break;
    }
}
//Laat de buttons werken/reageren op klik.

calc.buttonClick = function (button) {
    if (button === "C" || button === "=" || button === "*" || button === "/" || button === "+" || button === "-") {
        calc.storeInput();
        
        switch (button) {
            case "C":
                calc.init();
                break;
            case "=":
                calc.calculate();
                calc.calculated = true;
                break;
            default:
                
                calc.opr = button;
                if (!calc.calculated && calc.firstNum !== "" && calc.secondNum !== ""){
                    calc.calculate();
                }
                calc.calculated = false;
        }
        calc.clearInput();
    }
    else if (button === ".") {
         if (!calc.hasDecimal){
             calc.input = calc.input + button;
             calc.hasDecimal = true;
         }
    }
    else {
        if (calc.calculated) {
            calc.init();
        }
        calc.input = calc.input + button;
    }
    //Update screen
    if(calc.input !== ""){
        calc.screen.innerText = calc.input;
    } else calc.screen.innerText = +(Number(calc.firstNum)).toFixed(9);

    console.log(calc);
}

calc.init();