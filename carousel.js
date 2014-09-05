var Carousel = function(el) {
	this.el = el;
};

Carousel.prototype = {
	constructor: Carousel,
	init: function() {
		var slide = this.el.querySelector('.skycom-carousel-container > .slide:nth-child(1)');
		if (slide.classList) {
			slide.classList.add('active');
		} else {
			slide.className += ' active';
		}
	}
};
