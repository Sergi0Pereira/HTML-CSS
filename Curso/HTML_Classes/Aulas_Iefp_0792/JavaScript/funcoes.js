function campeoes() {
  document.getElementById("campeoes").innerHTML = "Campeoes";
}

function imprime() {
  let jogadores = ["Otávio", "Uribe", "Diogo Costa", "Evanilson"];
  let msg = "Alguns Jogadores do Porto sao:<br><br> ";
  for (let j of jogadores) {
    msg += j + "<br>";
    alert(j);
  }
  document.getElementById("aqui").innerHTML = msg;
}

function pergunta() {
  let pergunta1 = "Como se chama?";
  prompt(pergunta1);
  document.getElementById("pergunta1").innerHTML = pergunta1;

}

