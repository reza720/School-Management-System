const {Teacher, Course}=require("../models");

class CourseRepo{
    async createCourse(data){
        return await Course.create(data);
    }
    async readAllCourses(){
        return await Course.findAll({include:[
            {model:Teacher, attributes:["id","fullName","email"]}
        ]});
    }
    async readCourseById(id){
        const target=await Course.findByPk(id,{include:[
            {model:Teacher, attributes:["id","fullName","email"]}
        ]});
        if(!target)return null;
        return target;
    }
    async updateCourse(id,data){
        const target=await Course.findByPk(id);
        if(!target)return null;
        await target.update(data);
        return target;      
    }
    async deleteCourse(id){
        const target=await Course.findByPk(id);
        if(!target)return null;
        await target.destroy();
        return true;
    }
}
module.exports=new CourseRepo();