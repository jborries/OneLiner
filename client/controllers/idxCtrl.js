App.controller('IndexController', function($scope, StoreFactory, moment){

  $scope.recentCustomers = [];

  StoreFactory.getRecentCustomers()
    .then( function(data){
      $scope.recentCustomers = data.map( function(customer){
        customer.created_at = new Date(customer.created_at);
        return customer;
      })
    })
})
