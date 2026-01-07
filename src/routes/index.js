const express = require("express");
const router = express.Router();

const attendanceRoutes = require("./AttendanceRoute");
const courseRoutes = require("./CourseRoute");
const examRoutes = require("./ExamRoute");
const studentRoutes = require("./StudentRoute");
const teacherRoutes = require("./TeacherRoute");
const studentCoursesRoutes = require("./StudentCoursesRoute");

router.use("/teachers", teacherRoutes);
router.use("/students", studentRoutes);
router.use("/courses", courseRoutes);
router.use("/exams", examRoutes);
router.use("/attendances", attendanceRoutes);
router.use("/student-courses", studentCoursesRoutes);

module.exports = router;
