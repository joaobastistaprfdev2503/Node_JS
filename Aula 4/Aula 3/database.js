// JSON.stringify(valor ou objeto, null, 2) => lê o arquivo em JS e transformar em string
// fs.writeFileSync(1° par, 2° par) => Cria o arquivo em JSON (1° par => Nome do arquivo, 2° par => Arquivo que virou JSON) 
// fs.readFileSync ("arquivo.json", "utf-8") => lê como texto
// JSON.parse(conteudo) =>  passa o arquivo de JSON para java script 

async function lerUsuarios(){
    try {   
        const dados = await fs.readFile("usuarios.json", "utf-8")
        console.log("Usuarios lidos com sucesso")

        const listaUsuarios = JSON.parse(dados)
    } catch(erro) {
        console.log("erro na leitura de usuarios", erro)
    }}

async function salvarUsuarios() {
    try { 
        const json = JSON.stringify("listaUsuarios", null, 2)
        const dadosSalvos = await fs.writeFile("usuarios.json", json)

    } catch(erro){
        console.log("Erro ao salvar usuarios", erro)
    }
}
lerUsuarios()
salvarUsuarios()