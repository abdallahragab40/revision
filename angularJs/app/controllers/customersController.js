var CustomersController = function ($scope) {
  $scope.sortBy = "name";
  $scope.reverse = false;

  $scope.customers = [
    {
      name: "Ali",
      joined: "2000-12-02",
      city: "cairo",
      orderTotal: 9.9965,
    },
    {
      name: "Hossam",
      joined: "2002-12-02",
      city: "giza",
      orderTotal: 2.4565,
    },
  ];
  $scope.doSort = function (propName) {
    $scope.sortBy = propName;
    $scope.reverse = !$scope.reverse;
  };
};

// Option 1
// app.controller("CustomersController", CustomersController);

// Option 2
// angular
//   .module(customersApp)
//   .controller("CustomersController", CustomersController);

// Option 3
(function () {
  CustomersController.$inject = ["$scope"];
  angular
    .module("customersApp")
    .controller("CustomersController", CustomersController);
})();
