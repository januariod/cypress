/// <reference types="cypress"/>

it('An external test', () => {});

describe('Should be a test group', () => {
  it('An internal test', () => {});

  it.skip('Also an internal test', () => {});

  describe('Should be a spec test', () => {
    it('A specific test', () => {});

    describe('Should be more specific', () => {
      it('More specific test', () => {});
    });
  });
});
