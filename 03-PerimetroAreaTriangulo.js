// Este script é utilizado para calcular os lados e a área de um triângulo.

// ------------------ EXPLICAÇÃO -------------------------------------------------------------------------------------------
// cost é uma variável de valor fixo, ou seja, uma constante somente leitura. Isso não significa que o valor é imutável, apenas que a variável constante não pode ser alterada ou retribuída.
// A função prompt solicita ao usuário que insira o comprimento de cada lado do triângulo. Os valores inseridos são convertidos em números de ponto flutuante (números decimais) usando parseFloat.
// 'ladoA', 'ladoB' e 'ladoC' são variáveis que armazenam os comprimentos dos lados do triângulo.
// 'perimetro' é calculado somando os comprimentos dos três lados do triângulo.
// 'sp' representa o semiperímetro, que é metade do perímetro.
// A fórmula de Heron é utilizada para calcular a área do triângulo com base nos comprimentos dos lados e no semiperímetro.
// A função Math.sqrt é usada para calcular a raiz quadrada.
// O símbolo ${} em JavaScript é usado para interpolar variáveis em strings literais.
// A função alert exibe uma caixa de diálogo com os resultados do cálculo.
// \n é usado para pular uma linha na mensagem exibida pelo alert.
// ------------------------------------------------------------------------------------------------------------------------

// Solicita ao usuário que insira os comprimentos dos lados
const ladoA = parseFloat(prompt("Digite o comprimento do lado A:"));
const ladoB = parseFloat(prompt("Digite o comprimento do lado B:"));
const ladoC = parseFloat(prompt("Digite o comprimento do lado C:"));

// Calcula o perímetro do triângulo
const perimetro = ladoA + ladoB + ladoC;

// Calcula o semiperímetro
const sp = perimetro / 2;

// Calcula a área usando a fórmula de Heron
const area = Math.sqrt(sp * (sp - ladoA) * (sp - ladoB) * (sp - ladoC));

// Exibe os resultados em um alert
alert(`Perímetro do triângulo: ${perimetro}\nÁrea do triângulo: ${area}.`);
