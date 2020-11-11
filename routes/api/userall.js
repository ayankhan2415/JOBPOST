const express = require('express');
const router = express.Router();
const User = require('../../models/User');

router.post('/usignup',(req, res)=>{
const {first_name, last_name,email,password} = req.body;

  const user = new User({
    first_name, 
    last_name, 
    email, 
    password
  })
  user.save().then((user)=>{
    res.json({message:`${user.first_name} sucessfully rejister😀`});
  })

})

/**User sign in */




module.exports = router;