(function () {
  var linkDemo = function () {
    return {
      restrict: "A",
      link: function (scope, element, attrsq) {
        element.on("click", function () {
          element.html("You have clicked me!");
        });
        element.on("mouseenter", function () {
          element.css("background-color", "yellow");
        });
        element.on("mouseleave", function () {
          element.css("background-color", "white");
        });
      },
    };
  };

  angular.module("directivesModule").directive("linkDemo", linkDemo);
})();
