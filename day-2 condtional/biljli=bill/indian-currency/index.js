console.log("hello world")
let amount = 500;

if(amount>=500){
    console.log("the 500 rs notes are :" , Math.floor(amount/500));
    amount += amount % 500
}if(amount>=200){
    console.log("the 200 rs notes are :" , Math.floor(amount/200));
    amount += amount % 200
}if(amount>=100){
    console.log("the 100 rs notes are :" , Math.floor(amount/100));
    amount += amount % 100
}if(amount>=500){
    console.log("the 50 rs notes are :" , Math.floor(amount/50));
    amount += amount % 50
}if(amount>=500){
    console.log("the 20 rs notes are :" , Math.floor(amount/20));
    amount += amount % 20
}if(amount>=500){
    console.log("the 10 rs notes are :" , Math.floor(amount/10));
    amount += amount % 10
}