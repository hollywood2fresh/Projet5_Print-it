import Slider from './slider.js'




























// const slides = [
// 	{
// 		"image":"slide1.jpg",
// 		"tagLine":"Impressions tous formats <span>en boutique et en ligne</span>"
// 	},
// 	{
// 		"image":"slide2.jpg",
// 		"tagLine":"Tirages haute définition grand format <span>pour vos bureaux et events</span>"
// 	},
// 	{
// 		"image":"slide3.jpg",
// 		"tagLine":"Grand choix de couleurs <span>de CMJN aux pantones</span>"
// 	},
// 	{
// 		"image":"slide4.png",
// 		"tagLine":"Autocollants <span>avec découpe laser sur mesure</span>"
// 	}
// ];


// class Slider {

// 	constructor() {
// 		this.index = 0
// 		this.oldIndex = this.index
// 		this.slides = [
// 			{
// 				"image":"slide1.jpg",
// 				"tagLine":"Impressions tous formats <span>en boutique et en ligne</span>"
// 			},
// 			{
// 				"image":"slide2.jpg",
// 				"tagLine":"Tirages haute définition grand format <span>pour vos bureaux et events</span>"
// 			},
// 			{
// 				"image":"slide3.jpg",
// 				"tagLine":"Grand choix de couleurs <span>de CMJN aux pantones</span>"
// 			},
// 			{
// 				"image":"slide4.png",
// 				"tagLine":"Autocollants <span>avec découpe laser sur mesure</span>"
// 			}
// 		];
// 		this.bannerPicture = document.querySelector(".banner-img")
// 		this.bannerText = document.querySelector("#banner p")
// 		this.addEventListenerNext()
// 		this.addEventListenerPrevious()
// 		this.showEmptyDots()
// 		this.showSelectDot(0,0)
// 	}

// 	addEventListenerNext() {
// 		const arrowNextSlide = document.querySelector('.arrow_right')
// 		arrowNextSlide.addEventListener('click', () => {
// 			this.showNextSlide()
// 		})
// 	}

// 	showNextSlide() {
// 		this.oldIndex
// 		if(this.index < this.slides.length - 1) {
// 			this.index++
// 		} else {
// 			this.index = 0
// 		}
// 		this.bannerPicture.setAttribute('src', `./assets/images/slideshow/${this.slides[this.index].image}`)
// 		this.bannerText.innerHTML = this.slides[this.index].tagLine
// 		this.showSelectDot(this.oldIndex, this.index)
// 		console.log(this.index)
// 	}

// 	addEventListenerPrevious() {
// 		const arrowPreviousSlide = document.querySelector('.arrow_left')
// 		arrowPreviousSlide.addEventListener('click', () => {
// 			this.showPreviousSlide()
// 		})
// 	}

// 	showPreviousSlide() {
// 		this.oldIndex
// 		if(this.index > 0) {
// 			this.index--;
// 		} else {
// 			this.index = this.slides.length - 1;
// 		}
// 		this.bannerPicture.setAttribute('src', `./assets/images/slideshow/${this.slides[this.index].image}`);
// 		this.bannerText.innerHTML = this.slides[this.index].tagLine;
// 		this.showSelectDot(this.oldIndex, this.index)
// 		console.log(this.index)
// 	}

// 	showEmptyDots() {
// 		let divDots = document.querySelector('.dots')

// 		for (let i = 0; i < this.slides.length; i++) {
// 			let span = document.createElement('span')
// 			span.classList.add('dot')
// 			divDots.append(span)
// 		}
// 		console.log(divDots);
// 	}

// 	showSelectDot(oldIndex, index) {
// 		let listSpan = document.querySelectorAll('.dot')
// 		listSpan[oldIndex].classList.remove('dot_selected')
// 		listSpan[index].classList.add('dot_selected')
// 		console.log(listSpan)
// 	}

// }

// let slider = new Slider()

// console.log(slider)













// // permet de gérer les images du slider 
// const bannerImg = document.querySelector('.banner-img');

// // permet de gerer le texte du slider 
// const bannerText = document.querySelector('#banner p');


// const suivant = document.querySelector('.arrow_right');
// const precedent = document.querySelector('.arrow_left');


// let index = 0;


// function slideSuivant() {
// 	let oldIndex = index
// 	if(index < slides.length - 1) {
// 		index++;
// 	} else {
// 		index = 0;
// 	}
// 	bannerImg.setAttribute('src', `./assets/images/slideshow/${slides[index].image}`);
// 	bannerText.innerHTML = slides[index].tagLine;
// 	console.log(index);
// 	afficherPointSelectionne(oldIndex, index)
// };
// suivant.addEventListener('click', slideSuivant)

// function slidePrecedente() {
// 	let oldIndex = index
// 	if(index > 0) {
// 		index--;
// 	} else {
// 		index = slides.length - 1;
// 	}
// 	bannerImg.setAttribute('src', `./assets/images/slideshow/${slides[index].image}`);
// 	bannerText.innerHTML = slides[index].tagLine;
// 	console.log(index)
// 	afficherPointSelectionne(oldIndex, index)
// }
// precedent.addEventListener('click', slidePrecedente)



// function afficherPointsVides() {
// 	let divDots = document.querySelector('.dots')

// 	for (let i = 0; i < slides.length; i++) {
// 		let span = document.createElement('span')
// 		span.classList.add('dot')
// 		divDots.append(span)
// 	}
// 	console.log(divDots);
// }

// afficherPointsVides()

// function afficherPointSelectionne(oldIndex, index) {
// 	let listSpan = document.querySelectorAll('.dot')
// 	listSpan[oldIndex].classList.remove('dot_selected')
// 	listSpan[index].classList.add('dot_selected')
// 	console.log(listSpan)
// }

// afficherPointSelectionne(0,0)



// const timer = setInterval(() => {
// 	slideSuivant()
// }, 2000)


// for (let i = 0; i < slides.length; i++) {
//     suivant[i].addEventListener('click', () => {
//         clearInterval(interval);
//         slide(i);
//         imgId = i + 1;
//         interval = setInterval (autoSlide, 4000);
//     })
// }


// function reasetIntervalAutomatique() {
// 	if(index + 1) {
// 		clearInterval(timer)
// 	}

// }



/*
class Slider {

	constructor() {
		this.index = 0
		// permet de gérer les images du slider 
		this.bannerImg = document.querySelector('.banner-img');

		// permet de gerer le texte du slider 
		this.bannerText = document.querySelector('#banner p');

		this.initialiserAddEventListnerSuivant()
		this.initialiserAddEventListnerPrecedent()
		this.afficherPointsVides()
		this.afficherPointSelectionne(0,0)
	}

	initialiserAddEventListnerSuivant() {
		const suivant = document.querySelector('.arrow_right');
		suivant.addEventListener('click', () => {
			this.afficherSlideSuivant()
		})
	}

	initialiserAddEventListnerPrecedent() {
		const precedent = document.querySelector('.arrow_left');
		precedent.addEventListener('click', () => {
			this.afficherSlidePrecedente()
		})
	}

	afficherSlideSuivant() {
		let oldIndex = this.index
		if(this.index < slides.length - 1) {
			this.index++;
		} else {
			this.index = 0;
		}
		this.bannerImg.setAttribute('src', `./assets/images/slideshow/${slides[this.index].image}`);
		this.bannerText.innerHTML = slides[this.index].tagLine;
		console.log(this.index);
		this.afficherPointSelectionne(oldIndex)
	}

	afficherSlidePrecedente() {
		let oldIndex = this.index
		if(this.index > 0) {
			this.index--;
		} else {
			this.index = slides.length - 1;
		}
		this.bannerImg.setAttribute('src', `./assets/images/slideshow/${slides[this.index].image}`);
		this.bannerText.innerHTML = slides[this.index].tagLine;
		console.log(this.index)
		this.afficherPointSelectionne(oldIndex, index)
	}

	afficherPointsVides() {
		let divDots = document.querySelector('.dots')

		for (let i = 0; i < slides.length; i++) {
			let span = document.createElement('span')
			span.classList.add('dot')
			divDots.append(span)
		}
		console.log(divDots);
	}

	afficherPointSelectionne(oldIndex, index) {
		let listSpan = document.querySelectorAll('.dot')
		listSpan[oldIndex].classList.remove('dot_selected')
		listSpan[this.index].classList.add('dot_selected')
		console.log(listSpan)
	}
}

let slider = new Slider()
*/