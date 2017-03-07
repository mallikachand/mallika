(function (window) {
  var yaakovGreeter = {};
  yaakovGreeter.name = "Mallika";
  var greeting = "Hello ";
  yaakovGreeter.sayHello = function () {
    console.log(greeting + yaakovGreeter.name);
  }

  window.yaakovGreeter = yaakovGreeter;

})(window);
