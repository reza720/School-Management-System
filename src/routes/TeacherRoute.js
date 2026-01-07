const express=require("express");
const router=express.Router();
const {TeacherController}=require("../controllers");

router.post("/",TeacherController.createTeacher);
router.get("/",TeacherController.readAllTeachers);
router.get("/:id", TeacherController.readTeacherById);
router.put("/:id", TeacherController.updateTeacher);
router.delete("/:id",TeacherController.deleteTeacher);

module.exports=router;