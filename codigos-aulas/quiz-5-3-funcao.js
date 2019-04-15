/*
 * Programming Quiz: Build A Triangle (5-3)
 */

// creates a line of * for a given length
function makeLine(length) {
  var line = "";
  for (var j = 1; j <= length; j++) {
      line += "* ";
  }
  return line + "\n";
}

// creates a triangle for a given size
function buildTriangle(size){
  var triangle = "";
  for(var i = 1; i <= size; i++){
      triangle+= makeLine(i);
  }
  return triangle;
}

console.log(buildTriangle(10));