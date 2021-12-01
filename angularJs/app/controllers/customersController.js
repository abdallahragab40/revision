(function () {
  var CustomersController = function (
    $scope,
    $log,
    customersFactory,
    appSettings
  ) {
    $scope.sortBy = "name";
    $scope.reverse = false;
    $scope.customers = [];
    $scope.appSettings = appSettings;

    $scope.doSort = function (propName) {
      $scope.sortBy = propName;
      $scope.reverse = !$scope.reverse;
    };

    function init() {
      customersFactory
        .getCustomers()
        .success(function (customers) {
          $scope.customers = customers;
        })
        .error(function (data, status, headers, config) {
          $log.log(data.error + " " + status);
        });
    }
    init();
  };

  CustomersController.$inject = [
    "$scope",
    "$log",
    "customersFactory",
    "appSettings",
  ];

  angular
    .module("customersApp")
    .controller("CustomersController", CustomersController);
})();
