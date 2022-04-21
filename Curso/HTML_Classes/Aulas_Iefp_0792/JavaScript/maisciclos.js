let soma = 0,
  contador = 0,
  med = 0;

function media(botao) {
  document.getElementById("media").innerHTML = "";

  while (botao == "num") {
    let notatxt = document.getElementById("nota");
    let nota = Number(notatxt.value);
    soma += nota;
    contador++;
    med = soma / contador;
    document.getElementById("nota").value = ""; // Faz reset à caixa de texto
    document.getElementById("nota").focus(); //  Coloca o apontador na caixa
    break;
  }

  if (botao == "para") {
    document.getElementById("media").innerHTML =
      "Fim do Programa.<br><br>Inseriu " +
      contador +
      " números e a sua média é de: " +
      med;
    soma = 0;
    contador = 0;
    med = 0;
  }
}
