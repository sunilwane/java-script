console.log("Start");

const promise = new Promise((resolve, reject) => {
  console.log("Inside Promise");
  resolve("Resolved!");
});

promise.then((res) => {
  console.log(res);
});

console.log("End");

// ***************************************

console.log("A");

const p = new Promise((resolve) => {
  setTimeout(() => {
    resolve("B");
  }, 0);
});

p.then((data) => {
  console.log(data);
});

console.log("C");


//************************************* */


Promise.resolve(1)
  .then((x) => x + 1)
  .then((x) => {
    throw new Error("Error occurred");
  })
  .then((x) => console.log(x))
  .catch((err) => console.log("Caught:", err.message));


//   output:
// COught: Error occurred

//**************************************** */


const promise11 = Promise.resolve("Hello");

promise.then((res) => {
  console.log(res);
});

promise11.then((res) => {
  console.log(res + " World");
}); 


// output:
// Hello
// Hello World

//******************************************* */


console.log("Start");

setTimeout(() => {
  console.log("Timeout");
}, 0);

Promise.resolve().then(() => {
  console.log("Promise");
});

console.log("End");

// output:
// Start
// End
// Promise
// Timeout

//******************************************* */


const p1 = Promise.resolve(10);
const p2 = Promise.resolve(20);
const p3 = Promise.resolve(30);

Promise.all([p1, p2, p3]).then((values) => {
  console.log(values);
});


// output:
// [10, 20, 30]

//******************************************* */ 


new Promise((resolve, reject) => {
  reject("Failed");
})
.then((res) => {
  console.log(res);
})
.catch((err) => {
  console.log(err);
});


// output:
// Failed

//******************************************* */
async function test() {
  console.log(1);
  await Promise.resolve();
  console.log(2);
}

console.log(3);
test();
console.log(4);

// output:
// 3
// 1
// 4
// 2

//******************************************* */


Promise.resolve(5)
  .then((num) => {
    console.log(num);
    return num * 2;
  })
  .then((num) => {
    console.log(num);
  });


// output:
// 5
// 10

//******************************************* */

Promise.resolve()
  .then(() => {
    return Promise.resolve("Nested");
  })
  .then((data) => {
    console.log(data);
  }); 


// output:
// Nested

