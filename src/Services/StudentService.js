const {StudentRepo}=require("../repositories");

class StudentService{
    async createStudent(data){
        return await StudentRepo.createStudent(data);
    }
    async readAllStudents(){
        return await StudentRepo.readAllStudents();
    }
    async readStudentById(id){
        const target=await StudentRepo.readStudentsById(id);
        if(!target){
            throw new Error("not found");
        }
        return target;
    }
    async updateStudent(id,data){
        await this.readStudentById(id);
        return await StudentRepo.updateStudent(id,data);
    }
    async deleteStudent(id){
        await this.readStudentById(id);
        return await StudentRepo.deleteStudent(id);
    }
}
module.exports= new StudentService();