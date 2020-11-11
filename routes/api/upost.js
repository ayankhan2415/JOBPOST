const express = require('express');
const router = express.Router();
const Uapply = require('../../models/userapply');


router.post('/uapply', (req, res)=>{
  const {title, resume, skills} =  req.body;

  const uapply =  new Uapply({

    title, 
    resume,
    skills
  })

uapply.save().then((uapply)=>{
res.json({message:`you are sucessfully applied 😀 for ${uapply.title}`});
})

})

module.exports = router;