// Global Scopes -> convertFahrenheitToCelcius, temp1, temp2

// Local Scopes -> fahrenheit, celcius

let convertFahrenheitToCelcius = function (fahrenheit){
    let celcius = (fahrenheit - 32) * 5 /9
    return celcius
}


let temp1 = convertFahrenheitToCelcius(32)
let temp2 = convertFahrenheitToCelcius(68)
