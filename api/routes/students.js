module.exports = (app) => {
  const controller = app.controller.students;
  app
    .route("/students/all")
    .get(controller.getStudents)
    .post(controller.postStudents);
};
