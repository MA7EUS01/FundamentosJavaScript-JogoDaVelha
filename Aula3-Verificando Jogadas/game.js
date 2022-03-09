function onLoad(){
    console.log("Script carregado.")
    console.log("Módulo carregado:", atulizarMostrador)
    console.log("Módulo carregado:", inicializarEspacos)


    const player1 ="X"
    const player2 = "O"
    var PlayerTime =  player1;
    var gameOver = false;

    atulizarMostrador();
    inicializarEspacos();


    function atulizarMostrador(){
        if(gameOver){
            return;
        }
        if(PlayerTime == player1){
            var player = document.querySelectorAll("div#mostrador img")[0];
            player.setAttribute("src", "imagens/X.png")
        }
        else{
                var player = document.querySelectorAll("div#mostrador img")[0];
                player.setAttribute("src", "imagens/O.png")
        }
        
    }

    function inicializarEspacos() {
      var espacos = document.getElementsByClassName("espaco");
      for (let i = 0; i < espacos.length; i++) {
        espacos[i].addEventListener("click", function (){
          if (gameOver){
            return;
          }
          if(this.getElementsByTagName("img").length == 0){
            if(PlayerTime == player1){
                this.innerHTML = "<img src='./imagens/X.png' height=75px>"
                this.setAttribute("jogada", player1)
                PlayerTime = player2
            }

            else{
                this.innerHTML = "<img src='./imagens/O.png' height=75px>"
                this.setAttribute("jogada", player2)
                PlayerTime = player1
            }
            atulizarMostrador();
            verificarVencedor();
          }
        });
      }
    }
     async function verificarVencedor(){
      
      var a1 = document.getElementById("a1").getAttribute("jogada");
      var a2 = document.getElementById("a2").getAttribute("jogada");
      var a3 = document.getElementById("a3").getAttribute("jogada");

      var b1 = document.getElementById("b1").getAttribute("jogada");
      var b2 = document.getElementById("b2").getAttribute("jogada");
      var b3 = document.getElementById("b3").getAttribute("jogada");

      var c1 = document.getElementById("c1").getAttribute("jogada");
      var c2 = document.getElementById("c2").getAttribute("jogada");
      var c3 = document.getElementById("c3").getAttribute("jogada");

      var vencedor = "";

      if((a1 == b1 && a1 == c1 && a1 != "")||(a1 == a2 && a3 == a1 && a1 != "")||(a1 == b2 && a1 == c3 && a1 != "")){
      vencedor = a1;}
      else if((b2 == b1 && b2 == b3 && b2 !="")||(b2 == a2 && b2 == c2 && b2 != ""||(b2 == a3 && b2 == c1 && b2 != ""))){
      vencedor = b2;}
      else if ((c3 == c2 && c3 == c1)||(c3 == a3 && c3 == b3) && c3 != ""){
      vencedor = c3;
      }
      if (vencedor != ""){
        gameOver = true;
        await sleep(500);

        mostrarresult();

        function mostrarresult(){
        let elementoHTML = window.document.getElementById("mostrarnatela")
        elementoHTML.innerHTML = `<div class="alert alert-success" role="alert">
        O vencedor foi: ${vencedor}.
      </div>`
        }
      }  
      function sleep(ms){
        return new Promise(resolve => setTimeout(resolve, ms))
      }
    }

}

window.onload = onLoad