/*
  Implement a function `isPalindrome` which takes a string as argument and returns true/false as its result.
  Note: the input string is case-insensitive which means 'Nan' is a palindrom as 'N' and 'n' are considered case-insensitive.
*/

function isPalindrome(str) {
  let cleanStr = str.replace(/[!?\.,\s]/g,"");
  
  return cleanStr.toLowerCase()===cleanStr.toLowerCase().split("").reverse().join("");
}

// console.log(isPalindrome("Able, was I ere I saw Elba!"))
module.exports = isPalindrome;
