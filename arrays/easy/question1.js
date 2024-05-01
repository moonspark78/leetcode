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
console.log(largest([7,3,2,6,4]));