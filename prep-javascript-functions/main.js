function addTwoNumbers(x, y) {
  return x + y;
}

var sum = addTwoNumbers(2, 2);
console.log('Sum:', sum);

function convertHoursToMinutes(x) {
  return x * 60;
}

var minutes = convertHoursToMinutes(2);
console.log('Minutes:', minutes);

function getGreeting(x) {
  return 'Hello' + ' ' + x + '!';
}

var greeting = getGreeting('World');
console.log('Greeting:', greeting);

function addAndMultiplyBy5(num1, num2) {
  return (num1 + num2) * 5;
}

var product = addAndMultiplyBy5(10, 5);
console.log('Product:', product);

function multiplyAndDivideBy5(num1, num2) {
  return (num1 * num2) / 5;
}

var quotient = multiplyAndDivideBy5(35, 10);
console.log('Quotient:', quotient);

function subtractTwoNumbers(num1, num2) {
  return num1 - num2;
}

var difference = subtractTwoNumbers(22, 7);
console.log('Difference:', difference);

function getCircleCircumference(radius) {
  return 2 * Math.PI * radius;
}

var circumference = getCircleCircumference(5);
console.log('Circumference:', circumference);

function getFullName(firstName, lastName) {
  return firstName + ' ' + lastName;
}

var fullName = getFullName('Juan', 'Ramirez');
console.log('Full Name:', fullName);

function cube(number) {
  return number * number * number;
}

var cubedNumber = cube(5);
console.log('Cubed number', cubedNumber);
