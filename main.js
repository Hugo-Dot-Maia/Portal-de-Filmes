window.onscroll = function() {myFunction()};

//Pega o Botão
var navbar = document.getElementById("navigation");

//Pega a posição inicial
var sticky = navbar.offsetTop;

//Adiciona a classe de fixação a barra de pesquisa
function myFunction() {
  if (window.pageYOffset >= sticky) {
    navbar.classList.add("sticky")
  } else {
    navbar.classList.remove("sticky");
  }
}


//Pega o Botão
 var mybutton = document.getElementById("myBtn");
 
// When the user clicks on the button, scroll to the top of the document
function topFunction() {
  document.body.scrollTop = 0; //  Safari
  document.documentElement.scrollTop = 0; // Chrome, Firefox, IE e Opera
}