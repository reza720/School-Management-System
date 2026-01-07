const express=require("express");
const router=express.Router();
const {StudentCoursesController}=require("../controllers");

router.post("/",StudentCoursesController.createStudentCourses);
router.get("/",StudentCoursesController.readAllStudentCourses);
router.get("/:id",StudentCoursesController.readStudentCoursesById);
router.put("/:id",StudentCoursesController.updateStudentCourses);
router.delete("/:id",StudentCoursesController.deleteStudentCourses);

module.exports=router;