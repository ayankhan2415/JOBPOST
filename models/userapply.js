
const mongoose = require('mongoose');


const UserapplySchema = new mongoose.Schema({

  title:{
    type: String,
    required: true
 },
 resume: {
  type: String,
  required: true
 },
 skills: {
   type: String,
   required: true
 }



})
module.exports = Uapply = mongoose.model('uapply', UserapplySchema);