// check string is palindrome or not
// let str = "hello world";
// function strPalin(str) {
//   str = str.toLowerCase().replace(/[^a-z0-9]/g, "");// agr sentence mai word de ya 3-4 vhar de to ye daal nhi to normal use kr loo

//   let i = 0;
//   let j = str.length - 1;

//   while (i <= j) {
//     if (str.charAt(i) !== str.charAt(j)) {
//       return false;
//     } else {
//       i++;
//       j--;
//     }
//   }
//   return true;
// }
// console.log(strPalin(str));

//count no of word

// let str = "my name is rishabh";

// function conutWords(str) {
//   let count = 0;

//   if (str.trim === "") return 0;

//   return str.split(/\s+/).length;
// }
// console.log(conutWords(str));

//using for loop

// function countWords(str) {
//   let count = 0;
//   let inword = false;
//   for (let i = 0; i < str.length; i++) {
//     if (str[i] !== " " && !inword) {
//       count++;
//       inword = true;
//     }
//     if (str[i] === " ") {
//       inword = false;
//     }
//   }
//   return count;
// }
// console.log(countWords(str));

//find first non-repeating character
// let str = "aabbccddeef";
// function firstNonRepeatingChar(str) {
//   let freq = {};

//   // Step 1
//   for (let i = 0; i < str.length; i++) {
//     let ch = str[i];
//     if (freq[ch] === undefined) {
//       freq[ch] = 1;
//     } else {
//       freq[ch]++;
//     }
//   }

//   // Step 2
//   for (let i = 0; i < str.length; i++) {
//     if (freq[str[i]] === 1) {
//       return str[i];
//     }
//   }

//   return null;
// }
// console.log(firstNonRepeatingChar(str));

//--------------------------------------------------------------------------------
// remove duplicat chracter

// let str = "programming";
// function removeDuplicate(str) {
//   let obj = {};
//   let result = "";
//   for (let i = 0; i < str.length; i++) {
//     if (!obj[str[i]]) {
//       result += str[i];
//       obj[str[i]] = true;
//     }
//   }
//   return result;
// }
// console.log(removeDuplicate(str));

// ----------------------------------------------------------------------------

//find longest word in the sentect

const str = "my name is rishabh dusdfdsfbey is the";
function findLongestWord(str) {
  str = str.split(" ");
  let longword = "";

  for (let i = 0; i < str.length; i++) {
    if (str[i].length > longword.length) {
      longword = str[i];
    }
  }
  return longword;
}

console.log(findLongestWord(str));
