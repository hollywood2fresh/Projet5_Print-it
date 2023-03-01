const slides = [
	{
		"image":"slide1.jpg",
		"tagLine":"Impressions tous formats <span>en boutique et en ligne</span>"
	},
	{
		"image":"slide2.jpg",
		"tagLine":"Tirages haute définition grand format <span>pour vos bureaux et events</span>"
	},
	{
		"image":"slide3.jpg",
		"tagLine":"Grand choix de couleurs <span>de CMJN aux pantones</span>"
	},
	{
		"image":"slide4.png",
		"tagLine":"Autocollants <span>avec découpe laser sur mesure</span>"
	}
]

const imagesSlide = document.querySelectorAll('.banner-img')
const nombreSlide = imagesSlide.length
const suivant = document.querySelector('.arrow_right')
const precedent = document.querySelector('.arrow_left')
let count = 0

function slideSuivante() {
	imagesSlide[count].classList.remove('active');

	if(count < nombreSlide - 1){
		count ++;
	} else {
		count = 0;
	}
	imagesSlide[count].classList.add('active')
}
suivant.addEventListener('click', slideSuivante)


function slidePrecedente(){
	imagesSlide[count].classList.remove('active');

	if(count > 0){
		count --;
	} else {
		count = nombreSlide - 1;
	}

	imagesSlide[count].classList.add('active')
}
precedent.addEventListener('click', slidePrecedente)

