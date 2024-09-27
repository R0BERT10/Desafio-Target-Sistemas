// Vetor faturamento esteja carregado com os valores diários
const faturamento = [2, 4, 10, 20, 10, 0, 3]//[/* valores de faturamento diário */];

// Filtrar os dias com faturamento (ignorando dias sem faturamento)
const faturamentoValido = faturamento.filter(valor => valor > 0);

// Calcular a média anual de faturamento
const somaFaturamento = faturamentoValido.reduce((acc, valor) => acc + valor, 0);
const mediaFaturamento = somaFaturamento / faturamentoValido.length;

// Calcular o menor valor de faturamento
const menorFaturamento = Math.min(...faturamentoValido);

// Calcular o maior valor de faturamento
const maiorFaturamento = Math.max(...faturamentoValido);

// Contar o número de dias com faturamento acima da média anual
const diasAcimaDaMedia = faturamentoValido.filter(valor => valor > mediaFaturamento).length;

console.log("Menor valor de faturamento:", menorFaturamento);
console.log("Maior valor de faturamento:", maiorFaturamento);
console.log("Número de dias com faturamento acima da média anual:", diasAcimaDaMedia);
