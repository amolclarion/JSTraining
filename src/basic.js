// NOTE: Basic concepts

// NOTE: Creating and modifying objects
var testObj = {"firstName":"Amol","lastName":"Dongare","array":["test"],"adress":"Pune",10:"10"};

// NOTE: Dot notation
jQuery(".basic > .output").append(jQuery("<div>").html("First name is : "+testObj.firstName))

// NOTE: Bracket notation notation
jQuery(".basic > .output").append(jQuery("<div>").html("Integer value is : "+testObj[10]))

// NOTE: Immutable and mutable objects
// NOTE: Primitive data types are immutable and non primitive are mutable
// var testStr = 'amol';
// console.log(testStr.toUpperCase(),testStr);
// var userObj = {"name":"Amol"};
// var asd = userObj;
// asd.name = "No I am developer"
// console.log(asd.name, userObj.name);

// NOTE: JSON.parse and JSON.stringify
// var testString = [1, 2, 3];
// var referString = JSON.parse(JSON.stringify(testString));
// referString[0] = 0;
// console.log(testString,referString);

// NOTE: loops in javascript
for (var i = 0; i < Object.keys(testObj).length; i++) {
  jQuery(".basic > .output").append(jQuery("<div>").html("Value : "+testObj[Object.keys(testObj)[i]]))
}

for (variablename in testObj){
   jQuery(".basic > .output").append(jQuery("<div>").html("values are : "+testObj[variablename]))
}

var anArray = [9, 3, 5, 13, 2, 4, 11];
anArray.forEach(function(val,index){
  jQuery(".basic > .output").append(jQuery("<div>").html("foreach values are : "+val))
})
