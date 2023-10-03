module.exports = (app) => {
  const controller = require("../controller/students")(app);

  app.route("/students/all").get(controller.getStudents);

  app.route("/students/create").post(controller.postStudents);

  app.route("/students/delete/:studentId").delete(controller.deleteStudent);

  app.route("/students/update/:studentId").put(controller.updateStudent);
};
