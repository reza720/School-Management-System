const {ExamService}=require("../Services");

class ExamController{
    static async createExam(req,res){
        const exam=await ExamService.createExam(req.body);
        res.status(201).json({success:true, data:exam});
    }
    static async readAllExams(req,res){
        const allExams=await ExamService.readAllExams();
        res.status(200).json({success:true, data:allExams});
    }
    static async readExamById(req,res){
        const exam=await ExamService.readExamById(req.params.id);
        res.status(200).json({success:true, data:exam});
    }
    static async updateExam(req,res){
        const exam=await ExamService.updateExam(req.params.id, req.body);
        res.status(200).json({success:true, data:exam});
    }
    static async deleteExam(req,res){
        await ExamService.deleteExam(req.params.id);
        res.status(204).send();
    }
}
module.exports=ExamController;