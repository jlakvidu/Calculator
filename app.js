let display = document.getElementById('display');

function appendToDisplay(value) {
    if (display.innerText === '0' && value !== '√' && value !== 'π') {
        display.innerText = value;
    } else {
        display.innerText += value;
    }
}

function clearDisplay() {
    display.innerText = '0';
}

function calculate() {
    try {
        let expression = display.innerText.replace(/√/g, 'Math.sqrt');
        display.innerText = eval(expression);
    } catch (error) {
        display.innerText = 'Error';
    }
}
