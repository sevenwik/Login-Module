const { verifySignUp } = require("../middlewares");
const controller = require("../controllers/auth.controller");
var express =require("express");

module.exports = function(app){
    app.use(function(req, res, next){
        res.header(
            "Access-Control-Allow-Headers",
            "x-access-token, Origin, Content-Type, Accept" 
        );
        next();
    })

    app.post(
        "/api/auth/sign-up",
        [
            verifySignUp.checkDuplicateEmail
        ],
        controller.signUp
    );

    app.post("/api/auth/sign-in",controller.signIn);
};