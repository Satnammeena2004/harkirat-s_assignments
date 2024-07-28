/*
  Write a function `findLargestElement` that takes an array of numbers and returns the largest element.
  Example:
  - Input: [3, 7, 2, 9, 1]
  - Output: 9
*/

function findLargestElement(numbers) {
     let largest = numbers[0];
    for(let num of numbers){
        if(largest<num){
            largest =num;
        }
    }
    return largest;
}


module.exports = findLargestElement;