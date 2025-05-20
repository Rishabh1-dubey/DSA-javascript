// let arr =[1,2,3,4,5,6]

// let copy = arr[0]

// for(let i=0; i<=arr.length-1 ; i++){
//      arr[i] = arr[i+1]
// }

// arr[arr.length-1] = copy

// console.log(arr)

// -------------------------------------------------------------------------------
// arrya right to left

// let arr = [1, 2, 3, 4, 5, 6];
// let copy = arr[arr.length - 1];

// for (let i = arr.length - 1; i > 0; i--) {
//   arr[i] = arr[i - 1];
// }

// arr[0] = copy;

// console.log(arr);

//  -------------k element by one using left  --------------------

// let arr = [1, 2, 4, 5, 6];
// const k = Number(prompt("Enter your Number"));

// for (let j = 0; j < k; j++) {
//     let copy = arr[0];
//   for (let i = 0; i < arr.length - 1; i++) {
//     arr[i] = arr[i + 1];
//   }
//   arr[arr.length - 1] = copy;
// }

// console.log(arr);

// --------array k element rotation by right element ----------------------

let arr = [1, 2, 3, 4, 5, 6];

let k = Number(prompt("Enter your Number"));

for (j =0; j<k; j++) {
  let copy = arr[arr.length - 1];

  for (i = arr.length - 1; i > 0; i--) {
    arr[i] = arr[i - 1];
  }
  arr[0] = copy;
}
console.log(arr);
