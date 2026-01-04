const {Sequelize}=require("sequelize");

const sequelize=new Sequelize(
    "School_Management_System",
    "root",
    "root",
    {
        host:"localhost",
        dialect:"mysql",
        logging:false
    }
);
module.exports=sequelize;