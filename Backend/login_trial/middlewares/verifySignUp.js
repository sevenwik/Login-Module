const db = require("../database/db")
const User = db.user;

checkDuplicateEmail = (req, res, next) =>{
    User.findOne({
        where: {
            email: req.body.email
        }
    }).then(user=>{
        if(user){
            res.status(400).send({
                message: "Failed! Email already in use!" 
            });
            return;
        }
        next();
    }).catch(err=>{
        res.send({message: err.message})
    });
}

const verifySignUp = {
    checkDuplicateEmail: checkDuplicateEmail
};

module.exports = verifySignUp;