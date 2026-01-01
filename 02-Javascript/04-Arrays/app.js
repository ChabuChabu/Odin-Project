let fruits = ["Apple", "Orange", "Plum"];

//alert(fruits.at(-1));
fruits.push("Guava");
let item = fruits.shift();

// fruits.unshift("Mango");

// console.log(item);

// console.log(fruits);

// for (let key in fruits) {
//   console.log(fruits[key]);
// }

// function addOne(num) {

//   return num + 1;
// }

// const arr = [1, 2, 3, 4, 5];
// const mappedArr = arr.map(addOne);
// console.log(mappedArr);

function sumOfTripledEvens(array) {
  //   return array.filter((num) => num % 2 === 0);
  //return array.map((num) => num * 3);
  return array.reduce((acc, curr) => acc + curr);
}

//let result = sumOfTripledEvens([2, 3, 4, 5]);

// console.log(result);

// ************************   Exercise  ******************************

/************  Translate border-left-width to borderLeftWidth ********/

function camelize(str) {
  return str
    .trim()
    .split(/[-_\s]+/) // split on dashes, underscores, or spaces
    .filter(Boolean)
    .map((w) => w[0].toUpperCase() + w.slice(1).toLowerCase())
    .join("");
}

let translated = camelize("background-color");
// console.log(translated);

/************* Filter range *****************/

function higherNumbers(a, b) {
  return arrNumbers.filter((num) => num > a && num < b);
}

let arrNumbers = [2, 3, 4, 5, 6, 7];

let result = higherNumbers(2, 6);
// console.log(result);

/************* Filter range "in place" *****************/

function filterRangeInPlace(a, b) {
  return arrNumbers.filter((num) => num > a && num < b);
}

let arrRangeNumbers = [1, 2, 3, 4, 5, 6, 7, 8, 9];
let rangeResults = filterRangeInPlace(2, 7);
console.log(rangeResults);

/************* Sort in decreasing order *****************/
