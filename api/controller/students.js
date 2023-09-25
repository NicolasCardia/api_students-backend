const { v4: uuidv4 } = require("uuid");

module.exports = (app) => {
  const studentsDB = app.data.students;
  const controller = {};

  const { Students: studentsMock } = studentsDB;

  controller.getStudents = (req, res) => res.status(200).json(studentsMock);

  controller.postStudents = (req, res) => {
    const newStudent = {
      id: uuidv4(),
      name: req.body.name,
      age: req.body.age,
      city: req.body.city,
      course: req.body.course,
      createdAt: new Date().toISOString(),
    };

    // Verifica se studentsMock.data é um array antes de adicionar o novo estudante
    if (Array.isArray(studentsMock.data)) {
      studentsMock.data.push(newStudent); // Adiciona o novo estudante ao array de estudantes
      res.status(201).json(newStudent); // Retorna o novo estudante como resposta
    } else {
      res.status(500).json({ error: "studentsMock.data não é um array" });
    }
  };

  controller.deleteStudent = (req, res) => {
    const { studentId } = req.params;
    const foundCustomerIndex = studentsMock.data.findIndex(
      (students) => students.id == studentId
    );

    if (foundCustomerIndex === -1) {
      res.status(404).json({
        message: "Cliente não encontrado na base.",
        success: false,
        students: studentsMock,
      });
    } else {
      studentsMock.data.splice(foundCustomerIndex, 1);
      res.status(200).json({
        message: "cliente encontrado e deletado com sucesso!",
        success: true,
        students: studentsMock,
      });
    }
  };

  controller.updateStudent = (req, res) => {
    const { studentId } = req.params;
  };
  return controller;
};
