// Unit tests for the helloWorld function
describe('helloWorld', function() {
    it('should be a defined function', function() {
      expect(typeof helloWorld).toBe('function');
    });
    it('should return a string when called', function() {
      expect(typeof helloWorld()).toBe("string");
    });
    it('should return the string "Hello, World!" when executed', function() {
      expect(helloWorld()).toBe("Hello, World!");
    });
    it("should never return 'undefined' when called", function() {
      expect(helloWorld()).not.toBe(undefined);
    });
});

describe( 'sayHello', function() {
    it('should be a defined function', function () {
        expect(typeof sayHello).toBe('function');
    });
    it('should return a string when called', function() {
        expect(typeof sayHello()).toBe("string");
    });
    it('should return string "Hello, Jane!" when executed', function() {
        expect(sayHello("Jane")).toBe('Hello, Jane!')
    });
    it('should return string "Hello, Alex!" when Alex is the input', function(){
        expect(sayHello("Alex")).toBe("Hello, Alex!")
    });
    it('should return string "Hello, Pat!" when Pat is the input', function(){
        expect(sayHello("Pat")).toBe("Hello, Pat!")
    });
    it('should return "Hello, World!" when executed with no input', function(){
        expect(sayHello()).toBe("Hello, World!")
    });
    it('should return "Hello, World!" when executed with true', function(){
        expect(sayHello(true)).toBe("Hello, World!")
    });
    it('should return "Hello, World!" when executed with false', function() {
        expect(sayHello(false)).toBe("Hello, World!")
    });
})
describe( 'isFive', function() {
    it('should be a defined function', function () {
        expect(typeof isFive).toBe('function');
    });
    it('should return false when a 4 is executed', function() {
        expect(isFive(4)).toBe(false)
    });
    it('should return false when a string of 4 is executed', function() {
        expect(isFive('4')).toBe(false)
    });
    it('should return true when a 5 is executed', function() {
        expect(isFive(5)).toBe(true)
    });
})

describe( 'isEven', function() {
    it('should be a defined function', function () {
        expect(typeof isEven).toBe('function');
    });
    it('should return true when a 2 is executed', function() {
        expect(isEven(2)).toBe(true)
    });
    it('should return true when a -4 is executed', function() {
        expect(isEven(-4)).toBe(true)
    });
    it('should return false when a 3 is executed', function() {
        expect(isEven(3)).toBe(false)
    });
    it('should return false when "banana" is executed', function() {
        expect(isEven('banana')).toBe(false)
    });
    it('should return true when a string of "8" is executed', function() {
        expect(isEven('8')).toBe(true)
    });
    it('should return false when called with infinity is executed', function() {
        expect(isEven(Infinity)).toBe(false)
    });
    it('should return false when input is true is executed', function() {
        expect(isEven(true)).toBe(false)
    });
    it('should return false when input is false is executed', function() {
        expect(isEven(false)).toBe(false)
    });
    it('should return false when there is no parameter', function() {
        expect(isEven()).toBe(false)
    });
})

describe( 'isVowel', function() {
    it('should be a defined function', function () {
        expect(typeof isVowel).toBe('function');
    });
    it('should return true when input is "a"', function() {
        expect(isVowel('a')).toBe(true)
    });
    it('should return true when input is "A"', function() {
        expect(isVowel('A')).toBe(true)
    });
    it('should return false when input is "y"', function() {
        expect(isVowel('y')).toBe(false)
    });
    it('should return false when input is 4', function() {
        expect(isVowel(4)).toBe(false)
    });
    it('should return false when input is true', function() {
        expect(isVowel(true)).toBe(false)
    });
    it('should return false when input is false', function() {
        expect(isVowel(false)).toBe(false)
    });
    it('should return false when input is "banana"', function() {
        expect(isVowel('banana')).toBe(false)
    });
    it('should return false when no parameter entered', function() {
        expect(isVowel()).toBe(false)
    });

})

describe( 'add', function() {
    it('should be a defined function', function () {
        expect(typeof add).toBe('function');
    });
    it('should return 5', function() {
        expect(add(2,3)).toEqual(5)
    });
    it('should return -12', function() {
        expect(add(-9,-3)).toEqual(-12)
    });
    it('should return 11', function() {
        expect(add(5,6)).toEqual(11)
    });
    it('should return 6', function() {
        expect(add(-4,10)).toEqual(6)
    });
    it('should return NaN (banana,split)', function() {
        expect(add('banana','split')).toBeNaN(NaN)
    });
    it('should return NaN (2,apples)', function() {
        expect(add(2,'apples')).toBeNaN(NaN)
    });
    it('should return NaN with no input', function() {
        expect(add()).toBeNaN(NaN)
    });

})