const leia = require('readline-sync');

let numero1, numero2, numero3, numero3a, numero4, diferenca1, diferenca2;

numero1=leia.questionFloat(`Insira o primeiro valor: `);
numero2=leia.questionFloat(`Insira o segundo valor: `);
numero3=leia.questionFloat(`Insira o terceiro valor: `);
numero3a=(numero3*-1)
numero4=leia.questionFloat(`Insira o quarto valor: `);

diferenca1=((numero1*numero2)-(numero3*numero4))
diferenca2=((numero1*numero2)-(numero3a*numero4))
console.log(`As diferenças dos produtos de n1 e n2 subtraidos dos produtos de n3 ou -n3 e n4 são: ${diferenca1.toFixed(1)} e ${diferenca2.toFixed(1)}`)