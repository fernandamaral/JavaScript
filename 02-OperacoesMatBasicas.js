// Este script realiza operações de adição, subtração, multiplicação e divisão de dois valores.

// ------------------ EXPLICAÇÃO -------------------------------------------------------------------------------------------
// A declaração 'let' cria uma variável local no escopo atual, opcionalmente inicializando-a com um valor.
// O método 'prompt' exibe uma caixa de diálogo que solicita ao usuário que insira o primeiro e o segundo número.
// A função 'parseFloat' converte a entrada do usuário, inicialmente uma string, em um número de ponto flutuante.
// O símbolo `${}` em JavaScript é usado para interpolar variáveis em strings literais, permitindo a inserção de expressões JavaScript.
// 'alert' exibe uma caixa de diálogo de aviso com o conteúdo especificado e um botão "OK".
// ------------------------------------------------------------------------------------------------------------------------

// Solicita ao usuário que insira o primeiro e o segundo número
let numero1 = prompt("Digite o primeiro número: ");
let numero2 = prompt("Digite o segundo número: ");

// Converte os valores inseridos pelo usuário em números de ponto flutuante para realizar os cálculos
numero1 = parseFloat(numero1);
numero2 = parseFloat(numero2);

// Exibe os resultados
alert(`Resultado da soma: ${numero1 + numero2}
Resultado da subtração: ${numero1 - numero2}
Resultado da multiplicação: ${numero1 * numero2}
Resultado da divisão: ${numero1 / numero2}`);
