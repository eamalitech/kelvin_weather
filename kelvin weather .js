//today's forecast in kelvin
const kelvin = 0;

//today's forecast in Celsius
const celsius = kelvin - 273;

//today's forecast in Fahrenheit
let fahrenheit = celsius * (9/5) + 32;

//Fahrenheit rounded to the nearest whole number
fahrenheit = Math.floor(fahrenheit);
console.log(`The temperature is ${fahrenheit} degree Fahrenheit.`);

//convert to newton
let newton = celsius * (33 / 100); 
newton = Math.floor(newton);
console.log(`The temperature is ${newton} degrees Newton.`);

