const express=require("express");
const router=express.Router();
const {StudentController}=require("../controllers");

router.post("/",StudentController.createStudent);
router.get("/",StudentController.readAllStudents);
router.get("/:id",StudentController.readStudentById);
router.put("/:id",StudentController.updateStudent);
router.delete("/:id",StudentController.deleteStudent);

module.exports=router;