//Pega o Botão
var navbar = document.getElementById("navigation");

window.onscroll = function() {myFunction()};



//Pega a posição inicial
var sticky = navbar.offsetTop;

//Adiciona a classe de fixação a barra de pesquisa

const myFun = () => {
  if (window.pageYOffset >= sticky) {
    navbar.classList.add("sticky")
  } else {
    navbar.classList.remove("sticky");
  }
}

//aleatório

//Pega o Botão
 //var mybutton = document.getElementById("myBtn");
 
// Função que volta ao início da página
function topFunction() {
  document.body.scrollTop = 0; //  Safari
  document.documentElement.scrollTop = 0; // Chrome, Firefox, IE e Opera
}