const {TeacherRepo}=require("../repositories");

class TeacherService{
    async createTeacher(data){
        return await TeacherRepo.createTeacher(data);
    }
    async readAllTeachers(){
        return await TeacherRepo.readAllTeachers();
    }
    async readTeacherById(id){
        const target=await TeacherRepo.readTeacherById(id);
        if(!target){
            throw new Error("not found");
        }
        return target;
    }
    async updateTeacher(id,data){
        await this.readTeacherById(id);
        return await TeacherRepo.updateTeacher(id,data);
    }
    async deleteTeacher(id){
        await this.readTeacherById(id);
        return await TeacherRepo.deleteTeacher(id);
   }
}

module.exports= new TeacherService();