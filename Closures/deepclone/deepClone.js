function deepClone(obj){
  return JSON.parse(JSON.stringify(obj));
}

const user = {name: "John", address: {city: "NY"}};
let copy = deepClone(user);
copy.name = "Sam"


console.log(user)
console.log(copy)



// ***************************** shallow copy
const user1 = {
    name : "john",
    address: {name: "MH"}
}

const copyShallow = {...user1};

copyShallow.name = "sam" 
copyShallow.address.name = "KA"
console.log(user1)
console.log(copyShallow)
