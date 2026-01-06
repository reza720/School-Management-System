const {CourseRepo}=require("../repositories");

class CourseService{
    async createCourse(data){
        return await CourseRepo.createCourse(data);
    }
    async readAllCourses(){
        return await CourseRepo.readAllCourses();
    }
    async readCourseById(id){
        const target=await CourseRepo.readCourseById(id);
        if(!target){
            throw new Error("not found");
        }
        return target;
    }
    async updateCourse(id,data){
        await this.readCourseById(id);
        return await CourseRepo.updateCourse(id,data);
    }
    async deleteCourse(id){
        await this.readCourseById(id);
        return await CourseRepo.deleteCourse(id);
    }
}
module.exports=new CourseService();