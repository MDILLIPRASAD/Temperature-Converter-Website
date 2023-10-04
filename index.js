function convertTemperature() {
    const inputTemperature = parseFloat(document.getElementById('temperatureInput').value);
    const fromUnit = document.getElementById('from').value;
    const toUnit = document.getElementById('To').value;
    let result;

    if (fromUnit === toUnit) {
        result = inputTemperature;
    } else if (fromUnit === 'Degree Celsius(°C)') {
        if (toUnit === 'Fahrenheit(°F)') {
            result = (inputTemperature * 9/5) + 32;
        } else if (toUnit === 'Kelvin(k)') {
            result = inputTemperature + 273.15;
        }
    } else if (fromUnit === 'Fahrenheit(°F)') {
        if (toUnit === 'Degree Celsius(°C)') {
            result = (inputTemperature - 32) * 5/9;
        } else if (toUnit === 'Kelvin(k)') {
            result = (inputTemperature + 459.67) * 5/9;
        }
    } else if (fromUnit === 'Kelvin(k)') {
        if (toUnit === 'Degree Celsius(°C)') {
            result = inputTemperature - 273.15;
        } else if (toUnit === 'Fahrenheit(°F)') {
            result = (inputTemperature * 9/5) - 459.67;
        }
    }

    document.getElementById('result').innerHTML = `<b>Result:</b> ${result.toFixed(2)} ${toUnit}`;
}

document.getElementById('submit').addEventListener('click', convertTemperature);