// NOTE: callback is a function to be executed after another function
// NOTE: javascript is a event driven language so if one function takes long time then it starts executing another

function One(a,b,callback) {
  setTimeout(function () {
    jQuery(".callback > .output").append(jQuery("<div>").html("Yes ! I am Winner : "))
    callback && callback();
    // if (callback && typeof(callback) === "function") {
    //     callback();
    // }
  }, 2000);
}

function Two() {
  jQuery(".callback > .output").append(jQuery("<div style='color:red'>").html("Oh No! I am runner UP : "))
}

One(10,10,function (res) {
  Two();
})

// NOTE: callback optional
//One(20,20);
