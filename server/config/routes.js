var Customer = require('../controllers/customers');

module.exports = function(app){
  app.get('/', function(req, res){
    res.sendFile(__dirname + '../../client/index.html');
  });


  // CUSTOMERS

  app.get('/customers', Customer.index);
  app.put('/customers/:id', Customer.update);
  app.get('/customers/:id', Customer.show);

  app.post('/customers', Customer.create);
  app.delete('/customers/:id', Customer.delete);
}
