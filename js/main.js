// const campos = document.querySelectorAll(".required");

function calcularDolar() {
  let real = document.getElementById("input-real").value; // Essa variável guarda o valor em real digitado pelo usuário
  let dolar = document.getElementById("input-dolar").value; // Variável guarda valor do dólar digitado pelo usuário

  let resultado = real / dolar; // variável guarda o valor do resultado

  dolares.innerHTML = "$" + resultado; // Insere o valor do resultado

  alert("O resultado é $ " + resultado + " dólares");
}
