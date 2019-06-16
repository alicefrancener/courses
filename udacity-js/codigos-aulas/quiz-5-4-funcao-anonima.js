/*
 * Programming Quiz: Laugh (5-4)
 * Escreva uma expressão anônima de função que armazena uma 
 * função em uma variável de nome "laugh" e retorna como 
 * saída o número de "ha"s que você passa como um argumento.
 */

var laugh = function (size){
  var laughSize = "";
  for(var i = 1; i<=size; i++){
      laughSize += "ha";
  }
  return laughSize + "!";
};

console.log(laugh(10));
