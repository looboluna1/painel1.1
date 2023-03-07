function logar() {
    var user = document.getElementById("user").value
    var password = document.getElementById("senha").value

if (user == "admin" && password == "admin") {
    alert("Voce e um Admin");
  } else if (user == "gusta" && password == "gusta") {
    alert("voce e um usuario");
  } else {
    alert("usario ou senha incorreto");
  }
}