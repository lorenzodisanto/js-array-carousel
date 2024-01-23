const slidesContainerEl = document.getElementById("slides-container");
const arrowNextEl = document.querySelector(".arrow-next");
const arrowPreviousEl = document.querySelector(".arrow-previous");

// DEFINISCO ARRAY E GENERO SLIDES
const slides = ["01.webp", "02.webp", "03.webp", "04.webp", "05.webp"];

let imgIndex = 0;

let slidesHtml = "";
for (let i = 0; i < slides.length; i++) {
  const slide = slides[i];
  let activeClass;
  if (i == imgIndex) {
    activeClass = "active";
  } else {
    activeClass = "";
  }
  slidesHtml += `<img src="./img/${slide}" class="slide ${activeClass}" alt="slide ${
    i + 1
  }" />`;
}
slidesContainerEl.innerHTML = slidesHtml;

// PULSANTE AVANTI
arrowNextEl.addEventListener("click", function () {
  slideNext();
});

// PULSANTE INDIETRO
arrowPreviousEl.addEventListener("click", function () {
  slidePrevious();
});

// SLIDE SUCCESSIVA OGNI 3 SECONDI
let clock = setInterval(function () {
  slideNext();
}, 3000);

// BLOCCO SCORRIMENTO AUTOMATICO
slidesContainerEl.addEventListener("mouseover", function () {
  clearInterval(clock);
});

// RIPRENDO SCORRIMENTO AUTOMATICO
slidesContainerEl.addEventListener("mouseleave", function () {
  clock = setInterval(function () {
    slideNext();
  }, 3000);
});

// FUNZIONE SLIDE SUCCESSIVA
function slideNext() {
  const allSlides = document.getElementsByClassName("slide");

  const oldSlide = allSlides[imgIndex];
  oldSlide.classList.remove("active");

  if (imgIndex >= allSlides.length - 1) {
    imgIndex = 0;
  } else {
    imgIndex++;
  }

  const newSlide = allSlides[imgIndex];
  newSlide.classList.add("active");
}

// FUNZIONE SLIDE PRECEDENTE
function slidePrevious() {
  const allSlides = document.getElementsByClassName("slide");

  const oldSlide = allSlides[imgIndex];
  oldSlide.classList.remove("active");

  if (imgIndex <= 0) {
    imgIndex = allSlides.length - 1;
  } else {
    imgIndex--;
  }

  const newSlide = allSlides[imgIndex];
  newSlide.classList.add("active");
}
