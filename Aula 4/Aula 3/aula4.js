const fs = require("fs").promises;

async function lerUsuarios() {
  try {
    const dados = await fs.readFile("usuarios.json", "utf-8");
    const listaUsuarios = JSON.parse(dados);
    return listaUsuarios;

  } catch (erro) {
    console.log("Erro na leitura:", erro.message);
    return [];
  }
}

async function salvarUsuarios(listaUsuarios) {
  try {
    const json = JSON.stringify(listaUsuarios, null, 2);
    await fs.writeFile("usuarios.json", json);
    console.log("Usuários salvos com sucesso");
  } catch (erro) {
    console.log("Erro ao salvar:", erro.message);
  }
}

async function main() {
  const usuarios = await lerUsuarios();

  usuarios.push({ id: 3, nome: "Carlos", idade: 28 });

  await salvarUsuarios(usuarios);
}

main();
