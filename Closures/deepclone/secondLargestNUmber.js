// second largest number 


function secondLarget(arr) {
    let largestNumber = arr[0];
    let secondLargestNumber = 0;
    
    for (let i = 0 ; i<= arr.length-1; i++) {
        if( arr[i] > largestNumber) {
            secondLargestNumber = largestNumber
            largestNumber = arr[i];
        }else if( arr[i]> secondLargestNumber) {
            secondLargestNumber = arr[i]
        }
    } 
     
     
    return secondLargestNumber;
}


let array =  [2,34,343,1,122,667,8787,45,3223,4646,292]
console.log(secondLarget(array))