/* 
Given an array nums containing n distinct numbers in the range [0, n], 
return the only number in the range that is missing from the array.
*/

function isMissing(arr){
    const n = arr.length;
    const expected = n * (n+1)/2
    const actual = arr.reduce((acc, curr) => curr + acc, 0);

    const missing = expected - actual;

    return missing;
}

console.log(isMissing([0, 1, 2, 3]));

