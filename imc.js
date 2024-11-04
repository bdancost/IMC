const calcular = document.getElementById("calcular");

function imc() {
  const nome = document.getElementById("name").value;
  const altura = document.getElementById("altura").value;
  const peso = document.getElementById("peso").value;
  const resultado = document.getElementById("resultado");

  if (nome !== "" && altura !== "" && peso !== "") {
    const valorIMC = (peso / (altura * altura)).toFixed(2);

    let classificacao = "";

    if (valorIMC < 18.5) {
      classificacao = "abaixo do peso";
    } else if (valorIMC < 25) {
      classificacao = "com peso ideal. Parabéns!!";
    } else if (valorIMC < 30) {
      classificacao = "levemente acima do peso";
    } else if (valorIMC < 35) {
      classificacao = "com obesidade grau I.";
    } else if (valorIMC < 40) {
      classificacao = "com obesidade grau II. Cuidado!";
    } else {
      classificacao = "com obesidade grau III. Cuidado!!";
    }

    resultado.textContent = `${nome} seu IMC é ${valorIMC} e você esta ${classificacao}!`;
  } else {
    resultado.textContent = "Preencha todos os campos!!!";
  }
}

function limpar() {
  document.getElementById("name").value = "";
  document.getElementById("altura").value = "";
  document.getElementById("peso").value = "";
  document.getElementById("resultado").textContent = "";
}

calcular.addEventListener("click", imc);

// Adiciona a funcioanalidade de calcular com Enter e limpar com Space
document.addEventListener("keydown", function (event) {
  if (event.key === "Enter") {
    imc();
  } else if (event.key === " ") {
    event.preventDefault();
    limpar(); // Limpa os campos
  }
});

// Cria uma mensagem informativa e adiciona ao documento
function exibirMensagemOrientacao() {
  const mensagem = document.createElement("p");
  mensagem.id = "mensagem-orientacao";
  mensagem.textContent = "Pressione a tecla Space para limpar os dados.";
  mensagem.style.color = "#555";
  mensagem.style.fontSize = "0.9em";
  mensagem.style.marginTop = "10px";

  // Adiciona a mensagem abaixo do campo de resultado
  const resultado = document.getElementById("resultado");
  resultado.parentNode.insertBefore(mensagem, resultado.nextSibling);
}

exibirMensagemOrientacao();

// Cria um fundo que cobre toda a tela
function adicionarFundo() {
  const fundo = document.createElement("div");
  fundo.id = "fundo";
  document.body.appendChild(fundo);

  // Estilo do fundo
  fundo.style.position = "fixed";
  fundo.style.top = "0";
  fundo.style.left = "0";
  fundo.style.width = "100vw";
  fundo.style.height = "100vh";
  fundo.style.backgroundColor = "#f0f0f0"; // Cor de fundo desejada
  fundo.style.zIndex = "-1"; // Coloca o fundo atrás do conteúdo
}

adicionarFundo();
