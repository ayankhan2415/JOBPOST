const express = require('express');
const router = express.Router();

const Post = require('../../models/jobPost')


/**Comapny job posting route */

router.post('/cpost', (req, res)=>{

const {job_title, job_description, salary, location, country} = req.body;
const post = new Post({
  job_title, 
  job_description,
   salary,
  location,
  country
})
post.save().then(post=>{
  res.json({message:`${post.job_title} is sucessfully posted😀`})
}).catch((error)=>{
  console.log(error)
})


})
module.exports = router;
