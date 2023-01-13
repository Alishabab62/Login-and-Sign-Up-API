var express = require('express');
const User = require('../modals/userModal');
var router = express.Router();




router.post('/signup', async (req,res)=>{
  try {
    const receivedData = req.body

    console.log(receivedData)
    const user= await User.findOne({mobileNumber: receivedData.mobileNumber})
    if (!user) {
          const data= new User(receivedData)
      await data.save()
      res.status(200).json(data)
    }
    else{
      res.json('User already Registered!')
    }

 
  } catch (error) {
    res.json(error)
  }
} )



router.post('/login', async(req,res)=>{
  var success=false
  const {mobileNumber}= req.body
  try {
    const user= await User.findOne({mobileNumber})
    if (!user) {
      res.status(200).json({message:'User not exists!'})
    }
    else{
      res.status(200).json({message:'User exists!'})

    }
  } catch (error) {
    res.json(error)
  }
})






module.exports = router;
