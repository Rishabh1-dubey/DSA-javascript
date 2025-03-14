var pr = prompt("Kaun sa number lenge app");
if (pr === null) {
  console.log("Canelled");
} else {
  var ans = Number(pr);

  if (isNaN(ans)) {
    console.log("Please selcet a number");
  } else {
    if (ans > 0) {
      var sum = 0;
      var copy = ans;

      while (ans > 0) {
        var rem = ans % 10;
        var fact = 1;
        for (let i = 1; i <= rem; i++) {
          fact = fact * i;
        }

        sum = sum + fact;
        n = Math.floor(ans / 10);
      }

      if (copy === sum) {
        console.log("no is strong");
      } else {
        console.log("not strong");
      }
    } else {
      console.log("Number should be greater then zero and +ve");
    }
  }
}
