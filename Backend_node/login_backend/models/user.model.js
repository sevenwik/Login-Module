
module.exports =(sequelize,Sequelize) =>{
    const User = sequelize.define(
    'Users',
    {
        id:{
            type: Sequelize.UUIDV4,
            primaryKey: true
        },
        firstName:{
            type: Sequelize.STRING
        },
        lastName:{
            type: Sequelize.STRING
        },
        email:{
            type:Sequelize.STRING
        },
        role:{
            type: Sequelize.STRING
        },
        password:{
            type:Sequelize.STRING,
            defaultValue: "test"
        }

    },
    {
        timestamps: false
    })
    return User;
}