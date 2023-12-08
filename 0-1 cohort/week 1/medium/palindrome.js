/*
  Implement a function `isPalindrome` which takes a string as argument and returns true/false as its result.
  Note: the input string is case-insensitive which means 'Nan' is a palindrom as 'N' and 'n' are considered case-insensitive.
*/

function isPalindrome(str) {
  let regex = /[^A-Za-z0-9]/;
  str = str.toLowerCase();
  str = str.replace(/[^A-Za-z0-0]/g,'');
  let i = 0;
  let j = str.length -1;

  while(i<j){
    if(str[i] ===' '){
      i++;
      continue;
      
    }

    if(str[j] ===' '){
      j--;
      continue;
      
    }
    if(str[i] != str[j]){
      return false;
    }
    i++;j--;
  }

  return true;
}

module.exports = isPalindrome;
