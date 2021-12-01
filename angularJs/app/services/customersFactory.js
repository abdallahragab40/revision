(function () {
  var customerFactory = function ($http) {
    var factory = {};
    factory.getCustomers = function () {
      return $http.get("/customers");
    };

    factory.getCustomer = function (customerId) {
      return $http.get("/customers/" + customerId);
    };

    customerFactory.$inject = ["$http"];

    return factory;
  };
  angular.module("customersApp").factory("customersFactory", customerFactory);
})();
