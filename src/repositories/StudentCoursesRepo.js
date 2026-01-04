const {Course, Student, StudentCourses}=require("../models");

class StudentCoursesRepo{
    async createStudentCourses(data){
        return await StudentCourses.create(data);
    }
    async readAllStudentCourses(){
        return await StudentCourses.findAll({include:[
            {model:Course, attributes:["id","code","name","year"]},
            {model:Student, attributes:["id","fullName","email"]}
        ]});
    }
    async readStudentCoursesById(id){
        const target=await StudentCourses.findByPk(id,{include:[
            {model:Course, attributes:["id","code","name","year"]},
            {model:Student, attributes:["id","fullName","email"]}
        ]});
        if(!target)return null;
        return target;
    }
    async updateStudentCourses(id,data){
        const target=await StudentCourses.findByPk(id);
        if(!target)return null;
        await target.update(data);
        return target;      
    }
    async deleteStudentCourses(id){
        const target=await StudentCourses.findByPk(id);
        if(!target)return null;
        await target.destroy();
        return true;
    }
}
module.exports=new StudentCoursesRepo();