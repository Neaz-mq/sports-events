Questions and Answer:

1.

let greeting;
greetign = {};
console.log(greetign);

A: {}
B: ReferenceError: greetign is not defined
C: undefined

Answer: A and B

A: {} - This is the correct answer when the variable name is corrected to greeting, and it logs an empty object to the console.

B: ReferenceError: greetign is not defined - This is the correct answer based on the code you provided with the typo, where the variable name is incorrectly written as greetign, resulting in a ReferenceError because greetign is not defined.



2.

function sum(a, b) {
  return a + b;
}
sum(1, "2");


A: NaN
B: TypeError
C: "12"
D: 3

Answer: B and C

In the given JavaScript code, the sum function takes two arguments, a and b, and attempts to add them together using the + operator. When you call sum(1, "2"), it concatenates the number 1 and the string "2", resulting in the string "12"


3.
const food = ["🍕", "🍫", "🥑", "🍔"];
const info = { favoriteFood: food[0] };

info.favoriteFood = "🍝";

console.log(food);


A: ['🍕', '🍫', '🥑', '🍔']
B: ['🍝', '🍫', '🥑', '🍔']
C: ['🍝', '🍕', '🍫', '🥑', '🍔']
D: ReferenceError


Answer: A

The code first assigns the value of food[0] (which is "🍕") to the info.favoriteFood property. Then, it assigns the string "🍝" to info.favoriteFood. However, these assignments do not modify the food array, so food remains unchanged and still contains the original values.


4. 
function sayHi(name) {
  return `Hi there, ${name}`;
}

console.log(sayHi());


A: Hi there,
B: Hi there, undefined
C: Hi there, null
D: ReferenceError


Answer: B

In the provided code, the sayHi function expects an argument name, but when you call sayHi() without providing any argument, it results in name being undefined. So, the returned string will be "Hi there, undefined."



5.
let count = 0;
const nums = [0, 1, 2, 3];

nums.forEach((num) => {
  if (num) count += 1;
});
console.log(count);

A: 1
B: 2
C: 3
D: 4

Answer: B

The forEach method iterates over each element in the nums array and executes the provided callback function. In the callback function, the condition if (num) checks if num is truthy (i.e., not equal to 0). For elements 1, 2, and 3 in the array, the condition is true, so count is incremented for each of those elements. Therefore, count becomes 2 in total after the forEach loop.



