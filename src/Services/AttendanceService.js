const {AttendanceRepo}=require("../repositories");

class AttendanceService{
    async create(data){
        if(!data.courseId || !data.studentId || !data.date){
            throw new Error("course Id, student Id, and date are required");
        }
        return await AttendanceRepo.createAttendance(data);
    }
    async readAllAttendance(){
        return await AttendanceRepo.readAllAttendance();
    }
    async readAttendanceById(id){
        const target= await AttendanceRepo.readAttendanceById(id);
        if(!target){
            throw new Error("not found");
        }
        return target;
    }
    async updateAttendance(id,data){
        await this.readAttendanceById(id);
        return await AttendanceRepo.updateAttendance(id,data);
    }
    async deleteAttendance(id){
        await this.readAttendanceById(id);
        return await AttendanceRepo.deleteAttendance(id);
    }
}
module.exports=new AttendanceService();