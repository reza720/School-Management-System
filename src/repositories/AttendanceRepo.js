const {Attendance, Course, Student}=require("../models");

class AttendanceRepo{
    async createAttendance(data){
        return await Attendance.create(data);
    }
    async readAllAttendance(){
        return await Attendance.findAll({include:[
            {model:Course, attributes:["id","code","name","year"]},
            {model:Student, attributes:["id","fullName","email"]}
        ]});
    }
    async readAttendanceById(id){
        const target=await Attendance.findByPk(id,{include:[
            {model:Course, attributes:["id","code","name","year"]},
            {model:Student, attributes:["id","fullName","email"]}
        ]});
        if(!target)return null;
        return target;
    }
    async updateAttendance(id,data){
        const target=await Attendance.findByPk(id);
        if(!target)return null;
        await target.update(data);
        return target;      
    }
    async deleteAttendance(id){
        const target=await Attendance.findByPk(id);
        if(!target)return null;
        await target.destroy();
        return true;
    }
}
module.exports=new AttendanceRepo();