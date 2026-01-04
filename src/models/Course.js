const {DataTypes}=require("sequelize");
const sequelize=require("../config/databbase");

const Course=sequelize.define("Course",{
    id:{type:DataTypes.INTEGER, autoIncrement:true, primaryKey:true},
    code:{type:DataTypes.STRING, allowNull:false},
    name:{type:DataTypes.STRING, allowNull:false},
    year:{type:DataTypes.INTEGER, allowNull:false},
    startDate:{type:DataTypes.DATEONLY, allowNull:false},
    endDate:{type:DataTypes.DATEONLY, allowNull:false},
    teacherId:{type:DataTypes.INTEGER, allowNull:false}
},{
    timestamps:true
});
module.exports=Course;