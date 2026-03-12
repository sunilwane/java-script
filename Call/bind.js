const person = {
  name: "Sunil"
};

function greet(city) {
  console.log(`Hello ${this.name} from ${city}`);
}


Function.prototype.myBind = function (context, ...args) {

  const fn = this;

  return function (...newArgs) {

    return fn.apply(context, [...args, ...newArgs]);

  };

};

const greetFn = greet.myBind(person);

greetFn("Pune");