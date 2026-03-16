//reverse String 


const value1 = "string reverse";
const value2 = value1.split('').reverse().join('');

console.log(value2);


// function condition statement 

function reverseString(value) {
    let newString= "";
    
    for(let i = value.length-1;i>=0;i--) {
        newString+=value[i];
    }
    return newString
}


console.log(reverseString(value1));




function reverseRecursive(str) {
  return (str === "") ? "" : reverseRecursive(str.substring(1)) + str.charAt(0);
}
