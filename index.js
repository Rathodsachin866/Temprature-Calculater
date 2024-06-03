function convertTemp() {
    const inputTemp = document.getElementById('inputTemp').value;
    const unit = document.getElementById('unit').value;
    const output = document.getElementById('output');

    if (inputTemp === '') {
        output.textContent = 'Please enter a temperature value';
        return;
    }

    let result;

    if (unit === 'C') {
        // Convert Celsius to Fahrenheit
        result = (inputTemp * 9/5) + 32;
        output.textContent = `${inputTemp}°C is ${result.toFixed(2)}°F`;
    } else {
        // Convert Fahrenheit to Celsius
        result = (inputTemp - 32) * 5/9;
        output.textContent = `${inputTemp}°F is ${result.toFixed(2)}°C`;
    }
}
