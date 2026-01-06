const {StudentCoursesService}=require("../Services");

class StudentCoursesController{
    static async createStudentCourses(req,res){
        const StudentCourses= await StudentCoursesService.createStudentCourses(req.body);
        res.status(201).json({success:true, data:StudentCourses});
    }
    static async readAllStudentCourses(req,res){
        const StudentCourses=await StudentCoursesService.readAllStudentCourses();
        res.status(200).json({success:true, data:StudentCourses});
    }
    static async readStudentCoursesById(req,res){
        const StudentCourses= await StudentCoursesService.readStudentCoursesById(req.params.id);
        res.status(200).json({ success: true, data: StudentCourses });
    }
    static async updateStudentCourses(req,res){
        const StudentCourses=await StudentCoursesService.updateStudentCourses(req.params.id,req.body);
        res.status(200).json({success:true,data:StudentCourses});
    }
    static async deleteStudentCourses(req,res){
        await StudentCoursesService.deleteStudentCourses(req.params.id);
        res.status(204).send();
    }
}
module.exports=StudentCoursesController;