// NOTE: Closures :-- closure is a function which returns fuhnction
// NOTE: lexical scoping :- inner functions has the access to outer functions
// NOTE: generally we have seen that the local variables exits only till the function execution.
// NOTE: reason is in javascript the functions maintain the closure. where the lexical functon maintain the reference to its lexical environments

var add = function(a) {
    return function(b) {
        //console.log("a+b =",a+b);
        return a + b;
    }
}
var test = add(10);
jQuery(".closure > .output").append(jQuery("<div>").html("Addition of two no is : " + test(20)))

// function init() {
//   var name = 'Mozilla'; // name is a local variable created by init
//   function displayName() { // displayName() is the inner function, a closure
//     alert(name); // use variable declared in the parent function
//   }
//   displayName();
// }
// init();

var warnUser = function(msg) {
    var calledCount = 0;
    return function() {
        calledCount++;
        alert(msg + '\nYou have been warned ' + calledCount + ' times.');
    };
};

// var warnForTamper = warnUser('You can not tamper with our HTML.');
// warnForTamper();
// warnForTamper();
