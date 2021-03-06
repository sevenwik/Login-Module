const config = require("../configFile/db.config")

const Sequelize = require('sequelize')
const sequelize = new Sequelize(
    config.DB,
    config.USER,
    config.PASSWORD,
    {
        host: config.HOST,
        dialect: config.dialect,
        operatorAliases: false,

        pool:{
                max: config.pool.max,
                min: config.pool.min,
                acquire: config.pool.acquire,
                idle: config.pool.idle
            }
    })

const db = {}

db.sequelize = sequelize
db.Sequelize = Sequelize

db.user = require('../models/user.model')(sequelize, Sequelize);

module.exports = db
