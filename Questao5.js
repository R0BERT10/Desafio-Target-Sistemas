const distanciaTotal = 125;
const velocidadeCarro = 90;
const velocidadeCaminhao = 80;
const tempoExtraPedagio = 5 / 60; // 5 minutos em horas
const numeroPedagios = 3;


// Tempo até o ponto de encontro sem considerar pedágios
const tempoEncontro = distanciaTotal / (velocidadeCarro + velocidadeCaminhao);

// Distâncias percorridas até o ponto de encontro
const distanciaCarro = velocidadeCarro * tempoEncontro;
const distanciaCaminhao = distanciaTotal - distanciaCarro;

// Ajuste do tempo do carro com pedágios
const tempoExtraTotal = tempoExtraPedagio * numeroPedagios;
const tempoCarroComPedagios = tempoEncontro + tempoExtraTotal;
const distanciaCarroComPedagios = velocidadeCarro * tempoCarroComPedagios;

// Determinar qual veículo está mais próximo de Ribeirão Preto
const resultado = distanciaCarroComPedagios < distanciaCaminhao
    ? "O carro estará mais próximo de Ribeirão Preto."
    : "O caminhão estará mais próximo de Ribeirão Preto.";

console.log(resultado)
console.log(`Distacia do carro ${distanciaCarroComPedagios.toFixed(1)} KM`)
console.log(`Distacia do caminhão ${distanciaCaminhao.toFixed(1)} KM`)