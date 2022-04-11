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

function clube() {
  let clubes = [" Porto ", " Liverpool ", " Barcelona ", " Juventus "];
  clubes.sort(); // Ordena os elementos do arreio por ordem alfabetica
  clubes.reverse(); // Ordena os elementos do arreio de forma reversa
  document.getElementById("clube").innerHTML = clubes;
}

function numeros() {
  let numeros = [12, 13, 45, 6, 5, 9];
  numeros.sort(function (a, b) {
  return a - b;}); // Esta funçao é nativa do javaScript e coloca os numeros por ordem
  numeros.sort(function (a, b) {
  return a - b;}); // Esta funçao é nativa do javaScript e coloca os numeros por ordem reversa
  document.getElementById("numeros").innerHTML = numeros;

}

function nomes_numeros() {
  let numeros = [12, 13, 45, 6, 5, 9];
  let nomes = ["Joao", "Quintino", "Junior", "Sergio", "Wilson","Ana"]
  numeros.sort(function (a, b) {return a - b;});
  nomes.sort();
  let msg="";
  for(let i in numeros){
     msg+=numeros[i]+"- " +nomes[i]+ "<br>";
  }

  document.getElementById("numeros_nomes").innerHTML = msg;
}
