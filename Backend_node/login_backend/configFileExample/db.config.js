module.exports = {
    HOST: "DB_Host",
    USER: "DB_username",
    PASSWORD:"DB_pwd",
    DB: "DB_name",
    dialect: "mysql",
    pool:{
        max: 5,
        min: 0,
        acquire: 3000,
        idle: 10000
    }
}