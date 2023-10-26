// Definindo a matriz de tarefas
const tarefas = [
    { "Nome": "Estudar JS", "Duracao": 150 },
    { "Nome": "Correr", "Duracao": 60 },
    { "Nome": "Netflix", "Duracao": 120 },
];

// Inicializando arrays para armazenar resultados
const menos1hora = [];
const nomeEDuracao = [];

// Inicializando variável para armazenar a soma das durações
let somaDuracoes = 0;

// Iterando sobre cada tarefa utilizando forEach
tarefas.forEach((tarefa) => {
    // Verificando se a duração é menor ou igual a 60 minutos
    if (tarefa.Duracao <= 60) {
        // Adicionando ao array as tarefas com menos de 1 hora
        menos1hora.push(`${tarefa.Nome} (${tarefa.Duracao} minutos)`);
    }

    // Adicionando ao array o nome e a duração de todas as tarefas
    nomeEDuracao.push(`${tarefa.Nome} - ${tarefa.Duracao} minutos`);

    // Calculando a soma das durações
    somaDuracoes += tarefa.Duracao;
});

// Imprimindo os resultados
console.log("As tarefas com menos de 1 hora são: " + menos1hora.join(', '));
console.log(...nomeEDuracao); // Utilizando o operador spread para remover os colchetes
console.log("A soma das durações é: " + somaDuracoes + " minutos");
