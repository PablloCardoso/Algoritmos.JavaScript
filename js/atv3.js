function ParOuImpar() {
  var valor = document.getElementById("numero");
  if((valor.value % 2)==0){
    alert("Número "+valor.value+" é Par!");
  }else{
    alert("Número "+valor.value+" é Ímpar!");
  }
}
