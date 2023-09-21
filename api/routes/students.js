module.exports = (app) => {
  const controller = app.controller.students;
  app.route("/students/all").get(controller.getStudents);

  app.route("/students/create").post(controller.postStudents);

  app.route("/students/delete/:studentId").delete(controller.deleteStudent);

  app.route("/students/update/:customerId").put(controller.updateStudent);
};
