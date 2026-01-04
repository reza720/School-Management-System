const {DataTypes}=require("sequelize");
const sequelize=require("../config/databbase");

const Exam=sequelize.define("Exam",{
    id:{type:DataTypes.INTEGER,autoIncrement:true, primaryKey:true},
    courseId:{type:DataTypes.INTEGER, allowNull:false},
    totalMarks:{type:DataTypes.INTEGER, allowNull:false,validate:{
        min:0,
        max:100,
    }},
    date:{type:DataTypes.DATEONLY, allowNull:false},
},{
    timestamps:true
});
module.exports=Exam;