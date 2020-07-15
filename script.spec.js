describe('number of nestings', () => {
    it('should count number of nested objects', () => {
        expect(nestingDepth(languages)).to.equal(3);
    });

    it('should count number of nested objects', () => {
        const someObj = {
            a: {
                b: {
                    c: {
                        d: {
                            d: 4,
                        },
                    },
                    b: 2
                },
            },
            b: 1,
        }
        expect(nestingDepth(someObj)).to.equal(4);
    });

});


describe('number of discrepancies', () => {
    it('should count number of discrepancies', () => {
        expect(numberOfDiscrepancies(europe, eu)).to.equal(3);
    });

    it('should count number of discrepancies', () => {
        expect(numberOfDiscrepancies(europe, frenchSpeakingCountries)).to.equal(4);
    });
});