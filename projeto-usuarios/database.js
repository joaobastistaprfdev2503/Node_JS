/* index.js → controla o programa
database.js → cuida do JSON
usuarios.json → armazena os dados
 */

const fs = require("fs").promises;

async function lerUsuarios() {
  try {
    const dados = await fs.readFile("usuarios2.json", "utf-8");
    return JSON.parse(dados);
  } catch (erro) {
    return [];
  }
}

async function salvarUsuarios(usuarios) {
  try {
    const json = JSON.stringify(usuarios, null, 2);
    await fs.writeFile("usuarios2.json", json);
  } catch (erro) {
    console.log("Erro ao salvar:", erro.message);
  }
}

module.exports = {
  lerUsuarios,
  salvarUsuarios
};
