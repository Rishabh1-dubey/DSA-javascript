var pr = prompt("Kaun sa number lenge app");
if (pr === null) {
  console.log("Canelled");
} else  {


  var ans = Number(pr);


  if (isNaN(ans)) {
    console.log("Please selcet a number");
  } 

  else  {
    if (ans > 0) {
      var isprimehai = true
      for (var i = 2; i <= Math.floor(ans/2); i++) {
        if(ans%i===0){
          isprimehai= false
          break;
        }
      }
      console.log(isprimehai)  
    }

    else{
      console.log("Number should be greater then zero and +ve")
    }
  }

  
}
