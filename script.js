// Arithmetic oprators
let sum1 = 33;
let sum2 = 43;
let sum = sum1 + sum2;
console.log(sum);
document.write(sum);
document.getElementById('sum').innerHTML = sum;
window.alert(sum);

let minus1 = 200;
let minus2 = 50;
let minus = minus1 - minus2;
console.log(minus);
document.write(minus);
document.getElementById('minus').innerHTML = minus;
window.alert(minus);

let multiply1 = 30;
let multiply2 = 10;
let multiply = multiply1 * multiply2;
console.log(multiply);
document.write(multiply);
document.getElementById('multiply').innerHTML = multiply;
window.alert(multiply);

let divide1 = 80;
let divide2 = 10;
let divide = divide1 / divide2;
console.log(divide);
document.write(divide);
document.getElementById('divide').innerHTML = divide;
window.alert(divide);

let remainder1 = 30;
let remainder2 = 8;
let remainder = remainder1 % remainder2;
console.log(remainder);
document.write(remainder);
document.getElementById('remainder').innerHTML = remainder;
window.alert(remainder);



// assignment oprator
// -> =, +=, -=, *=, /=, %=, **=
let x = 3;
x += 5;
console.log(x);

let a = 3;
a -= 5;
console.log(a);

let b = 3;
b *= 5;
console.log(b);

let c = 3;
c /= 5;
console.log(c);

let d = 12;
d %= 5;
console.log(d);

let e = 3;
e **= 5;
console.log(e);

// task --2 
let num1 = prompt('Enter your first Number : ');
let num2 = prompt('Enter your second Number : ');
num1 = parseInt(num1, 10);
num2 = parseInt(num2, 10);

let result;

result = num1 + num2;
console.log(num1 + ' + ' + num2 + ' = ' + result );

result = num1 - num2;
console.log(num1 + ' - ' + num2 + ' = ' + result );

result = num1 * num2;
console.log(num1 + ' * ' + num2 + ' = ' + result );

result = num1 / num2;
console.log(num1 + ' / ' + num2 + ' = ' + result );

result = num1 % num2;
console.log(num1 + ' % ' + num2 + ' = ' + result );


// rectangle calculet
let base = parseFloat(prompt('Enter base = '));
let hight = parseFloat(prompt('Enter hight = '));

let area = base * hight;
console.log('Area = ' + area);

// Triangle calculet
base = parseFloat(prompt('Enter base = '));
hight = parseFloat(prompt('Enter hight = '));

area = (base * hight) / 2;
console.log('Area = ' + area);

// fahrenheit to celsius
let fahre = parseFloat(prompt('Enter your fahrenheit:'));
let cel = (fahre -32) *5/9;
console.log(cel);

// celsius to fahrenheit
let celsius = parseFloat(prompt('Enter your celsius:'));
let fahrenheit = (celsius * (9/5)) + 32;
console.log(fahrenheit);
