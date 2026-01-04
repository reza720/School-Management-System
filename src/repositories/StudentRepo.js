const {Student}=require("../models");

class StudentRepo{
    async createStudent(data){
        return await Student.create(data);
    }
    async readAllStudents(){
        return await Student.findAll();
    }
    async readStudentById(id){
        const target=await Student.findByPk(id);
        if(!target)return null;
        return target;
    }
    async updateStudent(id,data){
        const target=await Student.findByPk(id);
        if(!target)return null;
        await target.update(data);
        return target;      
    }
    async deleteStudent(id){
        const target=await Student.findByPk(id);
        if(!target)return null;
        await target.destroy();
        return true;
    }
}
module.exports=new StudentRepo();