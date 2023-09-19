const app = require("./config/express")();
const port = app.get("port");

//rodando aplicação na porta
app.listen(port, () => {
  console.log(`⚡ Servidor rodando no local http://localhost:${port}`);
});
