export class SimpleCalculator
{
    public Square(x: number): number
    {
        return (x * x);
    }

    public Cube(x: number): number
    {
        return (x * x * x);
    }
}


//SimpleCalculator  -   TEST SUITE

//Square()  -   TEST SUITE
//TEST CASES
//1. Square() method should return 4 when 2 is passed
    //ASSERTION
    //Expected value is 4, Actual value is the value returned by the method call
//2. Square() method must throw an exception if no number is passed


//Cube()  -   TEST SUITE
//TEST CASES
//1. Cube() method should return 8 when 2 is passed
//2. Cube() method must throw an exception if no number is passed
