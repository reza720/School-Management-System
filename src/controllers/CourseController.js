const {CourseService}=require("../Services");

class CourseController{
    static async createCourse(req,res){
        const course= await CourseService.createCourse(req.body);
        res.status(201).json({success:true, data:course});
    }
    static async readAllCourses(req,res){
        const allCourses=await CourseService.readAllCourses();
        res.status(200).json({success:true, data:allCourses});
    }
    static async readCourseById(req,res){
        const course=await CourseService.readCourseById(req.params.id);
        res.status(200).json({success:true, data:course});
    }
    static async updateCourse(req,res){
        const course=await CourseService.updateCourse(req.params.id,req.body);
        res.status(200).json({success:true,data:course});
    }
    static async deleteCourse(req,res){
        await CourseService.deleteCourse(req.params.id);
        res.status(204).send();
    }
}
module.exports=CourseController;