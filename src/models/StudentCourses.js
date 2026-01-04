const {DataTypes}=require("sequelize");
const sequelize=require("../config/databbase");

const StudentCourses=sequelize.define("Student_Courses",{
    id:{type:DataTypes.INTEGER, autoIncrement:true, primaryKey:true},
    studentId:{type:DataTypes.INTEGER, allowNull:false},
    courseId:{type:DataTypes.INTEGER, allowNull:false}
},{
    timestamps:true
});
module.exports=StudentCourses;