function appendToDisplay(value) {
    document.getElementById('display').value += value;
}

function clearDisplay() {
    document.getElementById('display').value = '';
}

function backspace() {
    let display = document.getElementById('display');
    document.getElementById('display').value = display.value.slice(0, -1);
}

function negative() {
    let currentValue = document.getElementById('display').value;

    if (currentValue !== '') {
        let result = eval(`(${currentValue}) * -1`);
        display.value = result.toString();
    } else {
        display.value = '-';
    }
}


function calculate() {
    let display = document.getElementById('display');
    let result;
    try {
        result = eval(display.value);
        if (isNaN(result) || !isFinite(result)) {
            throw new Error('Неверное выражение');
        }
        display.value = result;
    } catch (error) {
        display.value = 'Ошибка';
    }
}
