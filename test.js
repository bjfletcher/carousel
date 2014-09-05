describe("carousel", function() {

    it("should be define", function() {
        expect(Carousel).toBeDefined();
    });

    it("should have buttons", function() {
        document.body.innerHTML = __html__['test.html'];
        expect(document.getElementById('xtitle-avengers1')).toBeDefined();
    });

});
