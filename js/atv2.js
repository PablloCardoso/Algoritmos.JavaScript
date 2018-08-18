function maiorIdade(){
  var idade = document.getElementById("ano");
  console.log(ano);
  var idade = 2018 - ano.value;
  console.log(idade);
////////Pegar o ano do sistema
var DataSistema = new Date();
var AnoSystema = DataSistema.getFullYear();
console.log(AnoSystema);
idade = AnoSystema - ano.value;
console.log("Você possui: "+idade);
}
