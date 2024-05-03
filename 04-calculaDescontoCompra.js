// Este script calcula o desconto percentual de uma compra.

// ------------------ EXPLICAÇÃO -------------------------------------------------------------------------------------------
// let declara uma variável local no escopo do bloco atual, opcionalmente iniciando-a com um valor.
// Utiliza o método "prompt" para solicitar ao usuário que insira o valor da compra e a porcentagem de desconto.
// As variáveis 'valorCompra' e 'porcentagemDesconto' armazenam os valores inseridos nos "prompts".
// 'desconto' e 'totalComDesconto' são usadas para calcular o desconto e o valor final com desconto, respectivamente.
// A função "parseFloat" converte a entrada do usuário, inicialmente uma string, em um número de ponto flutuante.
//O símbolo ${} em JavaScript é usado para interpolar variáveis ​​em strings literais.
// 'alert' exibe uma caixa de diálogo de aviso com o conteúdo especificado e um botão OK.
// ------------------------------------------------------------------------------------------------------------------------


// Solicita o valor da compra 
let valorCompra = parseFloat(prompt("Digite o valor da compra: "));

// Solicita a porcentagem de desconto
let porcentagemDesconto = parseFloat(prompt("Digite a porcentagem de desconto: "));

// Calcula o valor do desconto
let desconto = (porcentagemDesconto / 100) * valorCompra;

// Calcula o total com o desconto aplicado
let totalComDesconto = valorCompra - desconto;

// Exibe os resultados usando template strings
alert(`Valor da compra: R$ ${valorCompra}
Valor do desconto: R$ ${desconto}
Total com desconto: R$ ${totalComDesconto}`);
