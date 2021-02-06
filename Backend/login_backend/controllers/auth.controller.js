const db = require("../database/db");
const config = require("../config/auth.config");
const User = db.user;
const Sequelize = require('sequelize')

var jwt = require("jsonwebtoken");
var bcrypt = require("bcrypt");
const { v4: uuidv4 } = require("uuid")


exports.signUp = (req,res) =>{
    User.create({
        id: uuidv4(),
        firstName: req.body.firstName,
        lastName: req.body.lastName,
        email: req.body.email,
        role: req.body.role,
        password: bcrypt.hashSync(req.body.password, 8)
    }).then(user =>{
            res.status(200).send({
                message: "User registered successfully!"
            })
    }).catch(err=>{
        res.status(500).send({message: err.message})
    })
}

exports.signIn = (req,res) =>{
    User.findOne({
        where: Sequelize.where(Sequelize.fn('BINARY',Sequelize.col('email')),req.body.email)
    }).then(user=>{
        if(!user)
        {
            return res.status(404).send({message:"User not found!"})
        }

        var passwordIsValid = bcrypt.compareSync(req.body.password, user.password);

        if(!passwordIsValid){
            return res.status(401).send({
                accessToken: null,
                message: "Invalid Password"
            });
        }

        var token = jwt.sign({id: user.id}, config.secret, {
            expiresIn: 86400
        });
        res.status(200).send({
            id: user.id,
            email: user.email,
            role: user.role,
            accessToken: token
        })
    }).catch(err=>{
        res.status(500).send({message: err.message})
    })
}