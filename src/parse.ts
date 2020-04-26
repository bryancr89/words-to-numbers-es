import * as I from './interfaces';
import { keywords, keywordsAux, getWordValue } from './keywords';
import CONSTANTS from './constants';
import { numberToDecimal } from './utilities';


const getParsedToken = (token: I.Token): I.ParseToken => {
  if (token.text === CONSTANTS.DECIMAL_KEYWORD) {
    return {
      type: CONSTANTS.PARSED_TOKEN_DECIMAL_VALUE,
      value: 0,
    }
  }

  const value = getWordValue(token.text);
  if (value === null) {
    return {
      type: CONSTANTS.TOKEN_INVALID_LITERAL,
      value: 0,
    };
  }
  return {
    type: CONSTANTS.PARSED_TOKEN_NUMERICAL_VALUE,
    value,
  };
}

const isValidToken = (parsedToken: I.ParseToken): boolean => {
  return parsedToken.type !== CONSTANTS.TOKEN_INVALID_LITERAL;
}

const parse = (tokens: I.Token[]): I.ParseToken[] => {
  const result: I.ParseToken[] = [];
  let i = 0;
  while (i < tokens.length) {
    const parsedToken = getParsedToken(tokens[i]);
    if (!isValidToken(parsedToken)) {
      i++;
      continue;
    }
    while (++i < tokens.length && keywords[tokens[i].text]) {
      const nextParsedToken = getParsedToken(tokens[i]);
      parsedToken.value += nextParsedToken.value;
    }
    while (i < tokens.length && keywordsAux[tokens[i].text]) {
      const nextParsedToken = getParsedToken(tokens[i]);
      parsedToken.value *= nextParsedToken.value;
      i++;
    }
    if (parsedToken.type === CONSTANTS.PARSED_TOKEN_DECIMAL_VALUE) {
      parsedToken.value = numberToDecimal(parsedToken.value);
    }
    result.push(parsedToken);
  }
  return result;
};

export default parse;
