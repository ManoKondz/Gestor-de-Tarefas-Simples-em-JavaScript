// Definindo a matriz de tarefas
const tarefas = [
    { "Nome": "Estudar JS", "Duracao": 150 },
    { "Nome": "Correr", "Duracao": 60 },
    { "Nome": "Netflix", "Duracao": 120 },
];

const menos1hora = [];
const nomeEDuracao = [];

let mltparr = [];
let somaDuracoes = 0;

tarefas.forEach((tarefa) => {
    if (tarefa.Duracao > 60) {
        menos1hora.push(`${tarefa.Nome} (${tarefa.Duracao} minutos)`);
    }

    nomeEDuracao.push(`${tarefa.Nome} - ${tarefa.Duracao} minutos`);
    mltparr.push(`${tarefa.Nome} -  ${tarefa.Duracao*2} minutos`);

    somaDuracoes += tarefa.Duracao;
});


console.log("As tarefas com mais de 1 hora são: " + menos1hora.join(', '));
console.log(...nomeEDuracao); // Utilizando o operador spread para remover os colchetes
console.log("A soma das durações é: " + somaDuracoes + " minutos");
console.log(...mltparr);
