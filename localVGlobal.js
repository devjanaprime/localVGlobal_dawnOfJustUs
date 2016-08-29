// what happens if a local variable and a global one have the same name?

// our global
var ourVariable = 3;
console.log( 'global var init:', ourVariable );

var ourFunction = function(){
  console.log( 'in ourFunction' );
  console.log( 'global var:', ourVariable );
  // local
  var ourVariable = 9;
  // what is this?
  console.log( 'after setting local:', ourVariable );
}; // end ourFunction

var ourOtherFunction = function(){
  console.log( 'in ourOtherFunction, global:', ourVariable );
}; // end ourOtherFunction

var ourOtherOtherFunction = function( ourVariable ){
  console.log( 'in ourOtherOtherFunction, param:', ourVariable );
}; // end ourOtherOtherFunction

function ourOtherOtherOtherFunction(){
  console.log( 'in ourOtherOtherOtherFunction, global:', ourVariable );
  var ourVariable = 81;
  console.log( 'local:', ourVariable );
}; // end ourOtherOtherOtherFunction

ourFunction();
ourOtherFunction();
ourOtherOtherFunction();
ourOtherOtherOtherFunction();
console.log( 'outside of the functions:', ourVariable );
