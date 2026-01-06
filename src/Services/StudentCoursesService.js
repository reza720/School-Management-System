const {StudentCoursesRepo}=require("../repositories");

class StudentCoursesService{
    async createStudentCourses(data){
        return await StudentCoursesRepo.createStudentCourses(data);
    }
    async readAllStudentCourses(){
        return await StudentCoursesRepo.readAllStudentCourses();
    }  
    async readStudentCoursesById(id){
        const target=await StudentCoursesRepo.readStudentCoursesById(id);
        if(!target){
            throw new Error("not found");
        }
        return target;
    }
    async updateStudentCourses(id,data){
        await this.readStudentCoursesById(id);
        return await StudentCoursesRepo.updateStudentCourses(id,data);
    }
    async deleteStudentCourses(id){
        await this.readStudentCoursesById(id);
        return await StudentCoursesRepo.deleteStudentCourses(id);
    }
}
module.exports=new StudentCoursesService();