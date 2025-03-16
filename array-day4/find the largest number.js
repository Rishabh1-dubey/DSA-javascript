// / finding the maximum number array

const arr =[10,20,30,5,70,23]
let max =arr[0];

for (let i = 1; i < arr.length; i++) {
    if(max<arr[i]){
        max=arr[i]
    }
}

console.log(max);

// finding the minimum element of array

let arr1=[111,23,53,54,78,65,34]

let min=arr1[0];
 for (let i = 1; i< arr1.length; i++) {
    if(min>arr1[i]){
        min=arr1[i]
    }
 }

 console.log("the minimum of the array is "  +  min)
