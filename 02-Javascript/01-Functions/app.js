//Write a function called add7 that takes one number and returns that number + 7.
const add7 = (num) => {
  return num + 7;
};

// console.log(add7(3));

//Write a function called multiply that takes 2 numbers and returns their product.

const multiply = function (numOne, numTwo) {
  return numOne * numOne;
};

// console.log(multiply(5, 9));

// Write a function called capitalize that takes a string and returns that string with only the first letter capitalized.
// Make sure that it can take strings that are lowercase, UPPERCASE or BoTh.

function capitalize(name) {
  console.log(name.charAt(0).toUpperCase() + name.slice(1));
}
// capitalize("game");

//Write a function called lastLetter that takes a string and returns the very last letter of that string:

function lastLetter(str) {
  return str[str.length - 1];
}

// console.log(lastLetter("abcd"));

//Fizzbar challenge

let answer = parseInt(
  prompt("Please enter the number you would like to FizzBuzz up to:")
);

for (let i = 1; i <= answer; i++) {
  if (i % 3 === 0 && i % 5 === 0) {
    console.log("FizzBuzz");
  } else if (i % 3 === 0) {
    console.log("Fizz");
  } else if (i % 5 === 0) {
    console.log("Buzz");
  } else {
    console.log(i);
  }
}
