//-----VARIABLES----------

const divdots = document.querySelector(".dots");
const divImage = document.querySelector("#banner .banner-img");
const arrow_left = document.querySelector(".arrow_left");
const arrow_right = document.querySelector(".arrow_right");
const text = document.querySelector("#banner p");
let i = 0;

//---------TABLEAUX---------

const slides = [
  {
    image: "../assets/images/slideshow/slide1.jpg",
    tagLine: "Impressions tous formats <span>en boutique et en ligne</span>",
  },
  {
    image: "../assets/images/slideshow/slide2.jpg",
    tagLine:
      "Tirages haute définition grand format <span>pour vos bureaux et events</span>",
  },
  {
    image: "../assets/images/slideshow/slide3.jpg",
    tagLine: "Grand choix de couleurs <span>de CMJN aux pantones</span>",
  },
  {
    image: "../assets/images/slideshow/slide4.png",
    tagLine: "Autocollants <span>avec découpe laser sur mesure</span>",
  },
];

//--------CREATION DOTS--------------

function createDots(numberOfSlide) {
  for (let c = 0; c < numberOfSlide; c++) {
    let divDot = document.createElement("div");
    divDot.classList.add("dot");
    divdots.appendChild(divDot);

  
    // slides.forEach((i) => {
    //   divDot.classList.add("dot_selected")

      
    // });
}  
}

createDots(slides.length);

//---------événements au click des flèches-----------//
// divdots.classList.add("dot_selected")


arrow_right.addEventListener("click", () => {
  i++;
  if (i === 4) {
    i = 0;  
  }
 
  divImage.src = slides[i].image;
  text.innerHTML = slides[i].tagLine;
});


arrow_left.addEventListener("click", () => {
  i--; 
  if (i < 0) {
     i = slides.length - 1
  
  }
  divImage.src = slides[i].image;
  text.innerHTML = slides[i].tagLine;
  
});
