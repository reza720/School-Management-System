const express=require("express");
const router=express.Router();
const {ExamController}=require("../controllers");

router.post("/",ExamController.createExam);
router.get("/",ExamController.readAllExams);
router.get("/:id",ExamController.readExamById);
router.put("/:id",ExamController.updateExam);
router.delete("/:id",ExamController.deleteExam);

module.exports=router;