function convertTemperature() {
    // Ambil nilai suhu dari input
    var inputTemp = parseFloat(document.getElementById("inputTemp").value);

    // Ambil unit suhu awal
    var fromUnit = document.getElementById("fromUnit").value;

    // Hitung konversi suhu
    var result;
    if (fromUnit === "celsius") {
        result = {
            celsius: inputTemp,
            fahrenheit: (inputTemp * 9/5) + 32,
            kelvin: inputTemp + 273.15
        };
    } else if (fromUnit === "fahrenheit") {
        result = {
            celsius: (inputTemp - 32) * 5/9,
            fahrenheit: inputTemp,
            kelvin: (inputTemp - 32) * 5/9 + 273.15
        };
    } else if (fromUnit === "kelvin") {
        result = {
            celsius: inputTemp - 273.15,
            fahrenheit: (inputTemp - 273.15) * 9/5 + 32,
            kelvin: inputTemp
        };
    }

    // Tampilkan hasil konversi
    document.getElementById("result").innerHTML = `
        ${inputTemp} ${fromUnit} sama dengan:<br>
        Celsius: ${result.celsius.toFixed(2)} °C<br>
        Fahrenheit: ${result.fahrenheit.toFixed(2)} °F<br>
        Kelvin: ${result.kelvin.toFixed(2)} K
    `;
}
