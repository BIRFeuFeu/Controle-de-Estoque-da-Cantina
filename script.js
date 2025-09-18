//Passo 1 – Declarando variáveis

//Use para declarar o nome da cantina.
var lanche diario gratuito = "Cantina da Escola";
console.log("Bem-vindo à " + lanche diario gratuito);

let salgados = 20;
console.log("Temos " + salgados + " salgados disponíveis.");

const precoSalgado = 5;
console.log("Cada salgado custa R$" + precoSalgado);

salgados = salgados - 5;  // Atualiza a quantidade de salgados
let totalVendido = 5 * precoSalgado;  // Calcula o valor total da venda

console.log("Agora restam " + salgados + " salgados.");
console.log("A cantina vendeu R$" + totalVendido);

precoSalgado = 6;  // Vai gerar um erro, porque `precoSalgado` é uma constante

if (true) {
  var testeVar = "Sou var";  // `var` tem escopo global
  let testeLet = "Sou let";  // `let` tem escopo de bloco
  console.log(testeVar); // Funciona, pois `var` é acessível fora do bloco
  console.log(testeLet); // Funciona dentro do bloco, pois `let` tem escopo de bloco
}

console.log(testeVar); // Funciona, `var` é global, então está disponível fora do bloco
console.log(testeLet); // ERRO, `let` tem escopo de bloco e não é acessível fora dele
