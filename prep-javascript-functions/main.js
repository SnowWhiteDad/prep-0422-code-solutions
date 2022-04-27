function addTwoNumbers(num1, num2) {
  return num1 + num2;
}

var sum = addTwoNumbers(4, 4);
console.log('sum', sum);

function convertHoursToMinutes(hours) {
  return hours * 60;
}
console.log(2 + ' hours is equal to ' + convertHoursToMinutes(2) + ' minutes.');

function getGreeting(name) {
  return 'Welcome ' + name + ' to our midst.';
}
console.log(getGreeting('Jag'));

function addAndMultiplyBy5(num1, num2) {
  return 5 * (num1 + num2);
}
console.log(addAndMultiplyBy5(10, 5));

function multiplyAndDivideBy5(num1, num2) {
  return (num1 * num2) / 5;
}
console.log(multiplyAndDivideBy5(35, 10));

function subtractTwoNumbers(num1, num2) {
  if (num1 > num2) {
    return num1 - num2;
  } else {
    return num2 - num1;
  }
}
console.log(subtractTwoNumbers(22, 7));

function getCircleCircumference(radus) {
  return 2 * Math.PI * radus;
}
console.log(getCircleCircumference(5));

function getFullName(firstName, lastName) {
  return firstName + ' ' + lastName;
}
console.log(getFullName('Juan', 'Ramires'));

function cube(number) {
  return number * number * number;
}
console.log(cube(5));
