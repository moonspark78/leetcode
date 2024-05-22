/* Write a program that prints the numbers from 1 to 87.
But for multiples of three print “Three” instead of the number and for the multiples of five print “Five”.
For numbers which are multiples of both three and five print “Burger” 
*/

function isMultiple(){
    for(let i = 0; i <=87 ; i++){
        if(i % 3 === 0 && i % 5 === 0){
            return "Burger"
        }else if(i % 3 ===0){
            return "Three"
        }else if(i % 3 ===0){
            return "Five"
        }
    }
}