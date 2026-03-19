let numbers = [1, 2, 3, 4, 5];
numbers = numbers.map((number) => number * 2);
console.log(numbers.reduce((total, num) => total + num));


// output:
// 30

//******************************************* */

const fruits = ["banana", "apple", "orange", "grape", "kiwi"];


const newFruitsBox = [...fruits].sort();

console.log(newFruitsBox)

// output:
// [ 'apple', 'grape', 'kiwi', 'orange', 'banana' ]

//******************************************* */


const obj = {
  a: 1,
  b: 2,
  c: {
    a: 3,
    b: 4,
  },
};

const {
  a,
  b,
  c: { a: nestedA },
} = obj;

console.log(a, b, nestedA);

// output:
// 1 2 3

//******************************************* */

var x = 10;

function outer() {
  console.log(x);

  if (false) {
    var x = 20;
  }
}

outer();

// output will be undefined because of variable hoisting. when the function outer is called,
//  the variable x is hoisted to the top of the function scope, but it is not assigned a value 
// until the line var x = 20 is executed. since the if condition is false, the assignment does 
// not happen, and x remains undefined when it is logged to the console.

//******************************************* */

function foo() {
  let x = 1;

  function bar() {
    let y = 2;
    console.log(x + y);
  }

  bar();
}

foo();


// output will be 3 because the function bar has access to the variable x defined in the outer function foo,


const person = {
  name: "John",
  age: 30,
};

Object.freeze(person);
person.age = 40;

console.log(person.age);


// output will be 30 because Object.freeze() method freezes an object, which means that it prevents new properties 
// from being added to it,

let x = 10;

function updateX() {
  if (true) {
    let x = 20;
    console.log(x);
  }
  console.log(x);
}

updateX();

// output will be 20 and 10 because the variable x declared with let inside the if block is a different variable



function calculateSum() {
  console.log(result);
  var num1 = 5;
  let num2 = 10;
  const num3 = 15;
  var result = num1 + num2 + num3;
}

calculateSum();

// output will be undefined because of variable hoisting. when the function calculateSum is called,

console.log(getType(42));
console.log(getType("Hello"));
console.log(getType(true));
console.log(getType([1, 2, 3]));
console.log(getType({ name: "John", age: 25 }));
console.log(getType(null));
console.log(getType(undefined));
console.log(getType(function () {}));


// output:
// number
// string
// boolean
// array
// object
// null
// undefined
// function


console.log(typeof 42);
console.log(typeof "Hello");
console.log(typeof true);
console.log(typeof [1, 2, 3]);
console.log(typeof { name: "John", age: 25 });
console.log(typeof null);
console.log(typeof undefined);
console.log(typeof function () {});

// output:
// number
// string
// boolean
// object
// object
// object
// undefined
// function

const companies = [
  { id: "1", name: "Facebook" },
  { id: "2", name: "Apple" },
  { id: "3", name: "Google" },
];

companies.sort((a, b) => (a.name > b.name ? -1 : 1));
console.log(companies);

// output:
// [ { id: '3', name: 'Google' },
//   { id: '2', name: 'Apple' },
//   { id: '1', name: 'Facebook' } ]


let x = 5;
{
  let x = 10;
  console.log(x);
}
console.log(x);

// output will be 10 and 5 because the variable x declared with let inside the block is a different
//  variable than the x declared outside the block. therefore, when we log x inside the block, it 
// refers to the inner variable with the value 10, and when we log x outside the block, it refers 
// to the outer variable with the value 5.


const obj1 = { a: 1, b: 2, c: 3 };
const { a: a1, b: b1 } = obj1;
console.log(a1, b1);

// output will be 1 and 2 because the destructuring assignment allows us to extract values from
//  objects and assign them to variables. in this case, we are extracting the values of properties
//  a and b from obj1 and assigning them to variables a1 and b1, respectively. therefore, a1 will have 
// the value 1 and b1 will have the value 2.


const arr1 = [1, 2, 3];
const arr2 = [4, 5, 6];
const arr3 = [...arr1, ...arr2];
console.log(arr3);

// output will be [1, 2, 3, 4, 5, 6] because the spread operator
//  (...) allows us to expand the elements of an array into individual elements.

const arr11 = [1, 2, 3];
const arr21 = [...arr11];

arr21.push(4);

console.log(arr11);
console.log(arr21);

// output will be [1, 2, 3] and [1, 2, 3, 4] because the spread operator creates a shallow copy of the array.


const x = 10;

function foo() {
  console.log(x);
  const x = 20;
}

foo();


// output will be undefined because of variable hoisting. when the function foo is called, 
// the variable x is hoisted to the top of the function scope, but it is not assigned a value 
// until the line const x = 20 is executed. since we are trying to access x before it is assigned
//  a value, it will be undefined when it is logged to the console.




const a11 = [1, 2, 3];
const b11 = a;

b11.push(4);

console.log(a11);
console.log(b11);

// output will be [1, 2, 3, 4] and [1, 2, 3, 4] because when we assign b11 = a11,
//  we are not creating a new array in memory. instead, we are creating a reference 
// to the same array. therefore, when we push a new element to b11, it also modifies 
// the original array that a11 references. as a result, both a11 and b11 will reflect 
// the change and contain the new element 4.