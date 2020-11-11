const express = require('express');
const router = express.Router();
const Company = require('../../models/Company');

router.post('/csignup',(req, res)=>{
  
const{first_name, last_name,business_name,email,password} = req.body;

if(!first_name || !last_name || !business_name || !email || !password){

  res.status(422).json({error:"Please Provide All feilds"});

}
    const company = new Company({
    first_name,
    last_name,
    business_name,
    email,
    password
    })

    company.save().then(company=>{
      res.json({message:`${company.first_name} Regiter sucessfully!😁`})
    }).catch((error)=>{
        console.log(error);
    })


})

/**company signin route */




module.exports = router;