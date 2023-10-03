const { openDb } = require("../../config/configDB");

async function createTable() {
  try {
    const db = await openDb();
    console.log("💼 conectado ao banco de dados");
    await db.exec(
      "CREATE TABLE IF NOT EXISTS pessoa (id INTEGER PRIMARY KEY, name TEXT, age INTEGER, city TEXT, course TEXT)"
    );
  } catch (error) {
    console.error("Erro ao criar a tabela:", error);
  }
}

module.exports = {
  createTable,
};
