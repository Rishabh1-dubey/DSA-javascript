// let s ="Rishabh"
// let rev= ""

// for (let i =s.length-1; i>=0; i--) {
//     // console.log(s[i]);
//     rev= rev+ s.charAt(i)

// }

// console.log(rev)

//check number is palindrom or not

// let num=  Number(prompt("enter your number"))
// let strNUm = num.toString()
// let reverseNUm = strNUm.split('').reverse().join("")

// let checkNum = strNUm === reverseNUm

// console.log( "The Number is " + (checkNum ? "Palinddrom" : "Number is not a palindromoe") )

// check string is palindrom or not

let s = prompt("Enter your text here");
let rev = "";

for (let i = s.length - 1; i >= 0; i--) {
    rev = rev + s.charAt(i); // Corrected mistake
}

if (rev == s) {
    console.log("The text is a Palindrome: " + rev);
} else {
    console.log("The text is NOT a Palindrome: " + rev);
}

