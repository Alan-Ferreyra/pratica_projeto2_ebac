const form = document.getElementById("form-listatelefonica");
let numeros = "";

form.addEventListener("submit", function (e) {
  e.preventDefault();
  adicionaEAtt();
});

function adicionaEAtt() {
  const nomeContato = document.getElementById("nome-contato").value;
  const numeroContato = parseInt(
    document.getElementById("numero-contato").value
  );

  let numero = "<tr>";
  numero += `<td>${nomeContato}</td>`;
  numero += `<td>${numeroContato}</td>`;
  numero += "</tr>";
  numeros += numero;

  const corpoTabela = document.querySelector("tbody");
  corpoTabela.innerHTML = numeros;
}
