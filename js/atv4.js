function touch() {
  var UserName = prompt("Olá! Qual seu nome?");
  if(UserName){
    document.getElementById("rockImg").src="img/rock_happy.png";
    alert("Prazer "+UserName)
  }

}
