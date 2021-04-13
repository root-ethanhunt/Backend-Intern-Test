const express = require('express')
const User = require('../models/user')
const auth = require('../middleware/auth')

const router = new express.Router()


router.post('/api/user/signup', async (req, res) => {
    const user = new User(req.body)

    try {
        await user.save()
       const token = await user.generateAuthToken()
        res.status(201).send({user,token})


    } catch (e) {
        res.status(400).send(e)

    }

})
    
router.post('/api/user/login',async(req,res)=>{
    try{
      const user = await User.findByCredentials(req.body.email,req.body.password)
      const token = await user.generateAuthToken()
      res.send({user,token})
    } catch(e){
         res.status(400).send()
    }
})

router.post('/api/users/logout',auth,async(req,res)=>{
    try{
       req.user.tokens = req.user.tokens.filter((token)=>{
           return token.token !==req.token
       })
       await req.user.save()

       res.send() 
    } catch(e){
        res.status(500).send()
    }
})

router.get('/api/user/detail', auth ,async (req, res) => {

    // res.send(req.user)

    res.send({
        name:req.user.name,
        email:req.user.email
      })

})


module.exports = router