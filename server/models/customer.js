var mongoose = require('mongoose'),
    validate = require('mongoose-validator'),
    Schema = mongoose.Schema,
    ObjectId = Schema.ObjectId;

    var first_nameValidator = [
      validate({
        validator: 'isLength',
        arguments: [3, 50],
        message: 'Name should be between {ARGS[0]} and {ARGS[1]} characters'
      })
//      validate({
//        validator: 'isAlphanumeric',
//        passIfEmpty: true,
//        message: 'Name should contain alpha-numeric characters only'
//      })
    ];

    var last_nameValidator = [
      validate({
        validator: 'isLength',
        arguments: [3, 50],
        message: 'Name should be between {ARGS[0]} and {ARGS[1]} characters'
      })
//      validate({
//        validator: 'isAlphanumeric',
//        passIfEmpty: true,
//        message: 'Name should contain alpha-numeric characters only'
//      })
    ];

var CustomerSchema = new Schema({
  first_name: {type: String, validate: first_nameValidator},
  last_name: {type: String, validate: last_nameValidator},
  description: {type: String},
  birthday: { type: Date },
  created_at: { type: Date, default: Date.now() }
});

module.exports = mongoose.model("Customer", CustomerSchema);
