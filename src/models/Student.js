const {DataTypes}=require("sequelize");
const sequelize=require("../config/databbase");

const Student=sequelize.define("Student",{
    id:{type:DataTypes.INTEGER, autoIncrement:true, primaryKey:true},
    fullName:{type:DataTypes.STRING, allowNull:false, validate:{
        is:/^[A-Za-z ]+$/,
        notEmpty:true,
    }},
    email:{type:DataTypes.STRING, allowNull:false, unique:true, validate:{
        isEmail:true,
        notEmpty:true,
    }},
    phone:{type:DataTypes.STRING, allowNull:false,validate:{
        is:/^\d{10}$/ ,
    }},
},{
    timestamps:true
});
module.exports=Student;