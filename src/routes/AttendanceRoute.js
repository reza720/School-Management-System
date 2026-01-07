const express=require("express");
const router=express.Router();
const {AttendanceController}=require("../controllers");

router.post("/",AttendanceController.createAttendance);
router.get("/",AttendanceController.readAllAttendance);
router.get("/:id",AttendanceController.readAttendanceById);
router.put("/:id",AttendanceController.updateAttendance);
router.delete("/:id",AttendanceController.deleteAttendance);

module.exports=router;