// JSON.stringify(valor ou objeto, null, 2) => lê o arquivo em JS e transformar em string
// fs.writeFileSync(1° par, 2° par) => Cria o arquivo em JSON (1° par => Nome do arquivo, 2° par => Arquivo que virou JSON) 
// fs.readFileSync ("arquivo.json", "utf-8") => lê como texto
// JSON.parse(conteudo) =>  passa o arquivo de JSON para java script 


 const fs = require("fs");

const usuarios = [
  { id: 1, nome: "Ana Silva", idade: 28 },
  { id: 2, nome: "Carlos Oliveira", idade: 35 },
  { id: 3, nome: "Beatriz Souza", idade: 21 },
  { id: 4, nome: "Ricardo Santos", idade: 42 },
  { id: 5, nome: "Juliana Costa", idade: 19 },
  { id: 6, nome: "Fernando Lima", idade: 50 },
  { id: 7, nome: "Mariana Rocha", idade: 31 },
  { id: 8, nome: "Lucas Mendes", idade: 25 },
  { id: 9, nome: "Patrícia Alves", idade: 38 },
  { id: 10, nome: "Gustavo Pereira", idade: 27 },
  { id: 11, nome: "Renata Vasconcelos", idade: 45 },
  { id: 12, nome: "Thiago Moreira", idade: 33 },
  { id: 13, nome: "Camila Guimarães", idade: 22 },
  { id: 14, nome: "Bruno Ferreira", idade: 29 },
  { id: 15, nome: "Letícia Borges", idade: 26 },
  { id: 16, nome: "André Machado", idade: 37 },
  { id: 17, nome: "Sabrina Antunes", idade: 30 },
  { id: 18, nome: "Felipe Diniz", idade: 19 },
  { id: 19, nome: "Mônica Silveira", idade: 52 },
  { id: 20, nome: "Rodrigo Faro", idade: 41 },
  { id: 21, nome: "Vanessa Lins", idade: 24 },
  { id: 22, nome: "Igor Cavalcante", idade: 28 },
  { id: 23, nome: "Tatiane Meireles", idade: 34 },
  { id: 24, nome: "Hugo Amaral", idade: 40 },
  { id: 25, nome: "Priscila Barros", idade: 23 },
  { id: 26, nome: "Daniel Nogueira", idade: 31 },
  { id: 27, nome: "Larissa Farias", idade: 20 },
  { id: 28, nome: "Samuel Viana", idade: 48 },
  { id: 29, nome: "Eduarda Teodoro", idade: 27 },
  { id: 30, nome: "Vitor Valente", idade: 36 }
];

// JS → JSON (string)
const json = JSON.stringify(usuarios, null, 2);

// cria o arquivo
fs.writeFileSync("usuarios.json", json);

console.log("Arquivo usuarios.json criado!"); 


/* // Fiz o requerimento para o node ler os arquivos do meu sistema
const fs = require("fs")

//Criei um array de produtos, li meu array com stringify e transformei em string                        
const produtos = ["maça", "pera", "melancia", "batata"]
const json = JSON.stringify(produtos, null, 2)
//
fs.writeFileSync("produtos.json", json)


const conteudo = fs.readFileSync("produtos.json", "utf-8")
const produto = JSON.parse(conteudo)

console.log(produto[0]) */