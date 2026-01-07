const {DataTypes}=require("sequelize");
const sequelize=require("../config/database");

const Attendance=sequelize.define("Attendance",{
    id:{type:DataTypes.INTEGER, autoIncrement:true, primaryKey:true},
    studentId:{type:DataTypes.INTEGER, allowNull:false},
    courseId:{type:DataTypes.INTEGER, allowNull:false},
    date:{type:DataTypes.DATEONLY, allowNull:false},
    status:{type:DataTypes.ENUM('Present','Absent','Late'), allowNull:false},
},{
    timestamps:true
});
module.exports=Attendance;