/* tslint:disable */

import { expect } from 'chai';
import { range } from '@/range';

describe('range', function () {
    it(`should return array with values from 'from' to 'until' (exclusive)`, function () {
        expect(range(1, 10)).to.be.eql([1, 2, 3, 4, 5, 6, 7, 8, 9]);
    });

    it('should take into account step', function () {
        expect(range(1, 10, 3)).to.be.eql([1, 4, 7]);
    });

    it(`should return empty array if 'from' is not less than 'until' and 'step' is positive`, function () {
        expect(range(8, 2, 1)).to.be.eql([]);
    });

    it(`should allow negative step`, function () {
        expect(range(8, 2, -1)).to.be.eql([8, 7, 6, 5, 4, 3]);
    });
});
