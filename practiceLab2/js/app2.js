(function (window) {
  var johnGreeter = {};
  johnGreeter.name = "Chand";
  var greeting = "Hi ";
  johnGreeter.sayHi = function () {
    console.log(greeting + johnGreeter.name);
  }

  window.johnGreeter = johnGreeter;

})(window);

