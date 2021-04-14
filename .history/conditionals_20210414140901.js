// # Programming Basics: Conditionals

// These exercises are aimed at making you more comfortable with using conditionals as well as operators. 
// Use "if" statements to complete the following exercises. Print your results to the console.

// 1. Check if two given integer values are in the range 50 to 99 (this includes both 50 and 99). 
// Print true if either of them are in the range.
let valueOne = 50;
// let valueTwo = (valueOne >=50, valueOne <= 99);

if (valueOne >= 50 && valueOne <= 99) {
    console.log("First value is between 50 and 99");
}
else {
    console.log("Fist value is NOT between 49 andfirstNum 100");
}

let anotherValue = 51;
// let checkedValue = (anotherValue >= 50, anotherValue <= 99);

if (anotherValue >= 50 && anotherValue <= 99) {
    console.log("Second value is between 50 and 99");
}
else {
    console.log("Second value is NOT between 49 and 100");
}

// 2. Check if three given integer values are in the range 50 to 99 (inclusive). Print true if one or more of them are in the range.
let firstNum = 47;
let secondNum = 51;
let thirdNum = 99;

let checkFirst = (firstNum >= 50 && firstNum <= 99);
let checkSecond = (secondNum >= 50 && secondNum <= 99);
let checkThird= (thirdNum >= 50 && thirdNum <= 99);

if (checkFirst || checkSecond || checkThird) {
    console.log("One of the inputted values are between 50 and 99");
}

// 3. Declare the variables a, b and c, and give them number values. 
// Check which one out of the three variables has the largest value and print it to the console. 
// Then change the values of the variables to see if your conditional still works. 
let a = 31;
let b = 20;
let c = 30;

if (c > a && c > b) {
    console.log("Largest value: " + c);
}

if (b > a && b > c) {
    console.log("Largest value: " + b);
}

if (a > b && a > c) { 
    console.log("Largest value: " + a);
}

// 4. Create a new string adding "Py" in front of a given string. 
// If the given string begins with "Py" then print the original string.
let myString = "Pythons are nice";

if (myString.slice(0, 2) === "Py") {
    console.log(myString);
}
else {
    console.log("Nothing to declare");
}

// 5. Calculate the sum of the two integers. If the sum is in the range 50 to 80, print 65, otherwise print 80. 
let firstInteger = 70;
let secondInteger = 15;
let summedInteger = firstInteger + secondInteger;

if (summedInteger >= 50 && summedInteger <= 80) {
    console.log(65);
}
else {
    console.log(80);
}

// 6. Check whether the sum of two integers is 8, or whether their difference is 8. If one of these is the case, print true.
let numOne = 4;
let numTwo = 12;
if ((numOne+numTwo === 8) || (numTwo-numOne === 8)) {
    console.log("True");
}
else {
    console.log("False");
}

// 7. Check whether either one of two integers is 15, or if their sum is 15. If one of these is the case, print true. 
let numThree = 0;
let numFour = 15;
if ((numThree === 15) || (numFour === 15) || (numThree+numFour === 15)) {
    console.log("Yes it's true");
}
else {
    console.log("Wrong numbers")
}

// 8. Check whether one of two integers is a multiple of 7 or 11. If so, print true.
let numFive = 13;
let numSix = 24;
if ((numFive/7 === 2) || (numSix/7 === 2)) {
    console.log("It's obviously true");
}
else {
    console.log("That couldn't work");
}

// 9. Calculate the sum of the two given integers. If the two values are the same, then print triple their sum. 

// 10. Calculate the difference between a specified number and 19. Print double the difference if the specified number is greater than 19.

// 11. BONUS CHALLENGE:  Make a variable for firstName and age and give each variable values. Create an if/else statement to check whether the person's age is less than 13. If so, print "firstName is a child". If the age is equal to or more than 13 and less than 20, print "firstName is a teenager". If the person's age is equal to and more than 20 and less than 30, then print "firstName is a young adult". If none of these conditions apply, print "firstName is a adult". 

// 12. BONUS CHALLENGE: Play around with each of your results, i.e., make sure they are dynamic to different inputs; is there a more efficient way of writing your code?; etc. 
