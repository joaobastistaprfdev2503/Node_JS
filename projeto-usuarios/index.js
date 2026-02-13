 const readline = require("readline");
const { lerUsuarios, salvarUsuarios } = require("./database");

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

async function adicionarUsuario(nome, idade) {
  const usuarios = await lerUsuarios();

  const novoUsuario = {
    id: Date.now(),
    nome,
    idade
  };

  usuarios.push(novoUsuario);
  await salvarUsuarios(usuarios);

  console.log("\n✅ Usuário adicionado com sucesso!");
  console.log("ID:", novoUsuario.id);
  console.log("Nome:", novoUsuario.nome);
  console.log("Idade:", novoUsuario.idade);
}


async function listarUsuarios() {
  const usuarios = await lerUsuarios();

  if (usuarios.length === 0) {
    console.log("Nenhum usuário cadastrado.");
    return;
  }

  console.log("\n=== LISTA DE USUÁRIOS ===");

  usuarios.forEach(usuario => {
    console.log(`ID: ${usuario.id}`);
    console.log(`Nome: ${usuario.nome}`);
    console.log(`Idade: ${usuario.idade}`);
    console.log("-----------------------");
  });
}

async function removerUsuario(id) {
  const usuarios = await lerUsuarios();

  const usuarioExiste = usuarios.find(usuario => usuario.id === Number(id));

  if (!usuarioExiste) {
    console.log("\n❌ Usuário não encontrado.");
    return;
  }

  const usuariosAtualizados = usuarios.filter(usuario => usuario.id !== Number(id));

  await salvarUsuarios(usuariosAtualizados);

  console.log("\n🗑 Usuário removido com sucesso!");
  console.log("ID:", usuarioExiste.id);
  console.log("Nome:", usuarioExiste.nome);
  console.log("Idade:", usuarioExiste.idade);
}


function menu() {
  console.log("\n=== MENU ===");
  console.log("1 - Listar usuários");
  console.log("2 - Adicionar usuário");
  console.log("3 - Remover usuário");
  console.log("0 - Sair");

  rl.question("Escolha uma opção: ", async (opcao) => {
    if (opcao === "1") {
      await listarUsuarios();
      menu();
    }

    else if (opcao === "2") {
      rl.question("Nome: ", (nome) => {
        rl.question("Idade: ", async (idade) => {
          await adicionarUsuario(nome, Number(idade));
          menu();
        });
      });
    }

    else if (opcao === "3") {
      rl.question("Digite o ID do usuário: ", async (id) => {
        await removerUsuario(id);
        menu();
      });
    }

    else if (opcao === "0") {
      console.log("Saindo...");
      rl.close();
    }

    else {
      console.log("Opção inválida.");
      menu();
    }
  });
}

menu();
