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
let slideIndex = 0;
let slideInterval;

function showSlides() {
  let slides = document.getElementsByClassName("mySlides");
  let dots = document.getElementsByClassName("dot");

  for (let i = 0; i < slides.length; i++) {
    slides[i].style.display = "none";
  }

  slideIndex++;
  if (slideIndex > slides.length) {slideIndex = 1}

  for (let i = 0; i < dots.length; i++) {
    dots[i].className = dots[i].className.replace(" active", "");
  }

  slides[slideIndex-1].style.display = "block";
  dots[slideIndex-1].className += " active";
}

// Muda automaticamente a cada 3 segundos
function startSlideShow() {
  showSlides();
  slideInterval = setInterval(showSlides, 3000);
}

// Controle manual
function plusSlides(n) {
  clearInterval(slideInterval);
  slideIndex += n - 1;
  showSlides();
  slideInterval = setInterval(showSlides, 3000);
}

function currentSlide(n) {
  clearInterval(slideInterval);
  slideIndex = n - 1;
  showSlides();
  slideInterval = setInterval(showSlides, 3000);
}

// Inicia o slide
startSlideShow();