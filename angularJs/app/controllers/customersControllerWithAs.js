function CustomersController() {
  this.sortBy = "name";
  this.reverse = false;

  this.customers = [
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
  this.doSort = function (propName) {
    this.sortBy = propName;
    this.reverse = !this.reverse;
  };
}
