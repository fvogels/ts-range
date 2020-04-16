/* tslint:disable */

import { expect } from 'chai';
import { sample } from '@/sample';

describe('sample', () => {
    it('should return greeting', () => {
        expect(sample()).to.be.equal("Hello world");
    });
});
