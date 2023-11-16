const tarefas = [
    { Nome: "Estudar JS", Duracao: 150 },
    { Nome: "Correr", Duracao: 60 },
    { Nome: "Netflix", Duracao: 120 },
];
// Questão 1
let mais1hora = [];
tarefas.forEach((tarefa) => {
    if (tarefa.Duracao > 60) {
        mais1hora.push(`${tarefa.Nome} (${tarefa.Duracao} minutos)`);
    }
});
console.log(...mais1hora);
// Questão 2
let durdobrado = tarefas.map(x => ({ Nome: x.Nome, Duracao: x.Duracao * 2}));
console.log(...durdobrado);
// Questão 3
let nomeEDuracao = [];
tarefas.forEach((tarefa) => {
    nomeEDuracao.push(`${tarefa.Nome} - ${tarefa.Duracao} minutos`);
});
console.log(...nomeEDuracao);
// Questão 4
let soma = tarefas.reduce((acc, cur) => acc + cur.Duracao, 0);
console.log(soma);
