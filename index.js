const RED = "RED";
const BLUE = "BLUE";
const YELLOW = "YELLOW";
const GREEN = "GREEN";

var simon = {
 sendColor: function(color){
  console.log("NEW COLOR: " + color); 
 },
 sequence: [],
 colors: [RED, BLUE, YELLOW, GREEN],
 nextSequence: function(){
  var nextColor =simon.colors[Math.floor( Math.random() * simon.colors.length )];
  console.log("the random color is ", nextColor);
 }
};

$(document).ready(function(){
 $("#red").click(function(){ simon.sendColor(RED)});
 $("#blue").click(function(){ simon.sendColor(BLUE)});
 $("#yellow").click(function(){ simon.sendColor(YELLOW)});
 $("#green").click(function(){ simon.sendColor(GREEN)}); 
})

/* 
1. Red
2. Red, Blue
3. Red, Blue, Yellow
*/
