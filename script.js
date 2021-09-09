let display = document.querySelector("#Display");
let b = document.querySelector("#Button");
if (b) {
    b.onclick = buttonClick;
}

let m = [
    "7", "8", "9", "/",
    "4", "5", "6", "*",
    "1", "2", "3", "-",
    "0", ".", "=", "+"];
// Хранит первое число до нажатия "действия",
// а так же результат вычисления
let firstNumber = "";
// Число, вводимое после нажатия действия.
// Обнуляется после нажатия на "="
let secondNumber = "";
// Хранит нажатое "действие" (+ - / *)
let action = "";
// Флаг для определения, что нужно очистить "дисплей"
// перед вводом второго числа
let clearDisplay = false;
// Флаг для определения какое число должно вводиться,
// первое или второе (в firstNumber или secondNumber)
let isFirstNumber = true;
function buttonClick() {
    let main = document.querySelector("main");
    if (main) {
        while (main.children.length > 0) {
            main.children[0].remove();
        }
        for (let i of m) {
            let btn = document.createElement("input");
            btn.type = "button";
            btn.value = i;
            main.append(btn);
        }
        main.onclick = calculate;
        display.value = "";
    }
    firstNumber = "";
    secondNumber = "";
    action = "";
    clearDisplay = false;
    isFirstNumber = true;
}

function calculate(e) {
    switch (e.target.value) {
        case "0":
        case "1":
        case "2":
        case "3":
        case "4":
        case "5":
        case "6":
        case "7":
        case "8":
        case "9":
            if (clearDisplay === true) {
                clearDisplay = false;
                isFirstNumber = false;
            }
            if (isFirstNumber === true) {
                firstNumber += e.target.value;
            } else {
                secondNumber += e.target.value;
            }

            break;
        case "/":
        case "*":
        case "-":
        case "+":
            action = e.target.value;
            clearDisplay = true;
            break
        case "=":
            if (action.length === 0) break;
            let leftNumber = +firstNumber;
            let rightNumber = +secondNumber;
            console.log(leftNumber);
            console.log(rightNumber);
            switch (action) {
                case "/":
                    firstNumber = (leftNumber / rightNumber);
                    break;
                case "*":
                    firstNumber = (leftNumber * rightNumber);
                    break;
                case "-":
                    firstNumber = (leftNumber - rightNumber);
                    break;
                case "+":
                    firstNumber = (leftNumber + rightNumber);
                    break;
            }
            secondNumber = "";
            break
    }

    display.value = firstNumber;
}