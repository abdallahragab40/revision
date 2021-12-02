(function () {
  var app = angular.module("directivesModule");

  app.directive("isolateScopeWithObject", function () {
    return {
      scope: { datasource: "=" }, // change in both sides
      template:
        "Name: {{ datasource.name }} Street: {{datasource.street}} " +
        "<br /> <button ng-click=\"datasource.name='Fred'\">Change</button>",
    };
  });
})();
