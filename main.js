let currentResult = "";
// Display
function displayvalue(value) {
    currentResult += value;
    document.getElementById("result").value = currentResult;
}
// Clear
function clearResult() {
    currentResult = "";
    document.getElementById("result").value = currentResult;

}
// Back
function removelast() {
    result.value = result.value.slice(0, -1)
}
// Calculate section
function calculate() {
    let value = currentResult.split(/[\d.]+/).filter(Boolean);
    let values = currentResult.split(/[+*/-]/).map(Number);
    let result = values[0];

    for (let i = 0; i < value.length; i++) {
        if (value[i] === '+') {
            result += values[i + 1];
        } else if (value[i] === '-') {
            result -= values[i + 1];
        } else if (value[i] === '*') {
            result *= values[i + 1];
        } else if (value[i] === '/') {
            result /= values[i + 1];
        }
    }

    document.getElementById("result").value = result;
    currentResult = result.toString();
}
