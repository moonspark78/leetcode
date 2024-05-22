/* 
Given a binary array nums, return the maximum number of consecutive 1's in the array.

Example 1:
Input: nums = [1,1,0,1,1,1]
Output: 3
Explanation: The first two digits or the last three digits are consecutive 1s. The maximum number of consecutive 1s is 3.
*/

function maxConsecutiveOnes(arr){
    let maxOnes = 0;
    let currentOnes = 0;
    for (let i = 0; i < arr.length; i++) {
        if (arr[i] === 1){
            currentOnes++;
            if(currentOnes>maxOnes){
                maxOnes = currentOnes;
            }
        }
        else{
            currentOnes =0;
        }

    }
};

