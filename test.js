describe("carousel", function() {

    it("should be define", function() {
        expect(Carousel).toBeDefined();
    });

	it("should have an active slide", function() {
		document.body.innerHTML = __html__['test.html'];

		var el = document.querySelector('#hero');
		var carousel = new Carousel(el);
		carousel.init();

		var activeSlide = el.querySelector('.skycom-carousel-container > .active');

		expect(activeSlide).not.toBeNull();
	});

});
