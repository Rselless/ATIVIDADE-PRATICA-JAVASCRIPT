const leia = require('readline-sync');

let salarioBruto,adicional,horasExtras,descontos,salarioLiquido

salarioBruto=leia.questionFloat(`Insira seu Salario Bruto: `);
adicional=leia.questionFloat(`Insira seu Adicional Noturno: `);
horasExtras=leia.questionFloat(`Insira seu valor de Horas Extras: `);
descontos=leia.questionFloat(`Informe o valor dos Descontos: `);

salarioLiquido=salarioBruto+adicional+(horasExtras*5)-descontos;
console.log(`Seu Salario Liquido é: ${salarioLiquido.toFixed(2)}`)