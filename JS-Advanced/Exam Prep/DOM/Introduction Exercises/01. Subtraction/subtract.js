function subtract() {
    const value1 = Number(document.getElementById("firstNumber").value);
    const value2 = Number(document.getElementById("secondNumber").value);
    let sum = value1 - value2;
    const result = document.getElementById("result");
    result.textContent = sum;
}