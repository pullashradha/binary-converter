$(document).ready(function() {
  $("form#decimal").submit(function(event) {
    event.preventDefault();

    var binaryInput = $("input#binary").val();
    var binarySplit = binaryInput.split("");
    var result = binarySplit.reverse();

    result.forEach(function(binary) {
      var exponentPower = ;
      var exponent = 2^(exponentPower);
      var binaryInteger = parseInt(binaryInput);
      result = binaryInteger * exponent;
    });
    alert(result);
  });
});
