// find the seconed largest element of an array
// let arr = [12, 34, 56, 87, 345, 6];

// let max = Math.max(arr[0],arr[1])
// let smax = Math.min(arr[0], arr[1]);

// for (let i = 2; i < arr.length; i++) {
//   if (arr[i] > max) {
//     smax = max;
//     max = arr[i];
//   } else if(arr[i]>smax){
//     smax= arr[i]
//   }
// }

console.log("the largest second number is " +smax);

// the second smallest number is

let arr = [12, 34, 56, 87, 5, 6];

let max = Math.max(arr[0], arr[1]); //34
let smax = Math.min(arr[0], arr[1]); //12

for (let i = 2; i < arr.length; i++) {
  if (arr[i] < smax) {
    smax = smax;
    smax = arr[i];
  }else if(arr[i]>smax){

  }
}
console.log("the second smallest number is that " + smax);