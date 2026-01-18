// const arr = [1, [2, [3, 4]], 5];
// // Output: 15

// function sum(arr) {
//   let total = 0;
//   for (let i = 0; i < arr.length; i++) {
//     if (Array.isArray(arr[i])) {
//       total += sum(arr[i]);
//     } else {
//       total += arr[i];
//     }
//   }
//   return total;
// }
// console.log(sum(arr));

// ----------------------------------------------------------------------------------------------------

// const arr = [1, [2, [3, 4, [5]]]];
// // Output: 5
// function indexReturn(arr) {
//   let count = 0;
//   for (let i = 0; i < arr.length; i++) {
//     if (Array.isArray(arr[i])) {
//       count += indexReturn(arr[i]);
//     } else {
//       count++;
//     }
//   }
//   return count;
// }
// console.log(indexReturn(arr));
// -------------------------------------------------------------------------------------------------------

// const arr = [1, [20, [3, 400]], 5];
// // Output: 400

// function findMax(arr) {
//   let max = -Infinity;
//   for (let i = 0; i < arr.length; i++) {
//     let inner = findMax(arr[i]);
//     if (inner > max) max = inner;

//     if (arr[i] > max) max = arr[i];
//   }
//   return max;
// }
// console.log(findMax(arr));

//----------------------------------------------------------------------------------------------------

// const arr = [1, [2, [3, [4]]]];
// // Output: 4

// function findDepth(arr) {
//   let maxDepth = 1;
//   for (let i = 0; i < arr.length; i++) {
//     if (Array.isArray(arr[i])) {
//       let innerDepth = findDepth(arr[i]) + 1;
//       if (innerDepth > maxDepth) maxDepth = innerDepth;
//     }
//   }
//   return maxDepth;
// }
// console.log(findDepth(arr));

// const arr = [1, [2, [3, 4]], 5];
// Output: 120

// function maxvalue(arr) {
//   let max = 1;
//   for (let i = 0; i < arr.length; i++) {
//     if (Array.isArray(arr[i])) {
//       max *= maxvalue(arr[i]);
//     } else {
//       max *= arr[i];
//     }
//   }
//   return max;
// }
// console.log(maxvalue(arr));
// const arr = [1, [2, [3, 4]], 5];
// Output: "1-2-3-4-5"

// function converString(arr) {
//   let result = [];
//   for (let i = 0; i < arr.length; i++) {
//     if (Array.isArray(arr[i])) {
//       result = result.concat(converString(arr[i]));
//     } else {
//       result.push(arr[i]);
//     }
//   }
//   return result;
// }
// console.log(converString(arr).join("-"));

const arr = [1, [2, [3, 4]], 5];

// Output:
// [5, [[4, 3], 2], 1]

function reverseFlatter(arr) {
  let result = [];
  for (let i = arr.length - 1; i >= 0; i--) {
    if (Array.isArray(arr[i])) {
      result.push(reverseFlatter(arr[i]));
    } else {
      result.push(arr[i]);
    }
  }
  return result;
}

console.log(reverseFlatter(arr));
