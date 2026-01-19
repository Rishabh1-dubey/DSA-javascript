let str = "hello";

function countVowel(str) {
  let count = 0;
  let vowel = "aeiou";
  for (let i = 0; i < str.length; i++) {
    let char = str[i];
    if (char >= "a" && char <= "z" && !vowel.includes(char)) {
      count++;
    }
  }
  return count;
}

console.log("the number of consonent is ", countVowel(str));
