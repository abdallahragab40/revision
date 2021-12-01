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

    $scope.deleteCustomer = function (customerId) {
      customersFactory.deleteCustomer(customerId).then(
        function (response) {
          var status = response.data;
          if (status) {
            for (var i = 0, len = $scope.customers.length; i < len; i++) {
              if ($scope.customers[i].id === customerId) {
                $scope.customers.splice(i, 1);
                break;
              }
            }
          } else {
            $window.alert("Unable to delete customer");
          }
        },
        function (data, status, headers, config) {
          $log.log(data.error + " " + status);
        }
      );
    };
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
