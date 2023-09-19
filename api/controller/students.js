const { v4: uuidv4 } = require("uuid");

module.exports = (app) => {
  const studentsDB = require("../data/students.json");
  const controller = {};

  const { students: studentsMock } = studentsDB;

  controller.getStudents = (req, res) => res.status(200).json(studentsDB);

  controller.postStudents = (req, res) => {
    studentsMock.data.push({
      id: uuidv4(),
      name: req.body.name,
      age: req.body.age,
      city: req.body.city,
      course: req.body.course,
    });

    res.status(201).json(studentsMock);
  };

  return controller;
};
