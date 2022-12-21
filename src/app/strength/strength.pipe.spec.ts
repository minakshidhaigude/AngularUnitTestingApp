import { StrengthPipe } from "./strength.pipe";

describe('StrengthPipe', () => {
  let pipe: StrengthPipe;

  beforeEach(() => {
    pipe = new StrengthPipe();
  });
  afterEach(() => {
    pipe = null;
  })

  it('should display weak if strength is 5', () => {
    expect(pipe.transform(5)).toEqual('5 (weak)');
  })

  it('should display strong if strength is 10', () => {
    expect(pipe.transform(10)).toEqual('10 (strong)');
  })
})