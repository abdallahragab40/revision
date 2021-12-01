(function () {
  angular.module("customersApp").directive("helloWorld", function () {
    return {
      restrict: "E",
      template: "<h1>Hello World</h1>",
    };
  });
})();
