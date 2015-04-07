describe("titleCase", function() {
    it("capitalizes the first letter of a word", function() {
        expect(titleCase("cat")).to.equal("Cat");
    });

    it("keeps the first letter of word capitalized if it already is capitalized", function() {
        expect(titleCase("Cat")).to.equal("Cat");
    });

    it("capitalizes the first letter of each word in a two-word string", function() {
        expect(titleCase("cat hat")).to.equal("Cat Hat");
        });
});
