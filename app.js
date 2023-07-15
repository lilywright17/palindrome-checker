function palindrome(str) {
//make everything lowercase
var ans1 = str.toLowerCase();

//remove non-alphanumeric characters
var regexPattern = /[^A-Za-z0-9]/g;
var ans = ans1.replace(regexPattern, "");
console.log(ans);

//reverse the string

let reversed = ans.split("").reverse().join("");

if (reversed === ans) {
  return true;
} else {
  return false;
}


}

palindrome("not a palindrome")
