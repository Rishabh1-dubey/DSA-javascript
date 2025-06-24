
let prices =[4,5,7,3,8,5]
let Maxprice =0;
let min = prices[0]

for(let  i=0; i<prices.length; i++){
    if(prices[i]<min) min = prices[i]
    let profit = prices[i]-min;
    Maxprice = Math.max(Maxprice,profit)
}
console.log("The Best time Buy and Stock is ",Maxprice)

   
//  try to implement the whole in vs code 