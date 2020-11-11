const mongoose = require('mongoose');

const PostSchema = new mongoose.Schema({


  job_title:{
    
    type: String,
    require: true
  },
  job_description:{
    type: String,
    require: true
  },
  salary:{
    type: String,
    require: true
  },
  location:{
    type: String,
    require: true
  },
  country:{
    type: String,
    require: true
  }


})

module.exports = Post = mongoose.model('post', PostSchema);
