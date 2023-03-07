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
// bannerImg.setAttribute('src', `./assets/images/slideshow/${slides[0].image}`);


// permet de gerer le texte du slider 
const bannerText = document.querySelector('#banner p');
// bannerText.innerHTML = slides[0].tagLine


const suivant = document.querySelector('.arrow_right');
const precedent = document.querySelector('.arrow_left');


let index = 0;


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


// slides < slides.length - 1