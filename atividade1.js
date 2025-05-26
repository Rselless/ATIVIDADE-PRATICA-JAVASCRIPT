const leia = require('readline-sync');

let salario, abono, novoSalario

salario=leia.questionFloat(`Digite o Salario atual: `);
console.log(`Salario atual: ${salario.toFixed(2)}`);

abono=leia.questionFloat(`Digite o Abono: `);
console.log(`Valor do abono: ${abono.toFixed(2)}`);

novoSalario=salario+abono
console.log(`Seu novo salario é: ${novoSalario.toFixed(2)}`)