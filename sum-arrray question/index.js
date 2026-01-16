// const arr = [1, 2, 3, 4, 5, 6];
//sun of even array
//o/p:12

// function sumEvenArray(arr) {
//   let sum = 0;
//   for (let i = 0; i < arr.length; i++) {
//     if (arr[i] % 2 === 0) {
//       sum += arr[i];
//     }
//   }
//   return sum;
// }

// console.log(sumEvenArray(arr));

// Count Frequency
// const str = ["a", "b", "a", "c", "b", "a"];

//o/p"{ a: 3, b: 2, c: 1 }

// function countFrequeny(str) {
//   let obj = {};
//   for (let i = 0; i < str.length; i++) {
//     let item = str[i];
//     obj[item] = (obj[item] || 0) + 1;
//   }
//   return obj;
// }
// console.log(countFrequeny(str));

//remove duplicate from array
const arr = [1, 2, 3, 2, 4, 1, 5];

function removeDuplicate(arr) {
  let newArr = new Set();
  let result = [];
  for (let i = 0; i < arr.length; i++) {
    if (!newArr.has(arr[i])) {
      newArr.add(arr[i]);
      result.push(arr[i]);
    }
  }
  return result;
}

console.log(removeDuplicate(arr));
