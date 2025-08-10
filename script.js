const music = document.getElementById('bgm');
const musicButton = document.getElementsByClassName('button');
const btnimg = document.getElementById('play');

function Music(){
    if (music.paused) {
        music.play()
        //diminuindo o volume
        //mudar a imagem do botão
        btnimg.src = "img/pause.png"
        //ajustar o volume de verdade
        music.volume = 0.1// Ajuste o volume conforme necessário
        music.muted = false // Garantir que o som não esteja mudo  
        alert("💖 Role a página")
    } else {
        music.pause();
        btnimg.src = "img/play-button (3).png"
    }
}