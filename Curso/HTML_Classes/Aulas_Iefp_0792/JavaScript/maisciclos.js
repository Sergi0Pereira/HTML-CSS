let m=0;


function media (bt) {
    if (bt == "para") {
      document.getElementById("fim").innerHTML = "Fim do Programa";
      document.getElementById("media").innerHTML = "";
      soma=0;
      contador=0;
    }else {
      document.getElementById("fim").innerHTML = "";
      while (bt == "num") {
        let n = parseInt(document.getElementById("nota").value);
        soma += n;
        contador++;
        break;
        if (bt == "para") {
          
      }

      document.getElementById("nota").value = "";
      document.getElementById("nota").focus(); //  coloca o apontador na caixa
      let m = soma / contador;
      
    }
}
