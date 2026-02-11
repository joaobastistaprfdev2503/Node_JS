// JSON.stringify(valor ou objeto, null, 2) => lê o arquivo em JS e transformar em string
// fs.writeFileSync(1° par, 2° par) => Cria o arquivo em JSON (1° par => Nome do arquivo, 2° par => Arquivo que virou JSON) 
// fs.readFileSync ("arquivo.json", "utf-8") => lê como texto
// JSON.parse(conteudo) =>  passa o arquivo de JSON para java script 


/* const fs = require("fs");

const usuarios = [
  { id: 1, nome: "João", idade: 25 },
  { id: 2, nome: "Maria", idade: 30 }
];

// JS → JSON (string)
const json = JSON.stringify(usuarios, null, 2);

// cria o arquivo
fs.writeFileSync("usuarios.json", json);

console.log("Arquivo usuarios.json criado!"); */


// Fiz o requerimento para o node ler os arquivos do meu sistema
const fs = require("fs")

//Criei um array de produtos, li meu array com stringify e transformei em string                        
const produtos = ["maça", "pera", "melancia", "batata"]
const json = JSON.stringify(produtos, null, 2)
//
fs.writeFileSync("produtos.json", json)


const conteudo = fs.readFileSync("produtos.json", "utf-8")
const produto = JSON.parse(conteudo)

console.log(produto[0])



