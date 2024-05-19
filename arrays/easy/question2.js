/* 
Given an array Arr of size N, print the second largest distinct element from an array.
If the second largest element doesn't exist then return -1.
*/


function secondLargest(arr){
    arr.sort((a, b) => a - b);
    const largest = arr[arr.length - 1];
    let second;
    for(let i = arr.length-2; i>=0; i--){
        if(arr[i] != largest){
             second = arr[i];
        }
        break;
    }
    return second;
}

console.log(secondLargest([7,2,4,5]));