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
];


// permet de gérer les images du slider 
const bannerImg = document.querySelector('.banner-img');
const attribut = bannerImg.getAttribute('src');

// permet de gerer le texte du slider 
const bannerText = document.querySelector('#banner p');


const suivant = document.querySelector('.arrow_right');
const precedent = document.querySelector('.arrow_left');


let index = 0;

// 
function slideSuivant() {
	bannerImg.setAttribute('src', `./assets/images/slideshow/${slides[index].image}`);
	bannerText.innerHTML = slides[index].tagLine;
	if(index < slides.length - 1) {
		index++;
	} else {
		index = 0;
	}
	console.log(index);
};

suivant.addEventListener('click', slideSuivant)

function slidePrecedente() {
	bannerImg.setAttribute('src', `./assets/images/slideshow/${slides[index].image}`);
	bannerText.innerHTML = slides[index].tagLine;
	if(index > 0) {
		index--;
	} else {
		index = slides.length - 1;
	}
	console.log(index)
}
precedent.addEventListener('click', slidePrecedente)


const divPagination = document.querySelector('.dots');
const spanDot = document.createElement('span');
document.querySelector('.dots').appendChild(spanDot);
spanDot.classList.add('dot');

function dots() {

}

console.log(spanDot)