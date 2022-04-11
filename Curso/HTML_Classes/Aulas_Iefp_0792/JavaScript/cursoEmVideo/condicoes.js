function radar() {

  var veltxt = document.getElementById("veltxt");
  var vel = Number(veltxt.value); // nao esquecer o .value para o js assumir o valor!!
  var res = document.getElementById("res");

  if (vel > 60) 
  res.innerHTML = "Voce foi multado!";

  else 
  res.innerHTML = "Muito bem!Pode seguir a sua viagem.";

}
