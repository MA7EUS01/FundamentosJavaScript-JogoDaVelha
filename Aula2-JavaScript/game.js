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
          }
        });
      }
    }


}
window.onload = onLoad