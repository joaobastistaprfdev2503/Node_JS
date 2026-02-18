// Importa o módulo File System
const fs = require("fs");


// FUNÇÃO PARA LER USUÁRIOS

async function lerUsuarios() {
  try {
    // Lê o arquivo usuarios.json como texto
    const dados = await fs.promises.readFile("usuarios.json", "utf-8");

    // Converte o texto JSON em array de objetos
    return JSON.parse(dados);

  } catch (erro) {
    // Se o arquivo não existir ou estiver vazio,
    // retorna um array vazio
    return [];
  }
}


// FUNÇÃO PARA SALVAR USUÁRIOS

async function salvarUsuarios(usuarios) {
    usuario = await lerUsuarios(dados)
}




// Exporta as funções
module.exports = {
  lerUsuarios,
  salvarUsuarios
};
