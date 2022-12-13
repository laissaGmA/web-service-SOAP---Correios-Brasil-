const { consultarCep, calcularPrecoPrazo, rastrearEncomendas} = require('correios-brasil');

//consulta de CEP
const cep = '21770200'; 

consultarCep(cep).then(response => {
  console.log(response);
});

//consulta de preço e prazo de entrega
let args = {
 
  sCepOrigem: '81200100',
  sCepDestino: '21770200',
  nVlPeso: '1',
  nCdFormato: '1',
  nVlComprimento: '20',
  nVlAltura: '20',
  nVlLargura: '20',
  nCdServico: ['04014', '04510'], 
  nVlDiametro: '0',
};

calcularPrecoPrazo(args).then(response => {
  console.log(response);
});

//rastreamento de encomendas
let codRastreio = ['OU341933668BR', 'LB290784401HK']; // array de códigos de rastreios

rastrearEncomendas(codRastreio).then(response => {
  console.log(response);
});