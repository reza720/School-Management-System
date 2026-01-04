const {Exam, Course}=require("../models");

class ExamRepo{
    async createExam(data){
        return await Exam.create(data);
    }
    async readAllExams(){
        return await Exam.findAll({include:[
            {model:Course, attributes:["id","code","name","year"]}
        ]});
    }
    async readExamById(id){
        const target=await Exam.findByPk(id,{include:[
            {model:Course, attributes:["id","code","name","year"]}
        ]});
        if(!target)return null;
        return target;
    }
    async updateExam(id,data){
        const target=await Exam.findByPk(id);
        if(!target)return null;
        await target.update(data);
        return target;      
    }
    async deleteExam(id){
        const target=await Exam.findByPk(id);
        if(!target)return null;
        await target.destroy();
        return true;
    }
}
module.exports=new ExamRepo();