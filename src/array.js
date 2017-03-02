// NOTE: convenient methods for arrayas typeof not work with arrayas

var arr = [1, 2, 3];
var arrJson = {"name":"amol"};

jQuery(".array > .output").append(jQuery("<div>").html("type is "+typeof(arr)));

// NOTE: Array.isArray()
jQuery(".array > .output").append(jQuery("<div>").html("type is "+Array.isArray(arr)));

// NOTE: foreach
var anArray = [1, 2, 3];
anArray.forEach(function(x){
  jQuery(".array > .output").append(jQuery("<div>").html("my value is "+x));
})

// NOTE: map--> returns new array with some callback operations
var mapArr = anArray.map(function(x){
  return x + 1;
})
mapArr.forEach(function(x){
    jQuery(".array > .output").append(jQuery("<div>").html("after map values are "+x));
})
var filtered = mapArr.filter(function(x){
  if(x % 2 == 0) {
        return true;
    } else {
        return false;
    }
})
filtered.forEach(function(x){
  jQuery(".array > .output").append(jQuery("<div>").html("even no are "+x));
})

// NOTE: every() if all satisfy condition some() if atleast one condition satisfy
console.log(anArray.every(function(x){
    return x % 10 == 0;
}));

// NOTE: reduce() find sum,max,maintain
var anArray = [9, 3, 5, 13, 2, 4, 11];
console.log(anArray.reduce(function(elem, prev){
    // return elem > prev ? elem : prev;
    return elem < prev ? elem : prev;
    //return elem+prev;
}));
