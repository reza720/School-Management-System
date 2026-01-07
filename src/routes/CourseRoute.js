const express=require("express");
const router=express.Router();
const {CourseController}=require("../controllers");

router.post("/",CourseController.createCourse);
router.get("/",CourseController.readAllCourses);
router.get("/:id",CourseController.readCourseById);
router.put("/:id", CourseController.updateCourse);
router.delete("/:id", CourseController.deleteCourse);

module.exports=router;
