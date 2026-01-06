const {TeacherService}=require("../Services");

class TeacherController {
    static async createTeacher(req, res) {
        const teacher = await TeacherService.createTeacher(req.body);
        res.status(201).json({ success: true, data: teacher });
    }
    static async readAllTeachers(req, res) {
        const allTeachers = await TeacherService.readAllTeachers();
        res.status(200).json({ success: true, data: allTeachers });
    }
    static async readTeacherById(req, res) {
        const teacher = await TeacherService.readTeacherById(req.params.id);
        res.status(200).json({ success: true, data: teacher });
    }
    static async updateTeacher(req, res) {
        const teacher = await TeacherService.updateTeacher(req.params.id, req.body);
        res.status(200).json({ success: true, data: teacher });
    }
    static async deleteTeacher(req, res) {
        await TeacherService.deleteTeacher(req.params.id);
        res.status(204).send();
    }
}
module.exports=TeacherController;
