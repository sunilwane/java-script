function printAddress(userName, password) {
  console.log(this.name, this.lastname, userName, password);
}

const printAddress1= (userName,password) =>{
    console.log(this.name,this.lastname,userName,password)
}
const person = {
  name: "John",
  lastname: "Doe"
};

printAddress.apply(person, ["john123", "abcd1234"]);
printAddress1.apply(person,["john123","abcd1234"]) 


// polyfill for apply method 


Function.prototype.myApply = function (context, args) {
  context = context || window;
  const fnSymbol = Symbol();
  context[fnSymbol] = this;
  const result = context[fnSymbol](...args);
  delete context[fnSymbol];
  return result;
};

printAddress.myApply(person, ["john123", "abcd1234"]);
printAddress1.myApply(person,["john123","abcd1234"])