let a = {};
let b = { key: "b" };
let c = { key: "c" };

a[b] = 123;
a[c] = 456;

console.log(a[b]);
console.log(a[c])


// output will be 456 because when we assign a[b] = 123, it will convert b to string and 
// assign 123 to that key. when we assign a[c] = 456, it will convert c to string and assign 
// 456 to that key. since both b and c are converted to string, they will have the same key in 
// the object a, which is "[object Object]". therefore, the value of a[b] and a[c] will be the same, which is 456.



let obj1 = { key: "value" };
let obj2 = obj1;
let obj3 = obj2;

obj1.key = "new value";
obj2 = { key: "another value" };

console.log(obj1.key, obj2.key, obj3.key); 


// output will be "new value", "another value", "new value" because obj1 and obj3 are referencing the same object in memory, which is { key: "new value" }. when we assign 
// obj2 = { key: "another value" }, we are creating a new object in memory and assigning it to obj2. therefore, obj1 and obj3 will still reference the original object, 
// while obj2 will reference the new object.


const obj = {
  a: "foo",
  b: function () {
    console.log(this.a);
  },
};

const c1 = obj.b;

obj.b();
c1();

// output will be "foo" and undefined because when we call obj.b(), the this keyword inside the function
//  b refers to the obj object, which has a property a with the value "foo".


const x = { foo: 1 };
const y = { foo: 2 };

function addFoo(obj) {
  return obj.foo + 1;
}

console.log(addFoo(x));
console.log(addFoo(y));

// output will be 2 and 3 because when we call addFoo(x), the obj parameter inside the function will 
// reference the x object, which has a property foo with the value 1. therefore, addFoo(x) will return 
// 1 + 1, which is 2. similarly, when we call addFoo(y), the obj parameter will reference the y object,
//  which has a property foo with the value 2. therefore, addFoo(y) will return 2 + 1, which is 3.


const arr = [1, 2, 3, 4, 5];

for (var i = 0; i < arr.length; i++) {
  setTimeout(function () {
    console.log(i);
  }, 1000);
}

// output will be 5, 5, 5, 5, 5 because the variable i is declared with var, which has function scope.



const arr1 = [1, 2, 3, 4, 5];

arr1.forEach(function (element) {
  console.log(element);
}); 


// output will be 1, 2, 3, 4, 5 because the forEach method iterates over each element in the array and executes the provided function for each element.


let x1 = 1;

if (function f() {}) {
  x1 += typeof f;
}

console.log(x1);


// output will be 1 because the function declaration inside the if statement is not hoisted, and therefore, the 
// function f is not defined in the scope of the if statement.


let a = {
  x: 1,
  y: 2,
};
let b1 = a;
a.x = 5;
console.log(a);
console.log(b1);

// output will be { x: 5, y: 2 } and { x: 5, y: 2 } because both a and b1 are referencing the same object in memory. 
// when we change the value of a.x to 5, it will also change the value of b1.x to 5 since they are referencing the 
// same object. therefore, both a and b1 will have the same values for x and y.


let x11 = [1, 2, 3];
let y1 = [1, 2, 3];
let z1 = y1;

console.log(x11 == y1);
console.log(x11 === y1);
console.log(z1 == y1);
console.log(z1 == x11);

// output will be false, false, true, false because x11 and y1 are two different arrays in memory, 
// even though they have the same values.


let a = { x: 1 };
let b11 = { x: 2 };
let c11 = { x: 3 };
let d = { x: 4 };
let e = { x: 5 };
let arr11 = [a, b11, c11, d, e];

arr11.forEach((obj) => (obj.x = obj.x * 2));

console.log(a.x, b11.x, c11.x, d.x, e.x);




