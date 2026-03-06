function clouser() {
    var number = 0;
    const increment = () =>{
        number+=1;
        return number
    }
    const decrement = () =>{
        number-=1;
        return number
    }
    
    const multiplication = () =>{
        number*=5;
        number+=2
        return number
    }
    
    return {increment,decrement,multiplication,number}
}


const store = clouser();

console.log(store.increment())
console.log(store.multiplication())
console.log(store.number)