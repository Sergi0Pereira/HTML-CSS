//var a = document.getElementById("area"); Colocada aqui fora ficamos com a funcionalidade de a chamar sempe que quiseremos dentro deuma funcao , no entanto nao é recomendado devido a problemas de memória

let a = document.getElementById("area");

a.addEventListener('click', clicar);
a.addEventListener("mouseenter", entrou);
a.addEventListener("mouseout", saiu);

// para os eventListeners funcionarem a variavel tem de estar fora das funçoes 

function clicar() {
  let a = document.getElementById("area");
  a.innerText = "Clicou!";
  a.style.background = "#6E2F24";
}

function entrou() {
  let a = document.getElementById("area");
  a.innerText = "Entrou!";
  a.style.background = "#516E0E";
}

function saiu() {
  let a = document.getElementById("area");
  a.innerText = "Saiu!";
  a.style.background = "#19376E";
}

function somar() {
    var txt1 =document.getElementById("cx1")
    var txt2 = document.querySelector("input#cx2")
    var res = document.getElementById('res')
    var n1 = Number(txt1.value)
    var n2 = Number(txt2.value)
    var s= n1 + n2
    res.innerHTML = `A soma entre ${n1} e ${n2} é igual a ${s}.` 
  

}
