(function () {
  var app = angular.module("directivesModule");

  app.directive("isolateScopeWithString", function () {
    return {
      scope: { name: "@" }, // change in one side only
      template: "Name: {{ name }}",
    };
  });
})();
