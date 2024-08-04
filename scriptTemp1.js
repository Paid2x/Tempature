// Need a temperature
// need a celsius/fahrenheit, unit of measurement
// if else javascript statements
// if celsius, convert to fahrenheit
// if fahrenheit, convert to celsius

let temperature = prompt("Enter a temperature");
let measurement = prompt("Enter 'C' or 'F' for Celsius or Fahrenheit");

console.log("Temperature:",temperature, measurement);

if (measurement == 'C'){
    let fahrenheit = (temperature * (9/5) + 32)
    console.log(fahrenheit, "F");
} else if (measurement == "F"){
    let celsius = (temperature -32 * (5/9))
    console.log(celsius, "C");
}






// Function temp() {
//     var tempature = prompt("Enter Tempature Celcius");
//     var conversion = tempature = (9/5) + 32;

//     Document.getElementById('conversion').innerHTML += 
//     <p> The conversion of Celcius ${tempature}&deg to Fahrenheit is $(conversion)&edge</p>
// }