App.controller('CustomerController', function($scope, StoreFactory, $route, $routeParams, $location){
  $scope.customers = [];
  $scope.customers = {};
  fetchCustomers();


//show all
  function fetchCustomers(){
    StoreFactory.getCustomers()
    .then( function(data){
      $scope.customers = data;

    });
  }
//show individual friend
  $scope.showCustomer = function(){
      StoreFactory.getCustomer($routeParams.id)
      .then( function(data){
          $scope.customer = data;
          $scope.customer.birthdate = new Date(data.birthdate)
        //  console.log("showCustomer controller data returned")
        //  $scope.customer.$apply()
        //  $scope.$apply()
      });
  }

  $scope.updateCustomer = function(){

      StoreFactory.updateCustomer($routeParams.id, $scope.customer, function(data){

          $location.url('/customers/' + $routeParams.id)
        
      })
  }

//  $scope.updateCustomer = ($route.current.params.id, function(retCustomer){
//  		$scope.customer = retCustomer;
//        console.log("Client Side Customer Controller is Sending", $scope.customer)
////  		var bday = new Date(retCustomer.birthday);
// // 		$scope.customer.birthday = bday;
//  	})
//
//  	this.update = function(){
//  		StoreFactory.updateCustomer($scope.customer, function(returnCustomer){
//  			$scope.customer = returnCustomer;
//            console.log*("Client Side Customer Controller is Retrieving")
//  			$location.url('/');
//  		})
//  }

//Update individual friend
//$scope.updateCustomer = function(){
//    StoreFactory.updateCustomer($routeParams.id, $scope.newCustomer)
//    $location.url('/')
//    console.log("Client Side Customer Controller is returning back to main page")
//})


//create new friend
  $scope.createCustomer = function(){
    StoreFactory.createCustomer($scope.newCustomer)
    .then( function(){
      $scope.newCustomer = {};
    })
    .then( fetchCustomers )
  }


//delete Customer
  $scope.deleteCustomer = function(id){
    StoreFactory.deleteCustomer(id)
    .then( fetchCustomers )
  }
})
