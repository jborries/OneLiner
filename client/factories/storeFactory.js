App.factory('StoreFactory', function($http){
  var factory = {};


  factory.getCustomers = function(){
    return $http.get('/customers' )
      .then(function(res){ return res.data; })
  }

  factory.getCustomer = function(id){
      console.log("Customer Factory is loading")
      return $http.get(`/customers/${id}`)
      .then(function(res) {
          return res.data;
          console.log("Customer Factory is returning")
      })
  }

 factory.updateCustomer = function(id, test, callback){
        console.log("Client Side Factory Sending Data");
        console.log(id, test)
     $http.put('/customers/' + id, test)
     .then(function(returned_data){
         console.log("Client Side Returned Data");
         if(typeof(callback) == 'function'){
             callback(returned_data.data);
         }
     });
 };

  factory.getRecentCustomers = function(){
    return $http.get('/customers/recent')
      .then(function(res){ return res.data; })
  }

  factory.createCustomer = function(newCustomer){
    return $http.post('/customers', newCustomer)
  }

  factory.deleteCustomer = function(id){
    return $http.delete(`/customers/${id}`)
  }

  return factory;
})
