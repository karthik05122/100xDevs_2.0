/*
  Write a function `isAnagram` which takes 2 parameters and returns true/false if those are anagrams or not.
  What's Anagram?
  - A word, phrase, or name formed by rearranging the letters of another, such as spar, formed from rasp.
*/

function isAnagram(str1, str2) {

let max= 256;

str1 = str1.toLowerCase();
str2 = str2.toLowerCase();

if(str1.length != str2.length)
  return false;


let count1 = new Array(max);
let count2 = new Array(max);

for(let j =0;j<max;j++){
  count1[j]=0;
  count2[j]=0;
}

let i;
for(i=0;i<str1.length && str2.length;i++){
  count1[str1[i].charCodeAt(0)]++;
  count2[str2[i].charCodeAt(0)]++;
}


for(i=0;i<max;i++){
  if(count1[i] != count2[i])
    return false;
  

}
return true;


}


module.exports = isAnagram;
