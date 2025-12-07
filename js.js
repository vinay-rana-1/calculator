const display = document.getElementById('display');

function press(key) {
    display.value += key;
}

function calculate() {
    try {
        display.value = eval(display.value);
    } catch {
        display.value = 'Error';
    }
}

function clearAll() {
    display.value = '';
}

function deleteOne() {
    display.value = display.value.slice(0, -1);
}
