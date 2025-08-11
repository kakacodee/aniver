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
        alert("Espero que goste 💖")
    } else {
        music.pause();
        btnimg.src = "img/play-button (3).png"
    }
}
document.addEventListener('DOMContentLoaded', function () {
  const slideshow = document.getElementById('slideshow');
  const slides = document.querySelectorAll('.slide');
  let index = 0;
  const total = slides.length;

  function next() {
    index = (index + 1) % total;
    slideshow.style.transform = `translateX(-${index * 100}%)`;
  }

  setInterval(next, 3000); // troca a cada 3s
});