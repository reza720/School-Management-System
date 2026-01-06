const {AttendanceService}=require("../Services");

class AttendanceController{
    static async createAttendance(req,res){
        const attendance=await AttendanceService.createAttendance(req.body);
        res.status(201).json({success:true, data:attendance});
    }
    static async readAllAttendance(req,res){
        const allAttendances=await AttendanceService.readAllAttendance();
        res.status(200).json({success:true, data:allAttendances});
    }
    static async readAttendanceById(req,res){
        const attendance=await AttendanceService.readAttendanceById(req.params.id);
        res.status(200).json({success:true, data:attendance});
    }
    static async updateAttendance(req,res){
        const attendance=await AttendanceService.updateAttendance(req.params.id,req.body);
        res.status(200).json({success:true, data:attendance});
    }
    static async deleteAttendance(req,res){
        await AttendanceService.deleteAttendance(req.params.id);
        res.status(204).send();
    }
}
module.exports=AttendanceController;