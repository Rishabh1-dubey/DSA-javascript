
// Reverse an array

let arr=[10,20,23,24,56]
let temp = new Array(arr.length)

let j=0;
for(let i = arr.length-1; i>=0 ; i--){
temp[j] =arr[i]
j++

}

console.log(temp)

// reverse an array without spaceing

let arr1 =[10,20,30,40,50,89]

let i =0; j=arr1.length-1

while(i !=j){
    let temp = arr1[i]
    arr1[i]= arr1[j]
    arr1[j]= temp
    i++
    j--
}
console.log(arr)