export default class Slider {

	constructor() {
		this.index = 0
		this.oldIndex = this.index
		this.slides = [
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
		this.bannerPicture = document.querySelector(".banner-img")
		this.bannerText = document.querySelector("#banner p")
		this.addEventListenerNext()
		this.addEventListenerPrevious()
		this.showEmptyDots()
		this.showSelectDot()
	}

	addEventListenerNext() {
		const arrowNextSlide = document.querySelector('.arrow_right')
		arrowNextSlide.addEventListener('click', () => {
			this.showNextSlide()
		})
	}

	showNextSlide() {
		this.oldIndex
		if(this.index < this.slides.length - 1) {
			this.index++
		} else {
			this.index = 0
		}
		this.bannerPicture.setAttribute('src', `./assets/images/slideshow/${this.slides[this.index].image}`)
		this.bannerText.innerHTML = this.slides[this.index].tagLine
		this.showSelectDot()
        if(this.index >= 1) {
            this.oldIndex++
        } else {
            this.oldIndex = 0
        }
	}

	addEventListenerPrevious() {
		const arrowPreviousSlide = document.querySelector('.arrow_left')
		arrowPreviousSlide.addEventListener('click', () => {
			this.showPreviousSlide()
		})
	}

	showPreviousSlide() {
		this.oldIndex
		if(this.index > 0) {
			this.index--;
		} else {
			this.index = this.slides.length - 1;
		}
		this.bannerPicture.setAttribute('src', `./assets/images/slideshow/${this.slides[this.index].image}`);
		this.bannerText.innerHTML = this.slides[this.index].tagLine;
		this.showSelectDot()
        if(this.index > 2){
            this.oldIndex = 3
        }else {
            this.oldIndex--
        }
	}

	showEmptyDots() {
		let divDots = document.querySelector('.dots')

		for (let i = 0; i < this.slides.length; i++) {
			let span = document.createElement('span')
			span.classList.add('dot')
			divDots.append(span)
		}
	}

	showSelectDot() {
		let listSpan = document.querySelectorAll('.dot')
		listSpan[this.oldIndex].classList.remove('dot_selected')
		listSpan[this.index].classList.add('dot_selected')
	}
}
