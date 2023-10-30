//-----VARIABLES----------

const divdots = document.querySelector(".dots");
const divImage = document.querySelector("#banner .banner-img");
const arrow_left = document.querySelector(".arrow_left");
const arrow_right = document.querySelector(".arrow_right");
const text = document.querySelector("#banner p");
let i = 0;
let allDots = [];

//---------TABLEAUX---------

const slides = [
  {
    image: "./assets/images/slideshow/slide1.jpg",
    tagLine: "Impressions tous formats <span>en boutique et en ligne</span>",
  },
  {
    image: "./assets/images/slideshow/slide2.jpg",
    tagLine:
      "Tirages haute définition grand format <span>pour vos bureaux et events</span>",
  },
  {
    image: "./assets/images/slideshow/slide3.jpg",
    tagLine: "Grand choix de couleurs <span>de CMJN aux pantones</span>",
  },
  {
    image: "./assets/images/slideshow/slide4.png",
    tagLine: "Autocollants <span>avec découpe laser sur mesure</span>",
  },
];

//--------CREATION DOTS--------------

function createDots(numberOfSlide) {
  for (let c = 0; c < numberOfSlide; c++) {
    let divDot = document.createElement("div");
    divDot.classList.add("dot");
    divdots.appendChild(divDot);
  }

  allDots = document.querySelectorAll(".dot");
  allDots[i].classList.add("dot_selected");

  
}

createDots(slides.length);

//--------click sur le  dot----------
let ok = () => {
  allDots.src = slides[i].image
  allDots.innerHTML = slides[i].tagLine
}
console.log(ok);

// ok.addEventListener("click", () => {

// })

let dotPointer = document.getElementsByClassName(".dot");
 

//---------événements au click des flèches-----------//
// divdots.classList.add("dot_selected")

arrow_right.addEventListener("click", () => {
  i++;

  if (i >= slides.length) {
    i = 0;
    allDots[i].classList.add("dot_selected");
    allDots[slides.length - 1].classList.remove("dot_selected");
  } else {
    allDots[i].classList.add("dot_selected");
    allDots[i - 1].classList.remove("dot_selected");
  }
  divImage.src = slides[i].image;
  text.innerHTML = slides[i].tagLine;

  
});

arrow_left.addEventListener("click", () => {
  i--;

  if (i < 0) {
    i = slides.length - 1;
    allDots[i].classList.add("dot_selected");
    allDots[0].classList.remove("dot_selected");
  } else {
    allDots[i].classList.add("dot_selected");
    allDots[i + 1].classList.remove("dot_selected");
  }

  divImage.src = slides[i].image;
  text.innerHTML = slides[i].tagLine;
});

// function linkDot() {
//   const dotPointer = document.getElementsByClassName(".dot");
//   console.log(dotPointer);

//   for (let d = 0; d < divdots; d++) {


//   }
// }
// linkDot();
