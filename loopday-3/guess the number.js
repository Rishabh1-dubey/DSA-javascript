
let random = Math.floor(Math.random()*100)

let guess =-1;
let attempt = 0;
while(guess!==random && attempt<5){

    guess = Number(prompt("enter you number"))
if(isNaN(guess) || guess<1 || guess>100){
    console.log("try again b/w 1-100")
    continue
}


attempt++
if(guess > random){
    console.log("too high , try again ")
}
else if(guess <random){
    console.log("too low , try again")
}
else{
    console.log("Congrats and guess it right number")
    break;
}
}

if (guess !== random) {
    console.log(`You've exceeded the limit. The correct number was ${random}.`);
}
































