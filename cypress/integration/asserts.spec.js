/// <reference types='cypress'/>

it('Equality', () => {
  const a = 1;

  expect(a, 'Deveria ser 1').equal(1);
  expect(a).equal(1);
  expect(a).equal(1);
  expect(a).to.equal(1);
  expect(a).to.be.equal(1);
  expect(a).not.to.be.equal('');
});

it('Truthy', () => {
  const a = true;
  const b = null;
  let c;

  expect(a).to.be.true;
  expect(a).not.to.be.false;
  expect(b).to.be.null;
  expect(b).not.to.undefined;
  expect(c).to.be.undefined;
  expect(c).not.to.be.equal('');
});

it('Object equality', () => {
  const obj = {
    a: 1,
    b: 2,
  };

  expect(obj).to.be.eq(obj);
  expect(obj).to.be.eqls(obj);
  expect(obj).to.be.equal(obj);
  expect(obj).to.be.equals(obj);
  expect(obj).to.be.eq(obj);
  expect(obj).to.be.eq(obj);

  expect(obj).to.be.eql({ a: 1, b: 2 });
  expect(obj).to.be.deep.equal({ a: 1, b: 2 });

  expect(obj).to.be.include({ a: 1 });

  expect(obj).to.be.have.property('a');
  expect(obj).to.be.have.property('a', 1);
  expect(obj).not.to.be.empty;
  expect({}).to.be.empty;
});

it('Arrays', () => {
  const array = [1, 2, 3];

  expect(array).to.have.members([1, 2, 3]);
  expect(array).to.include.members([1, 3]);
  expect(array).not.to.be.empty;
  expect([]).to.be.empty;
});

it('Types', () => {
  const num = 1;
  const str = 'text';

  expect(num).to.be.a('number');
  expect(str).to.be.a('string');
  expect({}).to.be.an('object');
  expect([]).to.be.an('array');
});

it('Strings', () => {
  const str = 'String de teste';

  expect(str).to.be.equal('String de teste');
  expect(str).to.have.length('15');
  expect(str).to.contains('de');
  expect(str).to.match(/de/);
  expect(str).to.match(/^String/);
  expect(str).to.match(/teste$/);
  expect(str).to.match(/.{15}/);
  expect(str).to.match(/\w+/);
  expect(str).to.match(/\D+/);
});

it('Numbers', () => {
  const num = 4;
  const floatNum = 5.23456;

  expect(num).to.be.equal(4);
  expect(num).to.be.above(3);
  expect(num).to.be.below(5);
  expect(floatNum).to.be.equal(5.23456);
  expect(floatNum).to.be.closeTo(5.2, 0.1);
  expect(floatNum).to.be.above(5);
});
