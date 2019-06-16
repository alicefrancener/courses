
/*
 * Programming Quiz: Inline Functions (5-6)
 * Chame a função emotions() para que ela imprima a 
 * saída "I am happy, haha!", mas, em vez de passar a 
 * função laugh() como um argumento, passa uma expressão 
 * de função inline.
 */

function emotions(myString, myFunc) {
  console.log("I am " + myString + ", " + myFunc(2));
}

emotions("happy", function laugh(size){
  var laughSize = "";
  for(var i = 1; i<=size; i++){
      laughSize += "ha";
  }
  return laughSize + "!";
});