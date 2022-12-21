import { SimpleCalculator } from './calculator';

//create a test suite
describe("SimpleCalculator class", () => {
    describe("Square() method", () => {
        let calculator: SimpleCalculator;

        //Setup
        beforeEach( () => {
            calculator = new SimpleCalculator();
            console.log("beforeEach() of Square()");
        });
    
        //Teardown
        afterEach( () => {
            calculator = null;
            console.log("afterEach() of Square()");
        });

        it("should return 4 when 2 is passed", () => {
            let result = calculator.Square(2);
            expect(result).toBe(4);
        });
    });

    describe("Cube() method", () => {
        let calculator: SimpleCalculator;

        //Setup
        beforeEach( () => {
            calculator = new SimpleCalculator();
            console.log("beforeEach() of Cube()");
        });
    
        //Teardown
        afterEach( () => {
            calculator = null;
            console.log("afterEach() of Cube()");
        });
        it("should return 8 when 2 is passed", () => {
            let result = calculator.Cube(2);
            expect(result).toBe(8);
        });
    });
});


//SimpleCalculator class Square() method should return 4 when 2 is passed
//SimpleCalculator class Cube() method should return 8 when 2 is passed