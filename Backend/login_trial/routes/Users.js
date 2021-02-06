const express = require("express")
const users = express.Router()
const cors = require('cors')
const jwt = require("jsonwebtoken")
const bycryt = require("bcrypt")
const { v4: uuidv4 } = require("uuid")

const User = require("../models/user.model")
users.use(cors())

process.env.SECRET_KEY = 'secret' 

users.post('/register',(req,res)=>{
    const usersData = {
        id: uuidv4(),
        firstName: req.body.firstName,
        lastName: req.body.lastName,
        email: req.body.email,
        role: "admin",
        password: req.body.password
    }

    User.findOne({
        where:{
            email: req.body.email
        }
    })
    .then(user=>{
        if(!user){
            bycryt.hash(req.body.password, 10, (err,hash)=>{
                usersData.password = hash
                User.create(usersData)
                .then(user=>{
                    res.status(200).json({status: user.email+ ' registered'})
                })
                .catch(err=>{
                    res.send('error: '+ err)
                })
            })
        }else{
            res.json({error: "User already exists"})
        }
    })
    .catch(err=>{
        res.send('error: '+ err)
    })
})

users.post('/login',(req,res)=>{
    User.findOne({
        where:{
            email: req.body.email
        }
    }).then(user=>{
        if(user){
            if(bycryt.compareSync(req.body.password,user.password)){
               let token = jwt.sign(user.dataValues, process.env.SECRET_KEY,{
                   expiresIn: 86400
               })
               res.status(200).send({accessToken: token,userId: user.id}) 
            }else{
                res.status(401).send({error:" Password is wrong"})
            }
        }else{
            res.status(404).send({error: "User does not exist"})
        }
    }).catch(err=>{
        res.send('error: '+ err)
    })
})

module.exports = users