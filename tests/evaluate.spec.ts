import evalute from '../src/evaluate';

describe('evalute', () => {
  it('should parse amounts correctly', () => {
    expect(evalute('dos millones quinientos mil colones exactos')).toEqual(2_500_000);
    expect(evalute('cuarenta y cuatro millones cuatrocientos noventa y tres mil doscientos noventa y nueve colones')).toEqual(44_493_299);
    expect(evalute('trescientos quince mil quinientos ochenta y siete dólares americanos')).toEqual(315_587);
    expect(evalute('trescientos quince mil ochenta y siete dólares americanos')).toEqual(315_087);
  });

  it('should parse amounts with decimal values correctly', () => {
    expect(evalute('setecientos cuarenta y cuatro mil setecientos ocho colones con setenta céntimos')).toEqual(744_708.70);
    expect(evalute('ciento once mil quinientos treinta y dos dólares con tres centavos')).toEqual(111_532.3);
  });
});