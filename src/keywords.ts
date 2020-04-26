import * as I from './interfaces';

const addNumbersBy = (mainKey: string, obj: I.Keyword, isPrefix: boolean, handler: Function)  => {
  return Object.keys(obj).reduce((prev: I.Keyword, key) => {
    if (isPrefix) {
      prev[mainKey + key] = handler(obj[key]);
    } else {
      prev[key + mainKey] = handler(obj[key]);
    }
    return prev;
  }, {});
}

const firstNine = {
  'uno':          1,
  'dos':          2,
  'tres':         3,
  'cuatro':       4,
  'cinco':        5,
  'seis':         6,
  'siete':        7,
  'ocho':         8,
  'nueve':        9,
}

const twenties = addNumbersBy('veinti', firstNine, true, (num: number) => {
  return 20 + num;
});

let firstNineForHundres = {
  ...firstNine,
  'sete': 7
};
delete firstNineForHundres.cinco;
delete firstNineForHundres.siete;

const hundreds = addNumbersBy('cientos', firstNineForHundres, false, (num: number) => {
  return num * 100;
});
export const keywords: I.Keyword = {
  'cero':         0,
  'un':           1,
  ...firstNine,
  'diez':         10,
  'once':         11,
  'doce':         12,
  'trece':        13,
  'catorce':      14,
  'quince':       15,
  'dieciseis':    16,
  'diecisiete':   17,
  'dieciocho':    18,
  'diecinueve':   19,
  'veinte':       20,
  'veintiun':     21,
  ...twenties,
  'treinta':      30,
  'cuarenta':     40,
  'cincuenta':    50,
  'sesenta':      60,
  'setenta':      70,
  'ochenta':      80,
  'noventa':      90,
  'cien':         100,
  'ciento':       100,
  ...hundreds,
  'quinientos':   500
};


export const keywordsAux: I.Keyword = {
  'mil':    1000,
  'millon': 1_000_000,
  'millones': 1_000_000,
  'billon': 1_000_000_000,
  'billones': 1_000_000_000,
};

export const getWordValue = (word: string): number | null => {
  return keywords[word] || keywordsAux[word] || null;
}

export default keywords;