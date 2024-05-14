/* 
Problem statement
Given an array ‘arr’ of size ‘n’ find the largest element in the array.

Example:
Input: 'n' = 5, 'arr' = [1, 2, 3, 4, 5]
Output: 5
 */


//First way
function largest(arr){
    arr.sort((a,b) => a - b)
    return arr[arr.length-1]
}
console.log(largest([7,2,2,6,4]));


//Second way
function largeest(arr){
    return arr.reduce((acc,cur) =>{
        return acc > cur ? acc : cur
    },arr[0])
}
console.log(largeest([7,3,2,12,3,9]));


// Third way
function largestt(arr){
    let max = 0;
    for (let i = 0; i < arr.length; i++){
        if(arr[i] > max){
            max = arr[i]
        }
    }
    return max;
}
console.log(largeest([3,2,11,5,9]));