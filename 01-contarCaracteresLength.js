// Este script conta o número de caracteres em uma frase ou palavra.

// ------------------ EXPLICAÇÃO -------------------------------------------------------------------------------------------
// A declaração 'let' cria uma variável local no escopo atual, opcionalmente inicializando-a com um valor.
// O método 'prompt' exibe uma caixa de diálogo que solicita ao usuário que insira uma frase.
// A variável 'frase' armazena o valor inserido no "prompt".
// 'length' é uma propriedade de string que retorna o número de caracteres na string.
// 'numCaracteres' armazena o número de caracteres contados pela propriedade 'length'.
// 'alert' exibe uma caixa de diálogo de aviso com o conteúdo especificado e um botão "OK".
// O operador '+' é usado para concatenar (juntar) strings e variáveis.
// ------------------------------------------------------------------------------------------------------------------------

// Solicita ao usuário que insira uma frase
let frase = prompt("Digite uma frase: ");

// Calcula o número de caracteres na frase
let numCaracteres = frase.length;

// Exibe o número de caracteres
alert("A frase possui " + numCaracteres + " caracteres");
