/* 
Given an array nums, return true if the array was originally sorted in non-decreasing order,
then rotated some number of positions (including zero). Otherwise, return false.
There may be duplicates in the original array.
*/

function isSorted (arr) {
    for(let i = 0; i < arr.length; i++) {
        if(arr[i] > arr[i+1]) {
            return false;
        }
    }
    return true;
}

console.log(isSorted([1,3,7]));