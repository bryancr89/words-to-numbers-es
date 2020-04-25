import {
  isLetter,
  isWhiteSpace
} from './identify';
import './interfaces';
import * as I from './interfaces';

const tokenize = (input: string): I.Token[] => {
  const tokens: I.Token[] = [];
  let cursor: number = 0;
  while (cursor < input.length) {
    const character = input[cursor];
    if (isWhiteSpace(character)) {
      cursor++;
      continue;
    }
    if (isLetter(character)) {
      let word = character;
      while (isLetter(input[++cursor])) {
        word += input[cursor];
      }

      tokens.push({
        type: 'WordLiteral',
        value: word,
      });
      continue;
    }
    cursor++;
  }
  return tokens;
}


export default tokenize;
