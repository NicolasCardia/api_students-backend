const { openDb } = require("../../config/configDB");

module.exports = (app) => {
  const controller = {};

  controller.getStudents = async (req, res) => {
    const db = await openDb();

    try {
      // Executa a consulta SQL para obter todos os estudantes
      const students = await db.all(`SELECT * FROM pessoa`);

      res.status(200).json(students); // Retorna os estudantes obtidos
    } catch (error) {
      res
        .status(500)
        .json({ message: "Erro ao buscar estudantes.", error: error.message }); // Responde com erro, se houver
    } finally {
      await db.close(); // Fecha a conexão com o banco de dados
    }
  };

  controller.postStudents = async (req, res) => {
    const { name, age, city, course } = req.body;
    const db = await openDb(); // Abre a conexão com o banco de dados aqui
    try {
      // Executa a consulta SQL para inserir o novo estudante
      await db.run(
        `INSERT INTO pessoa (name, age, city, course) VALUES (?, ?, ?, ?)`,
        [name, age, city, course]
      );

      res.status(201).json({
        message: "Estudante Criado com sucesso!",
        success: true,
        student: {
          name: name,
          age: age,
          city: city,
          course: course,
        },
      }); // Responde ao cliente
    } catch (error) {
      res
        .status(500)
        .json({ message: "Erro ao criar estudante.", error: error.message }); // Responde com erro, se houver
    } finally {
      await db.close(); // Fecha a conexão com o banco de dados
    }
  };

  controller.deleteStudent = async (req, res) => {
    const { studentId } = req.params;
    const db = await openDb();
    try {
      const result = await db.run(`DELETE FROM pessoa WHERE id = ?`, [
        studentId,
      ]);

      // Verifica se algum registro foi deletado
      if (result.changes === 0) {
        res.status(404).json({
          message: "Estudante não encontrado na base.",
          success: false,
        });
      } else {
        res.status(200).json({
          message: "Estudante deletado com sucesso",
          success: true,
        });
      }
    } catch (error) {
      res
        .status(500)
        .json({ message: "Erro ao deletar estudante.", error: error.message }); // Responde com erro, se houver
    } finally {
      await db.close();
    }
  };

  controller.updateStudent = async (req, res) => {
    const { studentId } = req.params; // Pega o ID do estudante dos parâmetros da rota
    const { name, age, city, course } = req.body; // Pega os dados atualizados do corpo da requisição
    const db = await openDb(); // Abre a conexão com o banco de dados

    try {
      // Executa a consulta SQL para atualizar o estudante com o ID fornecido
      const result = await db.run(
        `UPDATE pessoa SET name = ?, age = ?, city = ?, course = ? WHERE id = ?`,
        [name, age, city, course, studentId]
      );

      // Verifica se algum registro foi atualizado
      if (result.changes === 0) {
        res.status(404).json({
          message: "Estudante não encontrado na base.",
          success: false,
        });
      } else {
        res.status(200).json({
          message: "Estudante atualizado com sucesso!",
          success: true,
        });
      }
    } catch (error) {
      res.status(500).json({
        message: "Erro ao atualizar estudante.",
        error: error.message,
      }); // Responde com erro, se houver
    } finally {
      await db.close(); // Fecha a conexão com o banco de dados
    }
  };

  return controller;
};
