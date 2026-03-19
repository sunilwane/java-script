let num = 0;

function test() {
  var num = 1;
  return num;
}

console.log(test());
console.log(num);

// output:
// 1
// 0        


let obj = { name: "John", age: 25 };
let newObj = { ...obj, age: 30 };

console.log(obj.age);
console.log(newObj.age);

// output:
// 25
// 30

const add = (a = 1, b = 2) => a + b;
console.log(add());
console.log(add(5));
console.log(add(undefined, 10));


// output:
// 3
// 7
// 11


const name = "John";
const age = 25;

const user = { name, age };
console.log(user);


// output:
// { name: 'John', age: 25 }


const arr = [1, 2, 3];
const [a, b, c] = arr;

console.log(a);
console.log(b);
console.log(c);


// output:
// 1
// 2
// 3

console.log(typeof null);
console.log(typeof undefined);
console.log(null === undefined);
console.log(null == undefined);

// output:
// object
// undefined
// false
// true

function sumOfPositiveNumbers(arr) {
    let sum = 0;
    for(let i = 0; i <= arr.length-1; i++) {
        if(arr[i] > 0) {
            sum += arr[i];
        }
    }
    return sum;
}

let array = [1, -2, 3, 4, -5];
console.log(sumOfPositiveNumbers(array));


// output:
// 8


//Write a function in JavaScript that takes a string as input and returns a new string with all the vowels removed. 

function removeOVowels(stringValue) {
    let newStringValue = "";
    let vowels = ['a','e','i','o','u','A','E','I','O','U']
    for(let i = 0; i<= stringValue.length;i++) {
        let selectedCharacter = stringValue.charAt(i);
        if(!vowels.includes(selectedCharacter)) {
            newStringValue+=selectedCharacter
        }
    }
    return newStringValue;
}

console.log(removeOVowels("hello word!"));


// output:
// hll wrd!


function sortStrings(arr) {
  return arr.sort();
}

// Example usage:
const strings = [ "elderberry","apple", "cherry","date","banana"];
console.log(sortStrings(strings)); 

// output:
// [ 'apple', 'banana', 'cherry', 'date', 'elderberry' ]



function removeDuplicates(arr) {
  return [...new Set(arr)];
}

// Example usage:
const numbers = [1, 2, 3, 2, 1, 4, 5, 4]; 
console.log(removeDuplicates(numbers)); 


// output:
// [ 1, 2, 3, 4, 5 ]


