module.exports = (app) => {
  //const controller = app.controller.students;
  const controller = require("../controller/students.js")();

  app
    .route("/students/all")
    .get(controller.getStudents)
    .post(controller.postStudents);
};
