const { sum, positive } = require("../index");

describe("testing math utilities", () => {
  let pos_vals;
  let neg_vals;
  let vals;
  let sum_of_vals;

  beforeAll(function () {
    pos_vals = [2, 3, 5, 7];
    neg_vals = [-1, -3, -2, -5];
    vals = pos_vals.concat(neg_vals);
    sum_of_vals = vals.reduce((x, y) => x + y, 0);
  });

  beforeEach(function () {
    console.log(vals);
  });

  afterEach(function () {
    console.log("done");
  });

  afterAll(function () {
    pos_vals = 0;
    neg_vals = 0;
    vals = 0;
    sum_of_vals = 0;
  });

  // at before all assign pos vals with array of positive numbers,

  // and assign negative vals with negative array of numbers,

  // assign vals to pos_vals.concat(neg_vals);

  // assign  sum_of_vals to vals.reduce((x, y) => x + y, 0));

  // at before each console.log all vals

  // at after each console.log done

  // at after all set all variables to 0

  it("sum function should equal to sum of the values", () => {
    expect(sum(vals)).toEqual(sum_of_vals);
  });

  it("positive function should equal to positive values", () => {
    expect(positive(pos_vals)).toBeGreaterThan([0]);
  });
});

var counter = {
  currentValues: function () {
    return 1;
  },
};
function sumOfValues() {
  return counter.currentValues();
}

describe("mock and spy", function () {
  //spy on counter object currentValue property and mock its implementation to equal [100]
  // expect some of values is returning the right value (new mocked value 100) after mocking
  // and expect that we called the spy function for one time

  it("spying", function () {
    spyOn(counter, "currentValues").and.returnValue(100)
    expect(sumOfValues()).toEqual(100)

    expect(counter.currentValues).toHaveBeenCalledTimes(1)
  });

  // mock a function that takes any string and return number, call it twice and expect that it is called twice
  it("mocking", function () {

     
        counter.twice = jasmine.createSpy("name spy").and.returnValue(10) // create fake function function + spyOn
        console.log(counter.twice());
        counter.twice()
        expect(counter.twice).toHaveBeenCalledTimes(2)

  });
});
