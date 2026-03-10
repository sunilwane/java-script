

const printAddress = (userName,password) =>{
    console.log(this.name," ", this.lastname, " ",userName,password);
}

function printAddress1(userName,password){
    console.log(this.name," ", this.lastname, " ",userName,password);
    
}
const name = {
    name: "john",
    lastname: "Doe"
}

printAddress.call(name,"john123","abcd1234");
printAddress1.call(name,"john123","abcd1234")
