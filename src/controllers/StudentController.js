const {StudentService}=require("../Services");

class StudentController{
    static async createStudent(req,res){
        const student=await StudentService.createStudent(req.body);
        res.status(201).json({success:true, data:student});
    }
    static async readAllStudents(req,res){
        const allStudents=await StudentService.readAllStudents();
        res.status(200).json({success:true, data:allStudents});
    }
    static async readStudentById(req,res){
        const student=await StudentService.readStudentById(req.params.id);
        res.status(200).json({success:true,data:student});
    }
    static async updateStudent(req,res){
        const student=await StudentService.updateStudent(req.params.id,req.body);
        res.status(200).json({success:true, data:student});
    }
    static async deleteStudent(req,res){
        await StudentService.deleteStudent(req.params.id);
        res.status(204).send();
    }
}
module.exports=StudentController;
