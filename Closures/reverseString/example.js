// Input:  [1,2,2,3,4,4,5]
// Output: [1,2,3,4,5]


let input = [1,2,2,3,4,4,5];
input = [...new Set(input)];

console.log(input)



// filtermethod
const arr = [1,2,7,9,82,3,4,7,82,4,5];

const unique = arr.filter((item,index) =>
  arr.indexOf(item) === index
);

console.log(unique);  



// find largest number


const numbers = [1,2,7,9,82,3,4,7,82,4,5];
const largest = Math.max(...numbers);
console.log(largest);


//using conditional statement

 function largestNumber(arr) {
     let maxNumber = arr[0];
     for(let i = 0; i <= arr.length; i++) {
         if(arr[i]>maxNumber) {
             maxNumber = arr[i];
         }
     }
     return maxNumber;
 }
 
 
 console.log(largestNumber(numbers))



 // the given string is palindrome or not


  const str = "m2ada2m";
 
 const reverseValue = str.split('').reverse().join('');
 
 console.log(str===reverseValue? "the givien string is palindrome":"the given string is not palindrome")


 // second methiod 


 function isPalindrome(str){
  for(let i=0;i<str.length/2;i++){
    if(str[i] !== str[str.length-1-i]){
      return false;
    }
  }
  return true;
}

console.log(isPalindrome("madam"));