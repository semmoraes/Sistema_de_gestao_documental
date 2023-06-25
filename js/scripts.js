// insere linha para nas tebelas dos indicaodres
document.getElementById("addRow").addEventListener("click", function () {
  var tabela = document.querySelector("tbody");
  var newRow = document.createElement("tr");
  newRow.innerHTML = `
      <td>${tabela.rows.length + 1}</td>
      <td contenteditable="true">Novo indicador</td>
      <td contenteditable="true">Texto resumo</td>
      <td> <a href="link-para-documento" class="btn btn-primary btn-sm"><i class="fas fa-download"></i> Baixar Documento</a></td>
      <td> <a href="link-para-evidencias" class="btn btn-success btn-sm"><i class="fas fa-external-link-alt"></i> Acessar Evidências</a>
    </td>
      `;
  tabela.appendChild(newRow);
});

// Esclui linha da tabela dos indicadores
document.getElementById("removeRow").addEventListener("click", function () {
  var tabela = document.querySelector("tbody");
  if (tabela.rows.length > 0) {
    tabela.deleteRow(tabela.rows.length - 1);
  } else {
    alert("Não há linhas para remover!");
  }
});

// insere dados nas linhas das tabelas
document.getElementById("saveChanges").addEventListener("click", function () {
  var tabela = document.querySelector("tbody");
  var rows = tabela.querySelectorAll("tr");
  var data = [];
  rows.forEach(function (row) {
    var columns = row.querySelectorAll("td");
    var rowData = [];
    columns.forEach(function (column) {
      rowData.push(column.textContent);
    });
    data.push(rowData);
  });

  // Enviar os dados para o servidor ou salvar localmente
  console.log(data);
});

// Validação da página de cadastro
document
  .getElementById("registrationForm")
  .addEventListener("submit", function (event) {
    event.preventDefault();

    // Validação dos campos
    var firstName = document.getElementById("firstName").value;
    var lastName = document.getElementById("lastName").value;
    var email = document.getElementById("email").value;
    var password = document.getElementById("password").value;
    var confirmPassword = document.getElementById("confirmPassword").value;
    var role = document.getElementById("role").value;
    var emailError = document.getElementById("emailError");
    var passwordError = document.getElementById("passwordError");
    var confirmPasswordError = document.getElementById("confirmPasswordError");

    // Validação do email
    var emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) {
      emailError.textContent = "Email inválido";
      return;
    } else {
      emailError.textContent = "";
    }

    // Validação da senha
    var passwordRegex =
      /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*#?&])[A-Za-z\d@$!%*#?&]{6,}$/;
    if (!passwordRegex.test(password)) {
      passwordError.textContent =
        "A senha deve ter pelo menos 6 caracteres, uma letra maiúscula, uma letra minúscula, um número e um caracter especial";
      return;
    } else {
      passwordError.textContent = "";
    }

    // Validação da confirmação de senha
    if (password !== confirmPassword) {
      confirmPasswordError.textContent = "As senhas não correspondem";
      return;
    } else {
      confirmPasswordError.textContent = "";
    }

    // Caso todos os campos sejam válidos, redirecionar para a página index
    window.location.href = "index.html";
  });

// tela de login

document
  .getElementById("loginForm")
  .addEventListener("submit", function (event) {
    event.preventDefault();

    // Validação do email e senha
    var email = document.getElementById("email").value;
    var password = document.getElementById("password").value;

    // Validar o email e senha
    // ...

    // Redirecionar para a página index
    window.location.href = "index.html";
  });

function loginWithGoogle() {
  // Lógica para fazer login com o Google
  // ...
}

function loginWithFacebook() {
  // Lógica para fazer login com o Facebook
  // ...
}
