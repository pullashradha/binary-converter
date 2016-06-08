$(document).ready(function() {
  $("form#decimal").submit(function(event) {
    event.preventDefault();

    var binaryInput = $("input#binary").val();
    var binarySplit = binaryInput.split("");
    var binaryNumbers = binarySplit.reverse();
    var runningTotal = 0;

    for (i = 0; i <= (binaryNumbers.length - 1); i++) {
      var exponent = Math.pow(2,i);
      // alert(exponent);
      var binaryInteger = parseInt(binaryNumbers[i]);
      // alert(binaryInteger);
      runningTotal = runningTotal + (binaryInteger * exponent);
    };
    alert(runningTotal);
  });
});

    // binaryNumbers.forEach(function(binary) {
    //   alert(binary);
    //   var exponentPower = binaryNumbers.indexOf(binary);
    //   var exponent = Math.pow(2,exponentPower);
    //   var binaryInteger = parseInt(binary);
    //   var runningTotal = runningTotal + (binaryInteger * exponent);
    //   alert(runningTotal);
    // });

//   });
// });
