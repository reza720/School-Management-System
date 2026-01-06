const {TeacherService}=require("../Services");

class TeacherController{
    async createTeacher(req,res){
        try{
            const teacher=await TeacherService.createTeacher(req.body);
            res.status(201).json({success:true, data:teacher});
        }
        catch(error){
            res.status(400).json({success:false, message:error.message});
        }
    }
}