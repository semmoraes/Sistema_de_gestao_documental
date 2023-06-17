document.addEventListener("DOMContentLoaded", function () {
  var toggleButton = document.getElementById("toggle-menu");
  var menuLateral = document.querySelector(".menu-lateral");

  // Verifica se os elementos existem antes de adicionar manipuladores de eventos
  if (toggleButton && menuLateral) {
    toggleButton.addEventListener("click", function () {
      menuLateral.classList.toggle("escondido");

      // Verifica se o menu está escondido e ajusta o botão adequadamente
      if (menuLateral.classList.contains("escondido")) {
        toggleButton.classList.add("menu-escondido");
      } else {
        toggleButton.classList.remove("menu-escondido");
      }
    });
  }

  // Adiciona um ouvinte de evento de clique ao ícone de pesquisa
  var searchIcon = document.querySelector(".search-icon");
  var searchBox = document.querySelector(".search-box");
  if (searchIcon && searchBox) {
    searchIcon.addEventListener("click", function () {
      searchBox.style.display = "inline-block";
    });
  }

  // Adiciona um ouvinte de evento de clique ao ícone de login
  var loginIcon = document.querySelector(".login-icon");
  var userBox = document.querySelector(".user-box");
  if (loginIcon && userBox) {
    loginIcon.addEventListener("click", function () {
      userBox.style.display =
        userBox.style.display === "block" ? "none" : "block";
    });
  }

  // Adiciona ouvintes de eventos de clique aos botões para documentos e evidências
  var buttons = document.querySelectorAll(".btn btn-primary, .btn btn-success");
  buttons.forEach((button) => {
    button.addEventListener("click", function () {
      alert("Botão clicado!");
    });
  });
});

function validarForm() {
  var senha = document.getElementById("senha").value;
  var confirmarSenha = document.getElementById("confirmarSenha").value;

  if (senha !== confirmarSenha) {
    alert("As senhas não correspondem.");
    return false;
  }

  alert("Cadastro realizado com sucesso!");
  return true;
}

function validarLoginForm() {
  var email = document.getElementById("email").value;
  var senha = document.getElementById("senha").value;

  // Verifica se o email está no formato correto
  var regexEmail = /^\S+@\S+\.\S+$/;
  if (!regexEmail.test(email)) {
    alert("Por favor, insira um endereço de email válido.");
    return false;
  }

  // Verifica se a senha não está vazia
  if (senha === "") {
    alert("Por favor, insira sua senha.");
    return false;
  }

  return true;
}
