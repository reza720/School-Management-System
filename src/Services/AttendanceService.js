const {AttendanceRepo}=require("../repositories");

class AttendanceService{
    async create(data){
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