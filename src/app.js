// NOTE: Construction pattern(function)
// NOTE: Javascript --> Es5 --> Es6(need the transpilers for compiling on the browsers)
// NOTE: every object refers to the global object
// NOTE: when we ask for any prototype property then it check prototype chain and try to find and if doesnt find then returns undefined

var ClassA = function() {
    this.a = 10;
}
var ClassB = function() {
    this.b = 10;
}

var classA = new ClassA();
ClassA.prototype.changeA = function(a) {
    jQuery(".inheritance > .output").append(jQuery("<div>").html("new value of a = " + a))
}
classA.changeA(20);

var inheritsFrom = function(child, parent) {
    child.prototype = Object.create(parent.prototype);
};

inheritsFrom(ClassB, ClassA);
var classB = new ClassB();
jQuery(".inheritance > .output").append(jQuery("<div>").html("value of b =" + classB.b))
classB.changeA(10);
