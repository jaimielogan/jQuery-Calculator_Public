// When clicking on a number in the calculator, append it's text value in the #screen (which is the calc screen)
var $screen = $("#screen");

$("span").on("click", function(){
  var value = $(this).text();
  if(value !== "="){
    $screen.append(value);
    console.log($("#screen").text());
  }

});

//When the C (clear) is selected, clear the screen
$("#clear").on("click", function(){
  $screen.empty();
});

// console.log($("#screen"));

//
$("#equals").on("click", function(){
  var screenInput = $screen.text().replace('x', "*").replace('÷', '/');

  for (var i=0; i<screenInput.length-1; i++){
    if (screenInput[i] === "+" || "-" || "*" || "/" && screenInput[i] === screenInput[i+1]){
      $screen.empty().text("Error");
    }
  }

  if (screenInput.charAt(screenInput.length -1) === "0" && screenInput.charAt(screenInput.length -2) === "/") {
    $screen.empty().text("Error");
  }
  else {
    var evaluation = eval(screenInput);
    $screen.empty().append(evaluation);
  }
});
