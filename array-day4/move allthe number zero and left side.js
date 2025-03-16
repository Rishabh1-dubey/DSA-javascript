// move the element of zero in left side and one's in right side

let arr = ["-", "+", "-", "+", "+", "+", "-", "-", "+", "+"]
let i = 0,
  j = 0;

while (i < arr.length) {
  if (arr[i] == "-") {
    let temp = arr[i];
    arr[i] = arr[j];
    arr[j] =temp
    j++;
  }
  i++;
}


console.log(arr)