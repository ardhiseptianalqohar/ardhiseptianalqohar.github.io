(function (window) {
  var johnGreeter = {};
  johnGreeter.name = "John";
  var greeting = "Good Bye ";
  johnGreeter.sayHi = function () {
    console.log(greeting + johnGreeter.name);
  }

  window.johnGreeter = johnGreeter;

})(window);



