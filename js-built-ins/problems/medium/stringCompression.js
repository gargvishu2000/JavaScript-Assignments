/*
  Write a function `compression` which takes a string as input and returns a compressed version of the string. The compression is done by replacing consecutive repeating characters with the character followed by the count of repetitions. If a character does not repeat, it is not followed by a count.

  Example:
  - Input: "aaabbbbcccvvmm"
  - Output: "a3b4c3v2m2"

  - Input: "abc"
  - Output: "abc"

  - Input: "aabbcc"
  - Output: "a2b2c2"

  - Input: ""
  - Output: ""

  Note:
  - The function should work for any alphanumeric string.

  Once you've implemented the logic, test your code by running
  - `npm run test-compressString`
*/
function compression(str) {
  // Your code here

  let res=""
  let i=0;
  let j=i,count=0;
  while(i<str.length){
    while(j<str.length && str.charAt(i)===str.charAt(j)){
      count++;
      j++;
    }
    if(count>1)
    res+= str.charAt(i)+count;
  else res+=str.charAt(i);
    i=j;
    count=0
  }
  return res;
}

module.exports = compression;