import { PowPipe } from "./pow.pipe"

describe('PowPipe', ()=>{
  let pipe:PowPipe;

  beforeEach(()=>{
    pipe=new PowPipe();
  });

  it('should create instance', ()=>{
    expect(pipe).toBeTruthy();
    expect(pipe.transform).toBeDefined();
  })

  it(`should return '10px' with called 5, 2 and 'px' ` ), ()=>{
    const result=pipe.transform(5, 2, 'px');
    expect(result).toBe('10px')
  }
})