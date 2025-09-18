// Declaração das variáveis
var nomeCantina = "Cantina da Escola";
console.log("Bem-vindo à " + nomeCantina);

let salgados = 20;
console.log("Temos " + salgados + " salgados disponíveis.");

const precoSalgado = 5;
console.log("Cada salgado custa R$" + precoSalgado);

// Atualizando a quantidade de salgados
salgados = salgados - 5;
let totalVendido = 5 * precoSalgado;

console.log("Agora restam " + salgados + " salgados.");
console.log("A cantina vendeu R$" + totalVendido);

// Testando o erro com const
precoSalgado = 6; // Isso causará um erro, pois não podemos alterar o valor de uma variável const.

if (true) {
  var testeVar = "Sou var"; 
  let testeLet = "Sou let"; 
  console.log(testeVar); // Funciona, pois var tem escopo global
  console.log(testeLet); // Funciona, pois let tem escopo de bloco
}

console.log(testeVar); // Funciona, pois var é global (escopo de função ou global)
console.log(testeLet); // ERRO, porque let tem escopo de bloco
