const {Teacher}=require("../models");

class TeacherRepo{
    async createTeacher(data){
        return await Teacher.create(data);
    }
    async readAllTeachers(){
        return await Teacher.findAll();
    }
    async readTeacherById(id){
        const target=await Teacher.findByPk(id);
        if(!target)return null;
        return target;
    }
    async updateTeacher(id,data){
        const target=await Teacher.findByPk(id);
        if(!target)return null;
        await target.update(data);
        return target;      
    }
    async deleteTeacher(id){
        const target=await Teacher.findByPk(id);
        if(!target)return null;
        await target.destroy();
        return true;
    }
}
module.exports=new TeacherRepo();