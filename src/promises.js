// NOTE: promises is used in asynchronous computation
// NOTE: where object promise may be available now or in future or never

var myFirstPromise = new Promise(function(resolve, reject){
    setTimeout(function(){
        resolve("Success!");
        //reject("Success!");
    }, 1000);
});

myFirstPromise.then(function(successMessage){
    jQuery(".promises > .output").append(jQuery("<div>").html("Yes ! I got the values : " + successMessage))
}).catch(promiseError(this));

function promiseError(err) {
  jQuery(".promises > .output").append(jQuery("<div style='color:red'>").html("Something happened wrong : " + err))
}
