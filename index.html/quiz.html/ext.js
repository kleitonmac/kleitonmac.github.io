// Banco de perguntas do quiz
const quizData = [
    {
        question: "Qual é a capital da França?",
        options: ["Madrid", "Berlim", "Paris", "Lisboa"],
        correct: 3
    },
    {
        question: "Qual é o maior planeta do Sistema Solar?",
        options: ["Terra", "Júpiter", "Marte", "Saturno"],
        correct: 2
    },
    {
        question: "Qual é o elemento químico simbolizado por 'O'?",
        options: ["Ouro", "Oxigênio", "Osmium", "Olíbdeno"],
        correct: 2
    },
    {
        question: "Quem pintou a Mona Lisa?",
        options: ["Michelangelo", "Vincent van Gogh", "Leonardo da Vinci", "Claude Monet"],
        correct: 3
    }
];

// Estado do quiz
let currentQuestionIndex = 0;
let score = 0;

// Função para carregar a pergunta e as opções de resposta
function renderQuestion() {
    const currentQuestion = quizData[currentQuestionIndex];
    document.getElementById('quiz-question').textContent = currentQuestion.question;
    
    // Renderiza cada opção de resposta
    currentQuestion.options.forEach((option, index) => {
        document.getElementById(`option${index + 1}Text`).textContent = option;
    });
    
    // Desmarcar todas as opções de resposta
    document.querySelectorAll('input[name="question"]').forEach(input => input.checked = false);
    document.getElementById('result').textContent = '';  // Limpar resultado anterior
}

// Função para verificar a resposta selecionada
function verifyAnswer() {
    const selectedOption = document.querySelector('input[name="question"]:checked');

    // Verifica se alguma opção foi selecionada
    if (!selectedOption) {
        document.getElementById('result').innerHTML = '<span style="color:lightcoral;">Por favor, selecione uma resposta.</span>';
        return false;
    }

    const selectedAnswerIndex = parseInt(selectedOption.value);
    const correctAnswerIndex = quizData[currentQuestionIndex].correct;

    // Atualiza a pontuação e exibe o resultado
    if (selectedAnswerIndex === correctAnswerIndex) {
        score++;
        document.getElementById('result').innerHTML = '<span style="color:lightgreen;">Correto!</span>';
    } else {
        document.getElementById('result').innerHTML = '<span style="color:lightcoral;">Incorreto!</span>';
    }

    return true;
}

// Evento de clique no botão "Próximo"
document.getElementById('nextBtn').addEventListener('click', function () {
    if (verifyAnswer()) {
        currentQuestionIndex++;
        
        // Verifica se ainda há perguntas restantes
        if (currentQuestionIndex < quizData.length) {
            renderQuestion();
        } else {
            document.getElementById('quiz-question').textContent = `Você completou o quiz! Sua pontuação é ${score}/${quizData.length}.`;
            document.getElementById('nextBtn').style.display = 'none';  // Esconde o botão "Próximo"
            
            // Esconde as opções de resposta
            document.querySelectorAll('.quiz-options input').forEach(input => input.style.display = 'none');
        }
    }
});

// Evento de clique no botão "Sair"
document.getElementById('exitBtn').addEventListener('click', function () {
    window.location.href = "https://www.google.com"; // Alterar para o link desejado
});

// Inicializa o quiz carregando a primeira pergunta
renderQuestion();
