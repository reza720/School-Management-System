const {ExamRepo}=require("../repositories");

class ExamService{
    async createExam(data){
        return await ExamRepo.createExam(data);
    }
    async readAllExams(){
        return await ExamRepo.readAllExams();
    }
    async readExamById(id){
        const target=await ExamRepo.readExamById(id);
        if(!target){
            throw new Error("not found");
            }
        return target;
    }
    async updateExam(id,data){
        await this.readExamById(id);
        return await ExamRepo.updateExam(id,data);
    }
    async deleteExam(id){
        await this.readExamById(id);
        return await ExamRepo.deleteExam(id);
    }
}
module.exports=new ExamService();