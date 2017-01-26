var Customer = require('../models/customer');

module.exports = {
  index: function(req, res){
    Customer.find({}, function(err, customers){
    	if (err){
    		res.json(err);
    	}
    	else {
    		res.json(customers);
    	}
    });
  },

  show: function(req, res){
      console.log("Server Side Show Controller Loaded")
      Customer.findById(req.params.id, function(err, customer){
          if(err){ return res.json(err); }
          else {
              res.json(customer);
          }
      });
},

  create: function(req, res){
    Customer.create(req.body, function(err){
      if (err) { return res.json(err); }
      return res.json(true);
    });
  },


  update: function(req, res){
      //borrow first line from show function
      Customer.findOne({ _id:req.params.id }, function(err, customer){
          console.log("Server Side Controller Receiving DATA")
          customer.first_name = req.body.first_name,
          customer.last_name = req.body.last_name,
          customer.birthday= req.body.birthday
          customer.save(function(err){
              console.log("Server Side Controller Sending Back");
              res.json(Customer);
          })

      })
  },



//this.update = function(req,res){
//		Friends.update({ id: req.params.id }, req.body, function(err, result){
//			if(err){
//				console.log(err);
//				res.json({errors: err});
//				return;
//			};
//			res.json({data: result});
//		});
//};

  delete: function(req, res){
    // Remove all orders w/ that user
//    Order.removeOrdersByCustomerId(req.params.id, function(err){
 //     if (err) { return res.json(err); }
      Customer.remove({ _id: req.params.id }, function(err){
        if (err) { return res.json(err); }
        return res.json(true);
      });
//    });
  }
  }
