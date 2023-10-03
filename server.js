const populateSQLITE = require("./api/data/populateSQLITE.js");
const getApp = require("./config/express.js");
const app = getApp();

populateSQLITE.createTable();

const port = app.get("port"); // Pegando a porta configurada no Express
app.listen(port, () => {
  console.log(`⚡ Servidor rodando no local http://localhost:${port}`);
});
