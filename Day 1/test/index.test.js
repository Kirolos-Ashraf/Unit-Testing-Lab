const expect = require("chai").expect;
const should = require("chai").should();
const assert = require("chai").assert;
const { capitalizeText, createArray } = require("../index");

describe("test capitalizeText ", function () {
  // expect style
  describe("expect style unit testing", function () {
    it("test that the function takes a string  it will return a string and return it after capitalization", function () {
      expect(capitalizeText("iti")).to.be.a("string").to.equal("ITI");
    });

    it("test if the function takes number it will throw type error says parameter should be string", function () {
      expect(function () {
        capitalizeText(3);
      }).to.throw(TypeError, "parameter should be string");
    });

    it.skip("test if the input iti , the returned value  will not equal to hello", function () {
      expect(capitalizeText("iti")).to.not.equal("hello");
    });
  });

  // assert style
  describe("assert style unit testing", function () {
    it("test that the function takes a string  it will return a string and return it after capitalization", function () {
      assert.isString(capitalizeText("iti"));
    });

    it("test that the function takes a string  it will return a string and return it after capitalization", function () {
      assert.equal(capitalizeText("iti"), "ITI");
    });

    it("test if the function takes number it will throw type error says parameter should be string", function () {
      assert.throw(function(){capitalizeText(2)}, TypeError, "parameter should be string");
    });

    it("test if the input iti , the returned value  will not equal to hello", function () {
      assert.notEqual(capitalizeText("iti"), "hello");
    });
  });

  // should style
  describe("should style unit testing", function () {
     it("test that the function takes a string  it will return a string and return it after capitalization", function () {
       capitalizeText('iti').should.be.a('string')
     });
 
     it("test that the function takes a string  it will return a string and return it after capitalization", function () {
       capitalizeText('iti').should.equal('ITI')
     });

     testThrowCase = ()=>{
          capitalizeText(3)
     }

     it("test if the function takes number it will throw type error says parameter should be string", function () {
          testThrowCase.should.throw(TypeError, "parameter should be string")
        });
 
     it("test if the input iti , the returned value  will not equal to hello", function () {
       capitalizeText('iti').should.not.equal('hello')
     });
   });
});

describe.only("test createArray", function () {
  var PassingNumber = 1;

  this.beforeEach(function () {
    PassingNumber++;
  });

  setTimeout(function () {
    it("test that the return value of type array", function () {
      expect(createArray(PassingNumber)).to.be.an("Array");
    });
  }, 5000);

  it("test if we pass 3 it will return array of length 3 and test it's include 1", function () {
    expect(createArray(PassingNumber)).to.have.lengthOf(2).that.includes(1);
  });
});
