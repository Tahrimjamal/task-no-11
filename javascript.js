// Let’s learn JavaScript Operators and Conditional Statements step by step.
// Imagine we are talking while coding together.
// No rush.
// Understanding first. Memorizing later.
// 1. Arithmetic Operators
// These are used for basic math.
// Operator
// Meaning
// +
// Addition
// -
// Subtraction
// *
// Multiplication
// /
// Division
// %
Remainder (modulus)
Example (Shopping)
let price = 500;
let quantity = 2;

let total = price * quantity;

console.log(total);
Output:1000
You bought 2 items. Each costs 500.
Total becomes 1000.
Example (Remainder %)
JavaScript
Copy code
let candies = 10;
let children = 3;

let remainder = candies % children;

console.log(remainder);
Output:
Copy code

1
Each child gets 3 candies.
1 candy remains.
That is %.
Practice
Create two variables:
Copy code

price = 200
tax = 50
Add them and print the result.
2. Assignment Operators
Used to store values in variables.
Operator
Meaning
=
Assign value
+=
Add and assign
-=
Subtract and assign
Example
JavaScript
Copy code
let balance = 1000;
balance += 500;

console.log(balance);

balance = balance + 500
Real Life Example (Wallet)
let wallet = 2000;

wallet -= 300;

console.log(wallet);
You spent 300.
Now wallet = 1700.

// score = 10
// Add 5 using +=.
// Print result.
// 3. Comparison Operators
// These compare two values.
// Result is always true or false.
// Operator
// Meaning
// ==
// Equal
// ===
// Equal (value + type)
// !=
// Not equal
// !==
// Not equal (value + type)
// >
// Greater than
// <
// Less than
// >=
// Greater or equal
// <=
// Less or equal
// Difference Between == and ===
// This is very important.
// ==

5 == "5"
Result:


true
// Because JavaScript converts "5" to number.
// ===
// Checks value AND type.
// JavaScript
// Copy code
// 5 === "5"
// Result:
// Copy code

false
Because:

// 5 → number
// "5" → string
// Types are different.
// Developers usually prefer ===.
// Safer.
// No confusion.
// Example (Age Check)

let age = 18;

console.log(age >= 18);
Output:


true
Meaning:
User is eligible.
Practice
Predict result:


10 > 5
10 == "10"
10 === "10"
4. Logical Operators
Used when multiple conditions exist.
Operator
Meaning
&&
AND


!
NOT
AND &&
Both conditions must be true.
Example. Login system.

 
let username = "admin";
let password = "1234";

console.log(username === "admin" && password === "1234");
Output:


true
Both correct.
OR ||
At least one condition true.
Example:

let day = "Sunday";

console.log(day === "Saturday" || day === "Sunday");
Output:

true
Weekend detected.
NOT !

Copy code
let isLoggedIn = false;

console.log(!isLoggedIn);
Output:


true
Practice
Predict:

true && false
true || false
!true
5. Unary Operators
Work with one value.
Mostly used for increment and decrement.
Operator
Meaning
++
Increase by 1
--
Decrease by 1
Example (Website Views)

let views = 100;

views++;

console.log(views);
Output
Copy code

101
Example (Game Score)
let lives = 3;

lives--;

console.log(lives);
Output

2
Practice
Create:


count = 5
Increase it using ++.
6. Ternary Operator
A short version of if else.
Structure:
J
condition ? value1 : value2
Example (Discount)

let age = 65;

let discount = age >= 60 ? "Senior Discount" : "No Discount";

console.log(discount);
If age ≥ 60
User gets discount.
Otherwise no.
Practice
Write ternary:

marks = 80
If marks ≥ 50 → "Pass"
Else → "Fail"
Conditional Statements
Now we control program decisions.
7. IF Statement
Used when one condition exists.
Example.
let age = 20;

if (age >= 18) {
  console.log("You can vote");
}
If condition true.
Code runs.
Practice
Create variable:


temperature = 35
If temperature > 30
Print "Very hot".
8. IF ELSE
Used when two possibilities exist.
Example. Exam result.
let marks = 40;

if (marks >= 50) {
  console.log("Pass");
} else {
  console.log("Fail");
}
Practice
Check login.
If password === "1234"
Print "Login success"
Else
Print "Wrong password".
9. ELSE IF
Used when multiple conditions exist.
Example. Grades.

let marks = 75;

if (marks >= 90) {
  console.log("A");
}
else if (marks >= 70) {
  console.log("B");
}
else if (marks >= 50) {
  console.log("C");
}
else {
  console.log("Fail");
}
Practice
Create program:

age = 15
Rules:

< 13 → Child
13-19 → Teen
20+ → Adult
10. SWITCH
Used when comparing one variable with many values.
Cleaner than many else if.
Example.
let day = "Monday";

switch(day) {
  case "Monday":
    console.log("Start work");
    break;

  case "Friday":
    console.log("Weekend soon");
    break;

  case "Sunday":
    console.log("Holiday");
    break;

  default:
    console.log("Normal day");
}
break stops the switch.
Without break.
Next case runs too.
Practice
Create switch:
Copy code

fruit = "apple"
Cases:

apple → "Red fruit"
banana → "Yellow fruit"
mango → "King of fruits"
Mini Real-World Problem (Your Turn)
You are building a shopping discount system.
Rules:


If purchase ≥ 5000 → 20% discount
If purchase ≥ 2000 → 10% discount
Otherwise → No discount
Variable:

purchase = 3500
Task:
Use if / else if / else
Print discount message.
Example output:
