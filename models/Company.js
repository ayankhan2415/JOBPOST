const mongoose = require('mongoose');

const companySchema = new mongoose.Schema({


first_name:{
  type:String,
  required: true
},
last_name:{
  type:String,
  required: true
},
business_name:{
  type: String,
  required: true
},
email: {
  type: String,
  required: true,
  unique: true
 },
password:{
  type: String,
  required: true
},
avatar:{
 type: String
},
date: {
  type: Date,
  default: Date.now
}


})

module.exports = Company = mongoose.model('company', companySchema);