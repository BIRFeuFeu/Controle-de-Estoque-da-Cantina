// --- Passo 1 – Declarando variáveis ---
console.log("--- Início do Passo 1 ---");

// Use 'var' para declarar o nome da cantina.
var nomeCantina = "Cantina da Escola";
console.log("Bem-vindo à " + nomeCantina);

// Use 'let' para declarar a quantidade de salgados disponíveis (esse valor pode mudar).
let salgados = 20;
console.log("Temos " + salgados + " salgados disponíveis.");

// Use 'const' para declarar o preço fixo de cada salgado.
const precoSalgado = 5;
console.log("Cada salgado custa R$" + precoSalgado);

console.log("--- Fim do Passo 1 ---\n");


// --- Passo 2 – Atualizando valores ---
console.log("--- Início do Passo 2 ---");

// Agora, imagine que 5 salgados foram vendidos.
console.log("Vendendo 5 salgados...");

// Atualize o número de salgados.
salgados = salgados - 5;
// Calcule quanto a cantina ganhou.
let totalVendido = 5 * precoSalgado;

console.log("Agora restam " + salgados + " salgados.");
console.log("A cantina vendeu R$" + totalVendido);

console.log("--- Fim do Passo 2 ---\n");


// --- Passo 3 – Teste rápido ---
console.log("--- Início do Passo 3 ---");

// O que acontece se tentar mudar o valor de 'precoSalgado'?
console.log("Tentando alterar o valor de 'precoSalgado' (uma constante)...");
// A linha abaixo causará um erro no console se for descomentada.
// precoSalgado = 6; // TypeError: Assignment to constant variable.
console.log("Isso geraria um erro, pois 'const' não pode ser reatribuída. O script pararia aqui.");

console.log("\nTeste de escopo com 'var' e 'let' dentro de um bloco {}:");
if (true) {
  var testeVar = "Sou 'var' e fui criado dentro de um bloco.";
  let testeLet = "Sou 'let' e também fui criado dentro de um bloco.";
  console.log(testeVar); // Funciona, pois estamos dentro do escopo.
  console.log(testeLet); // Funciona, pois estamos dentro do escopo.
}

console.log("\nAcessando as variáveis fora do bloco:");
console.log(testeVar); // Funciona! 'var' "vazou" para fora do bloco.
console.log("Tentando acessar 'testeLet' fora do bloco...");
// A linha abaixo causará um erro no console se for descomentada.
// console.log(testeLet); // ReferenceError: testeLet is not defined
console.log("Isso geraria um erro, pois 'let' respeita o escopo do bloco e não existe aqui fora.");

console.log("--- Fim do Passo 3 ---");
