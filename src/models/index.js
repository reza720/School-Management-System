const sequelize = require("../config/database");
const Teacher = require("./Teacher");
const Student = require("./Student");
const Course = require("./Course");
const StudentCourses = require("./StudentCourses");
const Exam = require("./Exam");
const Attendance = require("./Attendance");

Teacher.hasMany(Course, { foreignKey: "teacherId" });
Course.belongsTo(Teacher, { foreignKey: "teacherId" });

Course.hasMany(Exam, { foreignKey: "courseId" });
Exam.belongsTo(Course, { foreignKey: "courseId" });

Course.hasMany(Attendance, { foreignKey: "courseId" });
Attendance.belongsTo(Course, { foreignKey: "courseId" });
Student.hasMany(Attendance, { foreignKey: "studentId" });
Attendance.belongsTo(Student, { foreignKey: "studentId" });

Student.belongsToMany(Course, { through: StudentCourses, foreignKey: "studentId" });
Course.belongsToMany(Student, { through: StudentCourses, foreignKey: "courseId" });

module.exports = {
    sequelize,
    Teacher,
    Student,
    Course,
    StudentCourses,
    Exam,
    Attendance
};
